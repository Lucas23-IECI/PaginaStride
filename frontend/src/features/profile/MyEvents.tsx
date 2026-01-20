import { useState } from 'react';

interface UserEvent {
    id: string;
    name: string;
    date: string;
    month: string;
    location: string;
    type: string;
    category: string;
    status: 'registered' | 'confirmed';
}

interface PastEvent {
    id: string;
    date: string;
    name: string;
    subtitle: string;
    distance: string;
    points: number;
}

const UPCOMING_EVENTS: UserEvent[] = [
    {
        id: '1',
        name: 'Parque Bicentenario Run',
        date: '24',
        month: 'OCT',
        location: 'Av. Bicentenario 3800, Vitacura',
        type: 'Social Run',
        category: '5K / 10K',
        status: 'registered',
    },
    {
        id: '2',
        name: 'Sunset City Run & Yoga',
        date: '02',
        month: 'NOV',
        location: 'Parque Araucano, Las Condes',
        type: 'Social Girl',
        category: 'Yoga + 5K',
        status: 'confirmed',
    },
];

const PAST_EVENTS: PastEvent[] = [
    { id: '1', date: '28 Sep 2023', name: 'Cerro San Cristóbal', subtitle: 'Morning Climb', distance: '12.5 km', points: 150 },
    { id: '2', date: '15 Sep 2023', name: 'Costanera Night Run', subtitle: 'City Circuit', distance: '8.0 km', points: 100 },
    { id: '3', date: '01 Sep 2023', name: 'Spring Kickoff', subtitle: 'Community Event', distance: '5.0 km', points: 75 },
];

const MyEvents = () => {
    const [tab, setTab] = useState<'upcoming' | 'history'>('upcoming');

    return (
        <div className="flex-1 h-full overflow-y-auto relative">
            <header className="sticky top-0 z-40 bg-background-dark/80 backdrop-blur-md border-b border-white/5 p-6 md:px-10 md:py-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-4 w-full md:w-auto">
                        <div className="flex items-center justify-between md:justify-start gap-6">
                            <h2 className="text-3xl font-black text-white tracking-tight">Mis Eventos</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-surface-dark p-1 rounded-full inline-flex border border-white/5">
                                <button
                                    onClick={() => setTab('upcoming')}
                                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${tab === 'upcoming' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'}`}
                                >
                                    Próximos
                                </button>
                                <button
                                    onClick={() => setTab('history')}
                                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${tab === 'history' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'}`}
                                >
                                    Historial
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4 w-full md:w-auto justify-end">
                        <button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-lg shadow-white/5">
                            <span className="material-symbols-outlined text-lg">download</span>
                            <span>Descargar Calendario</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="p-6 md:p-10 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-10">
                    {tab === 'upcoming' && (
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">event_upcoming</span>
                                    Próximas Inscripciones
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {UPCOMING_EVENTS.map((event) => (
                                    <div key={event.id} className={`bg-surface-dark rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-6 border border-white/5 hover:border-${event.status === 'registered' ? 'primary' : 'secondary'}/40 transition-all group relative overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-r from-${event.status === 'registered' ? 'primary' : 'secondary'}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                        <div className="bg-black rounded-xl w-full sm:w-24 h-24 flex flex-col items-center justify-center border border-white/5 relative z-10 flex-shrink-0">
                                            <span className="text-3xl font-black text-white">{event.date}</span>
                                            <span className={`text-xs font-bold uppercase tracking-widest ${event.status === 'registered' ? 'text-primary' : 'text-secondary'}`}>
                                                {event.month}
                                            </span>
                                        </div>
                                        <div className="flex-1 text-center sm:text-left relative z-10 w-full">
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                                <span className={`px-2 py-1 rounded ${event.status === 'registered' ? 'bg-primary text-white' : 'bg-secondary text-black'} text-[10px] font-bold uppercase tracking-wider`}>
                                                    {event.type}
                                                </span>
                                                <span className="px-2 py-1 rounded bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-wider">
                                                    {event.category}
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-1">{event.name}</h4>
                                            <div className="flex items-center justify-center sm:justify-start gap-1 text-white/50 text-xs">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <button className="relative z-10 w-full sm:w-auto px-6 py-3 bg-white text-black rounded-full font-bold text-xs hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg">
                                            <span className="material-symbols-outlined text-lg">qr_code_2</span>
                                            Ver Ticket
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {tab === 'history' && (
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-white/60">history</span>
                                    Historial de Runs
                                </h3>
                            </div>
                            <div className="bg-surface-dark rounded-3xl border border-white/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/5 border-b border-white/5 text-xs text-white/40 uppercase tracking-widest">
                                                <th className="p-5 font-bold whitespace-nowrap">Fecha</th>
                                                <th className="p-5 font-bold whitespace-nowrap">Evento</th>
                                                <th className="p-5 font-bold text-center whitespace-nowrap">Distancia</th>
                                                <th className="p-5 font-bold text-center whitespace-nowrap">Social Pts</th>
                                                <th className="p-5 font-bold text-right whitespace-nowrap">Recuerdos</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {PAST_EVENTS.map((event) => (
                                                <tr key={event.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="p-5 text-white/60 font-medium whitespace-nowrap">{event.date}</td>
                                                    <td className="p-5">
                                                        <div className="font-bold text-white">{event.name}</div>
                                                        <span className="text-xs text-white/40">{event.subtitle}</span>
                                                    </td>
                                                    <td className="p-5 text-center">
                                                        <span className="inline-block px-3 py-1 rounded-full bg-surface-dark border border-white/10 text-xs font-bold text-secondary">
                                                            {event.distance}
                                                        </span>
                                                    </td>
                                                    <td className="p-5 text-center">
                                                        <span className="text-primary font-bold">+{event.points}</span>
                                                    </td>
                                                    <td className="p-5 text-right">
                                                        <a className="text-white/60 hover:text-white hover:underline text-xs font-bold inline-flex items-center gap-1 transition-all" href="#">
                                                            <span className="material-symbols-outlined text-sm">photo_library</span>
                                                            Ver Fotos
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Calendario */}
                <div className="space-y-6">
                    <div className="bg-surface-dark p-6 rounded-3xl border border-white/5 sticky top-28 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-lg font-bold">Octubre 2024</span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-all text-white/60">
                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-all text-white/60">
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 mb-6">
                            {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                                <div key={i} className="text-center text-[10px] font-black text-white/30 uppercase tracking-widest pb-2">{d}</div>
                            ))}
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
                                let className = 'w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium text-white/60 hover:bg-white/10 transition-colors';
                                if (d === 24) className = 'w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold bg-primary text-white';
                                else if (d === 20) className = 'w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ring-2 ring-primary text-white';
                                return <div key={d} className={className}>{d}</div>;
                            })}
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-black border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold text-xs">24</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-white truncate">Parque Bicentenario</p>
                                    <p className="text-xs text-white/40">18:00 hrs</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-black border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-secondary font-bold text-xs">02</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-white truncate">Sunset City Run</p>
                                    <p className="text-xs text-white/40">19:30 hrs</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEvents;
