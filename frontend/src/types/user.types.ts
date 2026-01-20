// ============================================
// USER TYPES - Consolidado de profile + monitor
// ============================================

export type UserRole = 'user' | 'monitor' | 'admin';
export type RunnerStatus = 'Regular' | 'Primera vez' | 'VIP';
export type PaymentStatus = 'PAGADO' | 'PENDIENTE';

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    initials: string;
    phone?: string;
    role: UserRole;
    stats: UserStats;
    createdAt: string;
    isActive: boolean;
}

export interface UserStats {
    eventsAttended: number;
    totalKm: number;
    achievements: Achievement[];
    memberSince: string;
    streak: number;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlockedAt: string;
    category: 'distance' | 'events' | 'social' | 'special';
}

// Runner - Extiende User para panel de monitor
export interface Runner {
    id: string;
    name: string;
    initials?: string;
    avatar?: string;
    pace: string;
    status: RunnerStatus;
    equipment?: string;
    paymentStatus: PaymentStatus;
    checkIn: boolean;
}

// Auth types
export interface AuthCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    expiresAt: string;
}
