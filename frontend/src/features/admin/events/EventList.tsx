import { Link } from 'react-router-dom';
import { MOCK_ADMIN_EVENTS } from '@/mocks/admin.mock';
import { useState } from 'react';

const EventList = () => {
    const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'draft'>('all');

    const filteredEvents = MOCK_ADMIN_EVENTS.filter(event => {
        if (filter === 'all') return true;
        if (filter === 'draft') return event.status === 'draft';
        if (filter === 'upcoming') return event.status === 'published';
        if (filter === 'past') return event.status === 'finished';
        return true;
    });

    return (
        <>
            <div className="flex-shrink-0 px-6 py-6 md:px-10 border-b border-white/5 bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
                <div className="flex flex-col gap-6 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white text-3xl font-black tracking-tight">GESTIÓN DE EVENTOS</h2>
                            <p className="text-gray-400 text-sm md:text-base">Administra, edita y crea nuevos eventos para la comunidad.</p>
                        </div>
                        <Link to="/admin/events/new" className="flex items-center justify-center gap-2 h-12 px-6 bg-gradient-to-r from-primary to-[#ff2b7a] hover:brightness-110 text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Crear Nuevo Evento</span>
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="w-full lg:max-w-md relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">search</span>
                            </div>
                            <input className="block w-full h-11 pl-10 pr-4 rounded-xl bg-surface-dark border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" placeholder="Buscar por nombre, ID o categoría..." type="text" />
                        </div>
                        <div className="w-full lg:w-auto overflow-x-auto">
                            <div className="flex gap-2 p-1 bg-surface-dark rounded-lg border border-white/5">
                                <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${filter === 'all' ? 'bg-white/10 text-white shadow-sm' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>Todos</button>
                                <button onClick={() => setFilter('upcoming')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'upcoming' ? 'bg-white/10 text-white shadow-sm' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>Próximos</button>
                                <button onClick={() => setFilter('past')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'past' ? 'bg-white/10 text-white shadow-sm' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>Pasados</button>
                                <button onClick={() => setFilter('draft')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'draft' ? 'bg-white/10 text-white shadow-sm' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>Borradores</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">
                    <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark shadow-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 bg-black/20">
                                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">Evento</th>
                                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">Tipo</th>
                                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">Fecha / Hora</th>
                                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">Inscritos</th>
                                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400">Estado</th>
                                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredEvents.map((event) => (
                                        <tr key={event.id} className="group hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative size-12 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img className="w-full h-full object-cover" alt={event.name} src={event.image} />
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">{event.name}</p>
                                                        <p className="text-gray-500 text-xs">ID: #{event.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${event.typeColor}`}>{event.type}</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex flex-col">
                                                    <span className="text-white text-sm">{event.date}</span>
                                                    <span className="text-gray-500 text-xs">{event.time}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex flex-col gap-1 w-32">
                                                    <div className="flex justify-between text-xs text-white">
                                                        <span>{event.inscribed}</span>
                                                        <span className="text-gray-500">/ {event.capacity}</span>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${(event.inscribed / event.capacity) * 100}%` }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <span className={`size-2 rounded-full ${event.status === 'published' ? 'bg-green-500 animate-pulse' : event.status === 'draft' ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
                                                    <span className="text-white text-sm capitalize">{event.status === 'published' ? 'Publicado' : event.status === 'draft' ? 'Borrador' : 'Finalizado'}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                                                    <button className="p-2 rounded-lg hover:bg-primary/20 text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-black/20">
                            <span className="text-xs text-gray-500">Mostrando {filteredEvents.length} de {MOCK_ADMIN_EVENTS.length} eventos</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventList;
