'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Search, Sparkles, Compass, ShieldCheck, Mountain } from 'lucide-react';
import FloatingCompass3D from './FloatingCompass3D';

// Dynamically import 3D Three.js canvas to prevent SSR issues
const ThreeMountainCanvas = dynamic(() => import('./ThreeMountainCanvas'), {
  ssr: false,
});

interface HeroProps {
  onOpenEnquiry: (prefill?: { destination?: string; travelMonth?: string; groupSize?: string }) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const [destination, setDestination] = useState('');
  const [month, setMonth] = useState('October 2026');
  const [guests, setGuests] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenEnquiry({ destination, travelMonth: month, groupSize: guests });
  };

  return (
    <section className="relative min-h-[94vh] flex flex-col items-center justify-center text-center px-4 bg-obsidian-950 text-white overflow-hidden pt-12 pb-20">
      {/* 3D WebGL Mountain Scene */}
      <ThreeMountainCanvas />

      {/* Atmospheric Overlays & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/70 via-obsidian-950/30 to-obsidian-950 pointer-events-none z-1" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating 3D Ambient Badges */}
      <div className="hidden lg:block absolute left-8 xl:left-16 top-1/3 -translate-y-1/2 z-20 pointer-events-none">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass-panel-dark px-4 py-3 rounded-2xl flex items-center gap-3 shadow-3d-card border border-white/10 text-left backdrop-blur-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Mountain className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Himalayan Passes</div>
            <div className="text-xs font-semibold text-white">18,380 ft Khardung La</div>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="glass-panel-dark px-4 py-3 rounded-2xl flex items-center gap-3 shadow-3d-card border border-white/10 text-left backdrop-blur-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Small Group Batches</div>
            <div className="text-xs font-semibold text-white">1/3 Solo Travellers</div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {/* Banner Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-xl border border-emerald-500/30 text-xs tracking-wider uppercase font-semibold text-emerald-300 shadow-glow-emerald"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          Curated Group Trips & High-Altitude Expeditions
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight max-w-4xl mx-auto leading-[1.08] text-white"
        >
          Uncover the World&apos;s <br />
          <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-amber-200 bg-clip-text text-transparent italic font-serif">
            Untamed Wonders.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Intimate groups, verified wilderness captains, and bespoke routes across the Himalayas, tropical coasts, and historic frontiers.
        </motion.p>

        {/* 3D Frosted Filter Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-2xl text-stone-800 p-3 sm:p-4 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center gap-3 max-w-3xl mx-auto border border-white/80 ring-1 ring-emerald-900/10 hover:shadow-3d-hover transition-all duration-300"
          >
            <div className="flex items-center gap-3 px-4 w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-stone-200 pb-2 sm:pb-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="text-left w-full">
                <label className="block text-[10px] font-bold uppercase text-stone-400 tracking-wider">Where to</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold focus:outline-none cursor-pointer text-stone-900"
                >
                  <option value="">Any Destination</option>
                  <option value="Manali">Manali</option>
                  <option value="Spiti Valley">Spiti Valley</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Kashmir">Kashmir</option>
                  <option value="Kedarnath & Badrinath">Kedarnath & Badrinath</option>
                  <option value="Bali">Bali</option>
                  <option value="Bhutan">Bhutan</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-stone-200 pb-2 sm:pb-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="text-left w-full">
                <label className="block text-[10px] font-bold uppercase text-stone-400 tracking-wider">Month</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold focus:outline-none cursor-pointer text-stone-900"
                >
                  <option value="Flexible">Flexible</option>
                  <option value="October 2026">October 2026</option>
                  <option value="November 2026">November 2026</option>
                  <option value="December 2026">December 2026</option>
                  <option value="January 2027">January 2027</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 w-full sm:w-1/4 pb-2 sm:pb-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="text-left w-full">
                <label className="block text-[10px] font-bold uppercase text-stone-400 tracking-wider">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold focus:outline-none cursor-pointer text-stone-900"
                >
                  <option value="1">1 (Solo)</option>
                  <option value="2">2 (Couple)</option>
                  <option value="3-5">3–5 (Small Group)</option>
                  <option value="6-10">6–10 (Group)</option>
                  <option value="10+">10+ (Custom)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-glow-emerald shrink-0 cursor-pointer group"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
              <span>Enquire</span>
            </button>
          </form>
        </motion.div>

        {/* Highlights Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300 pt-3"
        >
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-400">✦</span> 300+ Iconic Trail Milestones
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-400">✦</span> Verified Trip Captains
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-400">✦</span> 100% Transparent Pricing
          </span>
        </motion.div>
      </div>
    </section>
  );
}

