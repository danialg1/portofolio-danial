import React, { useState, useEffect, useRef } from 'react';
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
  Flame
} from 'lucide-react';

// --- CUSTOM BRAND ICONS ---
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.5 6.5-7.1a5.8 5.8 0 0 0-1.6-4.03a5.5 5.5 0 0 0-.15-4.03s-1.3-.4-4.2 1.6a14.8 14.8 0 0 0-8 0c-2.9-2-4.2-1.6-4.2-1.6a5.5 5.5 0 0 0-.15 4.03 5.8 5.8 0 0 0-1.6 4.03c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FigmaIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
);

// --- DATA TRANSLATION ---
const dict = {
  id: {
    nav: { home: 'Beranda', about: 'Tentang', projects: 'Proyek', contact: 'Kontak' },
    hero: {
      greeting: 'HALO, SAYA',
      rolePrefix: 'Seorang',
      desc: 'Saya membantu membangun aplikasi web yang aman, scalable, dan estetis. Menjembatani kesenjangan antara fungsionalitas tingkat tinggi dan keamanan siber (Cyber Security).',
      btnProject: 'Lihat Proyek',
      btnContact: 'Kontak Saya'
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Perpaduan logika kode dan keamanan sistem.',
      p1: 'Perjalanan saya di dunia teknologi dimulai dari ketertarikan pada bagaimana sistem bekerja dan bagaimana melindunginya. Sebagai Fullstack Developer sekaligus praktisi Cyber Security, saya tidak hanya membangun aplikasi yang indah, tapi juga tahan terhadap kerentanan.',
      p2: 'Saat ini, saya terus mengembangkan keahlian di bidang penetration testing dan modern web development. Kombinasi ini adalah kekuatan utama saya dalam setiap proyek yang saya tangani.',
      exp: 'TAHUN PENGALAMAN',
      proj: 'PROYEK SELESAI',
      client: 'KLIEN PUAS',
      cv: 'Unduh CV'
    },
    projects: {
      title: 'Proyek Terpilih',
      subtitle: 'Beberapa karya yang menyoroti keahlian development & security saya.',
      view: 'Lihat'
    },
    stack: {
      title: 'Tech & Security Stack',
      subtitle: 'Alat dan teknologi yang saya gunakan sehari-hari.'
    },
    contact: {
      title: 'Mari Terhubung',
      subtitle: 'Saya selalu terbuka untuk proyek baru atau sekadar obrolan. Kirimkan sinyal Anda.',
      sysStatus: 'SYSTEM STATUS: ONLINE',
      emailLabel: 'EMAIL SAYA',
      waLabel: 'CHAT WHATSAPP',
      uplink: 'ESTABLISHING SECURE UPLINK...',
      formTitle: 'INITIATE DATA TRANSMISSION',
      namePlaceholder: 'ID Pengirim / Nama',
      emailPlaceholder: 'Frekuensi / Alamat Email',
      msgPlaceholder: 'Data Transmisi Pesan...',
      btnSubmit: 'INISIASI TRANSMISI'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: 'HELLO, I AM',
      rolePrefix: 'A',
      desc: 'I help build secure, scalable, and aesthetic web applications. Bridging the gap between high-level functionality and cyber security.',
      btnProject: 'View Projects',
      btnContact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      subtitle: 'The fusion of code logic and system security.',
      p1: 'My journey in the tech world started with a fascination for how systems work and how to protect them. As a Fullstack Developer and Cyber Security practitioner, I don\'t just build beautiful apps, but resilient ones.',
      p2: 'Currently, I am continuously honing my skills in penetration testing and modern web development. This combination is my core strength in every project I handle.',
      exp: 'YEARS EXPERIENCE',
      proj: 'PROJECTS DONE',
      client: 'HAPPY CLIENTS',
      cv: 'Download CV'
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'Some of my work highlighting my development & security skills.',
      view: 'View'
    },
    stack: {
      title: 'Tech & Security Stack',
      subtitle: 'Tools and technologies I use daily.'
    },
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'I am always open to new projects or just a chat. Send your signal.',
      sysStatus: 'SYSTEM STATUS: ONLINE',
      emailLabel: 'EMAIL ME',
      waLabel: 'WHATSAPP CHAT',
      uplink: 'ESTABLISHING SECURE UPLINK...',
      formTitle: 'INITIATE DATA TRANSMISSION',
      namePlaceholder: 'Sender ID / Name',
      emailPlaceholder: 'Email Frequency / Address',
      msgPlaceholder: 'Message Transmission Data...',
      btnSubmit: 'INITIATE TRANSMISSION'
    }
  }
};

const projectsData = [
  {
    id: 1,
    title: { id: 'Dashboard Analitik Keamanan', en: 'Security Analytics Dashboard' },
    desc: { id: 'Visualisasi log server & deteksi anomali real-time.', en: 'Server log visualization & real-time anomaly detection.' },
    tags: ['React', 'Node.js', 'Elasticsearch'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: { id: 'E-Commerce Skala Besar', en: 'Large Scale E-Commerce' },
    desc: { id: 'Platform e-commerce dengan sistem pembayaran yang dienkripsi ketat.', en: 'E-commerce platform with strictly encrypted payment systems.' },
    tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: { id: 'Alat Penetration Testing', en: 'Penetration Testing Tool' },
    desc: { id: 'CLI tool untuk memindai kerentanan web OWASP Top 10.', en: 'CLI tool to scan for OWASP Top 10 web vulnerabilities.' },
    tags: ['Python', 'Bash', 'Cyber Security'],
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
  }
];

// --- 15 TECH STACK ---
const techStack = [
  { name: 'React', desc: 'FRONTEND LIB', icon: <Code2 size={24} className="text-blue-400" /> },
  { name: 'Tailwind', desc: 'CSS FRAMEWORK', icon: <Layout size={24} className="text-teal-400" /> },
  { name: 'Node.js', desc: 'BACKEND RUNTIME', icon: <Terminal size={24} className="text-green-500" /> },
  { name: 'Next.js', desc: 'WEB FRAMEWORK', icon: <Globe size={24} className="text-white" /> },
  { name: 'PHP', desc: 'BACKEND SCRIPTING', icon: <Code2 size={24} className="text-indigo-400" /> },
  { name: 'Laravel', desc: 'PHP FRAMEWORK', icon: <Box size={24} className="text-red-500" /> },
  { name: 'CodeIgniter 4', desc: 'PHP FRAMEWORK', icon: <Flame size={24} className="text-orange-500" /> },
  { name: 'Kali Linux', desc: 'PEN TESTING OS', icon: <ShieldCheck size={24} className="text-indigo-400" /> },
  { name: 'Python', desc: 'SCRIPTING', icon: <Code2 size={24} className="text-yellow-400" /> },
  { name: 'PostgreSQL', desc: 'DATABASE', icon: <Database size={24} className="text-blue-300" /> },
  { name: 'Burp Suite', desc: 'SECURITY TOOL', icon: <ShieldCheck size={24} className="text-orange-500" /> },
  { name: 'Figma', desc: 'UI/UX DESIGN', icon: <FigmaIcon size={24} className="text-pink-400" /> },
  { name: 'Canva', desc: 'LAYOUT DESIGN', icon: <Paintbrush size={24} className="text-cyan-400" /> },
  { name: 'Premiere Pro', desc: 'VIDEO EDITING', icon: <Video size={24} className="text-purple-500" /> },
  { name: 'Capcut', desc: 'VIDEO EDITING', icon: <Scissors size={24} className="text-gray-100" /> },
];

export default function App() {
  const [lang, setLang] = useState('id');
  const t = dict[lang];

  const heroCardRef = useRef(null);
  const aboutLanyardRef = useRef(null);
  
  // STATE UNTUK FITUR DRAG LANYARD
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  
  // --- INTERSECTION OBSERVER (Animasi saat Scroll) ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 }); // 15% dari elemen terlihat, animasi mulai

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]); // Re-run ketika ganti bahasa biar animasi gak ngebug

  // --- MOUSE PARALLAX EFFECT ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 15; 
      const yPos = (clientY / innerHeight - 0.5) * -15;
      
      if (heroCardRef.current) {
        heroCardRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${yPos}deg)`;
      }
      if (aboutLanyardRef.current) {
        aboutLanyardRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${yPos}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- LOGIKA DRAG ELASTIS ---
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
    const handleDragMove = (e) => {
      if (!isDragging) return;
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      
      let newX = clientX - dragStartPos.current.x;
      let newY = clientY - dragStartPos.current.y;
      
      newX = Math.max(-150, Math.min(150, newX));
      newY = Math.max(-20, Math.min(200, newY)); 
      
      setDragPos({ x: newX, y: newY });
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
    };
  }, [isDragging]);

  const stringBaseHeight = 80;
  const stringLength = Math.sqrt(Math.pow(stringBaseHeight + dragPos.y, 2) + Math.pow(dragPos.x, 2));
  const stringAngleRad = Math.atan2(dragPos.x, stringBaseHeight + dragPos.y);
  const stringAngleDeg = stringAngleRad * (180 / Math.PI);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* CSS INJECTIONS UNTUK CUSTOM ANIMATION */}
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        
        /* Efek Ayunan Tali */
        @keyframes swing {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .lanyard-swing {
          transform-origin: top center;
          animation: swing 6s ease-in-out infinite;
        }

        /* Glassmorphism Card */
        .glass-card {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Animasi "Tuing-tuing" Spring Bounce untuk Foto Hero */
        @keyframes spring-bounce {
          0% { transform: scale(0.6) translateY(50px); opacity: 0; }
          60% { transform: scale(1.05) translateY(-10px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-spring {
          opacity: 0;
          animation: spring-bounce 1.2s cubic-bezier(0.28, 0.84, 0.42, 1) forwards;
          animation-delay: 0.2s;
        }

        /* Animasi Fade Up untuk Teks */
        @keyframes fade-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Animasi Scroll Umum */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animasi Khusus Lanyard Jatuh (Scroll Drop) */
        .scroll-drop {
          opacity: 0;
          transform: translateY(-150px) scale(0.9) rotate(-10deg);
          transition: opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .scroll-drop.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1) rotate(0deg);
        }
      `}} />

      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-x-0 border-t-0 border-b-zinc-800/50 px-6 py-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tighter">
            Danial<span className="text-teal-400">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-teal-400 transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">{t.nav.about}</a>
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

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* KIRI: TEKS ANIMASI */}
          <div className="z-10 space-y-6">
            <p className="text-teal-400 font-semibold tracking-wider text-sm uppercase animate-fade-up" style={{ animationDelay: '100ms' }}>
              {t.hero.greeting}
            </p>
            
            {/* Animasi Nama Per-Kata */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight flex flex-wrap gap-x-4">
              {("Danial Gibran").split(' ').map((word, i) => (
                <span key={i} className="animate-fade-up inline-block" style={{ animationDelay: `${200 + i * 150}ms` }}>
                  {word}
                </span>
              ))}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 animate-fade-up" style={{ animationDelay: '500ms' }}>
              {t.hero.rolePrefix} <span className="text-white border-b-2 border-teal-500 pb-1">Fullstack Dev & Cyber Security</span>
            </h2>
            
            {/* Animasi Deskripsi Per-Kata */}
            <p className="text-zinc-400 leading-relaxed max-w-lg text-lg">
              {t.hero.desc.split(' ').map((word, i) => (
                <span key={i} className="animate-fade-up inline-block mr-1.5" style={{ animationDelay: `${600 + i * 20}ms` }}>
                  {word}
                </span>
              ))}
            </p>
            
            <div className="flex items-center space-x-4 pt-4 animate-fade-up" style={{ animationDelay: '1000ms' }}>
              <a href="#projects" className="group flex items-center space-x-2 bg-teal-500/10 text-teal-400 border border-teal-500/50 px-6 py-3 rounded-full font-medium hover:bg-teal-500/20 transition-all">
                <span>{t.hero.btnProject}</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full font-medium border border-zinc-700 hover:bg-zinc-800 transition-all text-white">
                {t.hero.btnContact}
              </a>
            </div>

            <div className="flex items-center space-x-5 pt-8 text-zinc-500 animate-fade-up" style={{ animationDelay: '1100ms' }}>
              <a href="https://github.com/danialg1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><GithubIcon size={22} /></a>
              <a href="https://www.linkedin.com/in/danial-gibran-342370288" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><LinkedinIcon size={22} /></a>
              <a href="https://www.instagram.com/danial_g1bran" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors"><InstagramIcon size={22} /></a>
            </div>
          </div>

          {/* KANAN: KARTU FOTO PREMIUM ("Tuing-tuing" Animation) */}
          <div className="hidden md:flex justify-center items-center h-full relative p-4 animate-spring">
            <div 
              ref={heroCardRef}
              className="relative w-full max-w-[400px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(20,184,166,0.15)] group transition-transform duration-100 ease-out"
            >
              <img 
                src="/profil.jpg" 
                alt="Danial Gibran" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 flex items-center justify-between border border-white/10 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-zinc-800">
                    <img src="/profil.jpg" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">@danialgibran</p>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                      <span className="text-xs font-medium text-zinc-400">Online</span>
                    </div>
                  </div>
                </div>
                
                <a href="#contact" className="text-xs font-semibold bg-zinc-800 border border-zinc-700 hover:bg-teal-500 hover:text-zinc-900 hover:border-teal-400 text-white px-4 py-2.5 rounded-xl transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 items-center">
            
            {/* LANYARD DROP ANIMATION (Jatuh dari atas pas scroll) */}
            <div className="hidden md:flex md:col-span-4 justify-center items-start h-full perspective-[1000px] mt-[-40px] select-none animate-on-scroll scroll-drop">
              <div 
                className="lanyard-swing flex flex-col items-center" 
                style={{ 
                  animationDelay: '-1.5s', 
                  animationPlayState: isDragging ? 'paused' : 'running' 
                }}
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
                      <img 
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" 
                        alt="Matrix Security" 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                      />
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

            {/* TEKS ABOUT (Fade Up On Scroll) */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-8">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {t.about.title.split(' ')[0]} <span className="text-teal-400">{t.about.title.split(' ')[1] || ''}</span>
                </h2>
                <p className="text-zinc-500 italic mb-6 border-l-2 border-zinc-700 pl-4">
                  {t.about.subtitle}
                </p>
                <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-zinc-800/50 pt-6 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div>
                  <h4 className="text-3xl font-bold text-teal-400 mb-1">3+</h4>
                  <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">{t.about.exp}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-blue-400 mb-1">20+</h4>
                  <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">{t.about.proj}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-purple-400 mb-1">4+</h4>
                  <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">{t.about.client}</p>
                </div>
              </div>
              
              <div className="pt-2 animate-on-scroll" style={{ transitionDelay: '400ms' }}>
                <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-6 py-3 rounded-full transition-all text-sm font-medium">
                  <span>{t.about.cv}</span>
                  <Download size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.projects.title.split(' ')[0]} <span className="text-teal-400">{t.projects.title.split(' ')[1]}</span>
          </h2>
          <p className="text-zinc-400">{t.projects.subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative rounded-3xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 animate-on-scroll ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
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
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section (Animasi Pop-up Berantai) */}
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
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] group cursor-default animate-on-scroll"
              style={{ transitionDelay: `${i * 50}ms` }} /* Ini yang bikin pop-up berurutan */
            >
              <div className="p-3 bg-zinc-800/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200">{tech.name}</h4>
                <p className="text-[10px] tracking-widest text-zinc-500 font-semibold mt-1 uppercase">{tech.desc}</p>
              </div>
            </div>
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

          <div className="glass-card rounded-3xl p-1 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-shadow duration-500 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
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
            <a href="https://github.com/danialg1" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><GithubIcon size={18} /></a>
            <a href="https://www.linkedin.com/in/danial-gibran-342370288" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors"><LinkedinIcon size={18} /></a>
            <a href="mailto:danialgibran0@gmail.com" className="text-zinc-500 hover:text-teal-400 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}