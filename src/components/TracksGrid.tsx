import React from 'react';
import { Shield, HeartHandshake, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { TRACKS } from '../data/tracks';
import type { ModalTab, TrackId } from '../types';

interface TracksGridProps {
  onOpenModal: (tab: ModalTab, trackId?: TrackId) => void;
}

export const TracksGrid: React.FC<TracksGridProps> = ({ onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#B66D44]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#B66D44]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#B66D44]" />;
      default:
        return <Shield className="w-6 h-6 text-[#B66D44]" />;
    }
  };

  return (
    <section id="tracks" className="py-24 bg-[#11161B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A2229] border border-[#B66D44]/30 text-xs font-semibold text-[#B66D44] tracking-widest uppercase mb-4">
            Ministry Tracks
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mb-4">
            Intentional Discipleship Pathways
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Whether you are looking for accountability, relational wisdom, or community after high school, our three focused tracks are tailored for deep spiritual growth.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className="flex flex-col bg-[#1A2229] rounded-2xl border border-slate-800 hover:border-[#B66D44]/50 transition-all duration-300 overflow-hidden shadow-xl shadow-black/40 group hover:-translate-y-1.5"
            >
              {/* Card Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2229] via-[#1A2229]/40 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-[#11161B]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#B66D44]/40 text-xs font-bold text-[#F8EDE6]">
                  {track.badge}
                </div>

                {/* Track Icon Badge */}
                <div className="absolute bottom-4 left-6 p-3 rounded-xl bg-[#11161B] border border-[#B66D44]/30 shadow-md">
                  {getIcon(track.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#FDFBF7] mb-1 group-hover:text-[#B66D44] transition-colors">
                    {track.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#B66D44] uppercase tracking-wider mb-4">
                    {track.subtitle}
                  </div>
                  <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-8">
                    {track.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FDFBF7]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#B66D44] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                  <button
                    onClick={() => onOpenModal('mentee', track.id)}
                    className="w-full py-3 px-4 rounded-xl text-sm font-bold text-[#FDFBF7] bg-[#B66D44] hover:bg-[#9E5933] transition-colors flex items-center justify-center gap-2 group/btn shadow-md shadow-[#B66D44]/20"
                  >
                    <span>Request a Mentor ({track.title.split(' ')[0]})</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenModal('mentor', track.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#94A3B8] hover:text-[#FDFBF7] bg-transparent hover:bg-[#222B32] transition-colors text-center"
                  >
                    Apply to Mentor in this Track
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
