import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectData } from '../types';
import { X, CheckCircle2, MessageSquare, Layers, TrendingUp } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá Jaquison! Gostei muito do projeto "${project.title}" do seu portfólio e gostaria de saber mais sobre seu trabalho.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#061024] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,210,255,0.25)] overflow-hidden z-10 my-auto text-left"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#040b1a]">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-[#00d2ff]">
                {project.number}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-500/30">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Image Preview */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-cyan-500/25 bg-[#020610]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white capitalize leading-snug">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metrics Callout */}
            {project.metrics && (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300">
                <TrendingUp className="w-5 h-5 text-[#00d2ff] shrink-0" />
                <span className="text-xs sm:text-sm font-medium">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Features Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Principais Funcionalidades & Arquitetura</span>
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#081b3d] text-cyan-300 border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-cyan-500/20 bg-[#040b1a] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-300 hover:text-white text-xs sm:text-sm font-medium"
            >
              Fechar
            </button>

            <a
              href={`https://wa.me/${developerInfo.contact.phoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Conversar sobre este projeto</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
