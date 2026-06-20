import React, { useEffect, useRef, useState } from 'react';
import { educationHistory } from '../data/constants';

const Education = ({ t }) => {
  return (
    <section id="education" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-2">{t.education.title}</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
            {t.education.subtitle}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-orange-500/20 dark:border-orange-500/10 ml-4 md:ml-8 space-y-12 pb-8">
          {educationHistory.map((item, index) => (
            <TimelineItem key={index} item={item} t={t} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const TimelineItem = ({ item, t, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative pl-8 md:pl-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Dot/Icon */}
      <div className="absolute -left-[17px] md:-left-[21px] top-1 w-8 h-8 md:w-10 md:h-10 bg-white dark:bg-zinc-900 border-4 border-orange-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)] z-10 transition-transform duration-300 hover:scale-125">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full animate-ping opacity-75"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full absolute"></div>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-3xl hover:border-orange-500 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] hover:-translate-y-2 transition-all duration-300 group flex flex-col md:flex-row items-start md:items-center gap-6">
        
        {/* Logo Container */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-3 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-300 shadow-sm">
          <img 
            src={item.logo} 
            alt={item.name} 
            className="max-w-[90%] max-h-[90%] object-contain drop-shadow-md" 
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-wider mb-3">
            {item.period}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
            {item.name}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            {t.education[item.type]}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Education;
