import { Link } from 'react-router-dom';

// ============================================
// PROFILE DASHBOARD - Mi Perfil (Página principal del layout)
// Fuente: HTML #1 - PERFIL
// ============================================

const Dashboard = () => {
    return (
        <div className="pb-20">
            {/* Header con Avatar y Stats */}
            <header className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-primary p-1">
                            <img
                                alt="User Avatar"
                                className="w-full h-full object-cover rounded-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBawmU0d_l949owZ419WMp1PcryUCMZ3d2psCq4Zp4-IPwyszyEh3S9bU7NOhffJBmxTUEE85mdVOyQTbFyl1-1UDYlQMAGfSjgFdy9egKCF62SaiVAyApLhxYKeEt0pu7-kHAd9egjc5NJM-s3dOCzGxQ_7Pw4QxqbRtwvAA1Kyd5RcTBwgvHYhPvWBO6wXop21mYlcNsGmA3vzksIxc1gax_bCidD6iAnCrBCbBrbkuodcVtunGjHhv9LqDJsNc91HI4f2bC8omW"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-secondary text-black text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">Pro</div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-black text-white">Mateo Fernández</h2>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                            <span className="bg-white/10 text-white/60 text-xs font-bold px-3 py-1 rounded-full border border-white/5">Member since March 2023</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="h-12 w-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="h-12 px-6 flex items-center gap-2 bg-primary hover:bg-primary/90 rounded-full text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-xl">add</span>
                        <span>Registrar Run</span>
                    </button>
                </div>
            </header>

            <div className="p-6 md:p-10 space-y-12">
                {/* Stats Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card-dark p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">distance</span>
                            </div>
                            <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Kms Recorridos</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white tracking-tighter">482.5</span>
                            <span className="text-lg font-bold text-primary">KM</span>
                        </div>
                    </div>

                    <div className="bg-card-dark p-6 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all group overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-secondary">exercise</span>
                            </div>
                            <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Runs Completadas</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white tracking-tighter">34</span>
                            <span className="text-lg font-bold text-secondary">RUNS</span>
                        </div>
                    </div>

                    <div className="bg-card-dark p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all group overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">star</span>
                            </div>
                            <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Social Points</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white tracking-tighter">1,250</span>
                            <span className="text-lg font-bold text-white/50">PTS</span>
                        </div>
                    </div>
                </section>

                {/* Próximas Carreras */}
                <section>
                    <div className="flex items-end justify-between mb-6">
                        <h3 className="text-2xl font-black text-white">Mis Próximas Carreras</h3>
                        <Link to="/profile/registrations" className="text-secondary text-sm font-bold hover:underline">Gestionar registros</Link>
                    </div>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x">
                        {/* Card 1 */}
                        <div className="min-w-[320px] snap-center group">
                            <div className="bg-card-dark rounded-3xl overflow-hidden border border-white/5 h-full flex flex-col shadow-xl">
                                <div className="bg-black p-4 flex justify-between items-center border-b border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-white">24</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Octubre</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-[10px] font-bold text-primary uppercase">Registrado</span>
                                </div>
                                <div className="bg-primary p-5 relative flex-grow">
                                    <div className="absolute inset-0 bg-chevron-light opacity-10"></div>
                                    <h4 className="text-xl font-bold text-white mb-4 relative z-10">Parque Bicentenario Run</h4>
                                    <button className="w-full py-2 bg-white text-primary rounded-full font-bold text-xs hover:bg-gray-100 transition-all relative z-10">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="min-w-[320px] snap-center group">
                            <div className="bg-card-dark rounded-3xl overflow-hidden border border-white/5 h-full flex flex-col shadow-xl">
                                <div className="bg-black p-4 flex justify-between items-center border-b border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-white">02</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Noviembre</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-[10px] font-bold text-secondary uppercase">Confirmado</span>
                                </div>
                                <div className="bg-secondary p-5 relative flex-grow">
                                    <div className="absolute inset-0 bg-chevron-light opacity-10"></div>
                                    <h4 className="text-xl font-bold text-white mb-4 relative z-10">Sunset City Run</h4>
                                    <button className="w-full py-2 bg-white text-secondary rounded-full font-bold text-xs hover:bg-gray-100 transition-all relative z-10">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calendar & Recommendations */}
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-black text-white">Calendario de Actividad</h3>
                            <div className="flex gap-2">
                                <button className="p-2 bg-white/5 rounded-lg text-white/40 hover:text-white transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
                                <button className="p-2 bg-white/5 rounded-lg text-white/40 hover:text-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
                            </div>
                        </div>
                        <div className="bg-card-dark p-6 rounded-3xl border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-bold">Octubre 2023</span>
                                <div className="flex gap-4 text-xs font-bold text-white/40">
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div> Community</div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div> Personal</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day) => (
                                    <div key={day} className="text-center text-[10px] font-black text-white/20 uppercase tracking-widest pb-4">{day}</div>
                                ))}
                                {/* Días del calendario */}
                                {[26, 27, 28, 29, 30].map((d) => (
                                    <div key={`prev-${d}`} className="calendar-day text-white/10 opacity-20">{d}</div>
                                ))}
                                <div className="calendar-day">1</div>
                                <div className="calendar-day has-event-secondary">2</div>
                                {[3, 4, 5, 6].map((d) => <div key={d} className="calendar-day">{d}</div>)}
                                <div className="calendar-day has-event">7</div>
                                {[8, 9].map((d) => <div key={d} className="calendar-day">{d}</div>)}
                                <div className="calendar-day today">10</div>
                                {[11, 12].map((d) => <div key={d} className="calendar-day">{d}</div>)}
                                <div className="calendar-day has-event-secondary">13</div>
                                {[14, 15, 16].map((d) => <div key={d} className="calendar-day">{d}</div>)}
                                <div className="calendar-day has-event">17</div>
                                {[18, 19, 20, 21, 22, 23].map((d) => <div key={d} className="calendar-day">{d}</div>)}
                                <div className="calendar-day has-event">24</div>
                                {[25, 26, 27, 28, 29, 30, 31].map((d) => <div key={d} className="calendar-day">{d}</div>)}
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white">Recomendado para ti</h3>
                        <div className="bg-gradient-to-br from-surface-dark to-black p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 block">Stride Store</span>
                            <div className="flex flex-col h-full">
                                <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
                                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                                        <h4 className="font-script text-3xl text-gradient">stride</h4>
                                        <p className="text-[8px] text-white/20 uppercase tracking-widest mt-1 italic">Technical T-Shirt</p>
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 leading-tight">Polera Técnica "Biobío" 2023</h4>
                                <p className="text-white/40 text-xs mb-6">Optimiza tu rendimiento con nuestra tela transpirable premium.</p>
                                <Link to="/tienda" className="mt-auto w-full py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-lg">shopping_bag</span>
                                    <span>Comprar ahora</span>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-card-dark p-6 rounded-3xl border border-white/5 relative overflow-hidden group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                    <img alt="Yoga experience" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRNXccgQnJujdmh0U-1Gn-j3LaNTIqgtY0hAqBHRRivJ0vKqs8oi1M6eZ5CnYZlVXd18NOpsZJ2-vFQT_OPGXHgIVCFwdt5_X_Qvr93UM51dQ6qPFuPhgLFQnGQP_i9P7AjOzj5iiI54Sz96Nae9xz0NBNWdzzOZo2ZyBY1Gyc0pOOKk302VgWeDN2qxA04mF9qTGXjO3aC2KvIqJtNaEw5MNwvKtxZXzjpRbj2MN6EmX2Tqek-N55wI56s3lOoSqisuc3d2Z_czWW" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-secondary transition-colors">Yoga & Brunch</h4>
                                    <p className="text-white/40 text-xs">Nueva sesión disponible el 15 Nov</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="material-symbols-outlined text-white/20 group-hover:translate-x-1 group-hover:text-white transition-all">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
