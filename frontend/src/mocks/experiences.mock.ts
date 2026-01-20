// ============================================
// EXPERIENCES MOCK
// ============================================

export interface Experience {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    heroImage?: string;
    color: string;
    accentColor: string;
    icon: string;
    schedule: string;
    location: string;
    features: ExperienceFeature[];
    nextEvent?: {
        date: string;
        month: string;
        location: string;
        time: string;
    };
}

export interface ExperienceFeature {
    title: string;
    icon: string;
    text: string;
    color: string;
}

export const EXPERIENCES: Experience[] = [
    {
        id: '1',
        slug: 'social-run',
        title: 'Social Run',
        description: 'Corre en comunidad cada martes y jueves. Todos los ritmos bienvenidos.',
        longDescription: 'Donde cada paso cuenta para socializar. Únete a nuestra comunidad de runners y disfruta de rutas seguras con compañía increíble.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCymrBjJc_xHHu36JIrgp-KvzfNKrxhHpMnCdzDFHB1tpdGxTrww29jWxMQOTD3oUXXrse7yXAzTSN_yN8Gf2qXxr5nX1BVl-d9r2UD1qWyzKHpguoxhFxsEB_hLLfKOYdjsN3RSSsb2s2JnKsgdu4q9pI8qcS3qTnEUlS_YPsr6z8X9p4DjhD5PUjC__O3K_AzhH4nufQSnASdofyP4gU8Gj06gBJSxtTsTFwdZy4XfUg5MjQ5ocVQmwRS-FCkSSO-xwZAK-vCa1Ko',
        heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6',
        color: 'text-primary',
        accentColor: '#E91E63',
        icon: 'groups',
        schedule: 'Martes y Jueves 19:30 hrs',
        location: 'Parque Bicentenario, Vitacura',
        nextEvent: {
            date: '24',
            month: 'OCT',
            location: 'Parque Bicentenario',
            time: '19:30 hrs - Check-in',
        },
        features: [
            { title: 'Guardarropía', icon: 'checkroom', text: 'Deja tus pertenencias con total confianza en nuestro punto de encuentro.', color: 'text-[#00BCD4]' },
            { title: 'Primeros Auxilios', icon: 'medical_services', text: 'Botiquín disponible y comunicación directa con servicios de emergencia.', color: 'text-primary' },
            { title: 'Rol del Pacer', icon: 'group_work', text: 'Líderes de ritmo que marcan la velocidad y aseguran que nadie se quede atrás.', color: 'text-primary' },
            { title: 'Ruta Segura', icon: 'map', text: 'Circuitos probados, evitando cruces peligrosos y priorizando zonas iluminadas.', color: 'text-[#00BCD4]' },
        ],
    },
    {
        id: '2',
        slug: 'social-girl',
        title: 'Social Girl',
        description: 'Potencia femenina en cada paso. Un espacio seguro y motivador.',
        longDescription: 'Un espacio exclusivo para mujeres. Conecta con otras corredoras, comparte experiencias y potencia tu entrenamiento en un ambiente de apoyo.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-F59hcnE2dySwfwSvWfhDLbMDqHDRbD_2RPk7GFODX1_ql3wznG7d1pSjyBwYCDXjubZ0TMI5Tyf1YSCXj5GS17N1p78qy_FybbubboKlRQgqOMhiiZ7amgOVZd6ltYq0mWGsdlgtJbViSw5N1lF8qs2aEzZAKqktlo4TBiiXClSBLHQmqHWXE-sz1Z-f2FIyIGVuDNHtorea6D0fpSFSFEThmqToHZxkBtWD4aX5Ywf3AGYjOOtaX3J4k26cRmjJHFeBpgOov5z',
        color: 'text-[#e92063]',
        accentColor: '#e92063',
        icon: 'female',
        schedule: 'Sábados 8:00 hrs',
        location: 'Parque Araucano, Las Condes',
        nextEvent: {
            date: '26',
            month: 'OCT',
            location: 'Parque Araucano',
            time: '08:00 hrs - Check-in',
        },
        features: [
            { title: 'Comunidad Femenina', icon: 'group', text: 'Espacio seguro exclusivo para mujeres corredoras de todos los niveles.', color: 'text-[#e92063]' },
            { title: 'Coaches Mujeres', icon: 'sports', text: 'Entrenadoras certificadas que entienden tus necesidades y objetivos.', color: 'text-[#e92063]' },
            { title: 'After Run', icon: 'coffee', text: 'Brunch post-carrera para conectar y compartir experiencias.', color: 'text-secondary' },
            { title: 'Seguridad', icon: 'verified_user', text: 'Recorridos verificados y acompañamiento durante todo el trayecto.', color: 'text-secondary' },
        ],
    },
    {
        id: '3',
        slug: 'brunch-yoga',
        title: 'Brunch & Yoga',
        description: 'Equilibrio y bienestar. Conecta cuerpo y mente, luego disfruta.',
        longDescription: 'La combinación perfecta de movimiento y nutrición. Comienza con una sesión de yoga revitalizante y termina disfrutando un brunch saludable.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLMNOH8KIdBff0vOm5fqogod8w_x2GdIrggSXYDHIMADCheStOcv4-zTfkz88g0ktXPCzxMcFU6ljmsyekLLhgDhHbGyg-rA1SWilt_5t08x7hVwdxtCnA8Zh7OsgofVRi1IX1EZWYKwpfWRvLt7JEb2ZZTdyYNPRr8_V-mrOcR1Hp6Y89vd4wYpeMtvbGfdASDHBq6ac8VOwxbfc1TEBq4iY13l3fGHtFMTBTyZp-wVSl3-ZxySnc_GBpTwWzsKbmNwZPOxP7m9vJ',
        color: 'text-[#FFC107]',
        accentColor: '#FFC107',
        icon: 'self_improvement',
        schedule: 'Domingos 10:00 hrs',
        location: 'Varios Rooftops, Santiago',
        nextEvent: {
            date: '27',
            month: 'OCT',
            location: 'W Hotel Rooftop',
            time: '10:00 hrs - Inicio',
        },
        features: [
            { title: 'Yoga Flow', icon: 'self_improvement', text: '60 minutos de práctica guiada para todos los niveles.', color: 'text-[#FFC107]' },
            { title: 'Brunch Saludable', icon: 'restaurant', text: 'Menú curado con opciones veganas, vegetarianas y proteicas.', color: 'text-[#FFC107]' },
            { title: 'Vistas Premium', icon: 'landscape', text: 'Rooftops exclusivos con las mejores vistas de la ciudad.', color: 'text-secondary' },
            { title: 'Mat Incluido', icon: 'sports_gymnastics', text: 'No necesitas traer nada, nosotros proveemos todo el equipamiento.', color: 'text-secondary' },
        ],
    },
    {
        id: '4',
        slug: 'benefit',
        title: 'Benefit Run',
        description: 'Impacto real en Concepción. Corremos por causas que importan.',
        longDescription: 'Carreras con propósito. Cada kilómetro que corres suma a una causa social. Únete y haz la diferencia mientras te mueves.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNBZhTzyPdO0p8x6P2WjAQwUE0m0AH0dQnqFLzdsx-xMj5lwg0tf0oBDiKbFpgJ8qjsX9WVkSIKeHceCqYqokbHFeVN9qIx1rXv04ySdBM4U6bwbn1iAObR427PdUZePiGic0T6E8BBDQV7A9yoPGx8jwtWrMEg_0giEMxRiDzBRAdEOhsaxT50kobd0JxuYp3KEXqOGMoDDxvs-ykLdmxH9HjQ-Xrv6xJ77m21OJXW-Qiyrby3aZ5qJn5xoHRPk_rSmP6eNycwrj',
        color: 'text-[#135bec]',
        accentColor: '#135bec',
        icon: 'volunteer_activism',
        schedule: 'Eventos especiales',
        location: 'Diversas localidades',
        nextEvent: {
            date: '02',
            month: 'NOV',
            location: 'Costanera, Concepción',
            time: '09:00 hrs - Largada',
        },
        features: [
            { title: 'Impacto Social', icon: 'favorite', text: '100% de las inscripciones van directo a la causa del mes.', color: 'text-[#135bec]' },
            { title: 'Empresas Aliadas', icon: 'handshake', text: 'Sponsors que duplican tu donación automáticamente.', color: 'text-[#135bec]' },
            { title: 'Transparencia', icon: 'visibility', text: 'Reportes mensuales del destino de los fondos recaudados.', color: 'text-primary' },
            { title: 'Comunidad', icon: 'groups', text: 'Conecta con personas que comparten tus valores.', color: 'text-primary' },
        ],
    },
];

// ============================================
// RUN LEVELS MOCK (Para inscripción)
// ============================================

export interface RunLevel {
    id: string;
    title: string;
    monitor: string;
    monitorAvatar: string;
    description: string;
    pace: string;
    image: string;
    tag: string;
    tagColor: 'primary' | 'secondary';
    type: 'fun' | 'training' | 'performance';
}

export const RUN_LEVELS: RunLevel[] = [
    {
        id: 'fun',
        title: 'Trote Social',
        monitor: 'Camilo',
        monitorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpD0x7K4GrpHsmOJL4exI2F6ufH7_GkruvjqZpRKSfLbSHNPFyAl7PFOKgfIb4LcQqhPR9ImYOLX8OS8CCxFnt_1uDQTvoXpDG9r16fE37wN8Mc2vkb4p0hyyJIT5PKO8HPhs0e2ftwewwCBAM4RsDwVXT2twxy-d2F_72r08pcmv9G9gxtB_2x1xirTBGcYSpb60Wuiqm54ylzpZDII52O-GPzFBjI7n3H5eEQS1eriIDVZx-RyBR55KyUcPo7zH0P5VRlecaBpoj',
        description: 'Ideal para principiantes. Ritmo conversacional y buena onda. Foco en disfrutar el recorrido y conocer gente nueva. Nadie se queda atrás.',
        pace: 'Ritmo libre / Conversacional',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjTYyjPlg5DRQRofPD14b2-TrFsyhluDU9rLkSaR1n6u6NZEZjKrF4dzriBUe0DlZvJCfihu2l-v8YEwXhW_NMV-dngrZLgqmxkyoWdpyWNKZ9xYQPrYGhMlGcXt3X5H70r9Vss0e-Q2JVzsh0x3oFalkfoWVqujoBP82urVac74BOG49JXN5kH4oUTqOWxdAFKnkdXW2g8MHuKHRu3Xxo4hetN26LjzbTJMb9GCpR8wRx1R8breIdzwmwn8vjXdtY3-dt2uqLxmIj',
        tag: 'FUN RUN',
        tagColor: 'primary',
        type: 'fun',
    },
    {
        id: 'training',
        title: 'Intermedio 5:30',
        monitor: 'Daniela',
        monitorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATqeHx9LjJuMxhj76n789NjdcRacirPj_4L6Ucvn5SAhi2bcXZiQg-0KA8TLput0-ue4HDZz9ib9iS6cTEBYdmdWtM6x0QJ5MkPUibxjyU5zwidZmvsPEA53Q1RWQ_tnscNG9tuNdtPuuc4L2DKQDSU81e9UhlA9hjzrc0X0gCOQBzrKq_0kQLTphQwB9-zqnxJd93_roJffJzOQTVBEgKta78C55_nK5tpommpaRC_FuYNy9PixQqABd0b_AMVYR1qoqyQd0-9Hul',
        description: 'Ritmo controlado 5:30 - 6:00 min/km. Enfoque en resistencia aeróbica y mantener el paso constante durante todo el trayecto.',
        pace: '5:30 - 6:00 min/km',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5PHSG7PnAICYms5jobUES0LqHW5uPzB766eeDl4e61pG3DELuSmMdPZ49fHvgTJjFkw1lvEiP8goHu5zoTtxXH2ePBN0wYf9A4eiwSTGMIja7vIhGlEtgphAZ2CAihBi_GA2ttjGkCWHr5snWK0VBmvfL3OmBMdFx8pzJwCLYlGMWdIQ2MLwz1AlhacEWVXW0ate9GVHF2FmqebrvF7Bva8cry0VTxS_otxByWhQbDVEWtxMKDYlYgGI5GoPzsmhjmrKDKM0xolhw',
        tag: '10K TRAINING',
        tagColor: 'secondary',
        type: 'training',
    },
    {
        id: 'performance',
        title: 'Avanzado Sub 5',
        monitor: 'Felipe',
        monitorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfxFfYLlK-fopIrSmKeAniveAJRhz5xyBx025LFpKAp-9XPbmMEIDG9Lt_wnvewTpBLC5j1KF4Jqk8jC-s0SslepEEbulrGYYX2Bmf0vvffpw9c11k9ZZsxqgvZeMFWBCHPHd8QN9JcJuz9BhnyNTLS_XCJ2aa-Epf3YtIJr9yX37EFEwvy1xLVXAYcefOk2RCMSnmstYqjBRySTuf20d_W2g-Uu9exBJLM8m81d1osI3s605nIkvwxX_WROc2AMhzbI9GlcxxlR1t',
        description: 'Alto rendimiento. Ritmo bajo 5:00 min/km. Solo expertos o corredores buscando romper sus marcas personales.',
        pace: '< 5:00 min/km',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuUlalWYn5FFEiP7w36uS8iODLbO1DuhsCNMqaApPcwDvwJy2ivQZStkdF6I0EIHWJ3ZGnyoj44P2RtFCYlUiVMqkmERiwZjmCVWTwJdT1_uHaeixadPdfnpcY098wyV3M1fPZFWp2iDdVUlC-K_07cbG_9XMvfnKs1rNp93IIP_raOQ_3dteKXsisaJg4KD6bF0xs0EU64sa8D7PrtWd7XuOYTN0OFIBTP3MkalbW4dAV4R4w1bwOuUdK8L6K2iB0qUXU4JpYD3d-',
        tag: 'PERFORMANCE',
        tagColor: 'primary',
        type: 'performance',
    },
];
