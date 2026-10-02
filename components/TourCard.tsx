'use client';

import React from 'react';
import Link from 'next/link';
import { Star, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { TourPackage } from '@/types/tour';
import Card3DTilt from './Card3DTilt';

interface TourCardProps {
  tour: TourPackage;
  onEnquire: (tour: TourPackage) => void;
}

export default function TourCard({ tour, onEnquire }: TourCardProps) {
  return (
    <Card3DTilt maxTilt={7} scale={1.02} glare={true} className="h-full">
      <div className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 hover:border-emerald-400/80 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 flex flex-col justify-between h-full preserve-3d">
        {/* Image Container with 3D Depth */}
        <div className="relative h-64 w-full overflow-hidden bg-stone-900">
          <img
            src={tour.featuredImage}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Floating 3D Badge */}
          {tour.badge && (
            <div
              className="absolute top-4 left-4 z-20"
              style={{ transform: 'translateZ(24px)' }}
            >
              <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-emerald-950 shadow-lg border border-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {tour.badge}
              </span>
            </div>
          )}

          {/* Duration Badge */}
          <div
            className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium shadow-md border border-white/10"
            style={{ transform: 'translateZ(20px)' }}
          >
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{tour.duration}</span>
          </div>

          {/* Verified Route Pill */}
          <div
            className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-emerald-950/85 backdrop-blur-md px-2.5 py-1 rounded-full text-emerald-300 text-[10px] font-semibold border border-emerald-500/20"
            style={{ transform: 'translateZ(20px)' }}
          >
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Verified</span>
          </div>
        </div>

        {/* Content Section with 3D layering */}
        <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(12px)' }}>
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-bold uppercase tracking-wider text-emerald-800 text-[11px]">
                {tour.destination} · {tour.difficulty}
              </span>
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full text-amber-700 font-bold border border-amber-200/50">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{tour.rating}</span>
                <span className="text-stone-400 font-normal text-[10px]">({tour.reviewCount})</span>
              </div>
            </div>

            <Link href={`/tours/${tour.slug}`}>
              <h3 className="font-serif font-bold text-stone-900 text-xl group-hover:text-emerald-800 transition-colors line-clamp-1 leading-snug">
                {tour.title}
              </h3>
            </Link>

            <p className="text-xs text-stone-600 mt-2.5 line-clamp-2 leading-relaxed font-light">
              {tour.description}
            </p>
          </div>

          {/* Price & CTA */}
          <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">Starts from</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-stone-950 font-serif">
                  ₹{tour.discountedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-stone-400 line-through">
                  ₹{tour.originalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() => onEnquire(tour)}
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-900 text-emerald-900 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm group-hover:bg-emerald-900 group-hover:text-white"
            >
              Enquire <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Card3DTilt>
  );
}

