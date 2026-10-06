import React, { useState, useRef } from 'react';
import { 
  Trophy, 
  Activity, 
  CheckCircle2, 
  XCircle, 
  MinusCircle, 
  ZoomIn, 
  Play, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Award, 
  ChevronRight, 
  X, 
  Flame,
  ShieldCheck,
  Star
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const wcDict = {
  id: { 
    title: 'Piala Dunia FIFA 2026', 
    subtitle: 'Hasil Final, Fase Gugur, Klasemen, Statistik',
    finalTab: 'Hasil Final & Juara',
    standings: 'Klasemen', 
    stats: 'Pemimpin statistik', 
    knockout: 'Fase Gugur', 
    info: 'Informasi umum',
    championTitle: 'SPANYOL JUARA DUNIA 2026',
    championSub: 'Spanyol resmi menjuarai Piala Dunia FIFA 2026 setelah menaklukkan Argentina 1-0 di partai Final (AET)!',
    finalLabel: 'Final',
    spain: 'Spanyol',
    argentina: 'Argentina',
    aet: 'AET',
    dateLabel: '20/7',
    allTimesWIB: 'Semua waktu dalam Waktu Indonesia Barat',
    matchHighlight: 'Cuplikan Pertandingan',
    videoDuration: '2:49',
    matchSummary: 'Ringkasan Pertandingan',
    matchStats: 'Statistik Pertandingan',
    possession: 'Penguasaan Bola',
    shotsOnTarget: 'Tembakan ke Gawang',
    totalShots: 'Total Tembakan',
    passAccuracy: 'Akurasi Umpan',
    fouls: 'Pelanggaran',
    corners: 'Sepak Pojok',
    yellowCards: 'Kartu Kuning',
    redCards: 'Kartu Merah',
    venue: 'MetLife Stadium, New York / New Jersey',
    goalsTimeline: 'Momen Penting Pertandingan',
    awardsTitle: 'Penghargaan Resmi Turnamen',
    goldenBall: 'Pemain Terbaik (Golden Ball)',
    goldenBoot: 'Top Skor (Golden Boot)',
    goldenGlove: 'Kiper Terbaik (Golden Glove)',
    youngPlayer: 'Pemain Muda Terbaik',
    team: 'Tim', p: 'T', w: 'M', d: 'S', l: 'K', gf: 'GM', ga: 'GK', gd: 'SG', pts: 'Poin', last5: '5 Terakhir', goals: 'Gol', player: 'Pemain', group: 'Grup'
  },
  en: { 
    title: 'FIFA World Cup 2026', 
    subtitle: 'Final Results, Knockout, Standings, Statistics',
    finalTab: 'Final & Champion',
    standings: 'Standings', 
    stats: 'Stat Leaders', 
    knockout: 'Knockout Stage', 
    info: 'General Info',
    championTitle: 'SPAIN WORLD CUP 2026 CHAMPION',
    championSub: 'Spain claims their 2nd World Cup title after defeating Argentina 1-0 in extra time (AET)!',
    finalLabel: 'Final',
    spain: 'Spain',
    argentina: 'Argentina',
    aet: 'AET',
    dateLabel: '20/7',
    allTimesWIB: 'All times in Western Indonesia Time (WIB)',
    matchHighlight: 'Match Highlights',
    videoDuration: '2:49',
    matchSummary: 'Match Summary',
    matchStats: 'Match Statistics',
    possession: 'Ball Possession',
    shotsOnTarget: 'Shots on Target',
    totalShots: 'Total Shots',
    passAccuracy: 'Passing Accuracy',
    fouls: 'Fouls',
    corners: 'Corner Kicks',
    yellowCards: 'Yellow Cards',
    redCards: 'Red Cards',
    venue: 'MetLife Stadium, New York / New Jersey',
    goalsTimeline: 'Key Match Moments',
    awardsTitle: 'Official Tournament Awards',
    goldenBall: 'Golden Ball (Best Player)',
    goldenBoot: 'Golden Boot (Top Scorer)',
    goldenGlove: 'Golden Glove (Best Goalkeeper)',
    youngPlayer: 'Best Young Player',
    team: 'Team', p: 'P', w: 'W', d: 'D', l: 'L', gf: 'GF', ga: 'GA', gd: 'GD', pts: 'Pts', last5: 'Last 5', goals: 'Goals', player: 'Player', group: 'Group'
  },
  es: { 
    title: 'Copa Mundial de la FIFA 2026', 
    subtitle: 'Resultado Final, Eliminatorias, Clasificación, Estadísticas',
    finalTab: 'Final y Campeón',
    standings: 'Clasificación', 
    stats: 'Líderes de Estadísticas', 
    knockout: 'Fase Eliminatoria', 
    info: 'Información General',
    championTitle: '¡ESPAÑA CAMPEÓN DEL MUNDO 2026!',
    championSub: '¡España conquista su 2ª Copa del Mundo tras vencer a Argentina 1-0 en la prórroga (AET)!',
    finalLabel: 'Final',
    spain: 'España',
    argentina: 'Argentina',
    aet: 'T.E.',
    dateLabel: '20/7',
    allTimesWIB: 'Todas las horas en Hora de Indonesia Occidental (WIB)',
    matchHighlight: 'Resumen del Partido',
    videoDuration: '2:49',
    matchSummary: 'Resumen del Partido',
    matchStats: 'Estadísticas del Partido',
    possession: 'Posesión del Balón',
    shotsOnTarget: 'Tiros a Puerta',
    totalShots: 'Tiros Totales',
    passAccuracy: 'Precisión de Pases',
    fouls: 'Faltas',
    corners: 'Córners',
    yellowCards: 'Tarjetas Amarillas',
    redCards: 'Tarjetas Rojas',
    venue: 'MetLife Stadium, Nueva York / Nueva Jersey',
    goalsTimeline: 'Goles y Momentos Clave',
    awardsTitle: 'Premios Oficiales del Torneo',
    goldenBall: 'Balón de Oro (Mejor Jugador)',
    goldenBoot: 'Bota de Oro (Máximo Goleador)',
    goldenGlove: 'Guante de Oro (Mejor Portero)',
    youngPlayer: 'Mejor Jugador Joven',
    team: 'Equipo', p: 'PJ', w: 'G', d: 'E', l: 'P', gf: 'GF', ga: 'GC', gd: 'DG', pts: 'Pts', last5: 'Últimos 5', goals: 'Goles', player: 'Jugador', group: 'Grupo'
  },
  ms: { 
    title: 'Piala Dunia FIFA 2026', 
    subtitle: 'Keputusan Final, Kalah Mati, Kedudukan, Statistik',
    finalTab: 'Keputusan Final & Juara',
    standings: 'Kedudukan', 
    stats: 'Pemimpin Statistik', 
    knockout: 'Peringkat Kalah Mati', 
    info: 'Maklumat Umum',
    championTitle: 'SEPANYOL JUARA DUNIA 2026',
    championSub: 'Sepanyol merangkul kejuaraan dunia ke-2 selepas menewaskan Argentina 1-0 dalam Masa Tambahan (AET)!',
    finalLabel: 'Final',
    spain: 'Sepanyol',
    argentina: 'Argentina',
    aet: 'AET',
    dateLabel: '20/7',
    allTimesWIB: 'Semua waktu dalam Waktu Indonesia Barat',
    matchHighlight: 'Sorotan Perlawanan',
    videoDuration: '2:49',
    matchSummary: 'Ringkasan Perlawanan',
    matchStats: 'Statistik Perlawanan',
    possession: 'Penguasaan Bola',
    shotsOnTarget: 'Tembakan Tepat',
    totalShots: 'Jumlah Tembakan',
    passAccuracy: 'Ketepatan Hantaran',
    fouls: 'Faul',
    corners: 'Sepakan Sudut',
    yellowCards: 'Kad Kuning',
    redCards: 'Kad Merah',
    venue: 'MetLife Stadium, New York / New Jersey',
    goalsTimeline: 'Gol & Detik Penting',
    awardsTitle: 'Anugerah Rasmi Kejohanan',
    goldenBall: 'Bola Emas (Pemain Terbaik)',
    goldenBoot: 'Kasut Emas (Penjaring Terbanyak)',
    goldenGlove: 'Sarung Tangan Emas (Penjaga Gol Terbaik)',
    youngPlayer: 'Pemain Muda Terbaik',
    team: 'Pasukan', p: 'P', w: 'M', d: 'S', l: 'K', gf: 'JG', ga: 'GB', gd: 'PG', pts: 'Mata', last5: '5 Terakhir', goals: 'Gol', player: 'Pemain', group: 'Kumpulan'
  },
  ar: { 
    title: 'كأس العالم FIFA 2026', 
    subtitle: 'النتيجة النهائية، خروج المغلوب، الترتيب، الإحصائيات',
    finalTab: 'النهائي والبطل',
    standings: 'الترتيب', 
    stats: 'قادة الإحصائيات', 
    knockout: 'خروج المغلوب', 
    info: 'معلومات عامة',
    championTitle: 'إسبانيا بطل كأس العالم 2026',
    championSub: 'إسبانيا تفوز بلقب كأس العالم الثاني بعد الفوز على الأرجنتين 1-0 في الوقت الإضافي!',
    finalLabel: 'النهائي',
    spain: 'إسبانيا',
    argentina: 'الأرجنتين',
    aet: 'ش.إ',
    dateLabel: '20/7',
    allTimesWIB: 'جميع الأوقات بتوقيت غرب إندونيسيا (WIB)',
    matchHighlight: 'ملخص المباراة',
    videoDuration: '2:49',
    matchSummary: 'ملخص المباراة',
    matchStats: 'إحصائيات المباراة',
    possession: 'الاستحواذ',
    shotsOnTarget: 'التسديدات على المرمى',
    totalShots: 'إجمالي التسديدات',
    passAccuracy: 'دقة التمرير',
    fouls: 'الأخطاء',
    corners: 'الضربات الركنية',
    yellowCards: 'بطاقات صفراء',
    redCards: 'بطاقات حمراء',
    venue: 'ملعب ميتلايف، نيويورك / نيو جيرسي',
    goalsTimeline: 'الأهداف واللحظات الحاسمة',
    awardsTitle: 'جوائز البطولة الرسمية',
    goldenBall: 'الكرة الذهبية (أفضل لاعب)',
    goldenBoot: 'الحذاء الذهبي (الهداف)',
    goldenGlove: 'القفاز الذهبي (أفضل حارس)',
    youngPlayer: 'أفضل لاعب شاب',
    team: 'فريق', p: 'ل', w: 'ف', d: 'ت', l: 'خ', gf: 'أ.ل', ga: 'أ.ع', gd: 'ف.أ', pts: 'نقاط', last5: 'آخر 5', goals: 'أهداف', player: 'لاعب', group: 'المجموعة'
  },
  ru: { 
    title: 'Чемпионат мира по футболу 2026', 
    subtitle: 'Финал, Плей-офф, Таблица, Статистика',
    finalTab: 'Финал и Чемпион',
    standings: 'Таблица', 
    stats: 'Лидеры', 
    knockout: 'Плей-офф', 
    info: 'Информация',
    championTitle: 'ИСПАНИЯ — ЧЕМПИОН МИРА 2026',
    championSub: 'Испания завоевала свой второй титул чемпионов мира, победив Аргентину 1:0 в дополнительное время!',
    finalLabel: 'Финал',
    spain: 'Испания',
    argentina: 'Аргентина',
    aet: 'ДВ',
    dateLabel: '20/7',
    allTimesWIB: 'Все время указано по Западно-индонезийскому времени (WIB)',
    matchHighlight: 'Обзор матча',
    videoDuration: '2:49',
    matchSummary: 'Сводка матча',
    matchStats: 'Статистика матча',
    possession: 'Владение мячом',
    shotsOnTarget: 'Удары в створ',
    totalShots: 'Всего ударов',
    passAccuracy: 'Точность передач',
    fouls: 'Фолы',
    corners: 'Угловые',
    yellowCards: 'Желтые карточки',
    redCards: 'Красные карточки',
    venue: 'Стадион Метлайф, Нью-Йорк / Нью-Джерси',
    goalsTimeline: 'Голы и ключевые моменты',
    awardsTitle: 'Официальные награды турнира',
    goldenBall: 'Золотой мяч (Лучший игрок)',
    goldenBoot: 'Золотая бутса (Бомбардир)',
    goldenGlove: 'Золотая перчатка (Вратарь)',
    youngPlayer: 'Лучший молодой игрок',
    team: 'Команда', p: 'И', w: 'В', d: 'Н', l: 'П', gf: 'ЗГ', ga: 'ПГ', gd: 'РГ', pts: 'Очки', last5: 'Последние 5', goals: 'Голы', player: 'Игрок', group: 'Группа'
  },
  hi: { 
    title: 'फीफा विश्व कप 2026', 
    subtitle: 'अंतिम परिणाम, नॉकआउट, अंक तालिका, आंकड़े',
    finalTab: 'फाइनल और चैंपियन',
    standings: 'अंक तालिका', 
    stats: 'शीर्ष खिलाड़ी', 
    knockout: 'नॉकआउट', 
    info: 'सामान्य जानकारी',
    championTitle: 'स्पेन — फीफा विश्व कप 2026 विजेता',
    championSub: 'स्पेन ने अतिरिक्त समय (AET) में अर्जेंटीना को 1-0 से हराकर दूसरा विश्व कप खिताब जीता!',
    finalLabel: 'फाइनल',
    spain: 'स्पेन',
    argentina: 'अर्जेंटीना',
    aet: 'AET',
    dateLabel: '20/7',
    allTimesWIB: 'सभी समय पश्चिमी इंडोनेशिया समय (WIB) में हैं',
    matchHighlight: 'मैच हाइलाइट्स',
    videoDuration: '2:49',
    matchSummary: 'मैच सारांश',
    matchStats: 'मैच आंकड़े',
    possession: 'बॉल पोजेशन',
    shotsOnTarget: 'शॉट्स ऑन टारगेट',
    totalShots: 'कुल शॉट्स',
    passAccuracy: 'पास सटीकता',
    fouls: 'फाउल',
    corners: 'कॉर्नर किक',
    yellowCards: 'पीले कार्ड',
    redCards: 'लाल कार्ड',
    venue: 'मेटलाइफ स्टेडियम, न्यूयॉर्क / न्यू जर्सी',
    goalsTimeline: 'गोल और महत्वपूर्ण क्षण',
    awardsTitle: 'टूर्नामेंट पुरस्कार',
    goldenBall: 'गोल्डन बॉल (सर्वश्रेष्ठ खिलाड़ी)',
    goldenBoot: 'गोल्डन बूट (शीर्ष स्कोरर)',
    goldenGlove: 'गोल्डन ग्लव (सर्वश्रेष्ठ गोलकीपर)',
    youngPlayer: 'सर्वश्रेष्ठ युवा खिलाड़ी',
    team: 'टीम', p: 'P', w: 'W', d: 'D', l: 'L', gf: 'GF', ga: 'GA', gd: 'GD', pts: 'Pts', last5: 'अंतिम 5', goals: 'लक्ष्य', player: 'खिलाड़ी', group: 'समूह'
  },
  zh: { 
    title: '2026 国际足联世界杯', 
    subtitle: '决赛结果, 淘汰赛, 积分榜, 统计数据',
    finalTab: '决赛与冠军',
    standings: '积分榜', 
    stats: '数据榜首', 
    knockout: '淘汰赛阶段', 
    info: '赛事简介',
    championTitle: '西班牙加冕 2026 世界杯冠军',
    championSub: '西班牙加时赛 1-0 战胜阿根廷，荣获队史第二座大力神杯！',
    finalLabel: '决赛',
    spain: '西班牙',
    argentina: '阿根廷',
    aet: '加时',
    dateLabel: '20/7',
    allTimesWIB: '所有时间均为印度尼西亚西部时间 (WIB)',
    matchHighlight: '比赛精彩集锦',
    videoDuration: '2:49',
    matchSummary: '比赛综述',
    matchStats: '比赛技术统计',
    possession: '控球率',
    shotsOnTarget: '射正次数',
    totalShots: '射门总数',
    passAccuracy: '传球成功率',
    fouls: '犯规次数',
    corners: '角球次数',
    yellowCards: '黄牌',
    redCards: '红牌',
    venue: '大都会人寿体育场，纽约/新泽西',
    goalsTimeline: '进球与关键事件',
    awardsTitle: '官方赛事奖项',
    goldenBall: '金球奖 (最佳球员)',
    goldenBoot: '金靴奖 (最佳射手)',
    goldenGlove: '金手套奖 (最佳门将)',
    youngPlayer: '最佳新秀球员',
    team: '球队', p: '场', w: '胜', d: '平', l: '负', gf: '进', ga: '失', gd: '净', pts: '分', last5: '近5场', goals: '进球', player: '球员', group: '组'
  },
  it: { 
    title: 'Coppa del Mondo FIFA 2026', 
    subtitle: 'Risultato Finale, Eliminazione Diretta, Classifiche, Statistiche',
    finalTab: 'Finale e Campione',
    standings: 'Classifica', 
    stats: 'Statistiche', 
    knockout: 'Fase a Eliminazione', 
    info: 'Informazioni',
    championTitle: 'SPAGNA CAMPIONE DEL MONDO 2026',
    championSub: 'La Spagna conquista il suo 2º titolo mondiale battendo l’Argentina 1-0 nei supplementari (AET)!',
    finalLabel: 'Finale',
    spain: 'Spagna',
    argentina: 'Argentina',
    aet: 'DTS',
    dateLabel: '20/7',
    allTimesWIB: 'Tutti gli orari sono espressi in Waktu Indonesia Barat (WIB)',
    matchHighlight: 'Sintesi della Partita',
    videoDuration: '2:49',
    matchSummary: 'Riepilogo Partita',
    matchStats: 'Statistiche Partita',
    possession: 'Possesso Palla',
    shotsOnTarget: 'Tiri nello Specchio',
    totalShots: 'Tiri Totali',
    passAccuracy: 'Precisione Passaggi',
    fouls: 'Falli',
    corners: 'Calci d\'Angolo',
    yellowCards: 'Cartellini Gialli',
    redCards: 'Cartellini Rossi',
    venue: 'MetLife Stadium, New York / New Jersey',
    goalsTimeline: 'Gol ed Eventi Chiave',
    awardsTitle: 'Premi Ufficiali del Torneo',
    goldenBall: 'Pallone d\'Oro (Miglior Giocatore)',
    goldenBoot: 'Scarpa d\'Oro (Capocannoniere)',
    goldenGlove: 'Guanto d\'Oro (Miglior Portiere)',
    youngPlayer: 'Miglior Giovane',
    team: 'Squadra', p: 'G', w: 'V', d: 'P', l: 'S', gf: 'GF', ga: 'GS', gd: 'DR', pts: 'Pti', last5: 'Ultime 5', goals: 'Gol', player: 'Giocatore', group: 'Gruppo'
  }
};

const allGroups = {
  A: [
    { rank: 1, name: 'Meksiko', flag: '🇲🇽', p: 3, w: 2, d: 1, l: 0, gf: 4, ga: 1, gd: 3, pts: 7, form: ['D', 'W', 'W', '-', '-'] },
    { rank: 2, name: 'Afrika Selatan', flag: '🇿🇦', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3, gd: 0, pts: 4, form: ['W', 'L', 'D', '-', '-'] },
    { rank: 3, name: 'Republik Korea', flag: '🇰🇷', p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 4, gd: -1, pts: 3, form: ['L', 'W', 'L', '-', '-'] },
    { rank: 4, name: 'Ceko', flag: '🇨🇿', p: 3, w: 0, d: 2, l: 1, gf: 3, ga: 5, gd: -2, pts: 2, form: ['D', 'D', 'L', '-', '-'] }
  ],
  B: [
    { rank: 1, name: 'Swiss', flag: '🇨🇭', p: 3, w: 2, d: 1, l: 0, gf: 7, ga: 2, gd: 5, pts: 7, form: ['W', 'W', 'D', '-', '-'] },
    { rank: 2, name: 'Kanada', flag: '🇨🇦', p: 3, w: 1, d: 2, l: 0, gf: 8, ga: 2, gd: 6, pts: 5, form: ['D', 'W', 'D', '-', '-'] },
    { rank: 3, name: 'Bosnia & Herzegovina', flag: '🇧🇦', p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 6, gd: -2, pts: 4, form: ['W', 'L', 'D', '-', '-'] },
    { rank: 4, name: 'Qatar', flag: '🇶🇦', p: 3, w: 0, d: 0, l: 3, gf: 2, ga: 11, gd: -9, pts: 0, form: ['L', 'L', 'L', '-', '-'] }
  ],
  C: [
    { rank: 1, name: 'Brasil', flag: '🇧🇷', p: 3, w: 2, d: 1, l: 0, gf: 7, ga: 1, gd: 6, pts: 7, form: ['W', 'W', 'D', '-', '-'] },
    { rank: 2, name: 'Maroko', flag: '🇲🇦', p: 3, w: 2, d: 1, l: 0, gf: 4, ga: 1, gd: 3, pts: 7, form: ['W', 'D', 'W', '-', '-'] },
    { rank: 3, name: 'Skotlandia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', p: 3, w: 1, d: 0, l: 2, gf: 1, ga: 4, gd: -3, pts: 3, form: ['L', 'L', 'W', '-', '-'] },
    { rank: 4, name: 'Haiti', flag: '🇭🇹', p: 3, w: 0, d: 0, l: 3, gf: 0, ga: 6, gd: -6, pts: 0, form: ['L', 'L', 'L', '-', '-'] }
  ],
  D: [
    { rank: 1, name: 'AS', flag: '🇺🇸', p: 3, w: 3, d: 0, l: 0, gf: 8, ga: 1, gd: 7, pts: 9, form: ['W', 'W', 'W', '-', '-'] },
    { rank: 2, name: 'Australia', flag: '🇦🇺', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3, gd: 0, pts: 4, form: ['D', 'L', 'W', '-', '-'] },
    { rank: 3, name: 'Paraguay', flag: '🇵🇾', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 5, gd: -2, pts: 4, form: ['D', 'W', 'L', '-', '-'] },
    { rank: 4, name: 'Turki', flag: '🇹🇷', p: 3, w: 0, d: 0, l: 3, gf: 0, ga: 5, gd: -5, pts: 0, form: ['L', 'L', 'L', '-', '-'] }
  ],
  E: [
    { rank: 1, name: 'Jerman', flag: '🇩🇪', p: 3, w: 3, d: 0, l: 0, gf: 12, ga: 3, gd: 9, pts: 9, form: ['W', 'W', 'W', '-', '-'] },
    { rank: 2, name: 'Pantai Gading', flag: '🇨🇮', p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 6, form: ['W', 'L', 'W', '-', '-'] },
    { rank: 3, name: 'Ekuador', flag: '🇪🇨', p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 4, gd: -3, pts: 1, form: ['L', 'D', 'L', '-', '-'] },
    { rank: 4, name: 'Curaçao', flag: '🇨🇼', p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 10, gd: -8, pts: 1, form: ['L', 'L', 'D', '-', '-'] }
  ],
  F: [
    { rank: 1, name: 'Belanda', flag: '🇳🇱', p: 3, w: 2, d: 1, l: 0, gf: 9, ga: 3, gd: 6, pts: 7, form: ['W', 'W', 'D', '-', '-'] },
    { rank: 2, name: 'Jepang', flag: '🇯🇵', p: 3, w: 2, d: 1, l: 0, gf: 8, ga: 3, gd: 5, pts: 7, form: ['W', 'D', 'W', '-', '-'] },
    { rank: 3, name: 'Swedia', flag: '🇸🇪', p: 3, w: 1, d: 0, l: 2, gf: 7, ga: 8, gd: -1, pts: 3, form: ['L', 'L', 'W', '-', '-'] },
    { rank: 4, name: 'Tunisia', flag: '🇹🇳', p: 3, w: 0, d: 0, l: 3, gf: 2, ga: 12, gd: -10, pts: 0, form: ['L', 'L', 'L', '-', '-'] }
  ],
  G: [
    { rank: 1, name: 'Belgia', flag: '🇧🇪', p: 3, w: 1, d: 2, l: 0, gf: 4, ga: 2, gd: 2, pts: 5, form: ['D', 'W', 'D', '-', '-'] },
    { rank: 2, name: 'Mesir', flag: '🇪🇬', p: 3, w: 1, d: 2, l: 0, gf: 4, ga: 3, gd: 1, pts: 5, form: ['D', 'D', 'W', '-', '-'] },
    { rank: 3, name: 'IR Iran', flag: '🇮🇷', p: 3, w: 0, d: 3, l: 0, gf: 4, ga: 4, gd: 0, pts: 3, form: ['D', 'D', 'D', '-', '-'] },
    { rank: 4, name: 'Selandia Baru', flag: '🇳🇿', p: 3, w: 0, d: 1, l: 2, gf: 4, ga: 7, gd: -3, pts: 1, form: ['L', 'L', 'D', '-', '-'] }
  ],
  H: [
    { rank: 1, name: 'Spanyol', flag: '🇪🇸', p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 1, gd: 5, pts: 7, form: ['W', 'W', 'D', '-', '-'] },
    { rank: 2, name: 'Tanjung Verde', flag: '🇨🇻', p: 3, w: 1, d: 2, l: 0, gf: 2, ga: 1, gd: 1, pts: 5, form: ['D', 'D', 'W', '-', '-'] },
    { rank: 3, name: 'Uruguay', flag: '🇺🇾', p: 3, w: 0, d: 2, l: 1, gf: 2, ga: 4, gd: -2, pts: 2, form: ['L', 'D', 'D', '-', '-'] },
    { rank: 4, name: 'Arab Saudi', flag: '🇸🇦', p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 6, gd: -4, pts: 1, form: ['L', 'L', 'D', '-', '-'] }
  ],
  I: [
    { rank: 1, name: 'Prancis', flag: '🇫🇷', p: 3, w: 2, d: 1, l: 0, gf: 5, ga: 1, gd: 4, pts: 7, form: ['D', 'W', 'W', '-', '-'] },
    { rank: 2, name: 'Norwegia', flag: '🇳🇴', p: 3, w: 2, d: 0, l: 1, gf: 6, ga: 3, gd: 3, pts: 6, form: ['L', 'W', 'W', '-', '-'] },
    { rank: 3, name: 'Senegal', flag: '🇸🇳', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 4, gd: -1, pts: 4, form: ['D', 'L', 'W', '-', '-'] },
    { rank: 4, name: 'Irak', flag: '🇮🇶', p: 3, w: 0, d: 0, l: 3, gf: 2, ga: 8, gd: -6, pts: 0, form: ['L', 'L', 'L', '-', '-'] }
  ],
  J: [
    { rank: 1, name: 'Inggris', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', p: 3, w: 3, d: 0, l: 0, gf: 7, ga: 1, gd: 6, pts: 9, form: ['W', 'W', 'W', '-', '-'] },
    { rank: 2, name: 'Nigeria', flag: '🇳🇬', p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 2, gd: 3, pts: 6, form: ['W', 'L', 'W', '-', '-'] },
    { rank: 3, name: 'Jamaika', flag: '🇯🇲', p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 5, gd: -4, pts: 1, form: ['L', 'D', 'L', '-', '-'] },
    { rank: 4, name: 'Oman', flag: '🇴🇲', p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 6, gd: -5, pts: 1, form: ['L', 'L', 'D', '-', '-'] }
  ],
  K: [
    { rank: 1, name: 'Portugal', flag: '🇵🇹', p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 1, gd: 5, pts: 7, form: ['W', 'W', 'D', '-', '-'] },
    { rank: 2, name: 'Kolombia', flag: '🇨🇴', p: 3, w: 1, d: 2, l: 0, gf: 4, ga: 3, gd: 1, pts: 5, form: ['D', 'D', 'W', '-', '-'] },
    { rank: 3, name: 'Kroasia', flag: '🇭🇷', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 4, gd: -1, pts: 4, form: ['D', 'L', 'W', '-', '-'] },
    { rank: 4, name: 'Fiji', flag: '🇫🇯', p: 3, w: 0, d: 0, l: 3, gf: 0, ga: 5, gd: -5, pts: 0, form: ['L', 'L', 'L', '-', '-'] }
  ],
  L: [
    { rank: 1, name: 'Argentina', flag: '🇦🇷', p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 1, gd: 5, pts: 7, form: ['D', 'W', 'W', '-', '-'] },
    { rank: 2, name: 'Mali', flag: '🇲🇱', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3, gd: 0, pts: 4, form: ['D', 'W', 'L', '-', '-'] },
    { rank: 3, name: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', p: 3, w: 0, d: 2, l: 1, gf: 2, ga: 4, gd: -2, pts: 2, form: ['D', 'D', 'L', '-', '-'] },
    { rank: 4, name: 'Yordania', flag: '🇯🇴', p: 3, w: 0, d: 2, l: 1, gf: 2, ga: 5, gd: -3, pts: 2, form: ['D', 'L', 'D', '-', '-'] }
  ]
};

const topScorersData = [
  { rank: 1, name: 'Kylian Mbappé', country: 'Prancis', flag: '🇫🇷', goals: 6, img: 'https://ui-avatars.com/api/?name=Kylian+Mbappe&background=1e3a8a&color=fff&rounded=true' },
  { rank: 2, name: 'Lionel Messi', country: 'Argentina', flag: '🇦🇷', goals: 5, img: 'https://ui-avatars.com/api/?name=Lionel+Messi&background=38bdf8&color=fff&rounded=true' },
  { rank: 3, name: 'Lamine Yamal', country: 'Spanyol', flag: '🇪🇸', goals: 4, img: 'https://ui-avatars.com/api/?name=Lamine+Yamal&background=dc2626&color=fff&rounded=true', note: 'Golden Ball 🏆' },
  { rank: 3, name: 'Harry Kane', country: 'Inggris', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 4, img: 'https://ui-avatars.com/api/?name=Harry+Kane&background=27272a&color=fff&rounded=true' },
  { rank: 3, name: 'Deniz Undav', country: 'Jerman', flag: '🇩🇪', goals: 4, img: 'https://ui-avatars.com/api/?name=Deniz+Undav&background=27272a&color=fff&rounded=true' },
  { rank: 6, name: 'Vinícius Júnior', country: 'Brasil', flag: '🇧🇷', goals: 3, img: 'https://ui-avatars.com/api/?name=Vinicius+Junior&background=eab308&color=fff&rounded=true' },
  { rank: 6, name: 'Dani Olmo', country: 'Spanyol', flag: '🇪🇸', goals: 3, img: 'https://ui-avatars.com/api/?name=Dani+Olmo&background=dc2626&color=fff&rounded=true', note: 'Final Goal ⚽' },
  { rank: 6, name: 'Jonathan David', country: 'Kanada', flag: '🇨🇦', goals: 3, img: 'https://ui-avatars.com/api/?name=Jonathan+David&background=ef4444&color=fff&rounded=true' }
];

const tournamentAwards = [
  { title: 'Golden Ball (Pemain Terbaik)', player: 'Lamine Yamal', country: 'Spanyol 🇪🇸', desc: '4 Gol, 5 Assist & Penampilan Spektakuler', icon: Trophy, color: 'from-amber-400 to-yellow-600' },
  { title: 'Golden Boot (Top Skor)', player: 'Kylian Mbappé', country: 'Prancis 🇫🇷', desc: '6 Gol dalam 7 Pertandingan', icon: Flame, color: 'from-orange-500 to-red-600' },
  { title: 'Golden Glove (Kiper Terbaik)', player: 'Unai Simón', country: 'Spanyol 🇪🇸', desc: '5 Clean Sheets & Pahlawan di Laga Krusial', icon: ShieldCheck, color: 'from-emerald-400 to-teal-600' },
  { title: 'Best Young Player', player: 'Lamine Yamal', country: 'Spanyol 🇪🇸', desc: 'Bintang muda terbaik sepanjang turnamen', icon: Star, color: 'from-blue-400 to-indigo-600' }
];

// Fully populated realistic knockout data leading to Spain 1 - 0 Argentina in the Final!
const knockoutData = {
  r32_l: [
    { id: 'M73', date: '30/6', t1: { name: 'GER', flag: '🇩🇪', score: '3', winner: true }, t2: { name: 'PAR', flag: '🇵🇾', score: '1' } },
    { id: 'M74', date: '1/7', t1: { name: 'FRA', flag: '🇫🇷', score: '2', winner: true }, t2: { name: 'SWE', flag: '🇸🇪', score: '0' } },
    { id: 'M75', date: '29/6', t1: { name: 'RSA', flag: '🇿🇦', score: '1' }, t2: { name: 'CAN', flag: '🇨🇦', score: '2', winner: true } },
    { id: 'M76', date: '30/6', t1: { name: 'NED', flag: '🇳🇱', score: '2', winner: true }, t2: { name: 'MAR', flag: '🇲🇦', score: '1' } },
    { id: 'M77', date: '3/7', t1: { name: 'POR', flag: '🇵🇹', score: '2', winner: true }, t2: { name: 'CRO', flag: '🇭🇷', score: '1' } },
    { id: 'M78', date: '3/7', t1: { name: 'ESP', flag: '🇪🇸', score: '3', winner: true }, t2: { name: 'AUT', flag: '🇦🇹', score: '0' } },
    { id: 'M79', date: '2/7', t1: { name: 'USA', flag: '🇺🇸', score: '2', winner: true }, t2: { name: 'BIH', flag: '🇧🇦', score: '1' } },
    { id: 'M80', date: '2/7', t1: { name: 'BEL', flag: '🇧🇪', score: '2', winner: true }, t2: { name: 'SEN', flag: '🇸🇳', score: '0' } },
  ],
  r16_l: [
    { id: 'M89', date: '5/7', t1: { name: 'GER', flag: '🇩🇪', score: '1' }, t2: { name: 'FRA', flag: '🇫🇷', score: '2', winner: true } },
    { id: 'M90', date: '5/7', t1: { name: 'CAN', flag: '🇨🇦', score: '0' }, t2: { name: 'NED', flag: '🇳🇱', score: '2', winner: true } },
    { id: 'M91', date: '6/7', t1: { name: 'POR', flag: '🇵🇹', score: '1' }, t2: { name: 'ESP', flag: '🇪🇸', score: '2', winner: true } },
    { id: 'M92', date: '6/7', t1: { name: 'USA', flag: '🇺🇸', score: '1' }, t2: { name: 'BEL', flag: '🇧🇪', score: '2', winner: true } },
  ],
  qf_l: [
    { id: 'M97', date: '10/7', t1: { name: 'FRA', flag: '🇫🇷', score: '2', winner: true }, t2: { name: 'NED', flag: '🇳🇱', score: '1' } },
    { id: 'M98', date: '10/7', t1: { name: 'ESP', flag: '🇪🇸', score: '2', winner: true }, t2: { name: 'BEL', flag: '🇧🇪', score: '1' } },
  ],
  sf_l: [
    { id: 'M101', date: '14/7', t1: { name: 'FRA', flag: '🇫🇷', score: '1' }, t2: { name: 'ESP', flag: '🇪🇸', score: '2', winner: true } },
  ],
  
  r32_r: [
    { id: 'M81', date: '30/6', t1: { name: 'BRA', flag: '🇧🇷', score: '3', winner: true }, t2: { name: 'JPN', flag: '🇯🇵', score: '1' } },
    { id: 'M82', date: '1/7', t1: { name: 'CIV', flag: '🇨🇮', score: '1' }, t2: { name: 'NOR', flag: '🇳🇴', score: '2', winner: true } },
    { id: 'M83', date: '1/7', t1: { name: 'MEX', flag: '🇲🇽', score: '2', winner: true }, t2: { name: 'ECU', flag: '🇪🇨', score: '1' } },
    { id: 'M84', date: '1/7', t1: { name: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '3', winner: true }, t2: { name: 'COD', flag: '🇨🇩', score: '0' } },
    { id: 'M85', date: '4/7', t1: { name: 'ARG', flag: '🇦🇷', score: '2', winner: true }, t2: { name: 'CPV', flag: '🇨🇻', score: '0' } },
    { id: 'M86', date: '4/7', t1: { name: 'AUS', flag: '🇦🇺', score: '1', winner: true }, t2: { name: 'EGY', flag: '🇪🇬', score: '0' } },
    { id: 'M87', date: '3/7', t1: { name: 'SUI', flag: '🇨🇭', score: '2', winner: true }, t2: { name: 'ALG', flag: '🇩🇿', score: '1' } },
    { id: 'M88', date: '4/7', t1: { name: 'COL', flag: '🇨🇴', score: '2', winner: true }, t2: { name: 'GHA', flag: '🇬🇭', score: '1' } },
  ],
  r16_r: [
    { id: 'M93', date: '7/7', t1: { name: 'BRA', flag: '🇧🇷', score: '2', winner: true }, t2: { name: 'NOR', flag: '🇳🇴', score: '0' } },
    { id: 'M94', date: '7/7', t1: { name: 'MEX', flag: '🇲🇽', score: '1' }, t2: { name: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '3', winner: true } },
    { id: 'M95', date: '8/7', t1: { name: 'ARG', flag: '🇦🇷', score: '3', winner: true }, t2: { name: 'AUS', flag: '🇦🇺', score: '1' } },
    { id: 'M96', date: '8/7', t1: { name: 'SUI', flag: '🇨🇭', score: '1' }, t2: { name: 'COL', flag: '🇨🇴', score: '2', winner: true } },
  ],
  qf_r: [
    { id: 'M99', date: '11/7', t1: { name: 'BRA', flag: '🇧🇷', score: '1' }, t2: { name: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '2', winner: true } },
    { id: 'M100', date: '11/7', t1: { name: 'ARG', flag: '🇦🇷', score: '2', winner: true }, t2: { name: 'COL', flag: '🇨🇴', score: '0' } },
  ],
  sf_r: [
    { id: 'M102', date: '15/7', t1: { name: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '1' }, t2: { name: 'ARG', flag: '🇦🇷', score: '2', winner: true } },
  ],

  final: [{ 
    id: 'FINAL', 
    date: '20/7/2026', 
    t1: { name: 'ESP', fullName: 'Spanyol', flag: '🇪🇸', score: '1', winner: true, champion: true }, 
    t2: { name: 'ARG', fullName: 'Argentina', flag: '🇦🇷', score: '0', redCard: true },
    status: 'AET'
  }],
  third: [{ 
    id: '3RD', 
    date: '19/7/2026', 
    t1: { name: 'FRA', flag: '🇫🇷', score: '2', winner: true }, 
    t2: { name: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '1' } 
  }]
};

const MatchCard = ({ match, isFinal = false }) => {
  return (
    <div className={`w-36 md:w-44 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 shadow-sm shrink-0 transition-all cursor-default ${
      isFinal 
        ? 'w-52 md:w-64 border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-2 ring-amber-500/40' 
        : 'hover:border-orange-500/50 hover:shadow-md hover:-translate-y-0.5'
    }`}>
      <div className="text-[9px] md:text-[10px] text-zinc-500 dark:text-zinc-400 flex justify-between mb-1.5 font-mono">
        <span className="font-semibold">{match.date}</span>
        <span className={`font-bold ${isFinal ? 'text-amber-500 flex items-center gap-1' : 'text-zinc-400'}`}>
          {isFinal && <Trophy size={11} />} {match.id}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className={`flex justify-between items-center px-2 py-1.5 rounded transition-colors ${
          match.t1.winner 
            ? 'bg-amber-500/10 dark:bg-amber-500/15 font-bold text-zinc-900 dark:text-white' 
            : 'bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-sm">{match.t1.flag}</span>
            <span className="text-[11px] md:text-xs tracking-tight">{match.t1.name}</span>
            {match.t1.champion && <span className="text-[9px] bg-amber-500 text-black font-black px-1 rounded-sm uppercase tracking-tighter">🏆 1ST</span>}
          </div>
          <div className="flex items-center gap-1">
            <span className={`text-[11px] md:text-xs font-mono font-bold ${match.t1.winner ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-400'}`}>
              {match.t1.score !== undefined ? match.t1.score : '-'}
            </span>
            {match.t1.winner && <span className="text-[10px] text-amber-500">◀</span>}
          </div>
        </div>

        <div className={`flex justify-between items-center px-2 py-1.5 rounded transition-colors ${
          match.t2.winner 
            ? 'bg-amber-500/10 dark:bg-amber-500/15 font-bold text-zinc-900 dark:text-white' 
            : 'bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-sm">{match.t2.flag}</span>
            <span className="text-[11px] md:text-xs tracking-tight">{match.t2.name}</span>
            {match.t2.redCard && <span className="w-2.5 h-3.5 bg-red-600 rounded-[2px] shadow-sm inline-block shrink-0" title="Kartu Merah"></span>}
          </div>
          <div className="flex items-center gap-1">
            <span className={`text-[11px] md:text-xs font-mono font-bold ${match.t2.winner ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-400'}`}>
              {match.t2.score !== undefined ? match.t2.score : '-'}
            </span>
            {match.t2.winner && <span className="text-[10px] text-amber-500">◀</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

const FormIcon = ({ result }) => {
  if (result === 'W') return <CheckCircle2 size={16} className="text-emerald-500" />;
  if (result === 'L') return <XCircle size={16} className="text-red-500" />;
  if (result === 'D') return <MinusCircle size={16} className="text-zinc-400" />;
  return <div className="w-4 h-4 rounded-full border border-zinc-300 dark:border-zinc-700"></div>;
};

// Google Search / FIFA Official Style Match Card Component (Matches the user's reference image exactly!)
const GoogleMatchCard = ({ t, onOpenDetails }) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Outer Card with Google / FIFA Dark Aesthetics */}
      <div className="bg-[#1f2024] text-zinc-200 border border-zinc-800/90 rounded-2xl p-4 md:p-5 shadow-2xl transition-all duration-300 hover:border-zinc-700">
        
        {/* Title / Header */}
        <div className="text-sm md:text-base font-semibold text-zinc-300 mb-3 px-1 flex items-center justify-between">
          <span>{t.finalLabel}</span>
          <span className="text-xs font-normal text-zinc-400 bg-zinc-800/80 px-2.5 py-0.5 rounded-full">FIFA World Cup 2026</span>
        </div>

        {/* Inner Match Box */}
        <div className="bg-[#2a2b32] rounded-xl p-3 md:p-4 border border-zinc-700/50 flex flex-col md:flex-row items-stretch justify-between gap-4">
          
          {/* Left Side: Teams & Scores */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-xs text-zinc-400 mb-2.5 font-medium">{t.finalLabel}</div>
            
            {/* Team 1: Spain (Winner) */}
            <div className="flex items-center justify-between py-1.5 group cursor-pointer" onClick={onOpenDetails}>
              <div className="flex items-center gap-3">
                <span className="text-2xl drop-shadow-sm select-none">🇪🇸</span>
                <span className="text-base md:text-lg font-bold text-white tracking-wide">{t.spain}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-black text-white font-mono">1</span>
                <span className="text-xs text-zinc-300">◀</span>
              </div>
            </div>

            {/* Team 2: Argentina (Runner-up) */}
            <div className="flex items-center justify-between py-1.5 group cursor-pointer" onClick={onOpenDetails}>
              <div className="flex items-center gap-3">
                <span className="text-2xl drop-shadow-sm select-none">🇦🇷</span>
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg font-medium text-zinc-300">{t.argentina}</span>
                  <span className="w-2.5 h-3.5 bg-red-600 rounded-[2px] shadow-sm inline-block" title="Kartu Merah (115')"></span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-zinc-400 font-mono">0</span>
                <span className="text-xs text-transparent select-none">◀</span>
              </div>
            </div>
          </div>

          {/* Center Divider */}
          <div className="hidden md:block w-px bg-zinc-700/60 my-1"></div>

          {/* Right Side: AET & Video Highlight Thumbnail */}
          <div className="flex md:flex-col items-center justify-between md:justify-center md:items-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-700/50">
            <div className="text-left md:text-right">
              <div className="text-sm md:text-base font-bold text-zinc-200 uppercase tracking-wider">{t.aet}</div>
              <div className="text-xs text-zinc-400 font-mono">{t.dateLabel}</div>
            </div>

            {/* Video Highlight Thumbnail Button */}
            <button 
              onClick={onOpenDetails}
              aria-label="Tonton Cuplikan Pertandingan"
              className="relative rounded-lg overflow-hidden group w-28 h-16 md:w-32 md:h-18 border border-zinc-600/60 shadow-md hover:scale-105 transition-transform"
            >
              <img 
                src="/spain-world-cup-champion.jpg" 
                alt="Cuplikan Final Spanyol vs Argentina" 
                className="w-full h-full object-cover object-center group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-7 h-7 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={12} fill="white" className="ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                <span>{t.videoDuration}</span>
              </div>
            </button>
          </div>

        </div>

        {/* Footer Note in Indonesian / Localized */}
        <div className="mt-3.5 text-xs text-zinc-400 italic px-1 flex items-center justify-between flex-wrap gap-2">
          <span>{t.allTimesWIB}</span>
          <button 
            onClick={onOpenDetails}
            className="not-italic text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
          >
            <span>{t.matchStats}</span>
            <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};

// Interactive Modal for Match Center, Statistics, Timeline & Highlights
const MatchDetailsModal = ({ isOpen, onClose, t }) => {
  const [selectedTab, setSelectedTab] = useState('summary');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#18181b] text-zinc-100 border border-zinc-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="p-5 md:p-6 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-[#18181b]/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Trophy size={20} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black">{t.title} - Final</h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1">
                <MapPin size={12} /> {t.venue} • 20 Juli 2026
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Tutup Detail Pertandingan"
            className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Score Banner */}
        <div className="p-6 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-[#18181b] border-b border-zinc-800/80">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Spain */}
            <div className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl drop-shadow-md">🇪🇸</span>
              <div>
                <h4 className="font-bold text-lg md:text-xl text-white">{t.spain}</h4>
                <span className="text-[10px] font-black bg-amber-500 text-black px-2 py-0.5 rounded-full uppercase">CHAMPIONS 🏆</span>
              </div>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-black font-mono tracking-tight text-white flex items-center gap-3">
                <span className="text-amber-400">1</span>
                <span className="text-zinc-600">:</span>
                <span className="text-zinc-400">0</span>
              </div>
              <span className="text-xs font-bold text-amber-500 mt-1 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                {t.aet} (120')
              </span>
            </div>

            {/* Argentina */}
            <div className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl drop-shadow-md">🇦🇷</span>
              <div>
                <h4 className="font-bold text-lg md:text-xl text-zinc-300">{t.argentina}</h4>
                <span className="text-[10px] font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full uppercase">Runner-up 🥈</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Subtabs inside Modal */}
        <div className="flex border-b border-zinc-800 px-6 gap-6 text-sm font-semibold">
          <button 
            onClick={() => setSelectedTab('summary')}
            className={`py-3 transition-colors border-b-2 ${selectedTab === 'summary' ? 'border-orange-500 text-orange-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
          >
            {t.matchSummary}
          </button>
          <button 
            onClick={() => setSelectedTab('stats')}
            className={`py-3 transition-colors border-b-2 ${selectedTab === 'stats' ? 'border-orange-500 text-orange-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
          >
            {t.matchStats}
          </button>
          <button 
            onClick={() => setSelectedTab('highlight')}
            className={`py-3 transition-colors border-b-2 ${selectedTab === 'highlight' ? 'border-orange-500 text-orange-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
          >
            {t.matchHighlight}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {selectedTab === 'summary' && (
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">{t.goalsTimeline}</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="font-mono font-bold text-amber-400 text-sm w-12">108' ⚽</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">GOL! Dani Olmo</p>
                      <p className="text-xs text-zinc-400">Assist: Lamine Yamal • Sepakan mendatar akurat menembus gawang Emiliano Martínez</p>
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">ESP 1 - 0 ARG</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="font-mono font-bold text-red-500 text-sm w-12">115' 🟥</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">Kartu Merah: Cristian Romero</p>
                      <p className="text-xs text-zinc-400">Pelanggaran keras terhadap Nico Williams yang sedang melancarkan serangan balik cepat</p>
                    </div>
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded">Kartu Merah</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="font-mono font-bold text-emerald-400 text-sm w-12">120+3' 🏁</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">Peluit Panjang Dibunyikan!</p>
                      <p className="text-xs text-zinc-400">Spanyol resmi menjuarai Piala Dunia FIFA 2026 di MetLife Stadium!</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Juara Dunia 🏆</span>
                  </div>
                </div>
              </div>

              {/* Lineups Brief */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Susunan Pemain Utama</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                    <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                      <span>🇪🇸</span> Spanyol (4-3-3)
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      Unai Simón; Carvajal, Le Normand, Laporte, Cucurella; Rodri, Fabián Ruiz, Dani Olmo; Lamine Yamal, Morata, Nico Williams.
                    </p>
                  </div>
                  <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                    <div className="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
                      <span>🇦🇷</span> Argentina (4-3-3)
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      E. Martínez; Molina, C. Romero (🟥 115'), Otamendi, Tagliafico; De Paul, Enzo Fernández, Mac Allister; Messi, Julián Álvarez, Di María.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'stats' && (
            <div className="space-y-4">
              {[
                { label: t.possession, v1: '58%', v2: '42%', p1: 58, p2: 42 },
                { label: t.totalShots, v1: '15', v2: '9', p1: 62, p2: 38 },
                { label: t.shotsOnTarget, v1: '6', v2: '3', p1: 66, p2: 34 },
                { label: t.passAccuracy, v1: '89%', v2: '82%', p1: 52, p2: 48 },
                { label: t.corners, v1: '7', v2: '3', p1: 70, p2: 30 },
                { label: t.fouls, v1: '11', v2: '18', p1: 38, p2: 62 },
                { label: t.yellowCards, v1: '2', v2: '4', p1: 33, p2: 67 },
                { label: t.redCards, v1: '0', v2: '1', p1: 0, p2: 100 }
              ].map((st, i) => (
                <div key={i} className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-amber-400 font-mono">{st.v1}</span>
                    <span className="text-zinc-300">{st.label}</span>
                    <span className="text-sky-400 font-mono">{st.v2}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden flex">
                    <div className="bg-gradient-to-r from-amber-500 to-red-500 h-full transition-all duration-500" style={{ width: `${st.p1}%` }}></div>
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-full transition-all duration-500" style={{ width: `${st.p2}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'highlight' && (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-zinc-800 shadow-xl group">
                <img 
                  src="/spain-world-cup-champion.jpg" 
                  alt="Sorotan Juara Spanyol" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg animate-pulse">
                      <Play size={20} fill="white" className="ml-1" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-white">Full Match Highlights: Spanyol 1-0 Argentina</h4>
                      <p className="text-xs text-zinc-300">Detik-detik gol krusial Dani Olmo & selebrasi pengangkatan trofi Piala Dunia 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-center">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold transition-colors shadow-lg shadow-orange-500/20"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};

const WorldCup = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('final');
  const [activeGroup, setActiveGroup] = useState('A');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = wcDict[lang] || wcDict['en'];
  
  const containerRef = useRef();

  useGSAP(() => {
    // Scroll-triggered entrance for the dashboard cards
    gsap.from('.dashboard-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
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
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 blur-[120px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Emblem & Champion Showcase Title */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src="/world-cup-emblem.png" 
              alt="World Cup 2026 Emblem" 
              className="relative w-28 md:w-36 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
              <span>Turnamen Selesai • Juara: Spanyol 🇪🇸</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              {t.subtitle}
            </p>

            {/* Tab Navigation Buttons */}
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mt-6">
              <button 
                onClick={() => setActiveTab('final')}
                aria-label={`Tab: ${t.finalTab}`}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 ${activeTab === 'final' ? 'bg-amber-500 text-black shadow-amber-500/30 shadow-lg ring-2 ring-amber-400' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                <Trophy size={14} />
                <span>{t.finalTab}</span>
              </button>

              <button 
                onClick={() => setActiveTab('knockout')}
                aria-label={`Tab: ${t.knockout}`}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 ${activeTab === 'knockout' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                <span>{t.knockout}</span>
              </button>

              <button 
                onClick={() => setActiveTab('standings')}
                aria-label={`Tab: ${t.standings}`}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 ${activeTab === 'standings' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                <span>{t.standings}</span>
              </button>

              <button 
                onClick={() => setActiveTab('stats')}
                aria-label={`Tab: ${t.stats}`}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 ${activeTab === 'stats' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                <span>{t.stats}</span>
              </button>

              <button 
                onClick={() => setActiveTab('info')}
                aria-label={`Tab: ${t.info}`}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 ${activeTab === 'info' ? 'bg-orange-500 text-white shadow-orange-500/30 shadow-lg' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'}`}
              >
                <span>{t.info}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid / Tabs Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 min-h-[420px]">
          
          {/* TAB 1: Hasil Final & Juara (Final Match & Champion Showcase) */}
          {activeTab === 'final' && (
            <div className="dashboard-card xl:col-span-3 space-y-8">
              
              {/* Champion Celebration Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 p-6 md:p-8 text-white shadow-2xl">
                <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
                  <Trophy size={260} />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                    <Trophy size={14} className="text-yellow-300" />
                    <span>CAMPEONES DEL MUNDO 2026</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                    {t.championTitle}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-amber-100 leading-relaxed">
                    {t.championSub}
                  </p>
                </div>
              </div>

              {/* Google FIFA Search-Style Match Card (Directly reflecting the user's reference!) */}
              <div className="py-2">
                <GoogleMatchCard t={t} onOpenDetails={() => setIsModalOpen(true)} />
              </div>

              {/* Tournament Key Highlights & Awards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tournamentAwards.map((aw, i) => {
                  const IconComp = aw.icon;
                  return (
                    <div key={i} className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm hover:border-amber-500/50 hover:shadow-md transition-all">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-r ${aw.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                        <IconComp size={18} />
                      </div>
                      <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{aw.title}</div>
                      <h4 className="text-base font-black text-zinc-900 dark:text-white mt-1">{aw.player}</h4>
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">{aw.country}</p>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">{aw.desc}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 2: Standings Table Tab */}
          {activeTab === 'standings' && (
          <div className="dashboard-card xl:col-span-3 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl overflow-hidden relative group">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 border-b border-zinc-100 dark:border-zinc-800 pb-6">
              <div className="flex items-center space-x-3">
                <Trophy className="text-orange-500" />
                <h3 className="text-2xl font-bold flex flex-col md:flex-row md:items-center gap-2">
                  <span>{t.standings} - {t.group} {activeGroup}</span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                    Klasemen Akhir Fase Grup
                  </span>
                </h3>
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
                <span>Lolos ke Babak 32 Besar (Fase Gugur)</span>
              </div>
            </div>
          </div>
          )}

          {/* TAB 3: Statistics Leaders Tab */}
          {activeTab === 'stats' && (
          <div className="dashboard-card xl:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl">
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
                  <div key={idx} className="team-row flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-[1.01] cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <span className="text-zinc-400 font-medium w-4">{player.rank}</span>
                      <img src={player.img} alt={player.name} className="w-10 h-10 rounded-full shadow-sm" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm">{player.name}</h4>
                          {player.note && (
                            <span className="text-[10px] bg-amber-500/20 text-amber-500 font-bold px-1.5 py-0.5 rounded">
                              {player.note}
                            </span>
                          )}
                        </div>
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
            </div>

            {/* Awards Sidebar */}
            <div className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2.5 mb-6">
                  <Award className="text-amber-500" />
                  <h3 className="text-xl font-bold">{t.awardsTitle}</h3>
                </div>
                
                <div className="space-y-4">
                  {tournamentAwards.map((aw, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase">{aw.title}</div>
                      <div className="text-base font-black text-zinc-900 dark:text-white mt-0.5">{aw.player}</div>
                      <div className="text-xs font-semibold text-amber-500">{aw.country}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center">
                <p className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  Total 104 Pertandingan diselenggarakan dengan sukses di 16 Kota Amerika Utara.
                </p>
              </div>
            </div>
          </div>
          )}

          {/* TAB 4: Knockout Bracket Tab */}
          {activeTab === 'knockout' && (
          <div className="dashboard-card xl:col-span-3 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl relative group min-h-[600px] flex flex-col">
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/50 z-10">
              <div className="flex items-center space-x-3">
                <Trophy className="text-orange-500" />
                <h3 className="text-xl md:text-2xl font-bold flex flex-col md:flex-row md:items-center gap-2">
                  <span>{t.knockout}</span>
                  <span className="text-xs text-amber-600 dark:text-amber-400 font-bold bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                    Hasil Lengkap Babak Gugur • Spanyol Juara 🏆
                  </span>
                </h3>
              </div>
              <div className="flex items-center self-start md:self-auto space-x-2 text-xs font-bold text-zinc-500 bg-zinc-200/50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full">
                <ZoomIn size={14} />
                <span>Pan & Zoom</span>
              </div>
            </div>

            <div className="flex-grow w-full h-[600px] md:h-[700px] cursor-grab active:cursor-grabbing bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px]">
              <TransformWrapper 
                initialScale={window.innerWidth < 768 ? 0.35 : 0.82} 
                minScale={0.1} 
                maxScale={2} 
                centerOnInit={true}
                wheel={{ step: 0.1 }}
                limitToBounds={false}
              >
                <TransformComponent 
                  wrapperStyle={{ width: "100%", height: "100%" }} 
                  contentStyle={{ minWidth: "max-content", minHeight: "max-content", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem" }}
                >
                  
                  {/* Bracket Container - 9 Columns */}
                  <div className="flex items-stretch justify-center gap-6 md:gap-10 select-none">
                    
                    {/* Left Side */}
                    <div className="flex flex-col justify-around gap-4 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Round of 32</div>
                      {knockoutData.r32_l.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    <div className="flex flex-col justify-around gap-8 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Round of 16</div>
                      {knockoutData.r16_l.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    <div className="flex flex-col justify-around gap-16 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Quarter-Finals</div>
                      {knockoutData.qf_l.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    <div className="flex flex-col justify-around gap-32 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Semi-Finals</div>
                      {knockoutData.sf_l.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>

                    {/* Center (Final & Third Place) */}
                    <div className="flex flex-col justify-center items-center gap-10 relative px-4">
                      <div className="text-center">
                        <div className="text-sm font-black text-amber-500 mb-3 tracking-widest uppercase flex items-center justify-center space-x-2 animate-pulse">
                          <Trophy size={18} /> <span>FINAL • METLIFE STADIUM</span> <Trophy size={18} />
                        </div>
                        <MatchCard match={knockoutData.final[0]} isFinal={true} />
                      </div>
                      <div className="text-center mt-6 opacity-90">
                        <div className="text-xs font-bold text-zinc-400 mb-2 uppercase">Perebutan Tempat ke-3</div>
                        <MatchCard match={knockoutData.third[0]} />
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-around gap-32 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Semi-Finals</div>
                      {knockoutData.sf_r.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    <div className="flex flex-col justify-around gap-16 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Quarter-Finals</div>
                      {knockoutData.qf_r.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    <div className="flex flex-col justify-around gap-8 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Round of 16</div>
                      {knockoutData.r16_r.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    <div className="flex flex-col justify-around gap-4 relative">
                      <div className="text-[11px] font-bold text-zinc-400 text-center uppercase tracking-wider mb-2">Round of 32</div>
                      {knockoutData.r32_r.map((m, i) => <MatchCard key={i} match={m} />)}
                    </div>
                    
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
          )}

          {/* TAB 5: General Info Tab */}
          {activeTab === 'info' && (
            <div className="dashboard-card xl:col-span-3 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-amber-500" size={28} />
                <h3 className="text-2xl md:text-3xl font-black">{t.title}</h3>
              </div>

              <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed">
                <p>
                  Piala Dunia FIFA 2026 merupakan edisi ke-23 dari turnamen sepak bola paling bergengsi di dunia. Turnamen akbar ini diselenggarakan secara bersama oleh 16 kota di tiga negara Amerika Utara: <strong>Kanada, Meksiko, dan Amerika Serikat</strong>, dengan format baru yang diikuti oleh 48 tim nasional.
                </p>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-zinc-900 dark:text-zinc-100">
                  <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-2">
                    <Sparkles size={16} /> Spanyol Merengkuh Trofi Juara Dunia 2026
                  </h4>
                  <p className="text-sm">
                    Spanyol berhasil keluar sebagai Juara Dunia setelah menaklukkan juara bertahan Argentina dengan skor 1-0 lewat babak perpanjangan waktu (AET) di partai Final yang berlangsung menegangkan di MetLife Stadium, New York / New Jersey pada 20 Juli 2026.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-bold text-zinc-400 uppercase">Tuan Rumah</div>
                    <div className="text-lg font-bold text-zinc-900 dark:text-white mt-1">Kanada, Meksiko, AS</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-bold text-zinc-400 uppercase">Juara 1 (Champions)</div>
                    <div className="text-lg font-bold text-amber-500 mt-1 flex items-center gap-1.5">
                      <span>🇪🇸</span> Spanyol
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-bold text-zinc-400 uppercase">Runner-up</div>
                    <div className="text-lg font-bold text-sky-400 mt-1 flex items-center gap-1.5">
                      <span>🇦🇷</span> Argentina
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Match Details Interactive Modal */}
      <MatchDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        t={t} 
      />

    </section>
  );
};

export default WorldCup;
