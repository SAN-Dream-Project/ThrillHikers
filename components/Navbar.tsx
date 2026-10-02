'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import FloatingCompass3D from './FloatingCompass3D';

export default function Navbar({ onOpenEnquiry }: { onOpenEnquiry: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand with 3D Compass */}
        <Link href="/" className="flex items-center gap-3 group">
          <FloatingCompass3D size="sm" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-emerald-950 font-serif leading-none group-hover:text-emerald-800 transition-colors">
              ThrillHikers
            </span>
            <span className="text-[9px] uppercase tracking-widest text-emerald-700 font-bold mt-1">
              Dream ✦ Explore ✦ Discover
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
          <Link href="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <div className="relative group py-2">
            <Link href="/tours" className="hover:text-emerald-800 transition-colors flex items-center gap-1">
              Tours <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
            </Link>
            <div className="absolute top-full -left-4 hidden group-hover:block w-72 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-3 border border-stone-200 animate-in fade-in slide-in-from-top-2">
              <Link href="/tours#Himalayas" className="block px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors">
                🏔️ Himalayas (Manali, Spiti, Ladakh)
              </Link>
              <Link href="/tours#North-East" className="block px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors">
                🌿 North East (Meghalaya, Sikkim)
              </Link>
              <Link href="/tours#International" className="block px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors">
                ✈️ International (Bali, Bhutan)
              </Link>
              <Link href="/tours#Heritage" className="block px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors">
                🏰 Heritage & Desert (Rajasthan)
              </Link>
              <Link href="/tours#Beaches" className="block px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors">
                🏖️ Beaches & Backwaters (Goa, Kerala)
              </Link>
            </div>
          </div>
          <Link href="/tours" className="hover:text-emerald-800 transition-colors">Group Trips</Link>
          <Link href="#departures" className="hover:text-emerald-800 transition-colors">Departures</Link>
          <Link href="#reviews" className="hover:text-emerald-800 transition-colors">Reviews</Link>
          <Link href="/contact" className="hover:text-emerald-800 transition-colors">Contact</Link>
        </nav>

        {/* Contact & CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919557005400"
            className="text-xs text-stone-600 flex items-center gap-1.5 font-medium hover:text-emerald-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            +91 95570 05400
          </a>
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-900 to-emerald-800 text-white text-xs font-semibold tracking-wide hover:from-emerald-800 hover:to-emerald-700 transition-all shadow-sm hover:shadow-glow-emerald cursor-pointer"
          >
            Enquire Now <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-stone-700 rounded-xl hover:bg-stone-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-stone-200 px-6 py-5 space-y-4 shadow-xl">
          <Link href="/" className="block text-stone-800 font-medium hover:text-emerald-800" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/tours" className="block text-stone-800 font-medium hover:text-emerald-800" onClick={() => setIsOpen(false)}>All Tours & Packages</Link>
          <Link href="#departures" className="block text-stone-800 font-medium hover:text-emerald-800" onClick={() => setIsOpen(false)}>Fixed Departures</Link>
          <Link href="#reviews" className="block text-stone-800 font-medium hover:text-emerald-800" onClick={() => setIsOpen(false)}>Traveller Stories</Link>
          <Link href="/contact" className="block text-stone-800 font-medium hover:text-emerald-800" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <div className="pt-2 border-t border-stone-100">
            <button
              onClick={() => { setIsOpen(false); onOpenEnquiry(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 text-white font-medium text-sm flex items-center justify-center gap-1 shadow hover:shadow-glow-emerald"
            >
              Enquire Now <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

