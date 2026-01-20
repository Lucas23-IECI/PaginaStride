// ============================================
// EVENT TYPES - Consolidado de inscripción + monitor
// ============================================

export type EventType = 'Social Run' | 'Social Girl' | 'Brunch & Yoga' | 'Benefit' | 'Training' | 'Trip';

export interface Monitor {
    id: string;
    name: string;
    avatar?: string;
    initials?: string;
}

export interface Event {
    id: string;
    title: string;
    subtitle?: string;
    date: string;
    day: string;
    time: string;
    location: string;
    coordinates?: { lat: number; lng: number };
    type: EventType;
    description?: string;
    image?: string;
    monitors: Monitor[];
    maxCapacity?: number;
    currentRegistrations?: number;
    price?: number;
    isFeatured?: boolean;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export type RunLevelType = 'fun' | 'training' | 'performance';
export type TagColor = 'primary' | 'secondary' | 'purple' | 'teal';

export interface RunLevel {
    id: string;
    title: string;
    monitor: string;
    monitorAvatar: string;
    description: string;
    pace: string;
    image: string;
    tag: string;
    tagColor: TagColor;
    type: RunLevelType;
}

export interface RegistrationData {
    name: string;
    phone: string;
    emergencyContact: string;
    isFirstTime: boolean;
}

export interface Registration {
    id: string;
    eventId: string;
    userId: string;
    level?: RunLevel;
    registeredAt: string;
    status: 'confirmed' | 'pending' | 'cancelled';
    data: RegistrationData;
}
