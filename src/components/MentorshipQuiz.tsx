import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import type { ModalTab, TrackId } from '../types';

interface MentorshipQuizProps {
  onOpenModal: (tab: ModalTab, trackId?: TrackId) => void;
}

export const MentorshipQuiz: React.FC<MentorshipQuizProps> = ({ onOpenModal }) => {
  const [step, setStep] = useState(1);
  const [rolePreference, setRolePreference] = useState<'mentee' | 'mentor' | null>(null);
  const [trackPreference, setTrackPreference] = useState<TrackId | null>(null);

  const handleSelectRole = (role: 'mentee' | 'mentor') => {
    setRolePreference(role);
    setStep(2);
  };

  const handleSelectTrack = (track: TrackId) => {
    setTrackPreference(track);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setRolePreference(null);
    setTrackPreference(null);
  };

  return (
    <section id="quiz" className="py-24 bg-[#11161B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A2229] border border-[#B66D44]/30 text-xs font-semibold text-[#B66D44] tracking-widest uppercase mb-4">
            Interactive Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FDFBF7] tracking-tight mb-3">
            Find Your Track & Readiness
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Answer 2 quick questions to find out which track and role fits your current season of life in Reno.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-[#1A2229] rounded-3xl border border-[#B66D44]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full bg-[#11161B] h-2 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-[#B66D44] h-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* STEP 1: Role Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B66D44] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" /> Question 1 of 2
              </div>
              <h3 className="text-2xl font-bold text-[#FDFBF7]">
                What is your primary goal today?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  onClick={() => handleSelectRole('mentee')}
                  className="p-6 rounded-2xl bg-[#11161B] border border-slate-800 hover:border-[#B66D44] text-left transition-all hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B66D44]/20 border border-[#B66D44]/40 flex items-center justify-center text-[#B66D44] font-bold mb-4 group-hover:bg-[#B66D44] group-hover:text-[#FDFBF7] transition-colors">
                    01
                  </div>
                  <h4 className="text-lg font-bold text-[#FDFBF7] mb-2">I want to be Mentored</h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    I am seeking a Christ-centered mentor to walk alongside me, offer biblical wisdom, and keep me accountable.
                  </p>
                </button>

                <button
                  onClick={() => handleSelectRole('mentor')}
                  className="p-6 rounded-2xl bg-[#11161B] border border-slate-800 hover:border-[#B66D44] text-left transition-all hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B66D44]/20 border border-[#B66D44]/40 flex items-center justify-center text-[#B66D44] font-bold mb-4 group-hover:bg-[#B66D44] group-hover:text-[#FDFBF7] transition-colors">
                    02
                  </div>
                  <h4 className="text-lg font-bold text-[#FDFBF7] mb-2">I want to Serve as a Mentor</h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    I have walked with Christ for years and desire to sharpen and invest in the next generation.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Track Selection */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B66D44] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" /> Question 2 of 2
              </div>
              <h3 className="text-2xl font-bold text-[#FDFBF7]">
                Which demographic or focus fits you best?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <button
                  onClick={() => handleSelectTrack('mens')}
                  className="p-5 rounded-2xl bg-[#11161B] border border-slate-800 hover:border-[#B66D44] text-left transition-all hover:-translate-y-1 group"
                >
                  <h4 className="text-base font-bold text-[#FDFBF7] mb-1 group-hover:text-[#B66D44]">Men&apos;s Track</h4>
                  <p className="text-xs text-[#94A3B8]">Adult men seeking character, brotherhood & integrity.</p>
                </button>

                <button
                  onClick={() => handleSelectTrack('womens')}
                  className="p-5 rounded-2xl bg-[#11161B] border border-slate-800 hover:border-[#B66D44] text-left transition-all hover:-translate-y-1 group"
                >
                  <h4 className="text-base font-bold text-[#FDFBF7] mb-1 group-hover:text-[#B66D44]">Women&apos;s Track</h4>
                  <p className="text-xs text-[#94A3B8]">Women seeking relational discipleship & wisdom.</p>
                </button>

                <button
                  onClick={() => handleSelectTrack('young_adult')}
                  className="p-5 rounded-2xl bg-[#11161B] border border-slate-800 hover:border-[#B66D44] text-left transition-all hover:-translate-y-1 group"
                >
                  <h4 className="text-base font-bold text-[#FDFBF7] mb-1 group-hover:text-[#B66D44]">Young Adult (18+)</h4>
                  <p className="text-xs text-[#94A3B8]">Post-high school gap, college & early career.</p>
                </button>
              </div>

              <div className="pt-4 flex justify-start">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#94A3B8] hover:text-[#FDFBF7] underline"
                >
                  ← Back to Question 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Results & Direct Action */}
          {step === 3 && rolePreference && trackPreference && (
            <div className="space-y-6 text-center animate-fadeIn py-4">
              <div className="w-16 h-16 rounded-full bg-[#B66D44]/20 border-2 border-[#B66D44] flex items-center justify-center text-[#B66D44] mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#B66D44] uppercase tracking-widest">Recommended Alignment</span>
                <h3 className="text-3xl font-extrabold text-[#FDFBF7] mt-1 mb-2">
                  {rolePreference === 'mentee' ? 'Mentee Pathway' : 'Mentor Pathway'}:{' '}
                  <span className="text-[#B66D44]">
                    {trackPreference === 'mens' ? "Men's Track" : trackPreference === 'womens' ? "Women's Track" : "Young Adult Track"}
                  </span>
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
                  Based on your responses, we recommend connecting through our{' '}
                  <strong className="text-[#FDFBF7]">
                    {trackPreference === 'mens' ? "Men's Track" : trackPreference === 'womens' ? "Women's Track" : "Young Adult Discipleship Track"}
                  </strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onOpenModal(rolePreference, trackPreference)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-[#FDFBF7] bg-[#B66D44] hover:bg-[#9E5933] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#B66D44]/20"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    Proceed with {rolePreference === 'mentee' ? 'Mentee' : 'Mentor'} Intake
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-[#94A3B8] hover:text-[#FDFBF7] bg-[#11161B] border border-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
