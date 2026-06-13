export interface SEOConfig {
  title: string;
  description: string;
  ogImage: string;
}

export interface Person {
  name: string;
  fullName?: string;
  photo: string;
  father?: string;
  mother?: string;
  order?: number;
}

export interface EventDetail {
  date: string;
  time: string;
  venue: string;
  address: string;
}

export interface LoveStoryItem {
  date: string;
  title: string;
  description: string;
}

export interface GallerySectionConfig {
  title?: string;
  images: string[];
}

export interface MapLocation {
  venue: string;
  address: string;
  embedUrl: string;
}

export interface MapsConfig {
  akad?: MapLocation;
  reception?: MapLocation;
}

export interface RSVPConfig {
  formUrl: string;
  label?: string;
  deadline?: string;
}

export interface BankAccount {
  bank: string;
  name: string;
  number: string;
}

export interface GiftConfig {
  title?: string;
  message?: string;
  bank?: BankAccount[];
  qris?: string;
}

export interface MusicConfig {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
}

export interface CoverConfig {
  brideName: string;
  groomName: string;
  coverImage?: string;
  quote?: string;
}

export interface CoupleConfig {
  groom: Person;
  bride: Person;
}

export interface EventConfig {
  akad: EventDetail;
  reception: EventDetail;
}

export interface CountdownConfig {
  eventDate: string;
  label?: string;
}

export type ThemeCategory = "natural" | "classic" | "modern" | "traditional" | "floral" | "bohemian";

export interface TemplateConfig {
  category: ThemeCategory;
  seo: SEOConfig;
  cover: CoverConfig;
  couple: CoupleConfig;
  event: EventConfig;
  countdown: CountdownConfig;
  loveStory: LoveStoryItem[];
  gallery: GallerySectionConfig;
  maps: MapsConfig;
  rsvp: RSVPConfig;
  gift: GiftConfig;
  music: MusicConfig;
}
