import React, { useState } from 'react';
import { developerInfo, slidesMeta } from '../data/portfolioData';
import { 
  ChevronLeft, 
  ChevronRight, 
  MonitorPlay, 
  ScrollText, 
  MessageCircle, 
  Menu, 
  X,
  Share2,
  Check
} from 'lucide-react';

interface NavigationHeaderProps {
  currentSlide: number;
  totalSlides: number;
  viewMode: 'slides' | 'scroll';
  onSelectSlide: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onToggleViewMode: (mode: 'slides' | 'scroll') => void;
  onOpenContact: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentSlide,
  totalSlides,
  viewMode,
  onSelectSlide,
  onNextSlide,
  onPrevSlide,
  onToggleViewMode,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'JaquisonDev - Portfólio Fullstack',
        text: 'Conheça o portfólio de Jaquison Souza - Desenvolvedor Fullstack',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#040814]/90 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectSlide(0)}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-base shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              J
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {developerInfo.brand}
              </span>
              <span className="hidden sm:inline-block ml-1 text-xs text-[#00d2ff] font-medium">
                • Fullstack
              </span>
            </div>
          </button>

          {/* View Mode Switcher pill */}
          <div className="hidden md:flex items-center bg-[#061229] p-1 rounded-xl border border-cyan-500/30 text-xs ml-3">
            <button
              onClick={() => onToggleViewMode('slides')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                viewMode === 'slides'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(0,210,255,0.3)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>Modo Slides</span>
            </button>
            <button
              onClick={() => onToggleViewMode('scroll')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                viewMode === 'scroll'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(0,210,255,0.3)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ScrollText className="w-3.5 h-3.5" />
              <span>Modo Site</span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {slidesMeta.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  if (viewMode === 'scroll') {
                    const el = document.getElementById(slide.slug);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,210,255,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <span className="text-cyan-500 mr-1 font-mono">{String(index + 1).padStart(2, '0')}</span>
                {slide.label.replace('Capa / ', '')}
              </button>
            );
          })}
        </nav>

        {/* Slide Controls & Quick CTAs */}
        <div className="flex items-center gap-2">
          {viewMode === 'slides' && (
            <div className="flex items-center bg-[#061229] border border-cyan-500/30 rounded-xl px-1 py-1 mr-1">
              <button
                onClick={onPrevSlide}
                disabled={currentSlide === 0}
                title="Página anterior (Seta esquerda)"
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-cyan-950/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-2 text-xs font-mono font-bold text-cyan-400 select-none">
                {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
              </span>

              <button
                onClick={onNextSlide}
                disabled={currentSlide === totalSlides - 1}
                title="Próxima página (Seta direita)"
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-cyan-950/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <button
            onClick={handleShare}
            title="Compartilhar portfólio"
            className="p-2 rounded-xl border border-cyan-500/25 text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors hidden sm:flex items-center justify-center"
          >
            {copiedShare ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>

          <a
            href={`https://wa.me/${developerInfo.contact.phoneClean}?text=Ol%C3%A1%20Jaquison%2C%20vi%20seu%20portf%C3%B3lio%21`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(0,210,255,0.25)] transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 bg-[#050e22] border-b border-cyan-500/30 space-y-3">
          {/* Mode switch for mobile */}
          <div className="flex items-center justify-center bg-[#030814] p-1 rounded-xl border border-cyan-500/30 text-xs">
            <button
              onClick={() => {
                onToggleViewMode('slides');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-1.5 rounded-lg font-medium text-center ${
                viewMode === 'slides'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-300'
              }`}
            >
              Modo Slides (Apresentação)
            </button>
            <button
              onClick={() => {
                onToggleViewMode('scroll');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-1.5 rounded-lg font-medium text-center ${
                viewMode === 'scroll'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-300'
              }`}
            >
              Modo Site (Scroll)
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {slidesMeta.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  setMobileMenuOpen(false);
                  if (viewMode === 'scroll') {
                    const el = document.getElementById(slide.slug);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium text-left border ${
                  currentSlide === index
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300'
                    : 'border-slate-800 bg-[#030814] text-slate-300'
                }`}
              >
                <span className="text-[#00d2ff] font-mono font-bold">{slide.id}</span>
                <span>{slide.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-xl bg-[#081b3d] border border-cyan-500/40 text-cyan-300 text-xs font-semibold text-center"
            >
              Falar com Jaquison
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
