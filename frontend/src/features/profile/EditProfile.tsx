import { Link } from 'react-router-dom';

// ============================================
// EDIT PROFILE - Editar Perfil
// Fuente: HTML #2 - PERFIL EDITAR
// ============================================

const EditProfile = () => {
    return (
        <div className="min-h-full">
            {/* Header fijo */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-background-dark/95 backdrop-blur transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="group relative">
                        <h1 className="font-script text-4xl font-bold text-gradient pb-2">stride</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end mr-2">
                            <span className="text-sm font-bold text-white">Nicolas Silva</span>
                            <span className="text-xs text-gray-400">Maratonista</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-primary/50 p-0.5">
                            <img
                                alt="Avatar"
                                className="w-full h-full object-cover rounded-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-12 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link to="/profile" className="hover:text-primary transition-colors">Inicio</Link>
                        <span className="text-primary text-[10px] tracking-tighter font-black">&gt;&gt;&gt;</span>
                        <span className="text-white font-medium">Editar Perfil</span>
                    </div>

                    {/* Avatar Section */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-dark shadow-2xl relative">
                                <img
                                    alt="User Profile Photo"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                    <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                                </div>
                            </div>
                            <button className="absolute bottom-2 right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-white text-xl">edit</span>
                            </button>
                        </div>
                        <h2 className="text-2xl font-black mt-6">Nicolas Silva</h2>
                        <p className="text-gray-400">Miembro desde Octubre 2023</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Información Personal */}
                        <div className="bg-surface-dark rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-primary font-black tracking-tighter">&gt;&gt;&gt;</span>
                                <h3 className="text-xl font-bold">Información Personal</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Nombre Completo</label>
                                    <input className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" type="text" defaultValue="Nicolas Silva" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Ciudad</label>
                                    <input className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" type="text" defaultValue="Concepción, Chile" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Biografía</label>
                                    <textarea className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white transition-all resize-none focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" placeholder="Cuéntanos sobre tu pasión por el running..." rows={3} defaultValue="Amante de los cerros y los kilómetros en buena compañía. Entrenando para mi primera maratón."></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Preferencias de Running */}
                        <div className="bg-surface-dark rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-primary font-black tracking-tighter">&gt;&gt;&gt;</span>
                                <h3 className="text-xl font-bold">Preferencias de Running</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Ritmo Promedio (min/km)</label>
                                    <select className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white transition-all appearance-none focus:border-primary outline-none">
                                        <option>4:00 - 4:30</option>
                                        <option selected>4:30 - 5:00</option>
                                        <option>5:00 - 5:30</option>
                                        <option>5:30 - 6:00</option>
                                        <option>+6:00</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Meta de Distancia</label>
                                    <select className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-white transition-all appearance-none focus:border-primary outline-none">
                                        <option>5K</option>
                                        <option>10K</option>
                                        <option selected>21K (Media Maratón)</option>
                                        <option>42K (Maratón)</option>
                                        <option>Ultra</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Conectar Redes */}
                        <div className="bg-surface-dark rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-primary font-black tracking-tighter">&gt;&gt;&gt;</span>
                                <h3 className="text-xl font-bold">Conectar Redes</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Instagram</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">@</span>
                                        <input className="w-full bg-background-dark border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" placeholder="usuario" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">X (Twitter)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">@</span>
                                        <input className="w-full bg-background-dark border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" placeholder="usuario" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Configuración de Cuenta */}
                        <div className="bg-surface-dark rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-primary font-black tracking-tighter">&gt;&gt;&gt;</span>
                                <h3 className="text-xl font-bold">Configuración de Cuenta</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-white/5">
                                    <div className="flex flex-col">
                                        <span className="font-bold">Notificaciones por Email</span>
                                        <span className="text-xs text-gray-500">Recibe alertas de nuevos eventos y desafíos</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-white/5">
                                    <div className="flex flex-col">
                                        <span className="font-bold">Perfil Público</span>
                                        <span className="text-xs text-gray-500">Otros miembros pueden ver tus estadísticas</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
                            <button type="button" className="w-full sm:w-auto px-8 py-4 border-2 border-white/10 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/30 transition-all order-2 sm:order-1">
                                Cancelar
                            </button>
                            <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-gradient-primary text-white font-black rounded-full shadow-[0_0_20px_rgba(233,32,99,0.3)] hover:shadow-[0_0_30px_rgba(233,32,99,0.5)] transform hover:scale-105 transition-all order-1 sm:order-2">
                                Guardar Cambios
                            </button>
                        </div>

                        {/* Delete account */}
                        <div className="pt-8 text-center">
                            <button type="button" className="text-red-500/60 hover:text-red-500 text-sm font-medium transition-colors">Eliminar mi cuenta</button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-background-dark border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2 className="font-script text-3xl text-gradient">stride</h2>
                    <p className="text-gray-500 text-sm">© 2024 Stride Chile. Hecho en Concepción.</p>
                    <div className="flex gap-6">
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">Privacidad</a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">Términos</a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">Soporte</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EditProfile;
