export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  destination: string;
  region: 'Himalayas' | 'North East' | 'International' | 'Heritage & Desert' | 'Beaches & Backwaters';
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  badge?: 'Bestseller' | 'Most popular' | 'Top Picks';
  rating: number;
  reviewCount: number;
  originalPrice: number;
  discountedPrice: number;
  featuredImage: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  departureDates: string[];
}

export interface Destination {
  name: string;
  slug: string;
  region: 'Himalayas' | 'North East' | 'International' | 'Heritage & Desert' | 'Beaches & Backwaters';
  packagesCount: number;
  startPrice: number;
  tagline: string;
  image: string;
}

export interface FixedDeparture {
  id: string;
  date: string;
  destination: string;
  price: number;
  availableSeats: number;
}

export interface Review {
  id: string;
  author: string;
  trip: string;
  dateOrTag: string;
  rating: number;
  content: string;
  avatar?: string;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  destination: string;
  travelMonth: string;
  groupSize: string;
  notes?: string;
}
