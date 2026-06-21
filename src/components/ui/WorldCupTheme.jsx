import React from 'react';

const SoccerBallSVG = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112.5 125l-21 68.3-71.8-54.8 19.3-64.8c24.4 12.3 45.9 29.8 63.5 51.3zm-104.7-61l-14.8 77.2-76 1.7L152 69.3c31.1-13.8 65.5-21.3 101-21.3 15.6 0 30.9 1.7 45.8 4.7zm-147.2 24.1l26.6 60.1-41.2 59.8-70.3-25C51 143.5 76.5 110.8 116.6 88.1zM34.9 256c0-26.6 4.7-52.1 13.1-75.9l75.4 26.8 5.6 77.3-63.1 53C45 311 34.9 284.3 34.9 256zm50.6 122.9l69.7-58.5 61.1 36.4-23.7 65.9c-41.4-9.3-77-32.9-107.1-63.8zm114.5 73.1l23.7-65.9 74.8 5.4-22 75.3c-24.3 5.4-49.6 8.2-75.5 8.2-22.1 0-43.6-2.9-64.2-8.3l63.2-14.7zm134.1-17.7l15.7-77.5 58.7-37.4 28.5 70c-26 31-59.5 55.4-98.3 66.8l-4.6-21.9zM477.1 256c0 23.9-3.9 46.9-11 68.5l-33.1-81.2-50.6-43.8 24.3-66.2c31 29 50.4 69.5 50.4 114.3z"/>
  </svg>
);

export const WorldCupTheme = () => {
  return (
    <>
      {/* North America Colors Glow in Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-between opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000">
         {/* Mexico Green */}
         <div className="absolute w-[50vw] h-[50vw] rounded-full bg-emerald-500/30 blur-[120px] -top-1/4 -left-1/4 animate-pulse" style={{ animationDuration: '4s' }}></div>
         {/* USA Blue */}
         <div className="absolute w-[50vw] h-[50vw] rounded-full bg-blue-500/30 blur-[120px] -bottom-1/4 -right-1/4 animate-pulse" style={{ animationDuration: '6s' }}></div>
         {/* Canada Red */}
         <div className="absolute w-[60vw] h-[60vw] rounded-full bg-red-500/20 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Floating Soccer Balls */}
      <div className="fixed top-32 -left-16 lg:left-10 z-[5] opacity-20 dark:opacity-30 pointer-events-none transition-opacity duration-300">
        <div className="animate-bounce" style={{ animationDuration: '3s' }}>
          <SoccerBallSVG className="w-32 h-32 text-zinc-800 dark:text-zinc-200 animate-[spin_8s_linear_infinite]" />
        </div>
      </div>

      <div className="fixed bottom-32 -right-16 lg:right-10 z-[5] opacity-20 dark:opacity-30 pointer-events-none transition-opacity duration-300">
        <div className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <SoccerBallSVG className="w-40 h-40 text-zinc-800 dark:text-zinc-200 animate-[spin_10s_linear_infinite_reverse]" />
        </div>
      </div>

      <div className="fixed top-1/2 right-1/4 z-[5] opacity-10 dark:opacity-20 pointer-events-none scale-50 hidden md:block">
        <div className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
          <SoccerBallSVG className="w-24 h-24 text-zinc-800 dark:text-zinc-200 animate-[spin_5s_linear_infinite]" />
        </div>
      </div>

      {/* FIFA 2026 Floating Badge */}
      <div className="fixed bottom-6 left-6 z-[60] hidden md:flex flex-col items-center bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl px-4 py-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-110 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 group cursor-default">
         <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Road to</p>
         <h4 className="text-xl font-black bg-gradient-to-r from-emerald-500 via-red-500 to-blue-500 bg-clip-text text-transparent group-hover:animate-pulse">WORLD CUP 26</h4>
         <div className="flex space-x-1.5 mt-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-bounce" style={{ animationDelay: '300ms' }}></span>
         </div>
      </div>
    </>
  );
};
