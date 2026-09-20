import React from 'react';
import { motion } from 'motion/react';
import { projectsList } from '../../data/portfolioData';
import { ProjectData } from '../../types';
import { ExternalLink } from 'lucide-react';

interface Slide4ProjectsProps {
  onSelectProject?: (project: ProjectData) => void;
}

export const Slide4Projects: React.FC<Slide4ProjectsProps> = ({ onSelectProject }) => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center min-h-[520px] py-4">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left space-y-2 mb-8 sm:mb-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Projetos Destaque
        </h2>
        <div className="w-12 h-1 bg-[#00d2ff] rounded-full" />
        <p className="text-base sm:text-lg text-[#00d2ff] font-medium max-w-2xl pt-1">
          Soluções desenvolvidas com foco na aprendizagem, conhecimento e prática.
        </p>
      </motion.div>

      {/* 3 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onClick={() => onSelectProject?.(project)}
            className="group relative flex flex-col rounded-2xl border border-cyan-500/30 bg-[#051126]/80 backdrop-blur-sm overflow-hidden p-4 sm:p-5 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,210,255,0.2)] transition-all cursor-pointer"
          >
            {/* Project Image Frame */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#030814] border border-cyan-500/20">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040916]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              
              <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/50 backdrop-blur-md text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-500/30">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-grow space-y-2">
              {/* Number and Title */}
              <div className="flex items-start gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#00d2ff] leading-none shrink-0">
                  {project.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 flex-grow">
                {project.description}
              </p>

              {/* Tags & Action prompt */}
              <div className="pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-medium">Ver detalhes</span>
                <span className="text-slate-400">{project.tags.slice(0, 2).join(' • ')}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
