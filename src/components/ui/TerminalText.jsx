import React, { useState, useEffect } from 'react';

export const TerminalText = ({
  texts = [],
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeedState);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeedState(deletingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeedState(pauseDuration);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeedState(typingSpeed);
    }
  };

  return (
    <span className={`inline-block ${className}`}>
      {text}
      <span className="animate-pulse">_</span>
    </span>
  );
};
