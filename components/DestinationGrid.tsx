'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from '@/data/trips';
import { ArrowUpRight, Compass } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

const REGIONS = ['All', 'Himalayas', 'North East', 'International', 'Heritage & Desert', 'Beaches & Backwaters'] as const;

export default function DestinationGrid({ onOpenEnquiry }: { onOpenEnquiry: (dest: string) => void }) {
  const [activeRegion, setActiveRegion] = useState<string>('All');

  const filtered = activeRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-emerald-800 mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Curated Terrains</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-stone-950 leading-tight">
            Journeys Crafted for the Bold
          </h2>
        </div>
        <Link
          href="/tours"
          className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors shrink-0 group"
        >
          <span>View All 30+ Expeditions</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Interactive Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {REGIONS.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeRegion === region
                ? 'bg-emerald-950 text-white shadow-md ring-2 ring-emerald-800/40'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* 3D Destination Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filtered.map((dest) => (
            <motion.div
              layout
              key={dest.slug}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
            >
              <Card3DTilt maxTilt={6} scale={1.03} glare={true} className="h-84">
                <div
                  onClick={() => onOpenEnquiry(dest.name)}
                  className="group relative h-84 rounded-3xl overflow-hidden cursor-pointer shadow-3d-card hover:shadow-3d-hover transition-all duration-300 preserve-3d"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/95 via-obsidian-950/30 to-transparent pointer-events-none" />

                  {/* 3D Floating Package Count */}
                  <div
                    className="absolute top-4 right-4 z-20"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-stone-900 shadow-md border border-white/60">
                      {dest.packagesCount} Batches
                    </span>
                  </div>

                  {/* Card Content with 3D Depth */}
                  <div
                    className="absolute bottom-5 left-5 right-5 text-white z-20"
                    style={{ transform: 'translateZ(16px)' }}
                  >
                    <h3 className="text-2xl font-bold font-serif group-hover:text-emerald-300 transition-colors drop-shadow-md">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-1 font-light">
                      {dest.tagline}
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                      <span className="text-stone-300">
                        From <strong className="font-semibold text-white">₹{dest.startPrice.toLocaleString('en-IN')}</strong>
                      </span>
                      <span className="text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

