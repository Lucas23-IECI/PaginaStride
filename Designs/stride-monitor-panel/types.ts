export interface Runner {
    id: string;
    name: string;
    initials?: string;
    avatar?: string;
    pace: string;
    status: 'Regular' | 'Primera vez' | 'VIP';
    equipment?: string;
    paymentStatus: 'PAGADO' | 'PENDIENTE';
    checkIn: boolean;
}

export interface SessionStats {
    totalRegistered: number;
    checkIns: number;
    attendancePercentage: number;
    freeSpots: number;
    temperature: number;
    weatherIcon: string;
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
