import React from 'react';

interface Feedback {
    id: string;
    author: string;
    initials?: string;
    avatar?: string;
    rating: number;
    date: string;
    comment: string;
}

interface SessionHistory {
    id: string;
    date: { day: string; month: string };
    title: string;
    time: string;
    location: string;
    runners: number;
}

const RECENT_FEEDBACK: Feedback[] = [
    {
        id: '1',
        author: 'Javiera Soto',
        initials: 'JS',
        rating: 5,
        date: 'Hace 2 días',
        comment: '"¡Grande Camilo! Excelente ritmo en los 5K, me ayudó mucho a no quemarme al principio. ¡Nos vemos el martes!"'
    },
    {
        id: '2',
        author: 'Matías Rojas',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOVPgWAdgbQLmN-UaNOZLmuq5ZG4RMaw7_UHzyrggeanbRG0zYL6ZhF9C0i4Ni7eS9rJazWeEpxsVZohLj40VeknSFdMTRHDpgZg13uqaCGgeeQYrALkVhqCyeKudGZ3_2E02HEQweI4Xcoy5Cwj9UpyqzfFMAy4outI51zGW5UDR1QednnmwURUOPmi2Hq8dkiMBdu97yUWI5DIg0bHkhyrfKwNJkUyvt9fUUCgsqUQ1hh8Gf-BC1ovOBJEr6qX_8-4e21Qpje4Gx',
        rating: 4,
        date: 'Hace 5 días',
        comment: '"Buena sesión de pista, aunque el calentamiento estuvo un poco intenso jaja. Gracias por los tips de técnica."'
    }
];

const SESSION_HISTORY: SessionHistory[] = [
    {
        id: '1',
        date: { day: '20', month: 'Oct' },
        title: 'Trote Social 10K',
        time: '09:00 AM',
        location: 'Parque Araucano',
        runners: 45
    },
    {
        id: '2',
        date: { day: '17', month: 'Oct' },
        title: 'Speedwork Pista',
        time: '19:30 PM',
        location: 'Estadio Atlético',
        runners: 28
    },
    {
        id: '3',
        date: { day: '12', month: 'Oct' },
        title: 'Largo 15K Progresivo',
        time: '08:00 AM',
        location: 'Costanera',
        runners: 32
    }
];

const MonitorProfile: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Card 1 */}
                <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Sesiones Lideradas</p>
                            <h3 className="text-4xl font-black text-white">42</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">flag</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        <span>Top 5% del mes</span>
                    </div>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-secondary/30 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Total Runners</p>
                            <h3 className="text-4xl font-black text-white">856</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 font-medium">
                        <span>Guiados desde Enero 2023</span>
                    </div>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-yellow-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Calificación Tribu</p>
                            <h3 className="text-4xl font-black text-white">4.9</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-yellow-500">
                            <span className="material-symbols-outlined">star</span>
                        </div>
                    </div>
                    <div className="mt-4 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">Excelente desempeño</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">history</span>
                                Historial de Sesiones
                            </h3>
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Ver todo</a>
                        </div>
                        <div className="bg-surface-dark border border-white/5 rounded-dashboard shadow-xl overflow-hidden">
                            <div className="divide-y divide-white/5">
                                {SESSION_HISTORY.map(session => (
                                    <div key={session.id} className="p-4 hover:bg-white/5 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary border border-primary/20">
                                                <span className="text-[10px] font-bold uppercase">{session.date.month}</span>
                                                <span className="text-lg font-black leading-none">{session.date.day}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{session.title}</h4>
                                                <div className="flex items-center gap-3 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {session.time}</span>
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> {session.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                            <span className="bg-surface-lighter px-3 py-1 rounded text-xs font-semibold text-gray-300">{session.runners} Runners</span>
                                            <div className="flex gap-2 ml-auto sm:ml-0">
                                                <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors" title="Ver Reporte">
                                                    <span className="material-symbols-outlined text-[18px]">assessment</span>
                                                </button>
                                                <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors" title="Galería de Fotos">
                                                    <span className="material-symbols-outlined text-[18px]">photo_library</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-yellow-500">reviews</span>
                            Feedback Reciente
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {RECENT_FEEDBACK.map(feedback => (
                                <div key={feedback.id} className="bg-surface-dark border border-white/5 p-5 rounded-dashboard hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        {feedback.avatar ? (
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                                                <img className="w-full h-full object-cover" src={feedback.avatar} alt={feedback.author} />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold">
                                                {feedback.initials}
                                            </div>
                                        )}
                                        <div>
                                            <div className="text-sm font-bold text-white">{feedback.author}</div>
                                            <div className="flex text-yellow-500 text-[10px]">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`material-symbols-outlined text-sm ${i < feedback.rating ? '' : 'text-gray-600'}`}>star</span>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="ml-auto text-xs text-gray-500">{feedback.date}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm italic">{feedback.comment}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <div className="bg-gradient-to-b from-surface-dark to-surface-lighter border border-white/10 rounded-dashboard shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">Próxima Misión</span>
                                        <h3 className="text-2xl font-black text-white leading-tight">Jueves 24 Oct</h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                                        <span className="material-symbols-outlined">event_available</span>
                                    </div>
                                </div>
                                <div className="bg-black/20 rounded-lg p-3 mb-6 border border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-gray-400">location_on</span>
                                        <span className="text-sm text-white font-medium">Parque Bicentenario</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">schedule</span>
                                        <span className="text-sm text-white font-medium">19:00 hrs - Grupo 5K</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xs text-gray-500 font-bold uppercase mb-2">Checklist Logístico</p>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" defaultChecked className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-600 bg-surface-dark transition-all checked:border-primary checked:bg-primary hover:border-primary/50" />
                                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 material-symbols-outlined text-sm font-bold pointer-events-none">check</span>
                                        </div>
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors line-through decoration-primary decoration-2">Confirmar asistencia en App</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-600 bg-surface-dark transition-all checked:border-primary checked:bg-primary hover:border-primary/50" />
                                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 material-symbols-outlined text-sm font-bold pointer-events-none">check</span>
                                        </div>
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Revisar ruta en Garmin/Strava</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-600 bg-surface-dark transition-all checked:border-primary checked:bg-primary hover:border-primary/50" />
                                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 material-symbols-outlined text-sm font-bold pointer-events-none">check</span>
                                        </div>
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Cargar equipo (Bandera/Botiquín)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-600 bg-surface-dark transition-all checked:border-primary checked:bg-primary hover:border-primary/50" />
                                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 material-symbols-outlined text-sm font-bold pointer-events-none">check</span>
                                        </div>
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Briefing de seguridad listo</span>
                                    </label>
                                </div>
                                <button className="mt-6 w-full bg-surface-dark hover:bg-surface-lighter border border-white/10 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-secondary">map</span>
                                    Ver Detalles del Evento
                                </button>
                            </div>
                        </div>

                        <div className="bg-surface-dark border border-white/5 p-4 rounded-dashboard shadow-lg flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Pronóstico Jueves</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-white">12°C</span>
                                    <span className="text-xs text-gray-400">Prob. Lluvia 10%</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-blue-400 text-3xl">partly_cloudy_day</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MonitorProfile;
