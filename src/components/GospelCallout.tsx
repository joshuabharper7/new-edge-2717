import React from 'react';
import { Sparkles, Heart, Cross, ArrowRight, Quote } from 'lucide-react';
import { GOSPEL_CONTENT } from '../data/gospel';
import type { ModalTab } from '../types';

interface GospelCalloutProps {
  onOpenModal: (tab: ModalTab) => void;
}

export const GospelCallout: React.FC<GospelCalloutProps> = ({ onOpenModal }) => {
  return (
    <section id="about" className="py-24 bg-[#11161B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1A2229] via-[#222B32] to-[#1A2229] border border-[#B66D44]/40 p-8 sm:p-14 shadow-2xl overflow-hidden">
          {/* Subtle Glow Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B66D44]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11161B] border border-[#B66D44]/30 text-xs font-semibold text-[#B66D44] tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{GOSPEL_CONTENT.tagline}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight leading-tight">
                {GOSPEL_CONTENT.headline}
              </h2>

              <p className="text-lg text-[#F8EDE6]/90 font-medium">
                {GOSPEL_CONTENT.subheadline}
              </p>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                {GOSPEL_CONTENT.leadParagraph}
              </p>

              {/* Quote Highlight */}
              <div className="p-5 rounded-2xl bg-[#11161B]/80 border-l-4 border-[#B66D44] flex items-start gap-4">
                <Quote className="w-8 h-8 text-[#B66D44] shrink-0 opacity-70" />
                <div>
                  <p className="text-sm italic text-[#FDFBF7] font-serif">
                    &ldquo;{GOSPEL_CONTENT.verse.text}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-[#B66D44] mt-1">
                    {GOSPEL_CONTENT.verse.reference}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: ABCs of Salvation Card */}
            <div className="lg:col-span-5 bg-[#11161B] rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Cross className="w-5 h-5 text-[#B66D44]" />
                  <h3 className="text-lg font-bold text-[#FDFBF7]">The Foundation: Grace</h3>
                </div>
                <span className="text-xs font-bold text-[#B66D44] uppercase tracking-wider">
                  The ABCs
                </span>
              </div>

              <div className="space-y-4">
                {GOSPEL_CONTENT.abcSteps.map((step) => (
                  <div key={step.letter} className="flex items-start gap-4 p-3.5 rounded-xl bg-[#1A2229]/60 border border-slate-800/80">
                    <div className="w-9 h-9 rounded-lg bg-[#B66D44] text-[#FDFBF7] font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                      {step.letter}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#FDFBF7]">{step.title}</h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('mentee')}
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold text-[#FDFBF7] bg-[#B66D44] hover:bg-[#9E5933] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#B66D44]/20"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Begin Your Journey Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
