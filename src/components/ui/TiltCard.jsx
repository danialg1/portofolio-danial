import React, { useState, useRef, useCallback } from 'react';

export const TiltCard = ({
  children,
  className = "",
  tiltStrength = 10,
  glareOpacity = 0.15,
  glareColor = '20, 184, 166'
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * tiltStrength;
      const rotateX = ((y - centerY) / centerY) * -tiltStrength;

      setTransform({ x: rotateX, y: rotateY });
      setMousePos({ x, y });
    });
  }, [tiltStrength]);

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => setIsHovered(true);

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        style={{
          transform: `perspective(1000px) rotateX(${transform.x}deg) rotateY(${transform.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        className="tilt-card"
      >
        <div className="tilt-card-inner">{children}</div>
      </div>
      <div
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glareColor},${glareOpacity}) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        className="tilt-card-glare"
      ></div>
    </div>
  );
};
