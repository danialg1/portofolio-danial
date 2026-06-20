import React, { useState, useEffect, useRef } from 'react';

export const TypingText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} className="text-zinc-400 leading-relaxed text-sm md:text-base">
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className={`inline-block mr-1.5 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${i * 30}ms` }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};
