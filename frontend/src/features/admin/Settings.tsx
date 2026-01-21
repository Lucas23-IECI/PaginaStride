import { useState } from 'react';

// ============================================
// SETTINGS PAGE - ADMIN
// ============================================

interface SettingsForm {
    clubName: string;
    contactEmail: string;
    phone: string;
    address: string;
    instagram: string;
    tiktok: string;
    whatsapp: string;
    website: string;
}

const Settings = () => {
    const [settings, setSettings] = useState<SettingsForm>({
        clubName: 'Stride Chile',
        contactEmail: 'hola@stride.cl',
        phone: '+56 9 1234 5678',
        address: 'Parque Bicentenario, Vitacura, Santiago',
        instagram: '@stridechile',
        tiktok: '@stridechile',
        whatsapp: '+56912345678',
        website: 'https://stride.cl'
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (field: keyof SettingsForm, value: string) => {
        setSettings(prev => ({ ...prev, [field]: value }));
        setSaved(false);
    };

    const handleSave = () => {
        // Simular guardado
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <>
            {/* Header */}
            <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/5 bg-background-dark/50 backdrop-blur-sm sticky top-0 z-10">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Configuración</h2>
                    <p className="text-sm text-gray-400">Ajustes generales del club</p>
                </div>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-primary hover:bg-primary-light text-black font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">save</span>
                    Guardar Cambios
                </button>
            </header>

            <div className="p-6 space-y-6 max-w-4xl">
                {/* Success message */}
                {saved && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                        <span className="text-emerald-400">Configuración guardada correctamente</span>
                    </div>
                )}

                {/* General Info */}
                <div className="bg-card-dark border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">info</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Información General</h3>
                            <p className="text-sm text-gray-400">Datos básicos del club</p>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Nombre del Club
                            </label>
                            <input
                                type="text"
                                value={settings.clubName}
                                onChange={(e) => handleChange('clubName', e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email de Contacto
                                </label>
                                <input
                                    type="email"
                                    value={settings.contactEmail}
                                    onChange={(e) => handleChange('contactEmail', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    value={settings.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Dirección / Punto de Encuentro
                            </label>
                            <input
                                type="text"
                                value={settings.address}
                                onChange={(e) => handleChange('address', e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-card-dark border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-cyan-400">share</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Redes Sociales</h3>
                            <p className="text-sm text-gray-400">Enlaces a perfiles sociales</p>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        Instagram
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={settings.instagram}
                                    onChange={(e) => handleChange('instagram', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                        TikTok
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={settings.tiktok}
                                    onChange={(e) => handleChange('tiktok', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">chat</span>
                                        WhatsApp
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={settings.whatsapp}
                                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">language</span>
                                        Sitio Web
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    value={settings.website}
                                    onChange={(e) => handleChange('website', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-card-dark border border-red-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-red-400">warning</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Zona de Peligro</h3>
                            <p className="text-sm text-gray-400">Acciones irreversibles</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                            <div>
                                <p className="text-white font-medium">Exportar todos los datos</p>
                                <p className="text-sm text-gray-400">Descarga un backup completo de la base de datos</p>
                            </div>
                            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">
                                Exportar
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                            <div>
                                <p className="text-white font-medium">Limpiar caché</p>
                                <p className="text-sm text-gray-400">Elimina datos temporales almacenados</p>
                            </div>
                            <button className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg transition-colors border border-amber-500/20">
                                Limpiar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
