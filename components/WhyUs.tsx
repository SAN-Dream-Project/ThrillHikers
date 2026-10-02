'use client';

import React from 'react';
import { Compass, Clock, ShieldCheck, Sparkles, Award } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function WhyUs() {
  return (
    <section className="relative py-24 bg-obsidian-950 text-white px-4 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ThrillHikers Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Travel is the only thing you buy that makes you richer.
          </h2>
          <p className="text-sm text-stone-400 font-light leading-relaxed">
            Every departure is calibrated for genuine companionship, authentic local homestays, and zero compromise on safety.
          </p>
        </div>

        {/* 3D Stat Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8">
          {[
            { value: '8+', label: 'Years on the Road', sub: 'Since 2018' },
            { value: '4,200+', label: 'Happy Explorers', sub: '98% Satisfaction' },
            { value: '75+', label: 'Curated Routes', sub: 'Vetted Each Season' },
            { value: '4.9★', label: 'Average Rating', sub: 'Across 600+ Reviews' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel-dark p-6 rounded-3xl border border-white/10 text-center shadow-3d-card hover:border-emerald-500/30 transition-all duration-300"
            >
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs text-white font-semibold uppercase tracking-wider mt-2 block">
                {stat.label}
              </span>
              <span className="text-[11px] text-stone-400 mt-0.5 block font-light">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 3D Value Props with Interactive Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card3DTilt maxTilt={8} scale={1.02} glare={true}>
            <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 space-y-4 shadow-3d-card hover:border-emerald-500/40 transition-all h-full preserve-3d">
              <div
                className="w-14 h-14 rounded-2xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-emerald"
                style={{ transform: 'translateZ(20px)' }}
              >
                <Compass className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white" style={{ transform: 'translateZ(14px)' }}>
                Trip captains, not tour guides
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light" style={{ transform: 'translateZ(10px)' }}>
                Every departure runs with an experienced captain who has traversed the trail a dozen times — certified in wilderness first aid and aware of the best secret vantage points.
              </p>
            </div>
          </Card3DTilt>

          <Card3DTilt maxTilt={8} scale={1.02} glare={true}>
            <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 space-y-4 shadow-3d-card hover:border-emerald-500/40 transition-all h-full preserve-3d">
              <div
                className="w-14 h-14 rounded-2xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-emerald"
                style={{ transform: 'translateZ(20px)' }}
              >
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white" style={{ transform: 'translateZ(14px)' }}>
                Zero cookie-cutter itineraries
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light" style={{ transform: 'translateZ(10px)' }}>
                Our trails are hand-crafted and scouted each season. If a location stops being magical or gets overrun with commercial noise, it leaves our plan.
              </p>
            </div>
          </Card3DTilt>

          <Card3DTilt maxTilt={8} scale={1.02} glare={true}>
            <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 space-y-4 shadow-3d-card hover:border-emerald-500/40 transition-all h-full preserve-3d">
              <div
                className="w-14 h-14 rounded-2xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-emerald"
                style={{ transform: 'translateZ(20px)' }}
              >
                <Clock className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white" style={{ transform: 'translateZ(14px)' }}>
                Humans on call, 24×7
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light" style={{ transform: 'translateZ(10px)' }}>
                From your initial gear consultation until your safe journey home, a real mountain specialist answers directly. No automated bots or endless waiting loops.
              </p>
            </div>
          </Card3DTilt>
        </div>
      </div>
    </section>
  );
}

