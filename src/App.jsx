import React, { useState, useEffect, useRef, useCallback } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  Mail,
  ChevronRight,
  Download,
  Code2,
  ShieldCheck,
  Database,
  Terminal,
  Layout,
  Globe,
  Send,
  User,
  MessageSquare,
  Phone,
  Wifi,
  Radio,
  Paintbrush,
  Video,
  Scissors,
  Box,
  Flame,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';

import { GithubIcon, LinkedinIcon, InstagramIcon, FigmaIcon } from './components/icons';
import { AnimatedCounter } from './components/ui/AnimatedCounter';
import { TypingText } from './components/ui/TypingText';
import { TerminalText } from './components/ui/TerminalText';
import { TiltCard } from './components/ui/TiltCard';
import { dict, techStack } from './data/constants';

export default function App() {
  const [lang, setLang] = useState('id');
  const t = dict[lang];

  // STATE APLIKASI
  const [showSplash, setShowSplash] = useState(true);
  const [isSplashExiting, setIsSplashExiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null); // State Popup Tengah Layar
  const [projectsData, setProjectsData] = useState([]);

  const audioRef = useRef(null);
  const heroCardRef = useRef(null);
  const aboutLanyardRef = useRef(null);

  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  // Handle Klik Global untuk nutup modal pop-up Tech Stack di mobile
  useEffect(() => {
    const handleGlobalClick = () => setHoveredTech(null);
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Lock scroll pas splash screen aktif
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  // OBSERVER UNTUK ANIMASI SCROLL
  useEffect(() => {
    if (showSplash) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll, .scroll-drop');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [lang, showSplash]);

  // FETCH PROJECTS FROM FIREBASE
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjectsData(projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // MOUSE PARALLAX EFFECT HERO
  useEffect(() => {
    if (showSplash) return;

    let animationFrameId;
    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPos = (clientX / innerWidth - 0.5) * 12;
        const yPos = (clientY / innerHeight - 0.5) * -12;

        if (heroCardRef.current) {
          heroCardRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${yPos}deg)`;
        }
        if (aboutLanyardRef.current && !isDragging) {
          aboutLanyardRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${yPos}deg)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging, showSplash]);

  // ELASTIC LANYARD DRAG LOGIC
  const handleDragStart = (e) => {
    if (e.cancelable) e.preventDefault();
    setIsDragging(true);
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    dragStartPos.current = {
      x: clientX - dragPos.x,
      y: clientY - dragPos.y
    };
  };

  useEffect(() => {
    let moveFrame;
    const handleDragMove = (e) => {
      if (!isDragging) return;
      if (moveFrame) cancelAnimationFrame(moveFrame);

      moveFrame = requestAnimationFrame(() => {
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        let newX = clientX - dragStartPos.current.x;
        let newY = clientY - dragStartPos.current.y;

        newX = Math.max(-150, Math.min(150, newX));
        newY = Math.max(-20, Math.min(200, newY));

        setDragPos({ x: newX, y: newY });
      });
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      setDragPos({ x: 0, y: 0 });
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove, { passive: false });
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
      if (moveFrame) cancelAnimationFrame(moveFrame);
    };
  }, [isDragging]);

  const stringBaseHeight = 80;
  const stringLength = Math.sqrt(Math.pow(stringBaseHeight + dragPos.y, 2) + Math.pow(dragPos.x, 2));
  const stringAngleRad = Math.atan2(dragPos.x, stringBaseHeight + dragPos.y);
  const stringAngleDeg = stringAngleRad * (180 / Math.PI);

  const handleEnterSite = () => {
    setIsSplashExiting(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay ditolak browser', e));
      setIsPlaying(true);
    }
    setTimeout(() => {
      setShowSplash(false);
    }, 800);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="bg-[#09090b] min-h-screen text-zinc-300 font-mono relative overflow-hidden selection:bg-teal-500/30 selection:text-teal-200">

      {/* CSS INJECTIONS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        html { scroll-behavior: smooth; }
        
        .glass-card, .lanyard-swing, .scroll-drop, .animate-on-scroll {
          will-change: transform, opacity;
        }
        
        @keyframes swing {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .lanyard-swing {
          transform-origin: top center;
          animation: swing 6s ease-in-out infinite;
        }

        .glass-card {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .shine-container {
          position: relative;
          overflow: hidden;
        }
        .shine-container::after {
          content: '';
          position: absolute;
          top: 0; 
          left: -150%;
          width: 50%; 
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(20, 184, 166, 0.4) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: left 0.7s ease-in-out;
          z-index: 10;
          pointer-events: none;
        }
        .shine-container:hover::after {
          left: 200%;
        }

        @keyframes spring-bounce {
          0% { transform: scale(0.8) translateY(30px); opacity: 0; }
          60% { transform: scale(1.02) translateY(-5px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-spring {
          opacity: 0;
          animation: spring-bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) forwards;
          animation-delay: 0.1s;
        }

        @keyframes fade-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-drop {
          opacity: 0;
          transform: translateY(-200px) scale(0.9) rotate(-10deg);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .scroll-drop.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1) rotate(0deg);
        }

        /* === TERMINAL TEXT STYLES === */
        @keyframes terminal-cursor-blink {
          0%, 49% { opacity: 1; text-shadow: 0 0 8px currentColor; }
          50%, 100% { opacity: 0; }
        }
        .terminal-text {
          font-family: 'Courier New', Consolas, monospace;
        }
        .terminal-text .cursor {
          animation: terminal-cursor-blink 1.06s infinite;
        }
        .terminal-text .glitch-char {
          color: #22d3ee;
          text-shadow: 0 0 12px rgba(34, 211, 238, 0.7);
        }

        /* === TILT CARD STYLES === */
        .tilt-card-container {
          transform-style: preserve-3d;
        }
        .tilt-card {
          transform-style: preserve-3d;
          will-change: transform;
        }
        .tilt-card-inner {
          transform: translateZ(30px);
        }
        .tilt-card-glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: overlay;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
          z-index: 30;
        }
        .tilt-card-container:hover .tilt-card {
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(20, 184, 166, 0.15);
        }
      `}} />

      {/* AUDIO KICAU MANIA */}
      <audio ref={audioRef} loop preload="none">
        <source src="musik.mp3" type="audio/mpeg" />
      </audio>

      {/* INTRO / SPLASH SCREEN */}
      {showSplash && (
        <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#09090b] transition-all duration-700 ease-in-out ${isSplashExiting ? 'opacity-0 -translate-y-20 scale-105 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}`}>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <h1 className="text-[16vw] font-black text-white/[0.03] select-none whitespace-nowrap tracking-tighter mix-blend-screen animate-spring">
              PORTOFOLIO
            </h1>
          </div>

          <div className="relative z-10 flex flex-col items-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <p className="text-teal-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 drop-shadow-md z-20 bg-black/40 px-4 py-1 rounded-full border border-teal-500/30">
              Fullstack Dev & Cyber Security
            </p>

            <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[400px] rounded-t-full rounded-b-3xl overflow-hidden shadow-[0_0_80px_rgba(20,184,166,0.15)] border border-white/10 group mb-6 bg-zinc-900">
              <img src="/profil.webp" fetchpriority="high" alt="Danial Gibran" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]"></div>

              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                <button
                  aria-label="Enter Site"
                  onClick={handleEnterSite}
                  className="w-24 h-24 bg-teal-500/90 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-teal-400 transition-all duration-300 shadow-[0_0_40px_rgba(20,184,166,0.6)] cursor-pointer border-4 border-black/20"
                >
                  <Play size={44} className="ml-2" fill="currentColor" />
                </button>
                <p className="text-white/70 text-xs font-bold tracking-widest mt-4 uppercase animate-pulse">Click to Enter</p>
              </div>
            </div>

            <div className="bg-zinc-900/80 px-8 py-3.5 rounded-full border border-zinc-800/80 backdrop-blur-md shadow-2xl relative z-20">
              <p className="text-zinc-400 text-sm md:text-base">Presented by <span className="text-white font-bold">Danial Gibran</span></p>
            </div>
          </div>
        </div>
      )}


      {/* FLOATING MUSIC BUTTON */}
      <button
        aria-label="Toggle Music"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass-card border border-teal-500/30 text-teal-400 hover:bg-teal-500/20 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] group"
      >
        {isPlaying ? (
          <Volume2 size={24} className="animate-pulse" />
        ) : (
          <VolumeX size={24} />
        )}
        <span className="absolute right-16 bg-zinc-800 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-700">
          {isPlaying ? 'Pause Kicauan' : 'Play Kicau Mania'}
        </span>
      </button>

      {/* ABSTRACT BACKGROUNDS */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-x-0 border-t-0 border-b-zinc-800/50 px-6 py-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tighter">
            Danial<span className="text-teal-400">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-teal-400 transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">{t.nav.about}</a>
            <a href="#stack" className="hover:text-teal-400 transition-colors">Tools</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">{t.nav.contact}</a>

            <div className="h-4 w-px bg-zinc-700"></div>

            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50 cursor-pointer"
            >
              <Globe size={14} />
              <span className="text-xs font-bold">{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="z-10 space-y-6">
            <p className="text-teal-400 font-semibold tracking-wider text-sm uppercase animate-fade-up" style={{ animationDelay: '100ms' }}>
              {t.hero.greeting}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight flex flex-wrap gap-x-4">
              {("Danial Gibran").split(' ').map((word, i) => (
                <span key={i} className="animate-fade-up inline-block" style={{ animationDelay: `${200 + i * 200}ms` }}>
                  {word}
                </span>
              ))}
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 animate-fade-up" style={{ animationDelay: '600ms' }}>
              {t.hero.rolePrefix} <span className="text-white border-b-2 border-teal-500 pb-1">Fullstack Dev & Cyber Security</span>
            </h2>

            <TerminalText
              text={t.hero.desc}
              className="text-zinc-400 leading-relaxed max-w-lg text-lg"
              typingSpeed={35}
              glitchChance={0.1}
            />

            <div className="flex items-center space-x-4 pt-4 animate-fade-up" style={{ animationDelay: '1500ms' }}>
              <a href="#projects" className="group flex items-center space-x-2 bg-teal-500/10 text-teal-400 border border-teal-500/50 px-6 py-3 rounded-full font-medium hover:bg-teal-500/20 transition-all">
                <span>{t.hero.btnProject}</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full font-medium border border-zinc-700 hover:bg-zinc-800 transition-all text-white">
                {t.hero.btnContact}
              </a>
            </div>

            <div className="flex items-center space-x-5 pt-8 text-zinc-500 animate-fade-up" style={{ animationDelay: '1600ms' }}>
              <a href="https://github.com/danialg1" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><GithubIcon size={22} /></a>
              <a href="https://www.linkedin.com/in/danial-gibran-342370288" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><LinkedinIcon size={22} /></a>
              <a href="https://www.instagram.com/danial_g1bran" aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors"><InstagramIcon size={22} /></a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center h-full relative p-4 animate-spring">
            <div
              ref={heroCardRef}
              className="shine-container relative w-full max-w-[400px] aspect-[3/4] rounded-[2.5rem] shadow-[0_0_50px_rgba(20,184,166,0.15)] group transition-transform duration-100 ease-out"
            >
              <img
                src="/profil.webp"
                alt="Danial Gibran"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90"></div>

              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 flex items-center justify-between border border-white/10 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-zinc-800">
                    <img src="/profil.webp" loading="lazy" decoding="async" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">@danialgibran</p>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                      <span className="text-xs font-medium text-zinc-400">Online</span>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="text-xs font-semibold bg-zinc-800 border border-zinc-700 hover:bg-teal-500 hover:text-zinc-900 hover:border-teal-400 text-white px-4 py-2.5 rounded-xl transition-all duration-300 relative z-20">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px]"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 items-center">

            <div className="hidden md:flex md:col-span-4 justify-center items-start h-full perspective-[1000px] mt-[-40px] select-none scroll-drop">
              <div
                className="lanyard-swing flex flex-col items-center"
                style={{ animationDelay: '-1.5s', animationPlayState: isDragging ? 'paused' : 'running' }}
              >
                <div
                  className={`w-1 bg-gradient-to-b from-zinc-800 to-zinc-500 shadow-xl rounded-full origin-top ${isDragging ? '' : 'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]'}`}
                  style={{
                    height: `${stringBaseHeight}px`,
                    transform: `rotate(${-stringAngleDeg}deg) scaleY(${stringLength / stringBaseHeight})`
                  }}
                ></div>

                <div
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                  className={`flex flex-col items-center cursor-grab active:cursor-grabbing ${isDragging ? '' : 'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]'}`}
                  style={{ transform: `translate(${dragPos.x}px, ${dragPos.y}px)` }}
                >
                  <div className="w-4 h-6 bg-zinc-400 rounded-sm -mt-2 z-10 shadow-lg border border-zinc-300 pointer-events-none"></div>

                  <div
                    ref={aboutLanyardRef}
                    className={`glass-card w-56 rounded-2xl p-4 shadow-2xl flex flex-col mt-2 relative overflow-hidden group pointer-events-none ${isDragging ? '' : 'transition-transform duration-100 ease-out'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="w-full h-36 bg-zinc-800 rounded-xl overflow-hidden relative border border-zinc-700/50">
                      <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" alt="Matrix Security" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ShieldCheck size={56} className="text-teal-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.6)]" />
                      </div>
                    </div>
                    <div className="mt-4 text-center pb-2">
                      <h3 className="text-sm font-bold text-white tracking-widest">SECURITY BADGE</h3>
                      <p className="text-[10px] text-teal-400 font-mono mt-1">ACCESS LVL: ROOT</p>
                      <div className="w-full h-1 bg-zinc-800 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-teal-400 w-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col justify-center space-y-6">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {t.about.title.split(' ')[0]} <span className="text-teal-400">{t.about.title.split(' ')[1] || ''}</span>
                </h2>
                <p className="text-zinc-500 italic mb-6 border-l-2 border-zinc-700 pl-4">
                  {t.about.subtitle}
                </p>

                {/* Animasi Text Typing yang Baru */}
                <div className="space-y-4">
                  <TypingText text={t.about.p1} />
                  <TypingText text={t.about.p2} />
                </div>
              </div>

              {/* Animasi Angka Penghitung (Counter) yang Baru */}
              <div className="grid grid-cols-3 gap-4 border-t border-zinc-800/50 pt-6 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                <div>
                  <h4 className="text-3xl font-bold text-teal-400 mb-1">
                    <AnimatedCounter target={3} suffix="+" />
                  </h4>
                  <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">{t.about.exp}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-blue-400 mb-1">
                    <AnimatedCounter target={20} suffix="+" />
                  </h4>
                  <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">{t.about.proj}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-purple-400 mb-1">
                    <AnimatedCounter target={15} suffix="+" />
                  </h4>
                  <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">{t.about.client}</p>
                </div>
              </div>

              <div className="pt-2 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-6 py-3 rounded-full transition-all text-sm font-medium">
                  <span>{t.about.cv}</span>
                  <Download size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECH STACK SECTION (SEKARANG ADA DI ATAS PROJECTS) */}
      <section id="stack" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.stack.title.split(' ')[0]} <span className="text-teal-400">& {t.stack.title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400">{t.stack.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              onClick={(e) => { e.stopPropagation(); setHoveredTech(tech); }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 transition-all duration-300 hover:bg-zinc-800/80 cursor-pointer animate-on-scroll relative group"
              style={{ transitionDelay: `${(i % 5) * 50}ms` }}
            >
              {/* Kotak Item Grid Asli. Nggak ngilang 100% biar UX tetep bagus pas di-hover */}
              <div className={`transition-all duration-300 ${hoveredTech === tech ? 'opacity-30' : 'opacity-100'}`}>
                <div className="p-3 bg-zinc-800/50 rounded-xl mx-auto flex items-center justify-center">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-200 mt-3">{tech.name}</h4>
                  <p className="text-[10px] tracking-widest text-zinc-500 font-semibold mt-1 uppercase">{tech.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CENTRAL POPUP UNTUK TECH STACK (MEMBESAR KE TENGAH LAYAR) */}
      <div
        className={`fixed inset-0 z-[150] pointer-events-none flex items-center justify-center transition-opacity duration-500 ${hoveredTech ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Latar Belakang Gelap / Ngeblur (Gak menghalangi kursor hover) */}
        <div className="absolute inset-0 bg-[#09090b]/40 backdrop-blur-[2px] transition-opacity duration-500"></div>

        {/* Kotak Hologram Besar di Tengah (Pop-up) */}
        <div className={`relative z-10 glass-card p-8 md:p-12 max-w-md w-[90%] rounded-[2rem] flex flex-col items-center text-center shadow-[0_0_100px_rgba(20,184,166,0.3)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${hoveredTech ? 'scale-100 translate-y-0 opacity-100' : 'scale-50 translate-y-10 opacity-0'}`}>
          {hoveredTech && (
            <>
              <div className="absolute top-10 w-40 h-40 bg-teal-500/20 rounded-full blur-[50px] -z-10"></div>
              <div className="p-5 bg-zinc-800/80 rounded-2xl mb-6 shadow-2xl border border-zinc-700/50 text-teal-400">
                {/* Besarin ukuran Icon aslinya */}
                {React.cloneElement(hoveredTech.icon, { size: 48, className: "text-white" })}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{hoveredTech.name}</h3>
              <p className="text-xs text-teal-400 tracking-widest font-mono mb-6 uppercase bg-teal-500/10 border border-teal-500/30 px-4 py-1.5 rounded-full">{hoveredTech.desc}</p>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base border-t border-zinc-800 pt-6">
                {hoveredTech.details}
              </p>
            </>
          )}
        </div>
      </div>


      {/* PROJECTS SECTION (SEKARANG ADA DI BAWAH TECH STACK) */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.projects.title.split(' ')[0]} <span className="text-teal-400">{t.projects.title.split(' ')[1]}</span>
          </h2>
          <p className="text-zinc-400">{t.projects.subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <TiltCard
              className={`group relative rounded-3xl overflow-hidden glass-card animate-on-scroll ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              tiltStrength={10}
              glareOpacity={0.12}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10"></div>
              <img
                src={project.img}
                alt={project.title[lang]}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${idx === 0 ? 'h-full min-h-[400px]' : 'h-64'}`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title[lang]}</h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.desc[lang]}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-teal-400 flex items-center space-x-1 text-sm font-semibold hover:text-teal-300">
                    <span>{t.projects.view}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.contact.title.split(' ')[0]} <span className="text-teal-400">{t.contact.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-zinc-400">{t.contact.subtitle}</p>
          </div>

          <div className="glass-card rounded-3xl p-1 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-shadow duration-500 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            <div className="bg-[#0f0f12]/90 backdrop-blur-2xl rounded-[23px] p-8 md:p-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-red-400 mb-8 font-mono text-sm">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                    <span className="font-bold tracking-widest">{t.contact.sysStatus}</span>
                  </div>

                  <div className="space-y-4">
                    <a href="mailto:danialgibran0@gmail.com" className="flex items-center space-x-4 bg-zinc-900/50 border border-zinc-800/80 p-4 rounded-xl hover:border-teal-500/50 hover:bg-zinc-800/50 transition-all group/card">
                      <div className="bg-zinc-800 p-3 rounded-lg group-hover/card:bg-teal-500/10 group-hover/card:text-teal-400 transition-colors">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 font-bold mb-1 tracking-wider">{t.contact.emailLabel}</p>
                        <p className="text-zinc-200 font-medium">danialgibran0@gmail.com</p>
                      </div>
                    </a>

                    <a href="https://wa.me/62895704121560" target="_blank" rel="noreferrer" className="flex items-center space-x-4 bg-zinc-900/50 border border-zinc-800/80 p-4 rounded-xl hover:border-teal-500/50 hover:bg-zinc-800/50 transition-all group/card">
                      <div className="bg-zinc-800 p-3 rounded-lg group-hover/card:bg-teal-500/10 group-hover/card:text-teal-400 transition-colors">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 font-bold mb-1 tracking-wider">{t.contact.waLabel}</p>
                        <p className="text-zinc-200 font-medium">+62 895 7041 21560</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-zinc-600 font-mono text-xs mt-12 md:mt-0">
                  <Wifi size={14} className="animate-pulse" />
                  <span className="tracking-widest">{t.contact.uplink}</span>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-6 border-b border-zinc-800 pb-4">
                  <Radio size={20} className="text-teal-400" />
                  <h3 className="font-bold text-white tracking-widest">{t.contact.formTitle}</h3>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-zinc-500" />
                    <textarea
                      rows="4"
                      placeholder={t.contact.msgPlaceholder}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full bg-gradient-to-r from-teal-500/20 to-teal-500/10 hover:from-teal-500 hover:to-teal-400 border border-teal-500/50 hover:border-teal-400 text-teal-400 hover:text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 group">
                    <span className="tracking-widest">{t.contact.btnSubmit}</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-zinc-800/50 mt-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center animate-on-scroll">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="text-xl font-bold text-white tracking-tighter">
              Danial<span className="text-teal-400">.</span>
            </div>
            <p className="text-xs text-zinc-600 mt-1">© {new Date().getFullYear()} Danial Gibran. Secure Transmission Protocol.</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/danialg1" aria-label="GitHub" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><GithubIcon size={18} /></a>
            <a href="https://www.linkedin.com/in/danial-gibran-342370288" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors"><LinkedinIcon size={18} /></a>
            <a href="mailto:danialgibran0@gmail.com" aria-label="Email" className="text-zinc-500 hover:text-teal-400 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}