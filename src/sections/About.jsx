import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const About = ({ t }) => {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-2">{t.about.title}</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
            {t.about.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Illustration Left */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="/illustration.png" 
              alt="Cyber Security Illustration" 
              loading="lazy"
              className="relative z-10 w-full max-w-md object-contain hover:-translate-y-4 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>

          {/* Text Right */}
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.about.p2}
            </p>
            
            <ul className="space-y-3 mt-4 mb-8">
              <li className="flex items-center space-x-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="text-orange-500" size={20} />
                <span>Web Penetration Testing</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="text-orange-500" size={20} />
                <span>Secure API Development</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="text-orange-500" size={20} />
                <span>Modern Frontend Architecture</span>
              </li>
            </ul>

            <a 
              href="/CV_Danial_Gibran.pdf" 
              download="CV_Danial_Gibran.pdf"
              className="inline-flex items-center space-x-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-full font-bold hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white transition-colors"
            >
              <Download size={18} />
              <span>{t.about.cv}</span>
            </a>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center hover:border-orange-500/50 transition-colors">
            <div className="text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={3} duration={2000} />+
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">{t.about.exp}</p>
          </div>
          <div className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center hover:border-orange-500/50 transition-colors">
            <div className="text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={25} duration={2000} />+
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">{t.about.proj}</p>
          </div>
          <div className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center hover:border-orange-500/50 transition-colors">
            <div className="text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={100} duration={2000} />%
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">{t.about.client}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
