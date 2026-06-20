import React from 'react';
import { ExternalLink, ShieldAlert } from 'lucide-react';
import { GithubIcon } from '../components/icons';
import { TiltCard } from '../components/ui/TiltCard';

const projectsData = [
  {
    title: "Sistem Keamanan Log",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    desc: "Aplikasi monitoring log server real-time untuk mendeteksi anomali traffic dan potensi serangan DDoS.",
    tech: ["Python", "Elasticsearch", "React"],
    link: "#",
    github: "#",
    isSecure: true
  },
  {
    title: "E-Commerce Frontend",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    desc: "Platform jual beli online dengan performa tinggi menggunakan arsitektur modern berbasis komponen.",
    tech: ["Next.js", "TailwindCSS", "Zustand"],
    link: "#",
    github: "#",
    isSecure: false
  },
  {
    title: "Vulnerability Scanner",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    desc: "Alat pemindai kerentanan web otomatis (XSS, SQLi) yang diintegrasikan ke CI/CD pipeline.",
    tech: ["Node.js", "Docker", "Bash"],
    link: "#",
    github: "#",
    isSecure: true
  }
];

const Projects = ({ t }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-2">{t.projects.title}</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
            {t.projects.subtitle}
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <TiltCard key={idx} className="h-full">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden group h-full flex flex-col hover:border-orange-500/50 transition-colors">
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-orange-500 text-sm font-bold mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1">
                    {project.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4 border-t border-zinc-200 dark:border-zinc-800 pt-4">
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
