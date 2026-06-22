import React, { useState, useEffect, Suspense, lazy } from 'react';
import { dict } from './data/constants';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import { WorldCupTheme } from './components/ui/WorldCupTheme';

// Lazy loading components that are below the fold to improve LCP and TBT
const About = lazy(() => import('./sections/About'));
const Education = lazy(() => import('./sections/Education'));
const Projects = lazy(() => import('./sections/Projects'));
const Stack = lazy(() => import('./sections/Stack'));
const YoutubeSection = lazy(() => import('./sections/YoutubeSection'));
const WorldCup = lazy(() => import('./sections/WorldCup'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  // State for Language: default 'id'
  const [lang, setLang] = useState('id');
  const t = dict[lang];

  // State for Theme: default 'light' to match the clean look of the reference
  const [theme, setTheme] = useState('light');

  // Effect to apply theme class and HTML lang attribute
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Effect to apply document language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
      
      <audio ref={audioRef} loop preload="none">
        <source src="/musik.mp3?v=4" type="audio/mpeg" />
      </audio>

      {/* World Cup 2026 Theme Injection */}
      <WorldCupTheme />

      <Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <Hero t={t} />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <About t={t} />
        <Education t={t} />
        <Projects t={t} />
        <Stack t={t} lang={lang} />
        <YoutubeSection t={t} />
        
        {/* World Cup 2026 Dashboard Integration */}
        <WorldCup lang={lang} />

        <Contact t={t} />
        <Footer />
      </Suspense>
      
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