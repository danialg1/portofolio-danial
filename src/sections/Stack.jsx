import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '../data/constants';
import { Shield, Code2, Video, Award, Loader2, X, ZoomIn, Info } from 'lucide-react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Stack = ({ t, lang }) => {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedCert, setSelectedCert] = useState(null);

  // Mencegah scroll saat modal terbuka
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCert]);

  // Kategorisasi
  const categories = {
    web: {
      id: 'web',
      icon: Code2,
      label: 'Web Development',
      items: techStack.filter(t => ['React', 'Tailwind', 'Node.js', 'Next.js', 'PHP', 'Laravel', 'CodeIgniter 4', 'PostgreSQL'].includes(t.name))
    },
    security: {
      id: 'security',
      icon: Shield,
      label: 'Cyber Security',
      items: techStack.filter(t => ['Kali Linux', 'Python', 'Burp Suite'].includes(t.name))
    },
    editing: {
      id: 'editing',
      icon: Video,
      label: 'Editing Tools',
      items: techStack.filter(t => ['Figma', 'Canva', 'Premiere Pro', 'Capcut'].includes(t.name))
    },
    certs: {
      id: 'certs',
      icon: Award,
      label: 'Certificates',
      items: [
        { name: 'Sertifikat - Danial Gibran', file: '/certificates/Sertifikat - Danial Gibran.pdf' },
        { name: 'Completion Certificate | SkillsBuild', file: '/certificates/Completion Certificate _ SkillsBuild.pdf' },
        { name: 'Code Generations and Optimization', file: '/certificates/Code Generations and Optimization - Danial Gibran (1).pdf' },
        { name: 'Certificate of Completion', file: '/certificates/Certificate_of_Completion.pdf' },
        { name: 'Sertifikasi Editing Video', file: '/certificates/Sertifikasi editing video Danial Gibran.pdf' }
      ]
    }
  };

  const tabs = Object.values(categories);

  return (
    <section id="stack" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-2">{t.stack.title}</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
            {t.stack.subtitle}
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16 relative z-10"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-sm hover:shadow-md ${
                  isActive 
                    ? 'bg-orange-500 text-white scale-105 shadow-orange-500/30 shadow-lg' 
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:scale-105'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <div className="relative z-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* Tech Stack Rendering */}
            {activeTab !== 'certs' && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {categories[activeTab].items.map((tech, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ y: -12 }}
                    className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2rem] hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Animated Background Glow */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/30 group-hover:scale-150 transition-all duration-700 ease-out"></div>
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/30 group-hover:scale-150 transition-all duration-700 ease-out"></div>

                    <div className="flex items-center space-x-4 mb-5 relative z-10">
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-16 h-16 p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all duration-500"
                      >
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500" 
                          loading="lazy" 
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-black text-zinc-900 dark:text-white transition-colors duration-300 group-hover:text-orange-500">
                          {tech.name}
                        </h3>
                        <p className="text-xs font-bold text-orange-500 tracking-widest uppercase">
                          {tech["desc_" + lang] || tech.desc_en}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-500">
                      {tech["details_" + lang] || tech.details_en}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Certificates Rendering */}
            {activeTab === 'certs' && (
              <motion.div
                key="certs"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {categories.certs.items.map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    onClick={() => setSelectedCert(cert)}
                    className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl relative overflow-hidden group cursor-pointer hover:shadow-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                    onContextMenu={(e) => e.preventDefault()} 
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center space-x-2 relative z-10">
                      <Award className="text-orange-500" />
                      <span className="truncate">{cert.name}</span>
                    </h3>
                    
                    <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 flex justify-center items-center select-none group-hover:opacity-80 transition-opacity" style={{ minHeight: '300px' }}>
                      <Document 
                        file={cert.file} 
                        loading={
                          <div className="flex flex-col items-center justify-center text-orange-500 py-12">
                            <Loader2 className="animate-spin mb-2" size={32} />
                            <span className="font-bold text-sm tracking-widest">MEMUAT...</span>
                          </div>
                        }
                        error={
                          <div className="flex items-center justify-center text-red-500 py-12 font-bold text-center px-4">
                            Koneksi lambat atau path file tidak ditemukan.
                          </div>
                        }
                      >
                        <Page 
                          pageNumber={1} 
                          renderTextLayer={false} 
                          renderAnnotationLayer={false} 
                          className="max-w-full h-auto drop-shadow-xl pointer-events-none"
                          width={400}
                        />
                      </Document>

                      {/* Icon overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-orange-500 text-white p-4 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn size={32} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedCert(null)}
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
              <h3 className="text-white font-bold text-xl md:text-2xl truncate pr-10">{selectedCert.name}</h3>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md"
              >
                <X size={28} />
              </button>
            </div>

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[75vh] md:h-[85vh] flex justify-center items-center rounded-xl mt-12 bg-zinc-900/80 overflow-hidden border border-zinc-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika klik di area sertifikat
            >
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={4}
                centerOnInit={true}
                wheel={{ step: 0.1 }}
                pinch={{ step: 5 }}
              >
                <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Document 
                    file={selectedCert.file} 
                    loading={
                      <div className="flex flex-col items-center justify-center text-orange-500">
                        <Loader2 className="animate-spin mb-4" size={48} />
                        <span className="font-bold tracking-widest text-lg text-center">MEMUAT GAMBAR HD...</span>
                      </div>
                    }
                    error={
                      <div className="text-red-500 font-bold text-xl text-center bg-zinc-900 p-8 rounded-2xl">
                        Gagal memuat sertifikat. Mohon periksa koneksi internet Anda.
                      </div>
                    }
                  >
                    <Page 
                      pageNumber={1} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false} 
                      className="drop-shadow-2xl pointer-events-none"
                      width={Math.min(window.innerWidth * 0.9, 1000)}
                    />
                  </Document>
                </TransformComponent>
              </TransformWrapper>
            </motion.div>
            
            {/* Modal Footer/Helper text */}
            <div className="absolute bottom-4 flex flex-col items-center space-y-2 pointer-events-none text-center">
              <div className="bg-zinc-900/80 backdrop-blur-sm text-orange-500 text-xs font-bold px-4 py-2 rounded-full border border-orange-500/20 flex items-center space-x-2">
                <Info size={14} />
                <span>Cubit (Pinch) atau Scroll untuk Zoom In / Out</span>
              </div>
              <div className="text-white/50 text-[10px] md:text-sm font-medium tracking-wider">
                DILINDUNGI SISTEM &bull; KLIK DI LUAR UNTUK MENUTUP
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Stack;
