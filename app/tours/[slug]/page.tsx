import { notFound } from 'next/navigation';
import { FEATURED_TOURS } from '@/data/trips';
import TourDetailClient from './TourDetailClient';

export function generateStaticParams() {
  return FEATURED_TOURS.map((tour) => ({
    slug: tour.slug,
  }));
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = FEATURED_TOURS.find((t) => t.slug === params.slug);

  if (!tour) return notFound();

  return <TourDetailClient tour={tour} />;
}

