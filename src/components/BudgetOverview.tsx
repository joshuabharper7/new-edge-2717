import React from 'react';
import { ShieldCheck, FileText, Heart, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface BudgetOverviewProps {
  onOpenDonate?: () => void;
}

export const BudgetOverview: React.FC<BudgetOverviewProps> = ({ onOpenDonate }) => {
  const pillars = [
    {
      icon: <Building2 className="w-5 h-5 text-[#B66D44]" />,
      title: "Nevada Nonprofit Governance",
      desc: "Incorporated under Nevada nonprofit law with active Board oversight, strict bylaws, and 501(c)(3) tax-exempt status pending."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#B66D44]" />,
      title: "Vetted & Background Checked",
      desc: "Every mentor undergoes background screening, pastoral reference checks, and structured training before match commitment."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#B66D44]" />,
      title: "100% Free for Mentees",
      desc: "All program materials, mentor training, and quarterly gatherings are funded through local donor support — never charging mentees."
    },
    {
      icon: <FileText className="w-5 h-5 text-[#B66D44]" />,
      title: "Washoe County Focused",
      desc: "Partnering with local churches across Reno and Sparks to address real community needs with sustainable volunteer capacity."
    }
  ];

  return (
    <section className="py-20 bg-[#1A2229] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11161B] rounded-3xl border border-[#B66D44]/30 p-8 sm:p-12 shadow-2xl space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A2229] border border-[#B66D44]/30 text-xs font-semibold text-[#B66D44] tracking-widest uppercase mb-3">
              Stewardship & Governance
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FDFBF7] tracking-tight mb-3">
              Built on Integrity & Transparency
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              We believe effective ministry requires high organizational standards, biblically aligned governance, and responsible community leadership.
            </p>
          </div>

          {/* Grid of Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1A2229] border border-slate-800 hover:border-[#B66D44]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#11161B] border border-[#B66D44]/30 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#FDFBF7] mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-[#B66D44]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Partner Callout */}
          {onOpenDonate && (
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h4 className="text-lg font-bold text-[#FDFBF7]">Partner With Us Financially</h4>
                <p className="text-xs text-[#94A3B8] mt-0.5">
                  Help cover mentor training, study curriculum, and young adult community gatherings.
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="px-6 py-3 rounded-xl text-xs font-bold text-[#FDFBF7] bg-[#B66D44] hover:bg-[#9E5933] transition-colors flex items-center gap-2 shadow-md shadow-[#B66D44]/20 shrink-0"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Support the Ministry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
