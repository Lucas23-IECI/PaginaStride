import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: 'Social Run',
        category: '5K',
        date: '',
        time: '',
        location: '',
        description: '',
        imageUrl: '',
    });

    const handleSubmit = () => {
        console.log('Evento creado:', formData);
        alert('¡Evento publicado exitosamente! (Demo)');
    };

    return (
        <>
            <header className="bg-background-dark/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-30 px-8 py-4 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">NUEVO EVENTO</h2>
                    <p className="text-gray-400 text-sm mt-1">Complete los detalles para crear una nueva experiencia.</p>
                </div>
                <div className="flex gap-3">
                    <Link to="/admin/events" className="px-5 py-2.5 rounded-xl border border-white/5 text-white text-sm font-semibold hover:bg-white/5 transition-colors">
                        Cancelar
                    </Link>
                    <button onClick={handleSubmit} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-pink-600 text-white text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:brightness-110 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">publish</span>
                        Publicar Evento
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-8">
                <div className="flex flex-col xl:flex-row gap-8 max-w-[1600px] mx-auto">
                    {/* Form Column */}
                    <div className="flex-1 flex flex-col gap-6 max-w-4xl">
                        <section className="bg-surface-dark rounded-2xl p-6 border border-white/5 shadow-sm">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <span className="bg-primary/20 text-primary p-2 rounded-lg material-symbols-outlined">info</span>
                                <h3 className="text-lg font-bold text-white">Información General</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre del Evento</label>
                                    <input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Ej: Morning Run 5K - Parque Araucano"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de Evento</label>
                                    <div className="relative">
                                        <select
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                            className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        >
                                            <option>Social Run</option>
                                            <option>Social Girl</option>
                                            <option>Brunch & Yoga</option>
                                            <option>Training</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Categoría</label>
                                    <div className="relative">
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        >
                                            <option>5K</option>
                                            <option>10K</option>
                                            <option>21K</option>
                                            <option>Wellness</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Descripción</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-24 resize-none"
                                        placeholder="Describe el evento, la ruta, y lo que pueden esperar los participantes..."
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-surface-dark rounded-2xl p-6 border border-white/5 shadow-sm">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <span className="bg-primary/20 text-primary p-2 rounded-lg material-symbols-outlined">location_on</span>
                                <h3 className="text-lg font-bold text-white">Fecha y Lugar</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Fecha</label>
                                    <input
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
                                        type="date"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Hora</label>
                                    <input
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                        className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
                                        type="time"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Punto de Encuentro</label>
                                <div className="relative mb-2">
                                    <span className="absolute left-4 top-3.5 material-symbols-outlined text-gray-500">search</span>
                                    <input
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full pl-12 bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Buscar ubicación en Google Maps..."
                                        type="text"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-surface-dark rounded-2xl p-6 border border-white/5 shadow-sm">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <span className="bg-primary/20 text-primary p-2 rounded-lg material-symbols-outlined">image</span>
                                <h3 className="text-lg font-bold text-white">Imagen del Evento</h3>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">URL de la Imagen</label>
                                <input
                                    value={formData.imageUrl}
                                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                    className="w-full bg-background-dark border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="https://ejemplo.com/imagen.jpg"
                                    type="url"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Preview Column */}
                    <div className="xl:w-[380px] shrink-0">
                        <div className="sticky top-24 space-y-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-white">Vista Previa</h3>
                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">En Vivo</span>
                            </div>
                            <div className="bg-black rounded-[2rem] border-[8px] border-surface-dark shadow-2xl overflow-hidden max-w-sm mx-auto relative h-[600px] flex flex-col">
                                <div className="h-8 w-full bg-black flex justify-between items-center px-6 pt-2">
                                    <span className="text-white text-[10px] font-bold">9:41</span>
                                </div>
                                <div className="flex-1 bg-background-dark overflow-hidden relative flex flex-col">
                                    <div className="h-[280px] relative w-full bg-gray-800 flex items-center justify-center overflow-hidden">
                                        {formData.imageUrl ? (
                                            <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-white/50 text-xs">Cover Image</span>
                                        )}
                                    </div>
                                    <div className="px-5 -mt-6 relative z-10 pb-4 flex-1 flex flex-col">
                                        <h2 className="text-2xl font-bold text-white leading-tight mb-2">{formData.name || 'Nombre del Evento'}</h2>
                                        <p className="text-gray-400 text-sm mb-2">{formData.date} • {formData.time || 'Hora'}</p>
                                        <p className="text-gray-500 text-xs line-clamp-3">{formData.description || 'Descripción del evento...'}</p>
                                        <div className="mt-auto">
                                            <button className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30">Inscribirse - Gratis</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateEvent;
