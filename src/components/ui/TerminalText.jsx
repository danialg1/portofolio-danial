import React, { useState, useEffect } from 'react';

export const TerminalText = ({
  text,
  className = "",
  typingSpeed = 40,
  glitchChance = 0.08,
  loop = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const glitchChars = '█▓░▒█#$%&@!?';

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (loop) {
        const pauseTimer = setTimeout(() => setCurrentIndex(0), 2500);
        return () => clearTimeout(pauseTimer);
      }
      return;
    }

    const shouldGlitch = Math.random() < glitchChance;

    if (shouldGlitch) {
      setIsGlitching(true);
      const glitchTimer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        setIsGlitching(false);
      }, 60 + Math.random() * 40);
      return () => clearTimeout(glitchTimer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed + Math.random() * 20);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, typingSpeed, glitchChance, loop]);

  return (
    <span className={`terminal-text inline ${className}`}>
      <span className={isGlitching ? 'glitch-char' : ''}>
        {displayedText}
      </span>
      {currentIndex < text.length ? (
        <span className="cursor" style={{ color: '#14b8a6', textShadow: '0 0 8px rgba(20,184,166,0.8)' }}>
          █
        </span>
      ) : showCursor && (
        <span className="cursor" style={{ color: '#14b8a6', textShadow: '0 0 8px rgba(20,184,166,0.8)' }}>
          █
        </span>
      )}
    </span>
  );
};
