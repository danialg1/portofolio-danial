import React from 'react';
// Removed lucide-react imports
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
    },
    education: {
      title: 'Pendidikan & Bootcamp',
      subtitle: 'Perjalanan belajar dan latar belakang akademik saya.',
      sd: 'Sekolah Dasar',
      smp: 'Sekolah Menengah Pertama',
      sma: 'Madrasah Aliyah Swasta',
      bootcamp: 'Bootcamp Profesional',
      kuliah: 'S1 Informatika'
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
    },
    education: {
      title: 'Education & Bootcamp',
      subtitle: 'My learning journey and academic background.',
      sd: 'Elementary School',
      smp: 'Junior High School',
      sma: 'Islamic High School',
      bootcamp: 'Professional Bootcamp',
      kuliah: 'Bachelor of Informatics'
    }
  }
};

export const educationHistory = [
  {
    type: 'sd',
    period: '2011 - 2016',
    name: 'SDN 16 Pontianak Timur',
    logo: '/logos/sd.png'
  },
  {
    type: 'smp',
    period: '2016 - 2019',
    name: 'SMP N 14 Pontianak',
    logo: '/logos/smp.png'
  },
  {
    type: 'sma',
    period: '2019 - 2022',
    name: 'MAS Al-Fatah Singkawang',
    logo: '/logos/mas.png'
  },
  {
    type: 'bootcamp',
    period: '2025',
    name: 'IBM Granite',
    logo: '/logos/ibm.svg'
  },
  {
    type: 'kuliah',
    period: '2023 - Sekarang',
    name: 'Universitas Bina Sarana Informatika Kota Pontianak',
    logo: '/logos/bsi.png'
  }
];

export const techStack = [
  { 
    name: 'React', 
    desc_id: 'FRONTEND LIB', 
    desc_en: 'FRONTEND LIB', 
    details_id: 'Library andalan saya untuk membangun antarmuka pengguna yang interaktif, reaktif, dan komponen-based. Sangat optimal untuk merender data dinamis secara real-time.',
    details_en: 'My go-to library for building interactive, reactive, and component-based user interfaces. Highly optimal for rendering real-time dynamic data.',
    logo: '/tech-logos/react.svg',
    color: 'text-[#61DAFB]'
  },
  { 
    name: 'Tailwind', 
    desc_id: 'CSS FRAMEWORK', 
    desc_en: 'CSS FRAMEWORK', 
    details_id: 'Mempercepat proses styling web dengan utility-classes. Membuat desain responsif menjadi super gampang, konsisten, dan memiliki ukuran file yang sangat ringan saat di-build.',
    details_en: 'Accelerates web styling with utility-classes. Makes responsive design incredibly easy, consistent, and extremely lightweight when built.',
    logo: '/tech-logos/tailwind.svg',
    color: 'text-[#06B6D4]'
  },
  { 
    name: 'Node.js', 
    desc_id: 'BACKEND RUNTIME', 
    desc_en: 'BACKEND RUNTIME', 
    details_id: 'Environment runtime untuk mengeksekusi JavaScript di sisi server. Sangat cepat dan scalable untuk membuat REST API dan menangani jutaan request.',
    details_en: 'Runtime environment to execute JavaScript on the server side. Extremely fast and scalable for building REST APIs and handling millions of requests.',
    logo: '/tech-logos/node.svg',
    color: 'text-[#339933]'
  },
  { 
    name: 'Next.js', 
    desc_id: 'WEB FRAMEWORK', 
    desc_en: 'WEB FRAMEWORK', 
    details_id: 'Framework React pilihan utama saya untuk level produksi. Saya gunakan untuk Server-Side Rendering (SSR), optimasi SEO-friendly web, dan performa yang maksimal.',
    details_en: 'My top choice React framework for production level. I use it for Server-Side Rendering (SSR), SEO-friendly web optimization, and maximum performance.',
    logo: '/tech-logos/next.svg',
    color: 'text-zinc-800 dark:text-white'
  },
  { 
    name: 'PHP', 
    desc_id: 'BACKEND SCRIPTING', 
    desc_en: 'BACKEND SCRIPTING', 
    details_id: 'Bahasa backend klasik yang sangat solid. Sering saya gunakan untuk membangun sistem logika web custom atau me-maintenance arsitektur server legacy (lama).',
    details_en: 'A solid classic backend language. Often used for building custom web logic systems or maintaining legacy server architectures.',
    logo: '/tech-logos/php.svg',
    color: 'text-[#777BB4]'
  },
  { 
    name: 'Laravel', 
    desc_id: 'PHP FRAMEWORK', 
    desc_en: 'PHP FRAMEWORK', 
    details_id: 'Framework PHP paling elegan. Saya andalkan untuk membuat aplikasi web kompleks dengan fitur keamanan yang ketat dan arsitektur MVC yang sangat rapi.',
    details_en: 'The most elegant PHP framework. I rely on it to build complex web applications with strict security features and a very neat MVC architecture.',
    logo: '/tech-logos/laravel.svg',
    color: 'text-[#FF2D20]'
  },
  { 
    name: 'CodeIgniter 4', 
    desc_id: 'PHP FRAMEWORK', 
    desc_en: 'PHP FRAMEWORK', 
    details_id: 'Ringan, super cepat, dan sangat mudah di-deploy. Solusi paling akurat untuk proyek PHP yang memiliki resource server terbatas atau sekadar API sederhana.',
    details_en: 'Lightweight, super fast, and easy to deploy. The most accurate solution for PHP projects with limited server resources or just a simple API.',
    logo: '/tech-logos/codeigniter.svg',
    color: 'text-[#EF4223]'
  },
  { 
    name: 'Kali Linux', 
    desc_id: 'PEN TESTING OS', 
    desc_en: 'PEN TESTING OS', 
    details_id: 'Sistem operasi wajib untuk menguji kerentanan server dan aplikasi. Dilengkapi ratusan tools keamanan siber untuk keperluan penetration testing dan ethical hacking.',
    details_en: 'The mandatory operating system for testing server and application vulnerabilities. Equipped with hundreds of cyber security tools for penetration testing and ethical hacking.',
    logo: '/tech-logos/kalilinux.svg',
    color: 'text-[#557C94]'
  },
  { 
    name: 'Python', 
    desc_id: 'SCRIPTING', 
    desc_en: 'SCRIPTING', 
    details_id: 'Bahasa serba bisa dan fleksibel. Sering saya pakai untuk automasi tugas sehari-hari, membuat script eksploitasi keamanan custom, hingga manipulasi big data.',
    details_en: 'A versatile and flexible language. I often use it for daily task automation, creating custom security exploitation scripts, and big data manipulation.',
    logo: '/tech-logos/python.svg',
    color: 'text-[#3776AB]'
  },
  { 
    name: 'PostgreSQL', 
    desc_id: 'DATABASE', 
    desc_en: 'DATABASE', 
    details_id: 'Database relasional terkuat pilihan saya. Sangat tangguh, dijamin aman, dan mampu menangani eksekusi query kompleks dengan volume data berskala besar tanpa lag.',
    details_en: 'My strongest relational database choice. Very robust, guaranteed secure, and capable of handling complex query executions with massive data volumes without lag.',
    logo: '/tech-logos/postgresql.svg',
    color: 'text-[#4169E1]'
  },
  { 
    name: 'Burp Suite', 
    desc_id: 'SECURITY TOOL', 
    desc_en: 'SECURITY TOOL', 
    details_id: 'Senjata rahasia utama untuk web vulnerability scanning dan memanipulasi alur traffic HTTP/HTTPS dalam aktivitas mencari celah keamanan web (pentest).',
    details_en: 'The main secret weapon for web vulnerability scanning and manipulating HTTP/HTTPS traffic flow during web security assessment (pentest) activities.',
    logo: '/tech-logos/burpsuite.svg',
    color: 'text-[#FF6633]'
  },
  { 
    name: 'Figma', 
    desc_id: 'UI/UX DESIGN', 
    desc_en: 'UI/UX DESIGN', 
    details_id: 'Tool kolaboratif super canggih untuk merancang wireframe, mockup estetis, dan prototype web interaktif sebelum masuk ke tahap eksekusi coding.',
    details_en: 'A super advanced collaborative tool for designing wireframes, aesthetic mockups, and interactive web prototypes before coding execution.',
    logo: '/tech-logos/figma.svg',
    color: 'text-[#F24E1E]'
  },
  { 
    name: 'Canva', 
    desc_id: 'LAYOUT DESIGN', 
    desc_en: 'LAYOUT DESIGN', 
    details_id: 'Penyelamat handal untuk merancang aset grafis dengan cepat, membuat presentasi proyek, atau menghasilkan ilustrasi sederhana pendukung visual website.',
    details_en: 'A reliable lifesaver for designing graphic assets quickly, creating project presentations, or generating simple illustrations to support website visuals.',
    logo: '/tech-logos/canva.svg',
    color: 'text-[#00C4CC]'
  },
  { 
    name: 'Premiere Pro', 
    desc_id: 'VIDEO EDITING', 
    desc_en: 'VIDEO EDITING', 
    details_id: 'Software andalan kelas dunia untuk mengedit video portofolio, memotong klip presentasi project, atau membuat dokumentasi profesional dengan standar industri.',
    details_en: 'World-class flagship software for editing portfolio videos, cutting project presentation clips, or making professional documentation with industry standards.',
    logo: '/tech-logos/premierepro.svg',
    color: 'text-[#9999FF]'
  },
  { 
    name: 'Capcut', 
    desc_id: 'VIDEO EDITING', 
    desc_en: 'VIDEO EDITING', 
    details_id: 'Sangat praktis untuk proses editing video kilat, terutama untuk memenuhi kebutuhan konten sosial media yang serba dinamis dengan efek transisi kekinian.',
    details_en: 'Very practical for quick video editing processes, especially to meet the needs of dynamic social media content with trendy transition effects.',
    logo: '/tech-logos/capcut.svg',
    color: 'text-zinc-800 dark:text-white'
  }
];
