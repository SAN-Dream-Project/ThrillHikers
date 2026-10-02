'use client';

import React from 'react';
import Link from 'next/link';
import { FEATURED_TOURS } from '@/data/trips';
import TourCard from './TourCard';
import { TourPackage } from '@/types/tour';
import { ArrowUpRight, Flame } from 'lucide-react';

export default function SignatureTours({ onEnquire }: { onEnquire: (tour: TourPackage) => void }) {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-emerald-800 mb-2">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>High-Demand Routes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-stone-950 leading-tight">
            Signature Expeditions
          </h2>
        </div>
        <Link
          href="/tours"
          className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group shrink-0"
        >
          <span>Explore All Journeys</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_TOURS.map((tour) => (
          <TourCard key={tour.id} tour={tour} onEnquire={onEnquire} />
        ))}
      </div>
    </section>
  );
}

