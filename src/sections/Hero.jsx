import React from 'react';
import { ChevronRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/icons';
import { TerminalText } from '../components/ui/TerminalText';

const Hero = ({ t }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-6 z-40 relative opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 font-bold">{t.hero.greeting}</span>
            <span className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>👋</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
            Danial Gibran
          </h1>
          
          <div className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center gap-2">
            <span>{t.hero.rolePrefix}</span>
            <TerminalText 
              texts={['Cyber Security', 'Fullstack Developer', 'IT Enthusiast']}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="text-orange-500 font-bold border-b-2 border-orange-500"
            />
          </div>
          
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed text-lg">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-500/30 flex items-center space-x-2 group hover:scale-105 active:scale-95"
            >
              <span>{t.hero.btnProject}</span>
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200/20 dark:shadow-zinc-900/50"
            >
              {t.hero.btnContact}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <span className="text-sm font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Connect</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <a href="https://www.instagram.com/danial_g1bran/" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-pink-500 hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300">
              <InstagramIcon size={28} />
            </a>
            <a href="https://www.facebook.com/danial.gibran.03" aria-label="Facebook" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-500 hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
              <FacebookIcon size={28} />
            </a>
            <a href="https://www.youtube.com/@suka_bola14" aria-label="YouTube" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-red-500 hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300">
              <YoutubeIcon size={28} />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image with Blob */}
        <div className="relative flex justify-center lg:justify-end items-center z-10">
          {/* Abstract Orange Blob Animation */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-orange-500/80 dark:bg-orange-500/60 blob-shape animate-blob shadow-[0_0_80px_rgba(249,115,22,0.4)]"></div>
          
          {/* Profile Picture */}
          <div className="relative w-[280px] h-[350px] md:w-[360px] md:h-[450px] z-20 transition-transform hover:scale-105 duration-500 flex justify-center items-end pointer-events-none">
            <img 
              src="/profil_transparent.webp" 
              alt="Danial Gibran" 
              fetchPriority="high"
              className="w-[150%] h-[150%] scale-[1.3] translate-y-6 md:translate-y-8 object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] pointer-events-auto"
            />
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center space-x-4 z-30 animate-fade-up">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="font-mono text-sm font-bold text-zinc-800 dark:text-zinc-200">System Secure</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
