import React from 'react';
import { motion } from 'motion/react';
import { developerInfo } from '../../data/portfolioData';
import { SlideFrame } from '../SlideFrame';
import { GraduationCap, Layers, Sparkles, BookOpen } from 'lucide-react';

export const Slide2About: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[520px]">
      {/* Left Column: Text & Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 flex flex-col justify-center text-left space-y-5"
      >
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Sobre Mim
          </h2>
          <div className="w-12 h-1 bg-[#00d2ff] rounded-full" />
        </div>

        {/* Highlight subtitle in cyan */}
        <p className="text-lg sm:text-xl font-medium text-[#00d2ff] leading-snug">
          Desenvolvedor de software apaixonado por criar soluções que geram impacto.
        </p>

        {/* Paragraphs with subtle icons and elegant spacing */}
        <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 rounded-md bg-cyan-500/10 text-[#00d2ff] shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <p className="text-slate-300">
              Formado na faculdade <span className="text-white font-semibold">Uniasselvi</span>, em <span className="text-white font-semibold">Análise e Desenvolvimento de Sistemas</span>, cursando pós graduação em <span className="text-cyan-300 font-medium">Arquitetura de Sistemas e Engenharia de Software</span>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 rounded-md bg-cyan-500/10 text-[#00d2ff] shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <p className="text-slate-300">
              Atuação em todas as etapas do desenvolvimento: da análise à entrega e evolução de produtos.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 rounded-md bg-cyan-500/10 text-[#00d2ff] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-slate-300">
              Foco em código limpo, boas práticas no Frontend, quanto no backend.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 rounded-md bg-cyan-500/10 text-[#00d2ff] shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <p className="text-slate-300">
              Amo estar sempre em crescente aprendizagem.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Portrait Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="lg:col-span-5 flex justify-center lg:justify-end"
      >
        <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
          <SlideFrame
            src={developerInfo.images.profile}
            alt="Jaquison Souza - Sobre Mim"
            aspect="aspect-[4/5] sm:aspect-[4/5]"
          />
        </div>
      </motion.div>
    </div>
  );
};
