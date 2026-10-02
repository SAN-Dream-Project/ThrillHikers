'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DestinationGrid from '@/components/DestinationGrid';
import DeparturesSection from '@/components/DeparturesSection';
import SignatureTours from '@/components/SignatureTours';
import WhyUs from '@/components/WhyUs';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { TourPackage } from '@/types/tour';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefill, setPrefill] = useState<{ destination?: string; travelMonth?: string; groupSize?: string }>({});

  const handleOpenModal = (data?: { destination?: string; travelMonth?: string; groupSize?: string }) => {
    if (data) setPrefill(data);
    setModalOpen(true);
  };

  const handleTourEnquiry = (tour: TourPackage) => {
    setPrefill({ destination: tour.title });
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenEnquiry={() => handleOpenModal()} />
      <main className="flex-1">
        <Hero onOpenEnquiry={handleOpenModal} />
        <DestinationGrid onOpenEnquiry={(dest) => handleOpenModal({ destination: dest })} />
        <DeparturesSection onOpenEnquiry={(dest) => handleOpenModal({ destination: dest })} />
        <SignatureTours onEnquire={handleTourEnquiry} />
        <WhyUs />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefill={prefill}
      />
      <WhatsAppButton />
    </>
  );
}
