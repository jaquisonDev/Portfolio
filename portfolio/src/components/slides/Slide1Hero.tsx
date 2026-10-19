import React from "react";
import { motion } from "motion/react";
import { developerInfo } from "../../data/portfolioData";
import { SlideFrame } from "../SlideFrame";
import { ArrowRight, MessageSquareCode, Mail } from "lucide-react";

export const Slide1Hero = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-130">
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
      </motion.div>

      {/* Right Image Frame Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="lg:col-span-5 flex justify-center lg:justify-end"
      >
        <div className="w-full max-w-85 sm:max-w-95 lg:max-w-105">
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
