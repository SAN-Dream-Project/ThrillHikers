'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import FloatingCompass3D from './FloatingCompass3D';

export default function Footer() {
  return (
    <footer className="relative bg-obsidian-950 text-stone-300 pt-20 pb-12 px-4 border-t border-stone-800/80 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <FloatingCompass3D size="sm" />
            <span className="text-2xl font-bold font-serif text-white tracking-tight">
              ThrillHikers
            </span>
          </Link>
          <p className="text-xs text-stone-400 leading-relaxed font-light">
            A bespoke travel collective designed for those who collect summits, horizons, and unscripted stories.
          </p>
          <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 tracking-widest uppercase font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Dream ✦ Explore ✦ Discover</span>
          </div>
        </div>

        {/* Destinations */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Popular Trails</h4>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li><Link href="/tours#Manali" className="hover:text-emerald-400 transition-colors">Manali High Passes</Link></li>
            <li><Link href="/tours#Spiti" className="hover:text-emerald-400 transition-colors">Spiti Valley Winter/Summer</Link></li>
            <li><Link href="/tours#Ladakh" className="hover:text-emerald-400 transition-colors">Ladakh & Zanskar Ridge</Link></li>
            <li><Link href="/tours#Bali" className="hover:text-emerald-400 transition-colors">Bali Volcano & Coast</Link></li>
            <li><Link href="/tours#Kedarnath" className="hover:text-emerald-400 transition-colors">Kedarnath & Badrinath</Link></li>
            <li><Link href="/tours" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">All Expeditions →</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li><Link href="/tours" className="hover:text-emerald-400 transition-colors">Group Departures</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Our Captains</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Custom Private Charters</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Safety Protocols & Gear</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Terms & Privacy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Headquarters</h4>
          <div className="space-y-3 text-xs text-stone-400">
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 95570 05400</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>hello@thrillhikers.com</span>
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">B9, Orchid Petals, Sector 49, Gurgaon 122018, Haryana</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-900 text-center text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} ThrillHikers Expeditions. All rights reserved.</span>
        <span className="text-stone-400">Himalayan Passes · Tropical Archipelagos · High Deserts</span>
      </div>
    </footer>
  );
}

