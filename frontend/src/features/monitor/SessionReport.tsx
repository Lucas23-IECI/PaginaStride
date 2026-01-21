import { useState } from 'react';
import { MOCK_SESSION_REPORT } from '@/mocks/admin.mock';

// ============================================
// SESSION REPORT PAGE - MONITOR
// ============================================

const SessionReport = () => {
    const report = MOCK_SESSION_REPORT;
    const [notes, setNotes] = useState(report.monitorNotes);
    const [newIncident, setNewIncident] = useState('');
    const [incidents, setIncidents] = useState(report.incidents);

    const presentCount = report.attendees.filter(a => a.attended).length;
    const absentCount = report.attendees.filter(a => !a.attended).length;
    const attendanceRate = Math.round((presentCount / report.attendees.length) * 100);

    const getWeatherIcon = (weather: typeof report.weather) => {
        const icons = {
            sunny: 'wb_sunny',
            cloudy: 'cloud',
            rainy: 'rainy',
            windy: 'air'
        };
        return icons[weather];
    };

    const getWeatherLabel = (weather: typeof report.weather) => {
        const labels = {
            sunny: 'Soleado',
            cloudy: 'Nublado',
            rainy: 'Lluvioso',
            windy: 'Ventoso'
        };
        return labels[weather];
    };

    const addIncident = () => {
        if (newIncident.trim()) {
            setIncidents([...incidents, newIncident.trim()]);
            setNewIncident('');
        }
    };

    const removeIncident = (index: number) => {
        setIncidents(incidents.filter((_, i) => i !== index));
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('es-CL', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <>
            {/* Header */}
            <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/5 bg-background-dark/50 backdrop-blur-sm sticky top-0 z-10">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Reporte de Sesión</h2>
                    <p className="text-sm text-gray-400">{report.eventName} • {formatDate(report.date)}</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-4 py-2 rounded-lg transition-colors border border-white/10">
                        <span className="material-symbols-outlined text-xl">download</span>
                        Exportar PDF
                    </button>
                    <button className="flex items-center gap-2 bg-primary hover:bg-primary-light text-black font-semibold px-4 py-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-xl">send</span>
                        Enviar Reporte
                    </button>
                </div>
            </header>

            <div className="p-6 space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Asistencia</p>
                                <p className="text-2xl font-bold text-white">{attendanceRate}%</p>
                                <p className="text-xs text-gray-500">{presentCount} de {report.attendees.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-emerald-400">how_to_reg</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Presentes</p>
                                <p className="text-2xl font-bold text-emerald-400">{presentCount}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Ausentes</p>
                                <p className="text-2xl font-bold text-red-400">{absentCount}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-red-400">cancel</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Clima</p>
                                <p className="text-2xl font-bold text-white">{report.temperature}°C</p>
                                <p className="text-xs text-gray-500">{getWeatherLabel(report.weather)}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-cyan-400">{getWeatherIcon(report.weather)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Attendance List */}
                    <div className="lg:col-span-2 bg-card-dark border border-white/5 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">groups</span>
                            Lista de Asistencia
                        </h3>

                        <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {report.attendees.map((attendee) => (
                                <div
                                    key={attendee.id}
                                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${attendee.attended
                                            ? 'bg-emerald-500/5 border border-emerald-500/10'
                                            : 'bg-red-500/5 border border-red-500/10'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${attendee.attended ? 'bg-emerald-500/20' : 'bg-red-500/20'
                                            }`}>
                                            <span className={`material-symbols-outlined text-lg ${attendee.attended ? 'text-emerald-400' : 'text-red-400'
                                                }`}>
                                                {attendee.attended ? 'check' : 'close'}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{attendee.name}</p>
                                            <p className="text-xs text-gray-500">{attendee.level}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        {attendee.attended ? (
                                            <span className="text-sm text-emerald-400">
                                                Check-in: {attendee.checkInTime}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-red-400">No asistió</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Session Details */}
                    <div className="space-y-6">
                        {/* Location & Time */}
                        <div className="bg-card-dark border border-white/5 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Detalles</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-gray-400">location_on</span>
                                    <div>
                                        <p className="text-sm text-gray-400">Ubicación</p>
                                        <p className="text-white">{report.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-gray-400">schedule</span>
                                    <div>
                                        <p className="text-sm text-gray-400">Hora</p>
                                        <p className="text-white">{formatTime(report.date)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-gray-400">badge</span>
                                    <div>
                                        <p className="text-sm text-gray-400">Registrados</p>
                                        <p className="text-white">{report.totalRegistered} personas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Incidents */}
                        <div className="bg-card-dark border border-white/5 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-amber-400">report</span>
                                Incidencias
                            </h3>

                            <div className="space-y-2 mb-4">
                                {incidents.length === 0 ? (
                                    <p className="text-gray-500 text-sm italic">Sin incidencias reportadas</p>
                                ) : (
                                    incidents.map((incident, index) => (
                                        <div key={index} className="flex items-start gap-2 p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                                            <span className="material-symbols-outlined text-amber-400 text-lg mt-0.5">warning</span>
                                            <p className="text-sm text-gray-300 flex-1">{incident}</p>
                                            <button
                                                onClick={() => removeIncident(index)}
                                                className="text-gray-500 hover:text-red-400 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">close</span>
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newIncident}
                                    onChange={(e) => setNewIncident(e.target.value)}
                                    placeholder="Agregar incidencia..."
                                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                    onKeyPress={(e) => e.key === 'Enter' && addIncident()}
                                />
                                <button
                                    onClick={addIncident}
                                    className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                                >
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Monitor Notes */}
                <div className="bg-card-dark border border-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-cyan-400">edit_note</span>
                        Notas del Monitor
                    </h3>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Escribe tus observaciones sobre la sesión..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                        Estas notas serán visibles en el reporte final.
                    </p>
                </div>
            </div>
        </>
    );
};

export default SessionReport;
