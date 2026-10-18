import React, { useState } from "react";
import { developerInfo } from "../data/portfolioData";
import { MessageCircle, Menu, X, Share2, Check } from "lucide-react";

interface NavigationHeaderProps {
  currentSection: number;
  onSelectSection: (index: number) => void;
  onOpenContact: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentSection,
  onSelectSection,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "JaquisonDev - Portfólio Fullstack",
          text: "Conheça o portfólio de Jaquison Souza - Desenvolvedor Fullstack",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#040814]/90 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectSection(0)}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-base shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              J
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {developerInfo.brand}
              </span>
              <span className="hidden sm:inline-block ml-1 text-xs text-[#00d2ff] font-medium">
                • Fullstack
              </span>
            </div>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            title="Compartilhar portfólio"
            className="p-2 rounded-xl border border-cyan-500/25 text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors hidden sm:flex items-center justify-center"
          >
            {copiedShare ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>

          <a
            href={`https://wa.me/${developerInfo.contact.phoneClean}?text=Ol%C3%A1%20Jaquison%2C%20vi%20seu%20portf%C3%B3lio%21`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(0,210,255,0.25)] transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 bg-[#050e22] border-b border-cyan-500/30 space-y-3">
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-xl bg-[#081b3d] border border-cyan-500/40 text-cyan-300 text-xs font-semibold text-center"
            >
              Falar com Jaquison
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
