import React from "react";
import { motion } from "motion/react";
import { developerInfo, skillsExercised } from "../../data/portfolioData";
import { SlideFrame } from "../SlideFrame";
import { Globe, Code2, Database, ShieldCheck } from "lucide-react";

const skillIcons = [Globe, Code2, Database, ShieldCheck];

export const Slide3Skills: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-130">
      {/* Left Column: Skills Tree */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Minhas Habilidades
          </h2>
          <div className="w-12 h-1 bg-[#00d2ff] rounded-full" />
        </div>

        <p className="text-base sm:text-lg font-medium text-[#00d2ff]">
          Habilidades exercitadas:
        </p>

        {/* Vertical Node Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-4">
          {/* Vertical connecting line */}
          <div className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-0.5 bg-linear-to-b from-cyan-400 via-blue-500 to-cyan-400/30" />

          {skillsExercised.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative flex items-center group"
              >
                {/* Node glowing bullet */}
                <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#050e20] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_#00d2ff]">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 group-hover:scale-125 transition-transform" />
                  </div>
                </div>

                {/* Skill Item Pill / Card */}
                <div className="w-full py-3.5 px-5 rounded-xl border border-cyan-500/30 bg-[#051126]/70 backdrop-blur-sm group-hover:border-cyan-400 group-hover:bg-[#071736] group-hover:shadow-[0_0_15px_rgba(0,210,255,0.15)] transition-all flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#00d2ff] shrink-0 opacity-80 group-hover:opacity-100" />
                  <span className="text-slate-100 font-medium text-sm sm:text-base">
                    {skill}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Right Column: Coding Workspace Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="lg:col-span-5 flex justify-center lg:justify-end"
      >
        <div className="w-full max-w-85 sm:max-w-95 lg:max-w-105">
          <SlideFrame
            src={developerInfo.images.coding}
            alt="Ambiente de desenvolvimento e programação"
            aspect="aspect-[4/5] sm:aspect-[4/5]"
          />
        </div>
      </motion.div>
    </div>
  );
};
