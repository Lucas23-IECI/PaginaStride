import { Event, EventType } from '../types';

export const MOCK_EVENTS: Event[] = [
    {
        id: '1',
        title: 'Parque Bicentenario Run',
        subtitle: 'Social Run 5K',
        date: '2026-01-25',
        day: 'Sábado',
        time: '09:00 AM',
        location: 'Parque Bicentenario, Concepción',
        coordinates: { lat: -36.8270, lng: -73.0503 },
        type: 'social-run',
        description: 'Nuestra carrera insignia. 5K para todos los niveles, terminando con café y conversación.',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
        monitors: [
            { id: 'm1', name: 'Juan Flores', initials: 'JF' },
            { id: 'm2', name: 'María López', initials: 'ML' }
        ],
        maxCapacity: 50,
        currentRegistrations: 32,
        price: 0,
        isFeatured: true,
        status: 'upcoming'
    },
    {
        id: '2',
        title: 'Social Girl',
        subtitle: 'Exclusivo Mujeres',
        date: '2026-02-08',
        day: 'Sábado',
        time: '10:00 AM',
        location: 'Parque Ecuador, Concepción',
        type: 'social-girl',
        description: 'Un espacio seguro y empoderador exclusivo para mujeres. Incluye 5K + Yoga + Brunch.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        monitors: [
            { id: 'm3', name: 'Carolina Soto', initials: 'CS' }
        ],
        maxCapacity: 30,
        currentRegistrations: 18,
        price: 5000,
        isFeatured: true,
        status: 'upcoming'
    },
    {
        id: '3',
        title: 'Run, Brunch & Yoga',
        subtitle: 'The Body Club',
        date: '2026-02-15',
        day: 'Sábado',
        time: '09:00 AM',
        location: 'The Body Club, Concepción',
        type: 'brunch-yoga',
        description: 'El equilibrio perfecto. Running suave + yoga restaurativo + brunch nutritivo.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
        monitors: [
            { id: 'm1', name: 'Juan Flores', initials: 'JF' }
        ],
        maxCapacity: 25,
        currentRegistrations: 20,
        price: 15000,
        status: 'upcoming'
    },
    {
        id: '4',
        title: 'Corrida TECHO',
        subtitle: 'Evento Benéfico 6K',
        date: '2026-03-05',
        day: 'Sábado',
        time: '10:00 AM',
        location: 'Central Norte, Concepción',
        type: 'benefit',
        description: 'Corremos con propósito. Cada kilómetro recauda fondos para TECHO Chile.',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
        monitors: [
            { id: 'm1', name: 'Juan Flores', initials: 'JF' },
            { id: 'm2', name: 'María López', initials: 'ML' },
            { id: 'm3', name: 'Carolina Soto', initials: 'CS' }
        ],
        maxCapacity: 100,
        currentRegistrations: 45,
        price: 10000,
        isFeatured: true,
        status: 'upcoming'
    }
];

export const getEventTypeLabel = (type: EventType): string => {
    const labels: Record<EventType, string> = {
        'social-run': 'Social Run',
        'social-girl': 'Social Girl',
        'brunch-yoga': 'Brunch & Yoga',
        'benefit': 'Evento Benéfico',
        'training': 'Entrenamiento',
        'trip': 'Viaje'
    };
    return labels[type];
};

export const getEventTypeColor = (type: EventType): string => {
    const colors: Record<EventType, string> = {
        'social-run': 'bg-primary',
        'social-girl': 'bg-accent-purple',
        'brunch-yoga': 'bg-secondary',
        'benefit': 'bg-accent-green',
        'training': 'bg-accent-gold',
        'trip': 'bg-blue-500'
    };
    return colors[type];
};
