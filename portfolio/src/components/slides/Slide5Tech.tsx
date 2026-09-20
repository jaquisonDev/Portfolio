import React from 'react';
import { motion } from 'motion/react';
import { developerInfo, techStack } from '../../data/portfolioData';
import { SlideFrame } from '../SlideFrame';

export const Slide5Tech: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[520px]">
      {/* Left Column: Heading + Subtitle + Laptop with Code Photo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-6 flex flex-col justify-center space-y-6"
      >
        <div className="space-y-2 text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tecnologias<br />Utilizadas
          </h2>
          <div className="w-12 h-1 bg-[#00d2ff] rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 max-w-md pt-2 leading-relaxed">
            Ferramentas e linguagens que uso para criar soluções robustas, escaláveis e de alta performance.
          </p>
        </div>

        {/* Laptop with code & mug frame */}
        <div className="w-full max-w-[420px] pt-1">
          <SlideFrame
            src={developerInfo.images.laptopMug}
            alt="Ambiente de desenvolvimento com laptop e código"
            aspect="aspect-[16/10]"
          />
        </div>
      </motion.div>

      {/* Right Column: Sleek Tech Categories Box */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="lg:col-span-6 flex justify-center lg:justify-end w-full"
      >
        <div className="w-full max-w-[480px] rounded-[2rem] border border-cyan-400/80 bg-[#051025]/85 backdrop-blur-md p-7 sm:p-9 shadow-[0_0_35px_rgba(0,210,255,0.18)]">
          <div className="space-y-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.category}
                className={index !== techStack.length - 1 ? 'border-b border-cyan-500/25 pb-5' : ''}
              >
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[#00d2ff] uppercase mb-2">
                  {tech.category}
                </h3>
                <p className="text-lg sm:text-xl font-medium text-white tracking-wide">
                  {tech.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
