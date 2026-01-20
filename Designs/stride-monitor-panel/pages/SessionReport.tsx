import React, { useState } from 'react';
import { ChecklistItem } from '../types';

const INITIAL_CHECKLIST: ChecklistItem[] = [
    { id: '1', label: 'Todos los corredores llegaron a meta', checked: false },
    { id: '2', label: 'Equipamiento (poleras/chips) recuperado', checked: false },
    { id: '3', label: 'Zona de hidratación limpia', checked: false },
    { id: '4', label: 'Aviso WhatsApp "Sesión Finalizada" enviado', checked: false },
];

const SessionReport: React.FC = () => {
    const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
    const [incidentText, setIncidentText] = useState('');

    const toggleChecklist = (id: string) => {
        setChecklist(checklist.map(item => 
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Resumen de la Sesión</h1>
                    <p className="text-gray-400 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">event</span> Jueves, 24 de Octubre
                        <span className="w-1 h-1 rounded-full bg-gray-600 mx-1"></span>
                        <span className="text-secondary font-semibold">Trote Social 5K</span>
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg flex items-center gap-2 text-green-400 text-sm font-bold">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    Sesión Completada con Éxito
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Asistencia Final</p>
                            <h3 className="text-4xl font-black text-white">48</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-surface-lighter flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-2xl">groups</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        <span className="text-green-400 font-bold">100%</span> de los inscritos
                    </div>
                </div>
                <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Nuevos Leads</p>
                            <h3 className="text-4xl font-black text-white">8</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-surface-lighter flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined text-2xl">person_add</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        Capturados vía QR
                    </div>
                </div>
                <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Puntos Stride</p>
                            <h3 className="text-4xl font-black text-white">2,400</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-surface-lighter flex items-center justify-center text-purple-400">
                            <span className="material-symbols-outlined text-2xl">loyalty</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        Distribuidos hoy
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-surface-dark border border-white/5 rounded-dashboard p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                            <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                                <span className="material-symbols-outlined">report_problem</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Reporte de Incidentes</h3>
                                <p className="text-xs text-gray-400">Documenta lesiones, problemas en ruta o imprevistos.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <textarea 
                                className="w-full bg-surface-lighter/50 border border-white/10 rounded-xl p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary min-h-[140px] resize-y transition-all" 
                                placeholder="Describe lo sucedido aquí... (Ej: Corredor se torció el tobillo en km 2, desvío por trabajos en la vereda, etc.)"
                                value={incidentText}
                                onChange={(e) => setIncidentText(e.target.value)}
                            ></textarea>
                            <div className="absolute bottom-3 right-3 text-[10px] text-gray-500 font-medium">{incidentText.length} / 500 caracteres</div>
                        </div>
                    </div>

                    <div className="bg-surface-dark border border-white/5 rounded-dashboard p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                                <span className="material-symbols-outlined">perm_media</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Carga Multimedia</h3>
                                <p className="text-xs text-gray-400">Sube el contenido raw para el equipo de RRSS.</p>
                            </div>
                        </div>
                        <div className="border-2 border-dashed border-white/10 rounded-xl bg-surface-lighter/20 hover:bg-surface-lighter/40 transition-colors cursor-pointer group p-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-surface-dark flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-3xl text-gradient">cloud_upload</span>
                                </div>
                                <h4 className="text-white font-bold mb-1">Arrastra tus archivos aquí</h4>
                                <p className="text-sm text-gray-400 mb-4">o haz clic para explorar tu dispositivo</p>
                                <span className="text-[10px] text-gray-500 bg-black/20 px-3 py-1 rounded-full">Soporta: JPG, PNG, MP4 (Max 100MB)</span>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between bg-surface-lighter/30 p-3 rounded-lg border border-white/5">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-gray-400">image</span>
                                    <span className="text-sm text-gray-300">foto_grupal_inicio.jpg</span>
                                </div>
                                <span className="text-xs text-green-400 font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">check</span> Subido
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-surface-dark border border-white/5 rounded-dashboard p-6 shadow-lg sticky top-24">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">playlist_add_check</span>
                            Checklist Final
                        </h3>
                        <div className="space-y-3 mb-8">
                            {checklist.map(item => (
                                <label key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="mt-0.5 custom-checkbox w-5 h-5 rounded bg-surface-lighter border-white/20 text-primary focus:ring-offset-0 focus:ring-0 cursor-pointer"
                                        checked={item.checked}
                                        onChange={() => toggleChecklist(item.id)}
                                    />
                                    <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors select-none">
                                        {item.label}
                                    </div>
                                </label>
                            ))}
                        </div>
                        <button className="w-full bg-gradient-primary text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                            <span>Enviar Reporte Final</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                        </button>
                        <p className="text-center text-[10px] text-gray-500 mt-4">
                            Al enviar, se notificará automáticamente a Administración.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionReport;