'use client';

import React from 'react';
import { REVIEWS } from '@/data/trips';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">
          Unvarnished Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-stone-950">
          Stories From the Trail
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
          Authentic moments, spontaneous summits, and lifelong friendships shared by our past cohorts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REVIEWS.map((rev) => (
          <Card3DTilt key={rev.id} maxTilt={6} scale={1.02} glare={true} className="h-full">
            <div className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-3d-card hover:shadow-3d-hover hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full preserve-3d">
              <div style={{ transform: 'translateZ(10px)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-600/30" />
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-light italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between" style={{ transform: 'translateZ(12px)' }}>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-stone-900">{rev.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[11px] text-stone-400 mt-0.5 block">{rev.trip} · {rev.dateOrTag}</span>
                </div>
              </div>
            </div>
          </Card3DTilt>
        ))}
      </div>
    </section>
  );
}

