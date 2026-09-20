import React from 'react';
import { motion } from 'motion/react';
import { developerInfo } from '../../data/portfolioData';
import { SlideFrame } from '../SlideFrame';
import { ArrowRight, MessageSquareCode, Mail } from 'lucide-react';

interface SlideProps {
  onNavigate?: (slideIndex: number) => void;
  onOpenContact?: () => void;
}

export const Slide1Hero: React.FC<SlideProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[520px]">
      {/* Left Text Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
      >
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {developerInfo.brand}
          </h1>

          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#00d2ff]">
            <div>{developerInfo.roleLine1}</div>
            <div>{developerInfo.roleLine2}</div>
          </div>
        </div>

        {/* Cyan accent bar */}
        <div className="w-12 h-1 bg-[#00d2ff] rounded-full" />

        {/* Subtitle description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
          {developerInfo.tagline}
        </p>

        {/* Author byline */}
        <div className="pt-2">
          <span className="text-sm font-medium text-slate-400 block">Por:</span>
          <span className="text-xl sm:text-2xl font-bold text-[#00d2ff] tracking-wide">
            {developerInfo.name}
          </span>
        </div>

        {/* Interactive CTA buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          {onNavigate && (
            <button
              id="hero-btn-explore"
              onClick={() => onNavigate(1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:brightness-110 shadow-[0_0_20px_rgba(0,210,255,0.35)] transition-all cursor-pointer"
            >
              <span>Ver Apresentação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {onNavigate && (
            <button
              id="hero-btn-projects"
              onClick={() => onNavigate(3)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/40 text-cyan-300 font-medium text-sm hover:bg-cyan-950/30 hover:border-cyan-400 transition-all cursor-pointer"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Ver Projetos</span>
            </button>
          )}

          {onOpenContact && (
            <button
              id="hero-btn-contact"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 font-medium text-sm hover:bg-slate-800/60 hover:text-white transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contato</span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Right Image Frame Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="lg:col-span-5 flex justify-center lg:justify-end"
      >
        <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
          <SlideFrame
            src={developerInfo.images.profile}
            alt={developerInfo.name}
            aspect="aspect-[4/5] sm:aspect-[4/5]"
          />
        </div>
      </motion.div>
    </div>
  );
};
