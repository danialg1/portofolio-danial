import React from 'react';
import { techStack } from '../data/constants';

const Stack = ({ t, lang }) => {
  return (
    <section id="stack" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-2">{t.stack.title}</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
            {t.stack.subtitle}
          </h2>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2rem] hover:border-orange-500/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group relative overflow-hidden opacity-0 animate-spring"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Animated Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/30 group-hover:scale-150 transition-all duration-700 ease-out"></div>
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/30 group-hover:scale-150 transition-all duration-700 ease-out"></div>

              <div className="flex items-center space-x-4 mb-5 relative z-10">
                {/* Logo Container */}
                <div className="w-16 h-16 p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all duration-500">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500" 
                    loading="lazy" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white transition-colors duration-300 group-hover:text-orange-500">
                    {tech.name}
                  </h3>
                  <p className="text-xs font-bold text-orange-500 tracking-widest uppercase">
                    {lang === 'id' ? tech.desc_id : tech.desc_en}
                  </p>
                </div>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-500">
                {lang === 'id' ? tech.details_id : tech.details_en}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;
