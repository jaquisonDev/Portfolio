import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { NavigationHeader } from './components/NavigationHeader';
import { SlideFooterControls } from './components/SlideFooterControls';
import { Slide1Hero } from './components/slides/Slide1Hero';
import { Slide2About } from './components/slides/Slide2About';
import { Slide3Skills } from './components/slides/Slide3Skills';
import { Slide4Projects } from './components/slides/Slide4Projects';
import { Slide5Tech } from './components/slides/Slide5Tech';
import { Slide6Contact } from './components/slides/Slide6Contact';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ProjectData } from './types';
import { developerInfo, slidesMeta } from './data/portfolioData';
import { ArrowUp, Sparkles, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'slides' | 'scroll'>('slides');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalSlides = slidesMeta.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in modal
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (viewMode === 'slides') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          prevSlide();
        } else if (e.key >= '1' && e.key <= '6') {
          const target = parseInt(e.key, 10) - 1;
          goToSlide(target);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextSlide, prevSlide, goToSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide1Hero
            onNavigate={(idx) => goToSlide(idx)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        );
      case 1:
        return <Slide2About />;
      case 2:
        return <Slide3Skills />;
      case 3:
        return (
          <Slide4Projects
            onSelectProject={(project) => setSelectedProject(project)}
          />
        );
      case 4:
        return <Slide5Tech />;
      case 5:
        return (
          <Slide6Contact
            onOpenMessageModal={() => setIsContactModalOpen(true)}
          />
        );
      default:
        return <Slide1Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Background ambient lighting and waves */}
      <BackgroundGlow />

      {/* Top Navigation */}
      <NavigationHeader
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        viewMode={viewMode}
        onSelectSlide={goToSlide}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onToggleViewMode={setViewMode}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Mode 1: Presentation Slides View (Faithful reproduction of the 6 slides) */}
      {viewMode === 'slides' ? (
        <main
          className="flex-grow flex flex-col justify-between relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Canvas Container */}
          <div className="w-full flex-grow flex items-center justify-center my-auto">
            <div className="w-full max-w-7xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full"
                >
                  {renderCurrentSlide()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Controls Bar for Slides */}
          <footer className="w-full relative z-20 pt-2 pb-2">
            <SlideFooterControls
              currentSlide={currentSlide}
              totalSlides={totalSlides}
              onSelectSlide={goToSlide}
              onNextSlide={nextSlide}
              onPrevSlide={prevSlide}
            />
          </footer>
        </main>
      ) : (
        /* Mode 2: Continuous Scroll View (Full Portfolio Site) */
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-28 sm:space-y-36">
          {/* Section 1: Início */}
          <section id="inicio" className="scroll-mt-24 pt-6">
            <Slide1Hero
              onNavigate={(idx) => {
                const target = slidesMeta[idx]?.slug;
                if (target) {
                  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onOpenContact={() => setIsContactModalOpen(true)}
            />
          </section>

          {/* Section 2: Sobre Mim */}
          <section id="sobre" className="scroll-mt-24 pt-6">
            <Slide2About />
          </section>

          {/* Section 3: Habilidades */}
          <section id="habilidades" className="scroll-mt-24 pt-6">
            <Slide3Skills />
          </section>

          {/* Section 4: Projetos */}
          <section id="projetos" className="scroll-mt-24 pt-6">
            <Slide4Projects
              onSelectProject={(project) => setSelectedProject(project)}
            />
          </section>

          {/* Section 5: Tecnologias */}
          <section id="tecnologias" className="scroll-mt-24 pt-6">
            <Slide5Tech />
          </section>

          {/* Section 6: Contato */}
          <section id="contato" className="scroll-mt-24 pt-6">
            <Slide6Contact
              onOpenMessageModal={() => setIsContactModalOpen(true)}
            />
          </section>

          {/* Site Footer */}
          <footer className="pt-16 pb-8 border-t border-cyan-500/20 text-center space-y-4">
            <div className="flex items-center justify-center gap-6">
              <a
                href={developerInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-cyan-500/20 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={developerInfo.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-cyan-500/20 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${developerInfo.contact.email}`}
                className="p-2.5 rounded-xl border border-cyan-500/20 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} {developerInfo.brand} • Desenvolvido por {developerInfo.name}. Todos os direitos reservados.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao início</span>
            </button>
          </footer>
        </main>
      )}

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Quick Message Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
