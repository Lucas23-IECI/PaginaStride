export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  LEVEL_SELECTION = 'LEVEL_SELECTION',
  REGISTRATION = 'REGISTRATION',
  SUCCESS = 'SUCCESS'
}

export interface RunLevel {
  id: string;
  title: string;
  monitor: string;
  monitorAvatar: string;
  description: string;
  pace: string;
  image: string;
  tag: string;
  tagColor: 'primary' | 'secondary' | 'purple' | 'teal';
  type: 'fun' | 'training' | 'performance';
}

export interface Event {
  id: string;
  title: string;
  subtitle?: string;
  date: string; // "OCT 16"
  day: string; // "Jueves"
  time: string;
  location: string;
  type: 'Social Run' | 'Social Girl' | 'Brunch & Yoga' | 'Benefit';
  monitors: { name: string; avatar: string }[];
  isFeatured?: boolean;
  image?: string;
}

export interface RegistrationData {
  name: string;
  phone: string;
  emergencyContact: string;
  isFirstTime: boolean;
}