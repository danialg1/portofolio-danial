import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';

const Navbar = ({ t, lang, setLang, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek transparan/blur saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cegah scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.education ? t.education.title.split(' ')[0] : 'Education', href: '#education' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-sm py-0' : 'bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="text-2xl font-black text-orange-500 tracking-tighter z-50 relative group">
          Danial<span className="text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors">
              {link.name}
            </a>
          ))}
          
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

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-zinc-900 dark:text-white hover:text-orange-500 transition-colors z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-12 scale-95'}`}>
        <div className="flex flex-col items-center space-y-6 w-full px-6">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={closeMenu}
              style={{ transitionDelay: `${isOpen ? idx * 50 : 0}ms` }}
              className={`text-3xl font-black text-zinc-900 dark:text-white hover:text-orange-500 transition-all duration-500 w-full text-center py-2 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {link.name}
            </a>
          ))}

          <div 
            style={{ transitionDelay: `${isOpen ? navLinks.length * 50 : 0}ms` }}
            className={`flex items-center justify-center space-x-8 w-full pt-8 mt-4 border-t border-zinc-200 dark:border-zinc-800 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <button 
              onClick={toggleLang} 
              aria-label="Toggle Language"
              className="flex items-center justify-center space-x-2 text-lg font-bold text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-colors bg-zinc-100 dark:bg-zinc-900 px-6 py-3 rounded-full"
            >
              <Languages size={24} />
              <span className="uppercase">{lang}</span>
            </button>
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle Theme"
              className="flex items-center justify-center space-x-2 text-lg font-bold text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-colors p-3 rounded-full bg-zinc-100 dark:bg-zinc-900"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
