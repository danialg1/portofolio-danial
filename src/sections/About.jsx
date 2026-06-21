import React from 'react';
import { Download, CheckCircle2, FolderCheck, Smile } from 'lucide-react';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const About = ({ t }) => {
  const isEn = t.about.title === 'About Me';
  const statsData = [
    { target: 6, suffix: ' Tahun', label: isEn ? 'Video Editing' : 'Video Editing', img: '/video.jpg' },
    { target: 3, suffix: ' Tahun', label: isEn ? 'Web Programming' : 'Web Programming', img: '/web.jpg' },
    { target: 1, suffix: ' Tahun', label: isEn ? 'Cyber Security' : 'Cyber Security', img: '/cyber.jpeg' }
  ];

  const miniStats = [
    { target: 5, suffix: '+', label: isEn ? 'Completed Projects' : 'Proyek Selesai', icon: FolderCheck },
    { target: 90, suffix: '%', label: isEn ? 'Satisfied Clients' : 'Klien Puas', icon: Smile }
  ];

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
              src="/illustration.webp" 
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

        {/* Experience Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Top Banner Image */}
              <div className="w-full h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img src={stat.img} alt={stat.label} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </div>
              
              {/* Bottom Content */}
              <div className="p-8 relative z-20 bg-white dark:bg-zinc-900 -mt-8 rounded-t-[2.5rem] flex flex-col items-center text-center">
                <div className="text-4xl lg:text-5xl font-black text-orange-500 mb-2 flex items-baseline">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-black text-lg uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Stats (Pill Shaped) */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {miniStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-8 py-5 flex items-center space-x-6 shadow-sm hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-up w-full sm:w-auto justify-center"
                style={{ animationDelay: `${(idx + 3) * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="p-4 bg-orange-500/10 text-orange-500 rounded-full shrink-0">
                   <Icon size={28} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-black text-zinc-900 dark:text-white mb-1 leading-none">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
