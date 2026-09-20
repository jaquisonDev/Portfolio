import React, { useEffect, useState } from 'react';
import { slidesMeta } from '../data/portfolioData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize, 
  Minimize,
  SlidersHorizontal
} from 'lucide-react';

interface SlideFooterControlsProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const SlideFooterControls: React.FC<SlideFooterControlsProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  onNextSlide,
  onPrevSlide,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        onNextSlide();
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, onNextSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-3 flex flex-col items-center gap-3">
      {/* Thumbnails Quick Switcher (toggleable) */}
      {showThumbnails && (
        <div className="w-full p-2.5 rounded-2xl bg-[#061229]/95 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2 overflow-x-auto">
          {slidesMeta.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-left border transition-all cursor-pointer ${
                currentSlide === index
                  ? 'border-cyan-400 bg-cyan-950/60 text-white shadow-[0_0_12px_rgba(0,210,255,0.3)]'
                  : 'border-slate-800 bg-[#030917] text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-mono text-[#00d2ff] font-bold block">
                0{slide.id}
              </span>
              <span className="text-xs font-semibold truncate block">
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Main Bar */}
      <div className="w-full flex items-center justify-between gap-3 bg-[#050f24]/85 border border-cyan-500/30 rounded-2xl px-4 py-2.5 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.4)]">
        {/* Left Side: Thumbnail drawer button & Play/Pause */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            title="Ver miniaturas das páginas"
            className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              showThumbnails
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Páginas</span>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pausar apresentação automática' : 'Iniciar apresentação automática'}
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Center: Slide Indicators Dots and Prev/Next */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPrevSlide}
            disabled={currentSlide === 0}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-cyan-950/40 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSelectSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-7 h-2.5 bg-[#00d2ff] shadow-[0_0_10px_#00d2ff]'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Página ${idx + 1}: ${slidesMeta[idx].label}`}
              />
            ))}
          </div>

          <button
            onClick={onNextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-cyan-950/40 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Page Counter and Fullscreen */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-300 hidden sm:inline">
            <span className="text-[#00d2ff] font-bold">{currentSlide + 1}</span> de {totalSlides}
          </span>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Sair da tela cheia' : 'Apresentação em tela cheia'}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
