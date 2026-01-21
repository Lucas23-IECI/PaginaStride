// ============================================
// CONTENT MOCK - Datos para páginas estáticas
// ============================================

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    photo: string;
    instagram?: string;
}

export interface TrainingSession {
    id: string;
    day: string;
    activity: string;
    time: string;
    location: string;
    level: 'Todos' | 'Intermedio' | 'Avanzado';
}

export interface Trip {
    id: string;
    destination: string;
    country: string;
    date: string;
    duration: string;
    price: number;
    image: string;
    description: string;
    spots: number;
    isFeatured?: boolean;
}

export interface Alliance {
    id: string;
    name: string;
    logo: string;
    category: 'main' | 'partner' | 'collaborator';
    url?: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'general' | 'events' | 'store' | 'membership';
}

// ============================================
// TEAM DATA
// ============================================
export const TEAM: TeamMember[] = [
    {
        id: '1',
        name: 'Camila Silva',
        role: 'Fundadora & CEO',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-feDbAGhy0g9CqrpnX-fNMHJ1_FGSCSusbwveWaKx_Hvf847x9IMKeKHiiG7iQcDKcT9wFD_qTtIjaaLAKNFurlRVbUAUNLaRYgdV9LQnhFCpFQkcrwgV7D5gK1iJ-otaMKD4yTSrWy_dSnKEVITRyDd8ev9DvSKSWonNt1r-_gcjvtTSJJzIxqEr-WvkSARkaJ_1vhhbvwOXugUheJ0TD7fczyN2KFGlJWW7M4iZtal8ilLRms3S7YzmC_cLQ6kqKpxcDL9TBK4Y',
        instagram: '@camilasilva'
    },
    {
        id: '2',
        name: 'Felipe Rojas',
        role: 'Head Coach',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfxFfYLlK-fopIrSmKeAniveAJRhz5xyBx025LFpKAp-9XPbmMEIDG9Lt_wnvewTpBLC5j1KF4Jqk8jC-s0SslepEEbulrGYYX2Bmf0vvffpw9c11k9ZZsxqgvZeMFWBCHPHd8QN9JcJuz9BhnyNTLS_XCJ2aa-Epf3YtIJr9yX37EFEwvy1xLVXAYcefOk2RCMSnmstYqjBRySTuf20d_W2g-Uu9exBJLM8m81d1osI3s605nIkvwxX_WROc2AMhzbI9GlcxxlR1t',
        instagram: '@feliperojas'
    },
    {
        id: '3',
        name: 'Daniela Muñoz',
        role: 'Community Manager',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATqeHx9LjJuMxhj76n789NjdcRacirPj_4L6Ucvn5SAhi2bcXZiQg-0KA8TLput0-ue4HDZz9ib9iS6cTEBYdmdWtM6x0QJ5MkPUibxjyU5zwidZmvsPEA53Q1RWQ_tnscNG9tuNdtPuuc4L2DKQDSU81e9UhlA9hjzrc0X0gCOQBzrKq_0kQLTphQwB9-zqnxJd93_roJffJzOQTVBEgKta78C55_nK5tpommpaRC_FuYNy9PixQqABd0b_AMVYR1qoqyQd0-9Hul',
        instagram: '@danimunoz'
    },
    {
        id: '4',
        name: 'Camilo Soto',
        role: 'Pacer & Monitor',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpD0x7K4GrpHsmOJL4exI2F6ufH7_GkruvjqZpRKSfLbSHNPFyAl7PFOKgfIb4LcQqhPR9ImYOLX8OS8CCxFnt_1uDQTvoXpDG9r16fE37wN8Mc2vkb4p0hyyJIT5PKO8HPhs0e2ftwewwCBAM4RsDwVXT2twxy-d2F_72r08pcmv9G9gxtB_2x1xirTBGcYSpb60Wuiqm54ylzpZDII52O-GPzFBjI7n3H5eEQS1eriIDVZx-RyBR55KyUcPo7zH0P5VRlecaBpoj',
        instagram: '@camilosoto'
    },
    {
        id: '5',
        name: 'Andrea López',
        role: 'Instructora Yoga',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlqAJ0DLFF4fBQG26SQnYD-VBJDQzB09Yw_UxLp82L45N_gwOTVXT5SXl9gDUo3DAfNDIKWzWuFx-LmgRqyq3u0Gh_u0HzH9Y9zg6NV0H2QOJql7TCyjJJfqJh58-ECJTK5Tv98epye3EnL0W3Bti4C10oPJbpzoLnTVukObiZWjvyfaqtnuKtJxszCfn2ElGP6OHVrIUPrD7gZbHcXS57_xvzUkinsiwr1Q1uB_9Ox2lit_5XLbr5ZYu4LcoaBqkitRVEnJ-NnXtP',
        instagram: '@andrealopez'
    },
    {
        id: '6',
        name: 'Matías González',
        role: 'Fotografía & Media',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5jgY5bncSWarN-RwIkPrXNeGUQKFgEF6hT2tlvqDO3hIkW30eP1V7w6RZ271Q7lUF6iCqKRDx5jI8q2OMbc-OdJ5luOfmZqLCTarMb-yHrin7LCIB-ivaMoNGHa_0SaD62BZfbT3nX8GbLKVPqU-_WR-COURrV0naTtb2EFcTwXyJx0mhaN0MtdSfeQPKsT32haOw0mCLrXNcMrs6TLMHWEF7QDVDT3-_3jtMHfQQIJBSpsGQIX9Matslv56_xntJQ8Mx4Smz5Jpx',
        instagram: '@matiasgonzalez'
    },
];

// ============================================
// TRAINING SCHEDULE
// ============================================
export const TRAINING_SCHEDULE: TrainingSession[] = [
    { id: '1', day: 'Lunes', activity: 'Descanso Activo / Yoga', time: '19:00', location: 'Online', level: 'Todos' },
    { id: '2', day: 'Martes', activity: 'Social Run 5K', time: '19:30', location: 'Parque Bicentenario', level: 'Todos' },
    { id: '3', day: 'Miércoles', activity: 'Fuerza & Core', time: '07:00', location: 'Gimnasio Partner', level: 'Intermedio' },
    { id: '4', day: 'Jueves', activity: 'Social Run 8K', time: '19:30', location: 'Costanera', level: 'Intermedio' },
    { id: '5', day: 'Viernes', activity: 'Técnica de Carrera', time: '18:00', location: 'Pista Atlética', level: 'Todos' },
    { id: '6', day: 'Sábado', activity: 'Long Run 12K+', time: '08:00', location: 'Cerro San Cristóbal', level: 'Avanzado' },
    { id: '7', day: 'Sábado', activity: 'Social Girl Run', time: '10:00', location: 'Parque Araucano', level: 'Todos' },
    { id: '8', day: 'Domingo', activity: 'Brunch & Yoga', time: '10:00', location: 'W Hotel Rooftop', level: 'Todos' },
];

// ============================================
// TRIPS DATA
// ============================================
export const TRIPS: Trip[] = [
    {
        id: '1',
        destination: 'Maratón de Berlín',
        country: 'Alemania',
        date: 'Sep 2026',
        duration: '7 días',
        price: 2890000,
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
        description: 'Corre uno de los maratones más rápidos del mundo en la histórica capital alemana.',
        spots: 15,
        isFeatured: true
    },
    {
        id: '2',
        destination: 'Trail Patagonia',
        country: 'Chile',
        date: 'Mar 2026',
        duration: '5 días',
        price: 890000,
        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800',
        description: 'Desafía los senderos más épicos del sur de Chile en Torres del Paine.',
        spots: 20,
        isFeatured: true
    },
    {
        id: '3',
        destination: 'Maratón NYC',
        country: 'Estados Unidos',
        date: 'Nov 2026',
        duration: '6 días',
        price: 3200000,
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
        description: 'La carrera de tus sueños por los 5 boroughs de Nueva York.',
        spots: 12
    },
    {
        id: '4',
        destination: 'Running Retreat Cusco',
        country: 'Perú',
        date: 'Jul 2026',
        duration: '4 días',
        price: 650000,
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
        description: 'Entrena en altura y descubre la cultura inca.',
        spots: 25
    },
];

// ============================================
// ALLIANCES DATA
// ============================================
export const ALLIANCES: Alliance[] = [
    // Main Sponsors
    { id: '1', name: 'Red Bull', logo: '/images/sponsors/redbull.svg', category: 'main' },
    { id: '2', name: 'Nike', logo: '/images/sponsors/nike.svg', category: 'main' },
    // Partners
    { id: '3', name: 'Gatorade', logo: '/images/sponsors/gatorade.svg', category: 'partner' },
    { id: '4', name: 'Garmin', logo: '/images/sponsors/garmin.svg', category: 'partner' },
    { id: '5', name: 'The Body Club', logo: '/images/sponsors/bodyclub.svg', category: 'partner' },
    { id: '6', name: 'W Hotel', logo: '/images/sponsors/whotels.svg', category: 'partner' },
    // Collaborators
    { id: '7', name: 'TECHO', logo: '/images/sponsors/techo.svg', category: 'collaborator' },
    { id: '8', name: 'Municipalidad de Concepción', logo: '/images/sponsors/muni.svg', category: 'collaborator' },
    { id: '9', name: 'Hospital Regional', logo: '/images/sponsors/hospital.svg', category: 'collaborator' },
    { id: '10', name: 'Radio Biobío', logo: '/images/sponsors/biobio.svg', category: 'collaborator' },
];

// ============================================
// FAQ DATA
// ============================================
export const FAQS: FAQ[] = [
    {
        id: '1',
        question: '¿Necesito experiencia previa para unirme a Stride?',
        answer: 'No, Stride está diseñado para todos los niveles. Tenemos grupos desde principiantes hasta corredores avanzados. Nuestros pacers te ayudarán a encontrar tu ritmo ideal.',
        category: 'general'
    },
    {
        id: '2',
        question: '¿Cuánto cuestan las inscripciones a los eventos?',
        answer: 'La mayoría de nuestros Social Runs son completamente gratuitos. Algunos eventos especiales como Brunch & Yoga o viajes tienen un costo que cubre logística, catering y otros servicios premium.',
        category: 'events'
    },
    {
        id: '3',
        question: '¿Cómo me inscribo a un evento?',
        answer: 'Entra a la sección de Experiencias, selecciona el evento que te interesa, elige tu nivel de ritmo y completa el formulario. Recibirás un correo de confirmación con todos los detalles.',
        category: 'events'
    },
    {
        id: '4',
        question: '¿Qué incluye la membresía Stride Pro?',
        answer: 'La membresía Pro incluye acceso prioritario a eventos, descuentos en la tienda, planes de entrenamiento personalizados, sesiones de yoga semanales y acceso al grupo VIP de WhatsApp.',
        category: 'membership'
    },
    {
        id: '5',
        question: '¿Hacen envíos a regiones?',
        answer: 'Sí, enviamos a todo Chile. El envío es gratuito en compras sobre $50.000. Para pedidos menores, el costo de envío se calcula según tu ubicación.',
        category: 'store'
    },
    {
        id: '6',
        question: '¿Puedo cambiar o devolver productos?',
        answer: 'Tienes 30 días para cambios o devoluciones. Los productos deben estar sin uso y con etiquetas originales. Contáctanos a store@stride.cl para iniciar el proceso.',
        category: 'store'
    },
    {
        id: '7',
        question: '¿Qué pasa si llueve el día del evento?',
        answer: 'Los Social Runs se realizan lluvia o sol. Solo en casos de condiciones climáticas extremas (tormentas eléctricas, vientos peligrosos) se reprograma. Te avisamos con anticipación por WhatsApp.',
        category: 'events'
    },
    {
        id: '8',
        question: '¿Puedo llevar a mi mascota al Social Run?',
        answer: 'En general no permitimos mascotas en los eventos por razones de seguridad. Sin embargo, organizamos "Pet Runs" especiales un par de veces al año. ¡Síguenos en redes para enterarte!',
        category: 'events'
    },
];
