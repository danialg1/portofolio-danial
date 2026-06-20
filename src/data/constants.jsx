import React from 'react';
import { 
  Code2, 
  Layout, 
  Terminal, 
  Globe, 
  Box, 
  Flame, 
  ShieldCheck, 
  Database, 
  Paintbrush, 
  Video, 
  Scissors 
} from 'lucide-react';
import { FigmaIcon } from '../components/icons';

export const dict = {
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

export const techStack = [
  { name: 'React', desc: 'FRONTEND LIB', details: 'Library andalan saya untuk membangun antarmuka pengguna yang interaktif, reaktif, dan komponen-based. Sangat optimal untuk merender data dinamis secara real-time.', icon: <Code2 size={24} className="text-blue-400" /> },
  { name: 'Tailwind', desc: 'CSS FRAMEWORK', details: 'Mempercepat proses styling web dengan utility-classes. Membuat desain responsif menjadi super gampang, konsisten, dan memiliki ukuran file yang sangat ringan saat di-build.', icon: <Layout size={24} className="text-teal-400" /> },
  { name: 'Node.js', desc: 'BACKEND RUNTIME', details: 'Environment runtime untuk mengeksekusi JavaScript di sisi server. Sangat cepat dan scalable untuk membuat REST API dan menangani jutaan request.', icon: <Terminal size={24} className="text-green-500" /> },
  { name: 'Next.js', desc: 'WEB FRAMEWORK', details: 'Framework React pilihan utama saya untuk level produksi. Saya gunakan untuk Server-Side Rendering (SSR), optimasi SEO-friendly web, dan performa yang maksimal.', icon: <Globe size={24} className="text-white" /> },
  { name: 'PHP', desc: 'BACKEND SCRIPTING', details: 'Bahasa backend klasik yang sangat solid. Sering saya gunakan untuk membangun sistem logika web custom atau me-maintenance arsitektur server legacy (lama).', icon: <Code2 size={24} className="text-indigo-400" /> },
  { name: 'Laravel', desc: 'PHP FRAMEWORK', details: 'Framework PHP paling elegan. Saya andalkan untuk membuat aplikasi web kompleks dengan fitur keamanan yang ketat dan arsitektur MVC yang sangat rapi.', icon: <Box size={24} className="text-red-500" /> },
  { name: 'CodeIgniter 4', desc: 'PHP FRAMEWORK', details: 'Ringan, super cepat, dan sangat mudah di-deploy. Solusi paling akurat untuk proyek PHP yang memiliki resource server terbatas atau sekadar API sederhana.', icon: <Flame size={24} className="text-orange-500" /> },
  { name: 'Kali Linux', desc: 'PEN TESTING OS', details: 'Sistem operasi wajib untuk menguji kerentanan server dan aplikasi. Dilengkapi ratusan tools keamanan siber untuk keperluan penetration testing dan ethical hacking.', icon: <ShieldCheck size={24} className="text-indigo-400" /> },
  { name: 'Python', desc: 'SCRIPTING', details: 'Bahasa serba bisa dan fleksibel. Sering saya pakai untuk automasi tugas sehari-hari, membuat script eksploitasi keamanan custom, hingga manipulasi big data.', icon: <Code2 size={24} className="text-yellow-400" /> },
  { name: 'PostgreSQL', desc: 'DATABASE', details: 'Database relasional terkuat pilihan saya. Sangat tangguh, dijamin aman, dan mampu menangani eksekusi query kompleks dengan volume data berskala besar tanpa lag.', icon: <Database size={24} className="text-blue-300" /> },
  { name: 'Burp Suite', desc: 'SECURITY TOOL', details: 'Senjata rahasia utama untuk web vulnerability scanning dan memanipulasi alur traffic HTTP/HTTPS dalam aktivitas mencari celah keamanan web (pentest).', icon: <ShieldCheck size={24} className="text-orange-500" /> },
  { name: 'Figma', desc: 'UI/UX DESIGN', details: 'Tool kolaboratif super canggih untuk merancang wireframe, mockup estetis, dan prototype web interaktif sebelum masuk ke tahap eksekusi coding.', icon: <FigmaIcon size={24} className="text-pink-400" /> },
  { name: 'Canva', desc: 'LAYOUT DESIGN', details: 'Penyelamat handal untuk merancang aset grafis dengan cepat, membuat presentasi proyek, atau menghasilkan ilustrasi sederhana pendukung visual website.', icon: <Paintbrush size={24} className="text-cyan-400" /> },
  { name: 'Premiere Pro', desc: 'VIDEO EDITING', details: 'Software andalan kelas dunia untuk mengedit video portofolio, memotong klip presentasi project, atau membuat dokumentasi profesional dengan standar industri.', icon: <Video size={24} className="text-purple-500" /> },
  { name: 'Capcut', desc: 'VIDEO EDITING', details: 'Sangat praktis untuk proses editing video kilat, terutama untuk memenuhi kebutuhan konten sosial media yang serba dinamis dengan efek transisi kekinian.', icon: <Scissors size={24} className="text-gray-100" /> },
];
