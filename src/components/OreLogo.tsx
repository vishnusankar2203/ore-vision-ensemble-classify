import React from 'react';

interface OreLogoProps {
  size?: number;
  className?: string;
}

const OreLogo: React.FC<OreLogoProps> = ({ size = 48, className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none"
      className={className}
    >
      {/* Crystal/Minerals shape */}
      <g filter="url(#shadow)">
        {/* Main crystal */}
        <path d="M24 4L32 16L24 28L16 16L24 4Z" fill="url(#crystalGradient)" stroke="#3B82F6" strokeWidth="1.5"/>
        
        {/* Secondary crystals */}
        <path d="M20 20L26 28L20 36L14 28L20 20Z" fill="url(#crystalGradient2)" stroke="#1E40AF" strokeWidth="1"/>
        <path d="M28 20L34 28L28 36L22 28L28 20Z" fill="url(#crystalGradient3)" stroke="#1E40AF" strokeWidth="1"/>
        
        {/* Small accent crystals */}
        <path d="M18 32L22 38L18 44L14 38L18 32Z" fill="#60A5FA" opacity="0.7"/>
        <path d="M30 32L34 38L30 44L26 38L30 32Z" fill="#60A5FA" opacity="0.7"/>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="crystalGradient" x1="24" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6"/>
          <stop offset="0.5" stopColor="#1E40AF"/>
          <stop offset="1" stopColor="#1E3A8A"/>
        </linearGradient>
        
        <linearGradient id="crystalGradient2" x1="20" y1="20" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA"/>
          <stop offset="0.5" stopColor="#3B82F6"/>
          <stop offset="1" stopColor="#1E40AF"/>
        </linearGradient>
        
        <linearGradient id="crystalGradient3" x1="28" y1="20" x2="28" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA"/>
          <stop offset="0.5" stopColor="#3B82F6"/>
          <stop offset="1" stopColor="#1E40AF"/>
        </linearGradient>
        
        <filter id="shadow" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
    </svg>
  );
};

export default OreLogo; 