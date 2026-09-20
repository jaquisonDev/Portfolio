import React, { useState } from 'react';
import { motion } from 'motion/react';
import { developerInfo } from '../../data/portfolioData';
import { SlideFrame } from '../SlideFrame';
import { Mail, Phone, Linkedin, MessageCircle, Copy, Check, Send } from 'lucide-react';

interface Slide6ContactProps {
  onOpenMessageModal?: () => void;
}

export const Slide6Contact: React.FC<Slide6ContactProps> = ({ onOpenMessageModal }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[520px]">
      {/* Left/Middle Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left"
      >
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Contato e<br />Próximos Passos
          </h2>
          <div className="w-12 h-1 bg-[#00d2ff] rounded-full" />
        </div>

        {/* Two Column Layout for Contacts and CTA as seen in Slide 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {/* Contact Details List */}
          <div className="space-y-5">
            {/* Email */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] block mb-1">
                EMAIL
              </span>
              <div className="flex items-center gap-2 group">
                <a
                  href={`mailto:${developerInfo.contact.email}`}
                  className="text-base sm:text-lg text-slate-100 hover:text-cyan-300 transition-colors font-medium break-all"
                >
                  {developerInfo.contact.email}
                </a>
                <button
                  onClick={() => handleCopy(developerInfo.contact.email, 'email')}
                  title="Copiar e-mail"
                  className="p-1 rounded text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Telefone */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] block mb-1">
                TELEFONE
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${developerInfo.contact.phoneClean}?text=Ol%C3%A1%20Jaquison%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%21`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-slate-100 hover:text-cyan-300 transition-colors font-medium"
                >
                  {developerInfo.contact.phone}
                </a>
                <button
                  onClick={() => handleCopy(developerInfo.contact.phone, 'phone')}
                  title="Copiar telefone"
                  className="p-1 rounded text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] block mb-1">
                LINKEDIN
              </span>
              <a
                href={developerInfo.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-slate-100 hover:text-cyan-300 transition-colors font-medium break-all"
              >
                {developerInfo.contact.linkedin}
              </a>
            </div>
          </div>

          {/* Slogan and Action Box */}
          <div className="flex flex-col justify-between space-y-4 rounded-2xl p-5 border border-cyan-500/20 bg-[#051126]/60 backdrop-blur-sm">
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Vamos construir soluções incríveis juntos.
              </p>
              <p className="text-base font-semibold text-[#00d2ff] leading-relaxed">
                Agende uma conversa e conheça mais projetos.
              </p>
            </div>

            {/* Interactive Action Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${developerInfo.contact.phoneClean}?text=Ol%C3%A1%20Jaquison%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%21`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={`mailto:${developerInfo.contact.email}?subject=Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%20Jaquison%2C%0A%0AEstou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-950/40 hover:border-cyan-400 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar E-mail Direto</span>
              </a>

              {onOpenMessageModal && (
                <button
                  onClick={onOpenMessageModal}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-slate-300 hover:text-white text-xs font-medium hover:bg-slate-800/40 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Enviar Mensagem Rápida</span>
                </button>
              )}
            </div>
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
            alt="Jaquison Souza - Contato"
            aspect="aspect-[4/5] sm:aspect-[4/5]"
          />
        </div>
      </motion.div>
    </div>
  );
};
