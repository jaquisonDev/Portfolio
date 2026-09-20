import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Deep blue radial glows */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-900/15 blur-[160px]" />
      
      {/* Ambient center subtle light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-950/20 via-cyan-950/15 to-transparent blur-[140px]" />

      {/* Decorative wave lines at bottom matching the slides */}
      <svg
        className="absolute bottom-0 left-0 w-full h-44 sm:h-56 opacity-30 text-cyan-400"
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-40 240 C 240 180, 480 270, 720 220 C 960 170, 1200 250, 1480 190"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path
          d="M-40 210 C 220 260, 520 180, 800 240 C 1080 300, 1280 160, 1480 230"
          stroke="#00d2ff"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
        <path
          d="M-40 270 C 300 200, 600 250, 900 190 C 1200 130, 1360 210, 1480 160"
          stroke="#0284c7"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
};
