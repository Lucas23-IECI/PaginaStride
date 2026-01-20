// ============================================
// SESSION TYPES - Del panel de monitor
// ============================================

export interface SessionStats {
    totalRegistered: number;
    checkIns: number;
    attendancePercentage: number;
    freeSpots: number;
    temperature?: number;
    weatherIcon?: string;
    location: string;
}

export interface ChecklistItem {
    id: string;
    label: string;
    checked: boolean;
}

export interface Feedback {
    id: string;
    author: string;
    avatar?: string;
    initials?: string;
    rating: number;
    date: string;
    comment: string;
}

export interface SessionHistory {
    id: string;
    date: { day: string; month: string };
    title: string;
    time: string;
    location: string;
    runners: number;
}
