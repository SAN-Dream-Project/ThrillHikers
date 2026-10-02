'use client';

import React from 'react';
import { Compass } from 'lucide-react';

interface FloatingCompass3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FloatingCompass3D({ className = '', size = 'md' }: FloatingCompass3DProps) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`relative group perspective-1000 inline-block ${className}`}>
      <div className={`relative ${sizeClasses[size]} rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-950 to-stone-950 p-[1px] shadow-glow-emerald transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-900/90 to-stone-950 flex items-center justify-center relative overflow-hidden backdrop-blur-md border border-emerald-500/20">
          {/* Subtle Ambient Radial Light */}
          <div className="absolute inset-0 bg-radial-gradient from-emerald-400/20 via-transparent to-transparent opacity-60" />
          
          {/* 3D Compass Icon */}
          <Compass className={`${iconSizes[size]} text-emerald-300 drop-shadow-[0_2px_8px_rgba(52,211,153,0.6)] animate-spin-slow`} />

          {/* Shimmer sweep */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

