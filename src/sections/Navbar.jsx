import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';

const Navbar = ({ t, lang, setLang, theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black text-orange-500 tracking-tighter">
          Danial<span className="text-zinc-900 dark:text-white">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <a href="#home" className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors">{t.nav.home}</a>
          <a href="#about" className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors">{t.nav.about}</a>
          <a href="#education" className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors">{t.education ? t.education.title.split(' ')[0] : 'Education'}</a>
          <a href="#projects" className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors">{t.nav.projects}</a>
          <a href="#contact" className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors">{t.nav.contact}</a>
          
          <div className="flex items-center space-x-4 border-l border-zinc-300 dark:border-zinc-700 pl-6">
            <button 
              onClick={toggleLang} 
              aria-label="Toggle Language"
              className="flex items-center space-x-1 text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors"
            >
              <Languages size={18} />
              <span className="uppercase">{lang}</span>
            </button>
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle Theme"
              className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
