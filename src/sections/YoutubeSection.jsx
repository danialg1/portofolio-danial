import React from 'react';
import { PlayCircle } from 'lucide-react';
import { YoutubeIcon } from '../components/icons';
import { TiltCard } from '../components/ui/TiltCard';

const YoutubeSection = ({ t }) => {
  return (
    <section id="youtube" className="py-24 px-6 bg-zinc-50 dark:bg-[#09090b] relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <p className="flex items-center justify-center space-x-2 text-red-500 font-bold tracking-widest uppercase mb-2">
            <YoutubeIcon size={24} className="animate-pulse" />
            <span>Content Creator</span>
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
            YouTube Channel
          </h2>
        </div>

        {/* Youtube Card */}
        <div className="opacity-0 animate-spring" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <TiltCard>
            <a 
              href="https://www.youtube.com/@suka_bola14" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Kunjungi Channel YouTube Suka Bola 14"
              className="block relative bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] overflow-hidden group hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500"
            >
              
              {/* Overlay Play Button */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 z-20 transition-all duration-500 flex items-center justify-center">
                <div className="bg-red-600/90 text-white rounded-full p-4 transform scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.8)] backdrop-blur-sm">
                  <PlayCircle size={64} className="animate-pulse" />
                </div>
              </div>

              {/* Desktop Screenshot */}
              <img 
                src="/yt-screenshot-2.png" 
                alt="YouTube Channel Desktop" 
                loading="lazy"
                className="hidden md:block w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Mobile Screenshot */}
              <img 
                src="/yt-screenshot-1.png" 
                alt="YouTube Channel Mobile" 
                loading="lazy"
                className="block md:hidden w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </a>
          </TiltCard>
        </div>
        
      </div>
    </section>
  );
};

export default YoutubeSection;
