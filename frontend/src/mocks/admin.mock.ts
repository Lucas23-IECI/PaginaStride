// ============================================
// ADMIN MOCKS - Datos para Dashboard
// ============================================

export interface AdminStats {
    tribeGrowth: { value: string; change: string };
    activeUsers: number;
    inactiveUsers: number;
    retentionRate: { value: string; change: string };
    genderFemale: number;
    genderMale: number;
}

export interface RecentActivity {
    id: string;
    type: 'inscription' | 'purchase' | 'newMember';
    userName: string;
    action: string;
    target?: string;
    avatar?: string;
    timeAgo: string;
}

export interface ChartData {
    name: string;
    uv: number;
}

export const ADMIN_STATS: AdminStats = {
    tribeGrowth: { value: '+1,240', change: '+12%' },
    activeUsers: 850,
    inactiveUsers: 120,
    retentionRate: { value: '92%', change: '+2.4%' },
    genderFemale: 55,
    genderMale: 45,
};

export const CHART_DATA: ChartData[] = [
    { name: 'Sem 1', uv: 4000 },
    { name: 'Sem 2', uv: 3000 },
    { name: 'Sem 3', uv: 5000 },
    { name: 'Sem 4', uv: 2780 },
    { name: 'Sem 5', uv: 1890 },
    { name: 'Sem 6', uv: 2390 },
    { name: 'Sem 7', uv: 3490 },
];

export const SEGMENT_DATA = [
    { name: 'Social Girl', percentage: 45, color: 'bg-primary', textColor: 'text-primary', description: 'Interés: Running social, eventos de fin de semana.' },
    { name: 'Social Run', percentage: 30, color: 'bg-cyan-400', textColor: 'text-cyan-400', description: 'Interés: Entrenamiento, 10K, Maratones.' },
    { name: 'Brunch & Yoga', percentage: 25, color: 'bg-purple-400', textColor: 'text-purple-400', description: 'Interés: Wellness, Networking, Relajación.' },
];

export const RECENT_ACTIVITY: RecentActivity[] = [
    {
        id: '1',
        type: 'inscription',
        userName: 'Camila J.',
        action: 'se inscribió a',
        target: 'Social Run',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlqAJ0DLFF4fBQG26SQnYD-VBJDQzB09Yw_UxLp82L45N_gwOTVXT5SXl9gDUo3DAfNDIKWzWuFx-LmgRqyq3u0Gh_u0HzH9Y9zg6NV0H2QOJql7TCyjJJfqJh58-ECJTK5Tv98epye3EnL0W3Bti4C10oPJbpzoLnTVukObiZWjvyfaqtnuKtJxszCfn2ElGP6OHVrIUPrD7gZbHcXS57_xvzUkinsiwr1Q1uB_9Ox2lit_5XLbr5ZYu4LcoaBqkitRVEnJ-NnXtP',
        timeAgo: 'Hace 5 min',
    },
    {
        id: '2',
        type: 'purchase',
        userName: 'Juan P.',
        action: 'compró',
        target: 'Classic Tee',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5jgY5bncSWarN-RwIkPrXNeGUQKFgEF6hT2tlvqDO3hIkW30eP1V7w6RZ271Q7lUF6iCqKRDx5jI8q2OMbc-OdJ5luOfmZqLCTarMb-yHrin7LCIB-ivaMoNGHa_0SaD62BZfbT3nX8GbLKVPqU-_WR-COURrV0naTtb2EFcTwXyJx0mhaN0MtdSfeQPKsT32haOw0mCLrXNcMrs6TLMHWEF7QDVDT3-_3jtMHfQQIJBSpsGQIX9Matslv56_xntJQ8Mx4Smz5Jpx',
        timeAgo: 'Hace 2 horas',
    },
    {
        id: '3',
        type: 'newMember',
        userName: 'Andrea M.',
        action: 'Nuevo miembro:',
        timeAgo: 'Hace 4 horas',
    },
];

export const RECENT_USERS = [
    { id: '1', name: 'Camila Jimenez', email: 'camila@email.com', status: 'active', joined: '15 Oct 2024' },
    { id: '2', name: 'Juan Pérez', email: 'juan@email.com', status: 'active', joined: '14 Oct 2024' },
    { id: '3', name: 'Andrea Muñoz', email: 'andrea@email.com', status: 'pending', joined: '14 Oct 2024' },
    { id: '4', name: 'Felipe Rojas', email: 'felipe@email.com', status: 'active', joined: '13 Oct 2024' },
];

export const RECENT_SALES = [
    { id: 'ORD-001', product: 'Stride Classic Tee', customer: 'Juan P.', amount: 19990, date: '20 Oct 2024' },
    { id: 'ORD-002', product: 'Stride Logo Hoodie', customer: 'Camila J.', amount: 29990, date: '20 Oct 2024' },
    { id: 'ORD-003', product: 'Urban Cargo Pants', customer: 'Andrea M.', amount: 45990, date: '19 Oct 2024' },
];

// ============================================
// ADMIN EVENTS MOCK
// ============================================

export interface AdminEvent {
    id: string;
    name: string;
    type: 'Running' | 'Social Girl' | 'Brunch & Yoga' | 'Training';
    typeColor: string;
    date: string;
    time: string;
    inscribed: number;
    capacity: number;
    status: 'published' | 'draft' | 'finished';
    image: string;
}

export const MOCK_ADMIN_EVENTS: AdminEvent[] = [
    {
        id: 'EV-2023-089',
        name: 'Sunset Stride 5K',
        type: 'Running',
        typeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        date: '12 Oct, 2024',
        time: '19:00 hrs',
        inscribed: 185,
        capacity: 200,
        status: 'published',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmXnPUPN4QzNhztV7spPiPZJ733lJUzYQLsco7qMZgEtGvSNssvyriS3GHz3l8B1iKGLHInivsA6gjowvL55kc4axFhPLZ5vCFJ8FRiLtzAvpjk74UrjEz2_a4cWz68Vm51_J4t6X1zdv1erX32xVLxnb8fiLhgEnbGliBBJcxQI3NcjvpB6oRloOVyFzr1_cvA6RxVYVwmVPLyGlpTXi8fg__-V51JOBEPQ5wRmA_7mBUW5tvxMIBwkG3ofLXd9eQ2mNyh_zEvFpd',
    },
    {
        id: 'EV-2023-090',
        name: 'Morning Yoga Flow',
        type: 'Brunch & Yoga',
        typeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        date: '15 Oct, 2024',
        time: '08:00 hrs',
        inscribed: 32,
        capacity: 40,
        status: 'published',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOQsJtQvnEaMh92GEkf8PaI9HxTzXnXveh7Hlr9BiaoGUrVBebYh9pgLJsnFmQcWm5VdqUoDUbnO1N8RfggJ0k25J3ZbFHY2UnzD3AL0L5B4s9Bh3DgCAsn55-Kkouvt37UC3_40grQF1NE-ztN36KonWQmXcNhzXH6AcoKBzzz31n3iU1WcF13306_Zeuv2XhwxChZZo128BEjELbnOBeacZ1Zbdw_93o72VnaqErUxFN5GCgvmpxSyprZxThPM_36SVqyKxzlEtZ',
    },
    {
        id: 'EV-2023-091',
        name: 'Social Girl Run',
        type: 'Social Girl',
        typeColor: 'bg-primary/10 text-primary border-primary/20',
        date: '20 Oct, 2024',
        time: '10:00 hrs',
        inscribed: 78,
        capacity: 100,
        status: 'published',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6',
    },
    {
        id: 'EV-2023-092',
        name: 'Trail Running Weekend',
        type: 'Training',
        typeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        date: '25 Oct, 2024',
        time: '07:00 hrs',
        inscribed: 0,
        capacity: 30,
        status: 'draft',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlqAJ0DLFF4fBQG26SQnYD-VBJDQzB09Yw_UxLp82L45N_gwOTVXT5SXl9gDUo3DAfNDIKWzWuFx-LmgRqyq3u0Gh_u0HzH9Y9zg6NV0H2QOJql7TCyjJJfqJh58-ECJTK5Tv98epye3EnL0W3Bti4C10oPJbpzoLnTVukObiZWjvyfaqtnuKtJxszCfn2ElGP6OHVrIUPrD7gZbHcXS57_xvzUkinsiwr1Q1uB_9Ox2lit_5XLbr5ZYu4LcoaBqkitRVEnJ-NnXtP',
    },
];

// ============================================
// ADMIN USERS MOCK
// ============================================

export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'monitor' | 'user';
    roleColor: string;
    status: 'active' | 'inactive';
    lastActivity: string;
    avatar: string;
    joinedDate: string;
}

export const MOCK_ADMIN_USERS: AdminUser[] = [
    {
        id: 'USR-001',
        name: 'Sofía Morales',
        email: 'sofia.m@example.com',
        role: 'monitor',
        roleColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        status: 'active',
        lastActivity: 'Hace 2 horas',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAarhkcgNpWyCVQ-xj8rKFYIqFbCuk7Lsn5svKGLFUWK3SvcAVNYfWLA6jnGCGbhODErQDNcUo_djjEI52vEgqGPcP58kNJgoyDsyeBhsKoQ25z3sjFk50Ibz7-JNuyPU1hPyktly2AOTgGWMLPkU0VkFj833dpq2eMz4-oO0YnLwb_lamWIzeJEbIaBw_cyMamj3AN8ELT3t8bEHl-vO0LXBvZFlXMgaKD_8DgIVDcLCtx5cd-pHvZqu-LuwWUkN3jEZFupqlcFrdN',
        joinedDate: '15 Mar 2024',
    },
    {
        id: 'USR-002',
        name: 'Camila Silva',
        email: 'camila@stride.cl',
        role: 'admin',
        roleColor: 'bg-primary/10 text-primary border-primary/20',
        status: 'active',
        lastActivity: 'Hace 5 min',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-feDbAGhy0g9CqrpnX-fNMHJ1_FGSCSusbwveWaKx_Hvf847x9IMKeKHiiG7iQcDKcT9wFD_qTtIjaaLAKNFurlRVbUAUNLaRYgdV9LQnhFCpFQkcrwgV7D5gK1iJ-otaMKD4yTSrWy_dSnKEVITRyDd8ev9DvSKSWonNt1r-_gcjvtTSJJzIxqEr-WvkSARkaJ_1vhhbvwOXugUheJ0TD7fczyN2KFGlJWW7M4iZtal8ilLRms3S7YzmC_cLQ6kqKpxcDL9TBK4Y',
        joinedDate: '01 Ene 2024',
    },
    {
        id: 'USR-003',
        name: 'Juan Pérez',
        email: 'juan.perez@email.com',
        role: 'user',
        roleColor: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
        status: 'active',
        lastActivity: 'Hace 1 día',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5jgY5bncSWarN-RwIkPrXNeGUQKFgEF6hT2tlvqDO3hIkW30eP1V7w6RZ271Q7lUF6iCqKRDx5jI8q2OMbc-OdJ5luOfmZqLCTarMb-yHrin7LCIB-ivaMoNGHa_0SaD62BZfbT3nX8GbLKVPqU-_WR-COURrV0naTtb2EFcTwXyJx0mhaN0MtdSfeQPKsT32haOw0mCLrXNcMrs6TLMHWEF7QDVDT3-_3jtMHfQQIJBSpsGQIX9Matslv56_xntJQ8Mx4Smz5Jpx',
        joinedDate: '20 May 2024',
    },
    {
        id: 'USR-004',
        name: 'Andrea Muñoz',
        email: 'andrea.m@email.com',
        role: 'monitor',
        roleColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        status: 'inactive',
        lastActivity: 'Hace 2 semanas',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlqAJ0DLFF4fBQG26SQnYD-VBJDQzB09Yw_UxLp82L45N_gwOTVXT5SXl9gDUo3DAfNDIKWzWuFx-LmgRqyq3u0Gh_u0HzH9Y9zg6NV0H2QOJql7TCyjJJfqJh58-ECJTK5Tv98epye3EnL0W3Bti4C10oPJbpzoLnTVukObiZWjvyfaqtnuKtJxszCfn2ElGP6OHVrIUPrD7gZbHcXS57_xvzUkinsiwr1Q1uB_9Ox2lit_5XLbr5ZYu4LcoaBqkitRVEnJ-NnXtP',
        joinedDate: '10 Abr 2024',
    },
    {
        id: 'USR-005',
        name: 'Felipe Rojas',
        email: 'felipe.r@email.com',
        role: 'user',
        roleColor: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
        status: 'active',
        lastActivity: 'Hace 3 horas',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmXnPUPN4QzNhztV7spPiPZJ733lJUzYQLsco7qMZgEtGvSNssvyriS3GHz3l8B1iKGLHInivsA6gjowvL55kc4axFhPLZ5vCFJ8FRiLtzAvpjk74UrjEz2_a4cWz68Vm51_J4t6X1zdv1erX32xVLxnb8fiLhgEnbGliBBJcxQI3NcjvpB6oRloOVyFzr1_cvA6RxVYVwmVPLyGlpTXi8fg__-V51JOBEPQ5wRmA_7mBUW5tvxMIBwkG3ofLXd9eQ2mNyh_zEvFpd',
        joinedDate: '25 Jun 2024',
    },
];
