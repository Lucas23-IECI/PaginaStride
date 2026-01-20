// ============================================
// MOCK EVENTS - Extraídos de Home.tsx
// ============================================

export interface LandingEvent {
    id: string;
    day: string;
    month: string;
    time: string;
    title: string;
    location: string;
    color: string;
    textColor: string;
    mapImage: string;
}

export const MOCK_LANDING_EVENTS: LandingEvent[] = [
    {
        id: '1',
        day: '24',
        month: 'Octubre',
        time: '09:00 AM',
        title: 'Parque Bicentenario Run',
        location: 'Concepción, Chile',
        color: 'bg-primary',
        textColor: 'text-primary',
        mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtnOvalaDnnUwOsj_wPZpj-Os3hnxA7rRde6Y6FHiziuJ6EfgW8N4h6SPnG_PrAsAxhXHhTMPNIxdmislT4vBPSr2AboR9L42fNuj7W5cqQUjma8_5sNZXu8qgJHAHOt0vAwdbC8WyJKGm0lMyU1QBqMXSbX-lQaH7jxfS7fyipUX2feJ33NcmTZFAoP-6hPmdxF1x73jH9sGN1nCr5OZ5FVegM3ljtHxL2c27wiVQkdavZEGsb-bjq7LTrCPSv0Hm758aCXgQEglo',
    },
    {
        id: '2',
        day: '02',
        month: 'Noviembre',
        time: '18:30 PM',
        title: 'Sunset City Run',
        location: 'Plaza de la Independencia',
        color: 'bg-[#9c27b0]',
        textColor: 'text-[#9c27b0]',
        mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe7b2zP4UpYeut-qwiiixwl6L_TeYNBHxtTGzppZRX-yuzDcwuiddx6owppbOANNtxajnB6RqfHJ4n3T4hGtyWgZzuuS8ADKMq9BO1JfRrEtwgFlLXkzZD0H2YWYZQd2fpWQRKCZSTe1j2l1l7kDFUdQGDm86VEIYxL-N4ClgkPRw92eulLZtWIek3cRrel6me0oLOYn2UZoLvUPxqI8v-BCcy1egC10RPyxSFUoUODysPttlOLxKt9mQhv0e8P87ibLI2lO8i-_mr',
    },
    {
        id: '3',
        day: '15',
        month: 'Noviembre',
        time: '10:00 AM',
        title: 'Yoga & Brunch',
        location: 'Estadio Ester Roa',
        color: 'bg-secondary',
        textColor: 'text-secondary',
        mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdEcGSkEu0sawR95meheu7YeeAT16Fl7fVZgN6de2JBBXqA4zQv11qInXJ8CjQEzCRXu6qYgxVXXCWfS1nbmJ89FQXj8cS8Ym9aWxVfHCoN1XZ7iO1UbVwuTctktEMlrChFAXbcfWOgrDFc_wnIFzWx3S5hOZSRODMNSPkpiZP5lwqoin5m39anZTakfEUeqSa3EWkGmoRlex5dvvrvqZcptEOp8nshiO51Dvp7CyT0Yj3gJfe6suTukZ1Ij7njTJWjukLClECI0CE',
    },
];

// Experiencias para el Hub
export interface LandingExperience {
    id: string;
    title: string;
    description: string;
    image: string;
    badge: string;
    badgeBg: string;
    badgeText: string;
    borderColor: string;
    icon?: string;
}

export const MOCK_LANDING_EXPERIENCES: LandingExperience[] = [
    {
        id: 'social-run',
        title: 'Social Run',
        description: 'Nuestra experiencia insignia. 5K a 10K para todos los niveles, terminando siempre con buena conversación y café.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxLBJRLh7xjbT3sH6tpaXaeULiLJrEXNlOs2gUEbsdcOzhxHuQP4tTohUyk4aaGxr_0Lf5JakwgTARmaS3lefO9y3Da36V6I1K4YV4EfmtwHUVcb9-7xwwOFHLuw2b6MGu_ltNTQfjFc116aFXzUbhr6jKdNeSeNzEYAfRlYobLjDOZwgjvmdvyT0MHE7JVxij0uJ_CD7GZbkWcVhSyoHlhvO4-aAP0Y9JZAuGJNGknqtPEQNrXL1glzrTFoMPuwX1MThN6Hfre8Wh',
        badge: 'Popular',
        badgeBg: 'bg-primary/20',
        badgeText: 'text-primary',
        borderColor: 'hover:border-primary/50',
    },
    {
        id: 'social-girl',
        title: 'Social Girl',
        description: 'Un espacio seguro y empoderador exclusivo para mujeres. Corre, conecta y crece junto a otras runners.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtjLWlx8p5iB8sEtx6IaBp1EXnTil7JfrY1VBW1G0_hDUC5nY3dlTOV_wRI8FjG4fXJkRssMl0gh6UydxgVEk150MQok6ZtcNiCbqjwAN-Ul6BDssJ3nOFeMlOxw7j6VbektU9ULrAvJvFmwQfkJ6YijNfy2vBuQKtPJNfdrVZRx_XsWAD41nP6xGDGPirJne0w29CpueI8O5F5vsQ_2o2LeOwurLDg5Mo1CN4s44tW2CPYpCuhl6TPZfvupfnlgk82GiaHOMZvwU3',
        badge: 'Comunidad',
        badgeBg: 'bg-[#9c27b0]/20',
        badgeText: 'text-[#9c27b0]',
        borderColor: 'hover:border-[#9c27b0]/50',
        icon: 'female',
    },
    {
        id: 'brunch-yoga',
        title: 'Brunch & Yoga',
        description: 'El equilibrio perfecto. Una sesión de running suave, seguida de yoga restaurativo y un brunch nutritivo.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRNXccgQnJujdmh0U-1Gn-j3LaNTIqgtY0hAqBHRRivJ0vKqs8oi1M6eZ5CnYZlVXd18NOpsZJ2-vFQT_OPGXHgIVCFwdt5_X_Qvr93UM51dQ6qPFuPhgLFQnGQP_i9P7AjOzj5iiI54Sz96Nae9xz0NBNWdzzOZo2ZyBY1Gyc0pOOKk302VgWeDN2qxA04mF9qTGXjO3aC2KvIqJtNaEw5MNwvKtxZXzjpRbj2MN6EmX2Tqek-N55wI56s3lOoSqisuc3d2Z_czWW',
        badge: 'Wellness',
        badgeBg: 'bg-secondary/20',
        badgeText: 'text-secondary',
        borderColor: 'hover:border-secondary/50',
        icon: 'self_improvement',
    },
    {
        id: 'benefit',
        title: 'Benefit',
        description: 'Corremos con propósito. Eventos especiales donde cada kilómetro recauda fondos para causas locales.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJNzMk8F2AsBYr2Fkv2DnGqZMo5Q2Vh6XnJ3aG-Q1AvTSsDJ_jjOJzIqOWGWNkM4ijyUC38nSAgMIpfFUR5IZiW3cCIl7iynJ1Uw-1mhmv2sRwoWEi4_t9b6LApDV9dVZWN9vPpQQ8htlBc3BEz0s4zcyMjrLPYzjHMFWMx09JKtB9vcG5Yhc3ZQ0iCIdpmzv_xNyM9cKJFQY-0yVq9HOnG-MbHupWYYe3crkQKg9XHMPX4SGy0NtdG-N12nESzZPdcXhHkGzGU317',
        badge: 'Causa Social',
        badgeBg: 'bg-green-500/20',
        badgeText: 'text-green-400',
        borderColor: 'hover:border-green-500/50',
        icon: 'volunteer_activism',
    },
];
