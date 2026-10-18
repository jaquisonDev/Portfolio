import React, { useState } from "react";
import { BackgroundGlow } from "./components/BackgroundGlow";
import { NavigationHeader } from "./components/NavigationHeader";
import { Slide1Hero } from "./components/slides/Slide1Hero";
import { Slide2About } from "./components/slides/Slide2About";
import { Slide3Skills } from "./components/slides/Slide3Skills";
import { Slide4Projects } from "./components/slides/Slide4Projects";
import { Slide5Tech } from "./components/slides/Slide5Tech";
import { Slide6Contact } from "./components/slides/Slide6Contact";
import { ProjectModal } from "./components/ProjectModal";
import { ContactModal } from "./components/ContactModal";
import { ProjectData } from "./types";
import { developerInfo, sectionsMeta } from "./data/portfolioData";
import {
  ArrowUp,
  Sparkles,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Background ambient lighting and waves */}
      <BackgroundGlow />

      {/* Top Navigation */}
      <NavigationHeader
        currentSection={currentSection}
        onSelectSection={(index) => {
          setCurrentSection(index);
          const target = sectionsMeta[index]?.slug;
          if (target) {
            document
              .getElementById(target)
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-28 sm:space-y-36">
        {/* Section 1: Início */}
        <section id="inicio" className="scroll-mt-24 pt-6">
          <Slide1Hero
            onNavigate={(idx) => {
              const target = sectionsMeta[idx]?.slug;
              if (target) {
                document
                  .getElementById(target)
                  ?.scrollIntoView({ behavior: "smooth" });
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
            © {new Date().getFullYear()} {developerInfo.brand} • Desenvolvido
            por {developerInfo.name}. Todos os direitos reservados.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao início</span>
          </button>
        </footer>
      </main>

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
