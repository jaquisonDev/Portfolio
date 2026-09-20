import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, Mail } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Jaquison! Meu nome é ${name || 'um visitante'} (${email || 'sem email informado'}). Mensagem: ${message || 'Gostaria de entrar em contato!'}`;
    const url = `https://wa.me/${developerInfo.contact.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Contato de ${name || 'Cliente'} via Portfólio`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
    window.location.href = `mailto:${developerInfo.contact.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#061024] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,210,255,0.25)] overflow-hidden z-10 text-left"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#040b1a]">
            <div>
              <h3 className="text-lg font-bold text-white">Enviar Mensagem</h3>
              <p className="text-xs text-cyan-400 font-medium">Fale diretamente com Jaquison Souza</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSendWhatsapp} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Carlos Silva"
                className="w-full px-4 py-2.5 rounded-xl bg-[#030917] border border-cyan-500/30 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Seu E-mail ou Telefone
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: seuemail@empresa.com ou (11) 99999-9999"
                className="w-full px-4 py-2.5 rounded-xl bg-[#030917] border border-cyan-500/30 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Mensagem
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Conte sobre sua ideia, projeto ou oportunidade..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#030917] border border-cyan-500/30 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar pelo WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-950/40 hover:border-cyan-400 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Via E-mail</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
