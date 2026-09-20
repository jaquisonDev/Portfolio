import React from 'react';
import { motion } from 'motion/react';

interface SlideFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}

export const SlideFrame: React.FC<SlideFrameProps> = ({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/3] lg:aspect-[5/6]',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative group ${className}`}
    >
      {/* Glow highlight around container */}
      <div className="absolute -inset-1 rounded-[2.3rem] bg-gradient-to-tr from-cyan-500/30 to-blue-600/20 blur-xl opacity-60 group-hover:opacity-85 transition duration-500" />

      {/* Main card with cyan border */}
      <div className={`relative w-full ${aspect} rounded-[2rem] sm:rounded-[2.3rem] border border-cyan-400/80 sm:border-cyan-400 shadow-[0_0_30px_rgba(0,210,255,0.22)] overflow-hidden bg-[#050e20]`}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
        />

        {/* Subtle overlay reflection */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};
