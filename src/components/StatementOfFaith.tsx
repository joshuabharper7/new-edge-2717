import React, { useState } from 'react';
import { ChevronDown, Search, BookOpen, Check, Layers } from 'lucide-react';
import { DOCTRINAL_POINTS } from '../data/doctrine';

export const StatementOfFaith: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleExpandAll = () => {
    setAllExpanded(!allExpanded);
    if (!allExpanded) {
      setOpenIndex(-1); // special flag for all open
    } else {
      setOpenIndex(null);
    }
  };

  const filteredPoints = DOCTRINAL_POINTS.filter((point) => {
    const q = searchQuery.toLowerCase();
    return (
      point.title.toLowerCase().includes(q) ||
      point.scriptures.toLowerCase().includes(q) ||
      point.summary.toLowerCase().includes(q) ||
      point.fullText.toLowerCase().includes(q) ||
      point.category.toLowerCase().includes(q)
    );
  });

  return (
    <section id="beliefs" className="py-24 bg-[#1A2229] border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11161B] border border-[#B66D44]/30 text-xs font-semibold text-[#B66D44] tracking-widest uppercase mb-4">
            Doctrinal Foundation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mb-4">
            Statement of Faith
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            As a Christian discipleship ministry in Washoe County, we affirm these 11 doctrinal pillars as the biblical foundation for our leadership, mentors, and mission.
          </p>
        </div>

        {/* Filter and Accordion Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Filter Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search doctrines or scriptures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#11161B] border border-slate-800 text-sm text-[#FDFBF7] placeholder-[#94A3B8] focus:outline-none focus:border-[#B66D44] transition-colors"
            />
          </div>

          {/* Expand/Collapse All Button */}
          <button
            onClick={handleToggleExpandAll}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#11161B] border border-slate-800 hover:border-[#B66D44]/40 text-xs font-semibold text-[#94A3B8] hover:text-[#FDFBF7] transition-colors"
          >
            <Layers className="w-4 h-4 text-[#B66D44]" />
            <span>{allExpanded ? 'Collapse All' : 'Expand All Doctrines'}</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredPoints.length === 0 ? (
            <div className="text-center py-12 bg-[#11161B] rounded-2xl border border-slate-800">
              <p className="text-[#94A3B8] text-sm">No doctrinal points match &ldquo;{searchQuery}&rdquo;.</p>
            </div>
          ) : (
            filteredPoints.map((point) => {
              const isOpen = allExpanded || openIndex === point.id || openIndex === -1;
              return (
                <div
                  key={point.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#11161B] border-[#B66D44]/50 shadow-xl'
                      : 'bg-[#11161B]/80 border-slate-800 hover:border-slate-700 hover:bg-[#11161B]'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(point.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-[#222B32] border border-[#B66D44]/30 flex items-center justify-center text-xs font-bold text-[#B66D44] shrink-0">
                        {point.id}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-[#FDFBF7]">
                            {point.title.replace(/^\d+\.\s*/, '')}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#1A2229] border border-[#B66D44]/20 text-[10px] font-semibold text-[#B66D44]">
                            {point.category}
                          </span>
                        </div>
                        <div className="text-xs text-[#94A3B8] font-medium flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#B66D44]" />
                          <span>{point.scriptures}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`p-2 rounded-lg bg-[#1A2229] text-[#B66D44] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#B66D44] text-[#FDFBF7]' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Accordion Content Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 animate-fadeIn">
                      <p className="text-sm sm:text-base text-[#FDFBF7]/90 leading-relaxed mb-4">
                        {point.fullText}
                      </p>
                      <div className="p-3.5 rounded-xl bg-[#1A2229] border border-slate-800/80 flex items-center justify-between text-xs text-[#94A3B8]">
                        <span className="font-semibold text-[#F8EDE6]">Key Scriptures:</span>
                        <span className="font-mono text-[#B66D44] font-bold">{point.scriptures}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Mentor Affirmation Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#11161B] border border-[#B66D44]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B66D44]/20 border border-[#B66D44] flex items-center justify-center text-[#B66D44] shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#FDFBF7]">Mandatory Affirmation for Mentors</div>
              <div className="text-xs text-[#94A3B8]">All Board members, Track Leaders, and Mentors affirm full agreement with this Statement of Faith.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
