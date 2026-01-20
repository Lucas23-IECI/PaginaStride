import { Event } from '../types';
import { api, USE_MOCKS } from './api';
import { MOCK_EVENTS } from '../mocks';

// Simular delay de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const eventsService = {
    async getAll(): Promise<Event[]> {
        if (USE_MOCKS) {
            await delay(300);
            return MOCK_EVENTS;
        }
        return api.get<Event[]>('/events');
    },

    async getById(id: string): Promise<Event | undefined> {
        if (USE_MOCKS) {
            await delay(200);
            return MOCK_EVENTS.find(e => e.id === id);
        }
        return api.get<Event>(`/events/${id}`);
    },

    async getFeatured(): Promise<Event[]> {
        if (USE_MOCKS) {
            await delay(300);
            return MOCK_EVENTS.filter(e => e.isFeatured);
        }
        return api.get<Event[]>('/events', { featured: 'true' });
    },

    async getUpcoming(): Promise<Event[]> {
        if (USE_MOCKS) {
            await delay(300);
            return MOCK_EVENTS.filter(e => e.status === 'upcoming');
        }
        return api.get<Event[]>('/events', { status: 'upcoming' });
    }
};
