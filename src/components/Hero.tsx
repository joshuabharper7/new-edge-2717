import React from 'react';
import { ArrowRight, Users, Shield, MapPin, Sparkles } from 'lucide-react';
import type { ModalTab } from '../types';

interface HeroProps {
  onOpenModal: (tab: ModalTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#11161B]">
      {/* Background Hero Image with Atmospheric Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Iron sharpens iron background"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11161B] via-[#11161B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11161B] via-transparent to-[#11161B]" />
        
        {/* Subtle Warm Copper Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B66D44]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Organization Location & Non-Profit Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2229]/90 border border-[#B66D44]/30 backdrop-blur-md mb-8 animate-fadeIn">
          <MapPin className="w-4 h-4 text-[#B66D44]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F8EDE6]">
            Washoe County / Reno, NV • Nevada 501(c)(3) Ministry
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B66D44]" />
        </div>

        {/* High-Impact Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FDFBF7] max-w-5xl mx-auto leading-[1.1] mb-6">
          Nobody grows <span className="text-[#B66D44] underline decoration-[#B66D44]/40 underline-offset-8">alone.</span>
        </h1>

        {/* Scripture Theme Subheading */}
        <div className="max-w-3xl mx-auto mb-8 px-4">
          <p className="text-lg sm:text-2xl font-serif italic text-[#F8EDE6]/90 border-l-2 border-[#B66D44] pl-4 py-1 inline-block text-left sm:text-center">
            &ldquo;As iron sharpens iron, so one person sharpens another.&rdquo;
            <span className="block text-sm font-sans not-italic font-bold text-[#B66D44] mt-1 tracking-wider uppercase">
              — Proverbs 27:17
            </span>
          </p>
        </div>

        {/* Brief Mission Summary */}
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Christ-centered mentorship walking alongside individuals as they grow in faith, character, and calling through intentional 1-on-1 and group discipleship.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          {/* Primary CTA: Find a Mentor */}
          <button
            onClick={() => onOpenModal('mentee')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-[#FDFBF7] bg-[#B66D44] hover:bg-[#9E5933] transition-all duration-300 shadow-lg shadow-[#B66D44]/30 hover:shadow-[#B66D44]/50 hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Find a Mentor</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Serve as a Mentor */}
          <button
            onClick={() => onOpenModal('mentor')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-[#FDFBF7] bg-[#1A2229] hover:bg-[#222B32] border border-[#B66D44]/50 hover:border-[#B66D44] transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <Shield className="w-5 h-5 text-[#B66D44]" />
            <span>Serve as a Mentor</span>
          </button>
        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#1A2229]/60 border border-slate-800 backdrop-blur-sm">
            <Users className="w-6 h-6 text-[#B66D44]" />
            <div className="text-left">
              <div className="text-sm font-bold text-[#FDFBF7]">3 Distinct Tracks</div>
              <div className="text-xs text-[#94A3B8]">Men, Women & Young Adults</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#1A2229]/60 border border-slate-800 backdrop-blur-sm">
            <Shield className="w-6 h-6 text-[#B66D44]" />
            <div className="text-left">
              <div className="text-sm font-bold text-[#FDFBF7]">6–12 Month Covenant</div>
              <div className="text-xs text-[#94A3B8]">Structured & Intentional</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#1A2229]/60 border border-slate-800 backdrop-blur-sm">
            <MapPin className="w-6 h-6 text-[#B66D44]" />
            <div className="text-left">
              <div className="text-sm font-bold text-[#FDFBF7]">Local Reno Focus</div>
              <div className="text-xs text-[#94A3B8]">Serving Washoe County</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
