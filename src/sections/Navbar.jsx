import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';

const Navbar = ({ t, lang, setLang, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const availableLangs = [
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ms', name: 'Melayu', flag: '🇲🇾' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

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
    { name: t.nav.home, href: '#home', aria: 'Navigate to Home' },
    { name: t.nav.about, href: '#about', aria: 'Navigate to About' },
    { name: t.education ? t.education.title.split(' ')[0] : 'Education', href: '#education', aria: 'Navigate to Education' },
    { name: t.nav.projects, href: '#projects', aria: 'Navigate to Projects' },
    { name: t.stack && t.stack.title ? t.stack.title.split(' ')[0] + ' & Certs' : 'Skills & Certs', href: '#stack', aria: 'Navigate to Skills and Certificates' },
    { name: t.nav.contact, href: '#contact', aria: 'Navigate to Contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-sm py-0' : 'bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={closeMenu} className="text-2xl font-black text-orange-500 tracking-tighter z-50 relative group flex items-center hover:scale-105 active:scale-95 transition-transform duration-300">
            Danial<span className="text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} aria-label={link.aria} className="relative group text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-colors py-2">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-zinc-200 dark:border-zinc-800 pl-6">
              <div className="relative">
                <button 
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                  aria-label="Toggle Language"
                  className="flex items-center space-x-1.5 text-xs font-bold text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-all bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-full hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-transparent hover:border-orange-500/30"
                >
                  <Languages size={16} />
                  <span className="uppercase">{lang}</span>
                </button>
                
                {/* Language Dropdown Desktop */}
                <div className={`absolute top-full right-0 mt-2 w-40 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 origin-top-right ${langDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="py-2 max-h-60 overflow-y-auto custom-scrollbar">
                    {availableLangs.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 transition-colors ${lang === l.code ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-500 font-bold' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                      >
                        <span className="text-lg">{l.flag}</span>
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle Theme"
                className="text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-all p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-transparent hover:border-orange-500/30"
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
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl z-50 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-8 scale-105'}`}>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col items-center space-y-6 w-full px-6 z-10">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={closeMenu}
              aria-label={link.aria}
              style={{ transitionDelay: `${isOpen ? 100 + (idx * 75) : 0}ms` }}
              className={`text-3xl md:text-4xl font-black text-zinc-900 dark:text-white hover:text-orange-500 transition-all duration-500 w-full text-center py-2 ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
            >
              {link.name}
            </a>
          ))}

          <div 
            style={{ transitionDelay: `${isOpen ? 100 + (navLinks.length * 75) : 0}ms` }}
            className={`flex items-center justify-center space-x-8 w-full pt-10 mt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-label="Toggle Language"
                className="flex items-center justify-center space-x-2 text-lg font-bold text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-colors bg-zinc-100/80 dark:bg-zinc-900/80 px-6 py-3 rounded-full hover:scale-105 active:scale-95 shadow-sm"
              >
                <Languages size={24} />
                <span className="uppercase">{lang}</span>
              </button>

              {/* Language Dropdown Mobile */}
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 origin-bottom ${langDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="py-2 max-h-48 overflow-y-auto">
                    {availableLangs.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangDropdownOpen(false); setIsOpen(false); }}
                        className={`w-full text-left px-5 py-3 text-sm flex items-center space-x-3 transition-colors ${lang === l.code ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-500 font-bold' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                      >
                        <span className="text-xl">{l.flag}</span>
                        <span className="font-medium">{l.name}</span>
                      </button>
                    ))}
                  </div>
              </div>
            </div>
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle Theme"
              className="flex items-center justify-center space-x-2 text-lg font-bold text-zinc-600 hover:text-orange-500 dark:text-zinc-300 transition-colors p-4 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 hover:scale-105 active:scale-95 shadow-sm"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
