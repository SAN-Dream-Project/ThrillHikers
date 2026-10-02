'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import EnquiryModal from '@/components/EnquiryModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FEATURED_TOURS } from '@/data/trips';
import { TourPackage } from '@/types/tour';
import { Compass, Sparkles } from 'lucide-react';

export default function ToursPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<string>('');

  const handleEnquire = (tour: TourPackage) => {
    setSelectedTour(tour.title);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-16 flex-1">
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs uppercase tracking-widest font-bold">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Complete Dossier</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-stone-950">
            All Tours & Expeditions
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
            Handcrafted itineraries covering high-altitude Himalayan passes, pristine tropical archipelagos, and ancient desert frontiers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TOURS.map((tour) => (
            <TourCard key={tour.id} tour={tour} onEnquire={handleEnquire} />
          ))}
        </div>
      </main>
      <Footer />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefill={{ destination: selectedTour }}
      />
      <WhatsAppButton />
    </>
  );
}

