export type TrackId = 'mens' | 'womens' | 'young_adult';

export interface Track {
  id: TrackId;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  format: string;
  cadence: string;
  features: string[];
  image: string;
  iconName: string;
  badge: string;
}

export interface PathwayStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  keyActions: string[];
  iconName: string;
}

export interface DoctrinalPoint {
  id: number;
  title: string;
  scriptures: string;
  summary: string;
  fullText: string;
  category: string;
}

export type ModalTab = 'mentee' | 'mentor';

export interface IntakeFormData {
  name: string;
  email: string;
  phone: string;
  track: TrackId;
  growthGoals?: string;
  faithBackground?: string;
  agreedToStatement?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'mentees' | 'mentors';
}
