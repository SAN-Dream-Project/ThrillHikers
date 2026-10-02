'use client';

import React, { useRef, useState, useCallback } from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export default function Card3DTilt({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovered: false,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    // Calculate rotation between -maxTilt and +maxTilt
    const rotateY = ((x / width) - 0.5) * (maxTilt * 2);
    const rotateX = -((y / height) - 0.5) * (maxTilt * 2);

    // Glare coordinates in percentages
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;

    setTransform({
      rotateX,
      rotateY,
      glareX,
      glareY,
      glareOpacity: 0.18,
      isHovered: true,
    });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      isHovered: false,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative preserve-3d transition-transform ease-out will-change-transform ${className}`}
      style={{
        transform: transform.isHovered
          ? `perspective(1000px) rotateX(${transform.rotateX.toFixed(2)}deg) rotateY(${transform.rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transitionDuration: transform.isHovered ? '120ms' : '500ms',
      }}
    >
      {children}

      {/* 3D Specular Light Glare Sheen */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
          style={{
            opacity: transform.glareOpacity,
            background: `radial-gradient(circle 280px at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)`,
          }}
        />
      )}
    </div>
  );
}

