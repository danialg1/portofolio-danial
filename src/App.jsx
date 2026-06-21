import React, { useState, useEffect } from 'react';
import { dict } from './data/constants';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import YoutubeSection from './sections/YoutubeSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  // State for Language: default 'id'
  const [lang, setLang] = useState('id');
  const t = dict[lang];

  // State for Theme: default 'light' to match the clean look of the reference
  const [theme, setTheme] = useState('light');

  // Effect to apply theme class to HTML root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-zinc-300 font-sans relative overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-500 transition-colors duration-500 ease-in-out">
      
      {/* Background Audio */}
      <audio ref={audioRef} loop preload="none">
        <source src="/musik.mp3?v=4" type="audio/mpeg" />
      </audio>

      <Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <Hero t={t} />
      <About t={t} />
      <Education t={t} />
      <Projects t={t} />
      <Stack t={t} lang={lang} />
      <YoutubeSection t={t} />
      <Contact t={t} />
      <Footer />
      
      {/* Floating Music Button */}
      <button
        aria-label="Toggle Music"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-orange-500 hover:bg-orange-50 dark:hover:bg-zinc-800 hover:scale-110 transition-all duration-300 shadow-xl group"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        )}
      </button>
    </main>
  );
}

export default App;