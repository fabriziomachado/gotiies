export interface Speaker {
  name: string;
  role?: string;
  bio: string;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface Location {
  name: string;
  mapUrl: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  speakers: Speaker[];
  track: 'main' | 'workshop' | 'panel';
  description: string;
  date: string;
  location: Location;
  details?: {
    longDescription?: string;
    prerequisites?: string[];
    materials?: string[];
    objectives?: string[];
  };
}

export interface Track {
  id: 'main' | 'workshop' | 'panel';
  name: string;
  color: string;
}

export interface Photo {
  url: string;
  title: string;
  description: string;
  category: string;
}