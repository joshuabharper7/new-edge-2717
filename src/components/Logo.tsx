import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric Sharp Blades Logo (Proverbs 27:17 Iron Sharpens Iron) */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} bg-gradient-to-br from-[#222B32] to-[#1A2229] border border-[#B66D44]/40 rounded-lg p-1.5 shadow-md shadow-black/40 group hover:border-[#B66D44] transition-all duration-300`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Triangle Frame */}
          <polygon points="50,12 90,82 10,82" stroke="#B66D44" strokeWidth="6" strokeLinejoin="round" fill="none" className="opacity-90" />
          {/* Interlocking Blade 1 */}
          <path d="M35 75 L55 25 L65 30 L45 80 Z" fill="#FDFBF7" className="group-hover:fill-[#F8EDE6] transition-colors" />
          {/* Interlocking Blade 2 */}
          <path d="M65 75 L45 25 L35 30 L55 80 Z" fill="#B66D44" className="group-hover:fill-[#9E5933] transition-colors" />
          {/* Sharpening Spark Center */}
          <circle cx="50" cy="48" r="4" fill="#FDFBF7" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold tracking-tight text-[#FDFBF7] ${textSizes[size]}`}>
            New Edge <span className="text-[#B66D44]">27:17</span>
          </span>
          <span className="text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
            Ministries
          </span>
        </div>
      )}
    </div>
  );
};
