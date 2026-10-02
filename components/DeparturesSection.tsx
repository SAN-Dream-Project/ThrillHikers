'use client';

import React from 'react';
import { FIXED_DEPARTURES } from '@/data/trips';
import { Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function DeparturesSection({ onOpenEnquiry }: { onOpenEnquiry: (dest: string) => void }) {
  return (
    <section id="departures" className="py-24 bg-stone-100/70 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-emerald-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Confirmed Groups</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-950">
              Upcoming Fixed Departures
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Guaranteed departure dates with solo traveler matching in every batch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FIXED_DEPARTURES.map((item) => (
            <Card3DTilt key={item.id} maxTilt={6} scale={1.02} glare={true} className="h-full">
              <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-3d-card hover:shadow-3d-hover hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full preserve-3d">
                <div style={{ transform: 'translateZ(10px)' }}>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-4">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" /> {item.date}
                    </span>
                    <span className="bg-amber-50 text-amber-900 border border-amber-200/60 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                      {item.availableSeats} spots left
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 font-serif text-xl group-hover:text-emerald-900 transition-colors">
                    {item.destination}
                  </h4>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between" style={{ transform: 'translateZ(12px)' }}>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 font-bold block">Fixed Fare</span>
                    <span className="text-xl font-extrabold text-stone-900 font-serif">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(item.destination)}
                    className="px-4 py-2 rounded-xl bg-emerald-900 text-white text-xs font-semibold hover:bg-emerald-800 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer hover:shadow-glow-emerald"
                  >
                    Join <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}

