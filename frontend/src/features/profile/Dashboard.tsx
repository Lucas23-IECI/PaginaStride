import { Link } from 'react-router-dom';

const ProfileDashboard = () => {
    return (
        <div className="flex-1 h-full overflow-y-auto pb-20">
            {/* Header con Perfil */}
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
                        <div className="absolute -bottom-1 -right-1 bg-secondary text-black text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                            Pro
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-black text-white">Mateo Fernández</h2>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                            <span className="bg-white/10 text-white/60 text-xs font-bold px-3 py-1 rounded-full border border-white/5">
                                Member since March 2023
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="h-12 w-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="h-12 px-6 flex items-center gap-2 bg-primary hover:bg-primary/90 rounded-full text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-xl">qr_code_2</span>
                        <span>Mi QR</span>
                    </button>
                </div>
            </header>

            <div className="p-6 md:p-10 space-y-12">
                {/* Stats Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface-dark p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">distance</span>
                            </div>
                            <span className="text-white/40 font-bold text-sm uppercase tracking-widest">
                                Kms Recorridos
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white tracking-tighter">482.5</span>
                            <span className="text-lg font-bold text-primary">KM</span>
                        </div>
                    </div>

                    <div className="bg-surface-dark p-6 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all group overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-secondary">exercise</span>
                            </div>
                            <span className="text-white/40 font-bold text-sm uppercase tracking-widest">
                                Runs Completadas
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white tracking-tighter">34</span>
                            <span className="text-lg font-bold text-secondary">RUNS</span>
                        </div>
                    </div>

                    <div className="bg-surface-dark p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all group overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">star</span>
                            </div>
                            <span className="text-white/40 font-bold text-sm uppercase tracking-widest">
                                Social Points
                            </span>
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
                        <Link to="/profile/events" className="text-secondary text-sm font-bold hover:underline">
                            Ver todos
                        </Link>
                    </div>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x">
                        <div className="min-w-[320px] snap-center group">
                            <div className="bg-surface-dark rounded-3xl overflow-hidden border border-white/5 h-full flex flex-col shadow-xl">
                                <div className="bg-black p-4 flex justify-between items-center border-b border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-white">24</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Octubre</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-[10px] font-bold text-primary uppercase">
                                        Registrado
                                    </span>
                                </div>
                                <div className="bg-primary p-5 relative flex-grow">
                                    <h4 className="text-xl font-bold text-white mb-4 relative z-10">
                                        Parque Bicentenario Run
                                    </h4>
                                    <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span>Vitacura, Santiago</span>
                                    </div>
                                    <Link to="/profile/events" className="w-full py-2 bg-white text-primary rounded-full font-bold text-xs hover:bg-gray-100 transition-all relative z-10 flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">qr_code_2</span>
                                        Ver Ticket
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="min-w-[320px] snap-center group">
                            <div className="bg-surface-dark rounded-3xl overflow-hidden border border-white/5 h-full flex flex-col shadow-xl">
                                <div className="bg-black p-4 flex justify-between items-center border-b border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-white">02</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Noviembre</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-[10px] font-bold text-secondary uppercase">
                                        Confirmado
                                    </span>
                                </div>
                                <div className="bg-secondary p-5 relative flex-grow">
                                    <h4 className="text-xl font-bold text-black mb-4 relative z-10">
                                        Sunset City Run
                                    </h4>
                                    <div className="flex items-center gap-2 text-black/80 text-sm mb-4">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span>Las Condes, Santiago</span>
                                    </div>
                                    <Link to="/profile/events" className="w-full py-2 bg-white text-secondary rounded-full font-bold text-xs hover:bg-gray-100 transition-all relative z-10 flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">qr_code_2</span>
                                        Ver Ticket
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tienda Recomendada */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-surface-dark to-black p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 block">
                            Stride Store
                        </span>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                            Polera Técnica "Biobío" 2023
                        </h4>
                        <p className="text-white/40 text-xs mb-6">
                            Optimiza tu rendimiento con nuestra tela transpirable premium.
                        </p>
                        <Link to="/store" className="w-full py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-lg">shopping_bag</span>
                            <span>Ir a la tienda</span>
                        </Link>
                    </div>

                    <div className="bg-surface-dark p-6 rounded-3xl border border-white/5 relative overflow-hidden group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl text-primary">self_improvement</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white group-hover:text-secondary transition-colors">
                                    Yoga & Brunch
                                </h4>
                                <p className="text-white/40 text-xs">
                                    Nueva sesión disponible el 15 Nov
                                </p>
                            </div>
                            <div className="ml-auto">
                                <span className="material-symbols-outlined text-white/20 group-hover:translate-x-1 group-hover:text-white transition-all">
                                    arrow_forward
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProfileDashboard;
