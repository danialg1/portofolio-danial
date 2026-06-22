import React, { useState, useRef } from 'react';
import { Trophy, Activity, CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const wcDict = {
  id: { title: 'Piala Dunia FIFA 2026', subtitle: 'Informasi umum, Pertandingan, Klasemen, Statistik', standings: 'Klasemen', stats: 'Pemimpin statistik', team: 'Tim', p: 'T', w: 'M', d: 'S', l: 'K', gf: 'GM', ga: 'GK', gd: 'SG', pts: 'Poin', last5: '5 Terakhir', goals: 'Gol', player: 'Pemain', group: 'Grup A' },
  en: { title: 'FIFA World Cup 2026', subtitle: 'General Info, Matches, Standings, Statistics', standings: 'Standings', stats: 'Stat Leaders', team: 'Team', p: 'P', w: 'W', d: 'D', l: 'L', gf: 'GF', ga: 'GA', gd: 'GD', pts: 'Pts', last5: 'Last 5', goals: 'Goals', player: 'Player', group: 'Group A' },
  ar: { title: 'كأس العالم 2026', subtitle: 'معلومات عامة، مباريات، ترتيب، إحصائيات', standings: 'الترتيب', stats: 'قادة الإحصائيات', team: 'فريق', p: 'ل', w: 'ف', d: 'ت', l: 'خ', gf: 'أ.ل', ga: 'أ.ع', gd: 'ف.أ', pts: 'نقاط', last5: 'آخر 5', goals: 'أهداف', player: 'لاعب', group: 'المجموعة أ' },
  ru: { title: 'Чемпионат мира 2026', subtitle: 'Общая информация, Матчи, Турнирная таблица, Статистика', standings: 'Таблица', stats: 'Лидеры', team: 'Команда', p: 'И', w: 'В', d: 'Н', l: 'П', gf: 'ЗГ', ga: 'ПГ', gd: 'РГ', pts: 'Очки', last5: 'Последние 5', goals: 'Голы', player: 'Игрок', group: 'Группа A' },
  hi: { title: 'फीफा विश्व कप 2026', subtitle: 'सामान्य जानकारी, मैच, स्टैंडिंग, सांख्यिकी', standings: 'स्टैंडिंग', stats: 'सांख्यिकी', team: 'टीम', p: 'P', w: 'W', d: 'D', l: 'L', gf: 'GF', ga: 'GA', gd: 'GD', pts: 'Pts', last5: 'अंतिम 5', goals: 'लक्ष्य', player: 'खिलाड़ी', group: 'समूह A' },
  zh: { title: '2026 国际足联世界杯', subtitle: '一般信息, 比赛, 积分榜, 统计', standings: '积分榜', stats: '统计领先者', team: '球队', p: '场', w: '胜', d: '平', l: '负', gf: '进', ga: '失', gd: '净', pts: '分', last5: '近5场', goals: '进球', player: '球员', group: 'A组' },
  ms: { title: 'Piala Dunia FIFA 2026', subtitle: 'Maklumat Umum, Perlawanan, Kedudukan, Statistik', standings: 'Kedudukan', stats: 'Pemimpin Statistik', team: 'Pasukan', p: 'P', w: 'M', d: 'S', l: 'K', gf: 'JG', ga: 'GB', gd: 'PG', pts: 'Mata', last5: '5 Terakhir', goals: 'Gol', player: 'Pemain', group: 'Kumpulan A' },
  it: { title: 'Coppa del Mondo 2026', subtitle: 'Informazioni, Partite, Classifiche, Statistiche', standings: 'Classifica', stats: 'Leader Statistiche', team: 'Squadra', p: 'G', w: 'V', d: 'P', l: 'S', gf: 'GF', ga: 'GS', gd: 'DR', pts: 'Pti', last5: 'Ultime 5', goals: 'Gol', player: 'Giocatore', group: 'Gruppo A' },
  es: { title: 'Copa Mundial 2026', subtitle: 'Información general, Partidos, Clasificación, Estadísticas', standings: 'Clasificación', stats: 'Líderes', team: 'Equipo', p: 'PJ', w: 'G', d: 'E', l: 'P', gf: 'GF', ga: 'GC', gd: 'DG', pts: 'Pts', last5: 'Últimos 5', goals: 'Goles', player: 'Jugador', group: 'Grupo A' }
};

const allGroups = {
  A: [
    { rank: 1, name: 'Meksiko', flag: '🇲🇽', p: 2, w: 2, d: 0, l: 0, gf: 3, ga: 0, gd: 3, pts: 6, form: ['W', 'W', '-', '-', '-'] },
    { rank: 2, name: 'Republik Korea', flag: '🇰🇷', p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2, gd: 0, pts: 3, form: ['L', 'W', '-', '-', '-'] },
    { rank: 3, name: 'Ceko', flag: '🇨🇿', p: 2, w: 0, d: 1, l: 1, gf: 2, ga: 3, gd: -1, pts: 1, form: ['L', 'D', '-', '-', '-'] },
    { rank: 4, name: 'Afrika Selatan', flag: '🇿🇦', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 3, gd: -2, pts: 1, form: ['L', 'D', '-', '-', '-'] }
  ],
  B: [
    { rank: 1, name: 'Kanada', flag: '🇨🇦', p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 1, gd: 6, pts: 4, form: ['W', 'D', '-', '-', '-'] },
    { rank: 2, name: 'Swiss', flag: '🇨🇭', p: 2, w: 1, d: 1, l: 0, gf: 5, ga: 2, gd: 3, pts: 4, form: ['D', 'W', '-', '-', '-'] },
    { rank: 3, name: 'Bosnia dan Herzegovina', flag: '🇧🇦', p: 2, w: 0, d: 1, l: 1, gf: 2, ga: 5, gd: -3, pts: 1, form: ['D', 'L', '-', '-', '-'] },
    { rank: 4, name: 'Qatar', flag: '🇶🇦', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 7, gd: -6, pts: 1, form: ['D', 'L', '-', '-', '-'] }
  ],
  C: [
    { rank: 1, name: 'Brasil', flag: '🇧🇷', p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 1, gd: 3, pts: 4, form: ['W', 'D', '-', '-', '-'] },
    { rank: 2, name: 'Maroko', flag: '🇲🇦', p: 2, w: 1, d: 1, l: 0, gf: 2, ga: 1, gd: 1, pts: 4, form: ['D', 'W', '-', '-', '-'] },
    { rank: 3, name: 'Skotlandia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', p: 2, w: 1, d: 0, l: 1, gf: 1, ga: 1, gd: 0, pts: 3, form: ['W', 'L', '-', '-', '-'] },
    { rank: 4, name: 'Haiti', flag: '🇭🇹', p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 4, gd: -4, pts: 0, form: ['L', 'L', '-', '-', '-'] }
  ],
  D: [
    { rank: 1, name: 'AS', flag: '🇺🇸', p: 2, w: 2, d: 0, l: 0, gf: 6, ga: 1, gd: 5, pts: 6, form: ['W', 'W', '-', '-', '-'] },
    { rank: 2, name: 'Australia', flag: '🇦🇺', p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2, gd: 0, pts: 3, form: ['W', 'L', '-', '-', '-'] },
    { rank: 3, name: 'Paraguay', flag: '🇵🇾', p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 4, gd: -2, pts: 3, form: ['L', 'W', '-', '-', '-'] },
    { rank: 4, name: 'Turki', flag: '🇹🇷', p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 3, gd: -3, pts: 0, form: ['L', 'L', '-', '-', '-'] }
  ],
  E: [
    { rank: 1, name: 'Jerman', flag: '🇩🇪', p: 2, w: 2, d: 0, l: 0, gf: 9, ga: 2, gd: 7, pts: 6, form: ['W', 'W', '-', '-', '-'] },
    { rank: 2, name: 'Pantai Gading', flag: '🇨🇮', p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2, gd: 0, pts: 3, form: ['W', 'L', '-', '-', '-'] },
    { rank: 3, name: 'Ekuador', flag: '🇪🇨', p: 2, w: 0, d: 1, l: 1, gf: 0, ga: 1, gd: -1, pts: 1, form: ['L', 'D', '-', '-', '-'] },
    { rank: 4, name: 'Curaçao', flag: '🇨🇼', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 7, gd: -6, pts: 1, form: ['D', 'L', '-', '-', '-'] }
  ],
  F: [
    { rank: 1, name: 'Belanda', flag: '🇳🇱', p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 3, gd: 4, pts: 4, form: ['W', 'D', '-', '-', '-'] },
    { rank: 2, name: 'Jepang', flag: '🇯🇵', p: 2, w: 1, d: 1, l: 0, gf: 6, ga: 2, gd: 4, pts: 4, form: ['D', 'W', '-', '-', '-'] },
    { rank: 3, name: 'Swedia', flag: '🇸🇪', p: 2, w: 1, d: 0, l: 1, gf: 6, ga: 6, gd: 0, pts: 3, form: ['W', 'L', '-', '-', '-'] },
    { rank: 4, name: 'Tunisia', flag: '🇹🇳', p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 9, gd: -8, pts: 0, form: ['L', 'L', '-', '-', '-'] }
  ],
  G: [
    { rank: 1, name: 'Selandia Baru', flag: '🇳🇿', p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1, form: ['D', '-', '-', '-', '-'] },
    { rank: 2, name: 'IR Iran', flag: '🇮🇷', p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1, form: ['D', '-', '-', '-', '-'] },
    { rank: 3, name: 'Belgia', flag: '🇧🇪', p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, form: ['D', '-', '-', '-', '-'] },
    { rank: 4, name: 'Mesir', flag: '🇪🇬', p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, form: ['D', '-', '-', '-', '-'] }
  ],
  H: [
    { rank: 1, name: 'Spanyol', flag: '🇪🇸', p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 0, gd: 4, pts: 4, form: ['W', 'D', '-', '-', '-'] },
    { rank: 2, name: 'Uruguay', flag: '🇺🇾', p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, form: ['D', '-', '-', '-', '-'] },
    { rank: 3, name: 'Arab Saudi', flag: '🇸🇦', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 5, gd: -4, pts: 1, form: ['D', 'L', '-', '-', '-'] },
    { rank: 4, name: 'Tanjung Verde', flag: '🇨🇻', p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0, gd: 0, pts: 1, form: ['D', '-', '-', '-', '-'] }
  ],
  I: [
    { rank: 1, name: 'Norwegia', flag: '🇳🇴', p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1, gd: 3, pts: 3, form: ['W', '-', '-', '-', '-'] },
    { rank: 2, name: 'Prancis', flag: '🇫🇷', p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3, form: ['W', '-', '-', '-', '-'] },
    { rank: 3, name: 'Senegal', flag: '🇸🇳', p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, gd: -2, pts: 0, form: ['L', '-', '-', '-', '-'] },
    { rank: 4, name: 'Irak', flag: '🇮🇶', p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4, gd: -3, pts: 0, form: ['L', '-', '-', '-', '-'] }
  ],
  J: [
    { rank: 1, name: 'Inggris', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', p: 2, w: 2, d: 0, l: 0, gf: 5, ga: 1, gd: 4, pts: 6, form: ['W', 'W', '-', '-', '-'] },
    { rank: 2, name: 'Nigeria', flag: '🇳🇬', p: 2, w: 1, d: 0, l: 1, gf: 3, ga: 2, gd: 1, pts: 3, form: ['L', 'W', '-', '-', '-'] },
    { rank: 3, name: 'Jamaika', flag: '🇯🇲', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 3, gd: -2, pts: 1, form: ['D', 'L', '-', '-', '-'] },
    { rank: 4, name: 'Oman', flag: '🇴🇲', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 4, gd: -3, pts: 1, form: ['L', 'D', '-', '-', '-'] }
  ],
  K: [
    { rank: 1, name: 'Portugal', flag: '🇵🇹', p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 1, gd: 3, pts: 4, form: ['W', 'D', '-', '-', '-'] },
    { rank: 2, name: 'Kolombia', flag: '🇨🇴', p: 2, w: 1, d: 1, l: 0, gf: 3, ga: 2, gd: 1, pts: 4, form: ['D', 'W', '-', '-', '-'] },
    { rank: 3, name: 'Kroasia', flag: '🇭🇷', p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 3, gd: -1, pts: 3, form: ['L', 'W', '-', '-', '-'] },
    { rank: 4, name: 'Fiji', flag: '🇫🇯', p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 3, gd: -3, pts: 0, form: ['L', 'L', '-', '-', '-'] }
  ],
  L: [
    { rank: 1, name: 'Argentina', flag: '🇦🇷', p: 2, w: 2, d: 0, l: 0, gf: 5, ga: 0, gd: 5, pts: 6, form: ['W', 'W', '-', '-', '-'] },
    { rank: 2, name: 'Mali', flag: '🇲🇱', p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2, gd: 0, pts: 3, form: ['W', 'L', '-', '-', '-'] },
    { rank: 3, name: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 3, gd: -2, pts: 1, form: ['D', 'L', '-', '-', '-'] },
    { rank: 4, name: 'Yordania', flag: '🇯🇴', p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 4, gd: -3, pts: 1, form: ['L', 'D', '-', '-', '-'] }
  ]
};

const topScorersData = [
  { rank: 1, name: 'Deniz Undav', country: 'Jerman', flag: '🇩🇪', goals: 3, img: 'https://ui-avatars.com/api/?name=Deniz+Undav&background=27272a&color=fff&rounded=true' },
  { rank: 1, name: 'Jonathan David', country: 'Kanada', flag: '🇨🇦', goals: 3, img: 'https://ui-avatars.com/api/?name=Jonathan+David&background=ef4444&color=fff&rounded=true' },
  { rank: 1, name: 'Lionel Messi', country: 'Argentina', flag: '🇦🇷', goals: 3, img: 'https://ui-avatars.com/api/?name=Lionel+Messi&background=3b82f6&color=fff&rounded=true' },
  { rank: 4, name: 'Ayase Ueda', country: 'Jepang', flag: '🇯🇵', goals: 2, img: 'https://ui-avatars.com/api/?name=Ayase+Ueda&background=27272a&color=fff&rounded=true' },
  { rank: 4, name: 'Cody Gakpo', country: 'Belanda', flag: '🇳🇱', goals: 2, img: 'https://ui-avatars.com/api/?name=Cody+Gakpo&background=f97316&color=fff&rounded=true' },
  { rank: 4, name: 'Crysencio Summerville', country: 'Belanda', flag: '🇳🇱', goals: 2, img: 'https://ui-avatars.com/api/?name=Crysencio+Summerville&background=f97316&color=fff&rounded=true' },
  { rank: 4, name: 'Cyle Larin', country: 'Kanada', flag: '🇨🇦', goals: 2, img: 'https://ui-avatars.com/api/?name=Cyle+Larin&background=ef4444&color=fff&rounded=true' },
  { rank: 4, name: 'Daichi Kamada', country: 'Jepang', flag: '🇯🇵', goals: 2, img: 'https://ui-avatars.com/api/?name=Daichi+Kamada&background=27272a&color=fff&rounded=true' },
  { rank: 4, name: 'Erling Haaland', country: 'Norwegia', flag: '🇳🇴', goals: 2, img: 'https://ui-avatars.com/api/?name=Erling+Haaland&background=ef4444&color=fff&rounded=true' },
  { rank: 4, name: 'Folarin Balogun', country: 'Amerika Serikat', flag: '🇺🇸', goals: 2, img: 'https://ui-avatars.com/api/?name=Folarin+Balogun&background=3b82f6&color=fff&rounded=true' },
  { rank: 4, name: 'Harry Kane', country: 'Inggris', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 2, img: 'https://ui-avatars.com/api/?name=Harry+Kane&background=27272a&color=fff&rounded=true' },
  { rank: 4, name: 'Ismael Saibari', country: 'Maroko', flag: '🇲🇦', goals: 2, img: 'https://ui-avatars.com/api/?name=Ismael+Saibari&background=ef4444&color=fff&rounded=true' },
  { rank: 4, name: 'Johan Manzambi', country: 'Swiss', flag: '🇨🇭', goals: 2, img: 'https://ui-avatars.com/api/?name=Johan+Manzambi&background=ef4444&color=fff&rounded=true' },
  { rank: 4, name: 'Matheus Cunha', country: 'Brasil', flag: '🇧🇷', goals: 2, img: 'https://ui-avatars.com/api/?name=Matheus+Cunha&background=eab308&color=fff&rounded=true' },
  { rank: 4, name: 'Vinícius Júnior', country: 'Brasil', flag: '🇧🇷', goals: 2, img: 'https://ui-avatars.com/api/?name=Vinicius+Junior&background=eab308&color=fff&rounded=true' }
];

const FormIcon = ({ result }) => {
  if (result === 'W') return <CheckCircle2 size={16} className="text-emerald-500" />;
  if (result === 'L') return <XCircle size={16} className="text-red-500" />;
  if (result === 'D') return <MinusCircle size={16} className="text-zinc-400" />;
  return <div className="w-4 h-4 rounded-full border border-zinc-300 dark:border-zinc-700"></div>;
};

const WorldCup = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('standings');
  const [activeGroup, setActiveGroup] = useState('A');
  const t = wcDict[lang] || wcDict['en'];
  
  const containerRef = useRef();

  useGSAP(() => {
    // Scroll-triggered entrance for the dashboard cards
    gsap.from('.dashboard-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none" // Only play once when scrolled into view
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  useGSAP(() => {
    // Dynamic stagger animation when switching groups
    if (activeTab === 'standings') {
      gsap.fromTo('.team-row', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'back.out(1.2)', overwrite: true }
      );
    }
  }, { scope: containerRef, dependencies: [activeGroup, activeTab] });

  return (
    <section id="worldcup" className="py-24 px-6 bg-zinc-50 dark:bg-[#09090b] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Emblem */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <img 
            src="/world-cup-emblem.png" 
            alt="World Cup 2026 Emblem" 
            className="w-32 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-2">
              {t.title}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
              <button 
                onClick={() => setActiveTab('info')}
                aria-label={`Tab: ${t.subtitle.split(',')[0]}`}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm hover:-translate-y-1 ${activeTab === 'info' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                {t.subtitle.split(',')[0]}
              </button>
              <button 
                onClick={() => setActiveTab('standings')}
                aria-label={`Tab: ${t.standings}`}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm hover:-translate-y-1 ${activeTab === 'standings' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                {t.standings}
              </button>
              <button 
                onClick={() => setActiveTab('stats')}
                aria-label={`Tab: ${t.stats}`}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm hover:-translate-y-1 ${activeTab === 'stats' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                {t.stats}
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid / Tabs Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 min-h-[400px]">
          
          {/* General Info Tab */}
          {activeTab === 'info' && (
            <div className="dashboard-card xl:col-span-3 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                Piala Dunia FIFA 2026 akan menjadi edisi ke-23 dari Piala Dunia FIFA, turnamen sepak bola internasional empat tahunan yang diikuti oleh tim nasional pria anggota FIFA. Turnamen ini akan diselenggarakan secara bersama oleh 16 kota di tiga negara Amerika Utara: Kanada, Meksiko, dan Amerika Serikat.
              </p>
            </div>
          )}

          {/* Standings Table Tab */}
          {activeTab === 'standings' && (
          <div className="dashboard-card xl:col-span-3 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl overflow-hidden relative group">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 border-b border-zinc-100 dark:border-zinc-800 pb-6">
              <div className="flex items-center space-x-3">
                <Trophy className="text-orange-500" />
                <h3 className="text-2xl font-bold">{t.standings} - {t.group.split(' ')[0]} {activeGroup}</h3>
              </div>
              
              {/* Group Selector UI */}
              <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 md:pb-0 px-1" role="tablist">
                {Object.keys(allGroups).map(group => (
                  <button
                    key={group}
                    onClick={() => setActiveGroup(group)}
                    aria-label={`Select Group ${group}`}
                    role="tab"
                    aria-selected={activeGroup === group}
                    className={`flex-shrink-0 w-11 h-11 rounded-full font-bold transition-all shadow-sm flex items-center justify-center ${activeGroup === group ? 'bg-orange-500 text-white hover:bg-orange-600 scale-110 shadow-orange-500/30 shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="overflow-x-auto custom-scrollbar pb-4">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-sm font-bold text-zinc-500">
                    <th className="py-4 pl-4">{t.team}</th>
                    <th className="py-4 text-center">{t.p}</th>
                    <th className="py-4 text-center">{t.w}</th>
                    <th className="py-4 text-center">{t.d}</th>
                    <th className="py-4 text-center">{t.l}</th>
                    <th className="py-4 text-center">{t.gf}</th>
                    <th className="py-4 text-center">{t.ga}</th>
                    <th className="py-4 text-center">{t.gd}</th>
                    <th className="py-4 text-center text-orange-500">{t.pts}</th>
                    <th className="py-4 text-center">{t.last5}</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {allGroups[activeGroup].map((team, idx) => (
                    <tr key={idx} className="team-row border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-default">
                      <td className="py-4 pl-4 flex items-center space-x-3">
                        <span className="text-zinc-400 w-4 text-center">{team.rank}</span>
                        <div className={`w-1 h-8 rounded-full ${idx < 2 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                        <span className="text-xl">{team.flag}</span>
                        <span className="font-bold text-base">{team.name}</span>
                      </td>
                      <td className="py-4 text-center text-zinc-500">{team.p}</td>
                      <td className="py-4 text-center">{team.w}</td>
                      <td className="py-4 text-center">{team.d}</td>
                      <td className="py-4 text-center">{team.l}</td>
                      <td className="py-4 text-center">{team.gf}</td>
                      <td className="py-4 text-center">{team.ga}</td>
                      <td className="py-4 text-center">{team.gd}</td>
                      <td className="py-4 text-center font-black text-orange-500 text-lg">{team.pts}</td>
                      <td className="py-4">
                        <div className="flex items-center justify-center space-x-1.5">
                          {team.form.map((f, i) => <FormIcon key={i} result={f} />)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center space-x-6 text-xs text-zinc-500 font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Maju ke babak berikutnya</span>
              </div>
            </div>
          </div>
          )}

          {/* Statistics Leaders Tab */}
          {activeTab === 'stats' && (
          <div className="dashboard-card xl:col-span-3 max-w-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl relative group">
            <div className="flex items-center space-x-3 mb-6">
              <Activity className="text-orange-500" />
              <h3 className="text-2xl font-bold">{t.stats}</h3>
            </div>

            <div className="flex space-x-6 border-b border-zinc-200 dark:border-zinc-800 mb-4 pb-2">
              <button className="text-orange-500 font-bold border-b-2 border-orange-500 pb-2 -mb-[10px]">{t.goals}</button>
              <button className="text-zinc-500 font-medium hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">Assist</button>
            </div>

            <div className="flex justify-between text-xs font-bold text-zinc-500 mb-4 px-2">
              <span>{t.player}</span>
              <span>{t.goals}</span>
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
              {topScorersData.map((player, idx) => (
                <div key={idx} className="team-row flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <span className="text-zinc-400 font-medium w-4">{player.rank}</span>
                    <img src={player.img} alt={player.name} className="w-10 h-10 rounded-full shadow-sm" />
                    <div>
                      <h4 className="font-bold text-sm">{player.name}</h4>
                      <p className="text-xs text-zinc-500 flex items-center space-x-1">
                        <span>{player.flag}</span>
                        <span>{player.country}</span>
                      </p>
                    </div>
                  </div>
                  <span className="font-black text-lg text-zinc-800 dark:text-zinc-200">{player.goals}</span>
                </div>
              ))}
            </div>

            <button aria-label="Lihat semua statistik" className="w-full mt-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 font-bold text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Lihat semua statistik
            </button>
          </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default WorldCup;
