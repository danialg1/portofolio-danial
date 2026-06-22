import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldAlert, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/icons';
import { TiltCard } from '../components/ui/TiltCard';

const projectsData = [
  {
    title: "Web WasteWise",
    category: "Web Development",
    image: "/wastewise.jpg",
    desc: "Aplikasi cerdas untuk mengedukasi dan membantu manajemen pengelolaan sampah demi pelestarian lingkungan.",
    tech: ["HTML/CSS", "JavaScript", "PHP"],
    link: "https://github.com/danialg1/Web-WasteWise",
    github: "https://github.com/danialg1/Web-WasteWise",
    isSecure: false
  },
  {
    title: "My Barbershop",
    category: "Mobile App",
    image: "/barbershop.jpg",
    desc: "Frontend aplikasi reservasi My Barbershop berbasis mobile menggunakan Flutter dengan implementasi Clean Architecture.",
    tech: ["Flutter", "Dart", "Clean Architecture"],
    link: "https://github.com/danialg1/my-barbershop",
    github: "https://github.com/danialg1/my-barbershop",
    isSecure: false
  },
  {
    title: "Sistem Sewa Mobil",
    category: "Fullstack Web",
    image: "/sewa-mobil.jpg",
    desc: "Sistem informasi reservasi penyewaan kendaraan dengan manajemen armada dan transaksi yang terintegrasi database.",
    tech: ["PHP", "MySQL", "Web Design"],
    link: "https://github.com/danialg1/sewa_mobil",
    github: "https://github.com/danialg1/sewa_mobil",
    isSecure: false
  }
];

const Projects = ({ t }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">{t.projects.title}</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View All Projects"
            className="flex items-center space-x-2 text-orange-500 font-bold hover:text-orange-600 transition-colors group"
          >
            <span>{t.projects.viewAll}</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-zinc-900 rounded-[2rem] p-4 border border-zinc-100 dark:border-zinc-800 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <TiltCard className="h-full">
                <div className="h-full flex flex-col">
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {project.isSecure && (
                    <div className="absolute top-4 left-4 z-20 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <ShieldAlert size={14} />
                      <span>Security</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-2 flex-1 flex flex-col">
                  <p className="text-orange-500 text-sm font-bold mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1">
                    {project.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4 border-t border-zinc-100 dark:border-zinc-800 pt-4">
                    <a href={project.link} aria-label="View Project" className="flex items-center space-x-1 text-zinc-600 hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-500 font-semibold text-sm transition-colors">
                      <ExternalLink size={16} />
                      <span>{t.projects.view}</span>
                    </a>
                    <a href={project.github} aria-label="GitHub Repository" className="flex items-center space-x-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-semibold text-sm transition-colors">
                      <GithubIcon size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
