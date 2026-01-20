import { Link } from 'react-router-dom';
import { MOCK_LANDING_EVENTS, MOCK_LANDING_EXPERIENCES } from '@/mocks/landing.mock';

const Home = () => {
    return (
        <>
            {/* ============================================
          HERO SECTION
          ============================================ */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                    <img
                        alt="Group of runners stretching and laughing at sunset in Concepcion"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6"
                    />
                </div>
                <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 mt-10">
                    <h1 className="font-script text-6xl md:text-8xl text-white drop-shadow-lg opacity-0 animate-[fadeIn_1s_ease-out_forwards]">stride</h1>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white max-w-4xl">
                        Correr es la excusa <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">para socializar</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-black text-white">+1000</span>
                            <span className="text-sm uppercase tracking-wider text-gray-300 font-bold">Miembros</span>
                        </div>
                        <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-black text-white">+100</span>
                            <span className="text-sm uppercase tracking-wider text-gray-300 font-bold">Eventos</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                        <Link to="/entrenamiento" className="h-14 px-8 min-w-[180px] bg-primary hover:bg-primary/90 rounded-full text-white text-base font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                            <span>Únete al Club</span>
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                        <button className="h-14 px-8 min-w-[180px] border-2 border-white/30 hover:border-white/80 hover:bg-white/10 backdrop-blur-sm rounded-full text-white text-base font-bold transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            <span>Ver Video</span>
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_double_arrow_down</span>
                </div>
            </section>

            {/* ============================================
          ABOUT SECTION
          ============================================ */}
            <section className="py-24 bg-background-dark relative overflow-hidden" id="about">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-chevron opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="text-secondary font-bold tracking-widest text-sm uppercase">Sobre Nosotros</span>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    Más que kilómetros, <br />construimos <span className="text-primary">historias.</span>
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                                    Nacimos en Concepción con una misión simple: unir a la comunidad a través del deporte. No importa tu ritmo, importa tu energía.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="p-6 rounded-2xl bg-surface-dark border border-white/5 group hover:border-primary/50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary">groups</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">Comunidad</h3>
                                    <p className="text-sm text-gray-500">Un espacio seguro para conectar y crecer.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-surface-dark border border-white/5 group hover:border-secondary/50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                        <span className="material-symbols-outlined text-secondary">favorite</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">Bienestar</h3>
                                    <p className="text-sm text-gray-500">Salud física y mental en cada paso.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-surface-dark border border-white/5 group hover:border-white/30 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-white">public</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-2">Impacto</h3>
                                    <p className="text-sm text-gray-500">Acciones que trascienden el asfalto.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] transform rotate-3 translate-x-2 translate-y-2"></div>
                            <img
                                alt="Two runners high fiving in the city"
                                className="relative rounded-[2rem] shadow-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/10"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBawmU0d_l949owZ419WMp1PcryUCMZ3d2psCq4Zp4-IPwyszyEh3S9bU7NOhffJBmxTUEE85mdVOyQTbFyl1-1UDYlQMAGfSjgFdy9egKCF62SaiVAyApLhxYKeEt0pu7-kHAd9egjc5NJM-s3dOCzGxQ_7Pw4QxqbRtwvAA1Kyd5RcTBwgvHYhPvWBO6wXop21mYlcNsGmA3vzksIxc1gax_bCidD6iAnCrBCbBrbkuodcVtunGjHhv9LqDJsNc91HI4f2bC8omW"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          EVENTS SECTION
          ============================================ */}
            <section className="py-24 bg-[#181113]" id="events">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">Calendario</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Próximos Eventos</h2>
                    </div>
                    <Link className="hidden md:flex items-center gap-2 text-white font-semibold hover:text-secondary transition-colors group" to="/viajes">
                        Ver todos
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
                <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory no-scrollbar max-w-[100vw]">
                    {MOCK_LANDING_EVENTS.map((event) => (
                        <div key={event.id} className="min-w-[320px] md:min-w-[380px] snap-center group">
                            <div className="bg-surface-dark rounded-3xl overflow-hidden shadow-xl border border-white/5 flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
                                <div className="bg-black p-5 flex justify-between items-center border-b border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-black text-white leading-none">{event.day}</span>
                                        <span className="text-sm font-bold text-gray-400 uppercase">{event.month}</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider">{event.time}</span>
                                </div>
                                <div className={`${event.color} p-6 relative flex-grow flex flex-col`}>
                                    <div className="absolute inset-0 bg-chevron-light opacity-20 pointer-events-none"></div>
                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                        <div className="flex items-center gap-2 text-white/90 mb-4 text-sm">
                                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="w-full h-24 bg-black/20 rounded-xl mb-4 overflow-hidden relative backdrop-blur-sm border border-white/10">
                                            <img alt="Map Preview" className="w-full h-full object-cover opacity-60 grayscale" src={event.mapImage} />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white drop-shadow-md">map</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={`w-full py-3 bg-white ${event.textColor} rounded-full font-bold text-sm shadow-lg hover:bg-gray-100 transition-colors relative z-10`}>
                                        Inscribirse
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================
          EXPERIENCES SECTION
          ============================================ */}
            <section className="py-24 bg-background-dark" id="experiences">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-3">Descubre tu Ritmo</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Experiencias <span className="font-script text-primary">Stride</span> Hub</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            No somos solo un club de running. Somos una plataforma de experiencias diseñada para conectar, disfrutar y celebrar el movimiento en todas sus formas.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {MOCK_LANDING_EXPERIENCES.map((exp) => (
                            <div key={exp.id} className={`group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 ${exp.borderColor} transition-all duration-500 shadow-2xl shadow-black/50`}>
                                <div className="absolute inset-0 z-0">
                                    <img
                                        alt={exp.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                                        src={exp.image}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                                </div>
                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10">
                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${exp.badgeBg} backdrop-blur-md border border-current/30 ${exp.badgeText} text-xs font-bold uppercase tracking-wider mb-4`}>
                                            {exp.icon ? (
                                                <span className="material-symbols-outlined text-[14px]">{exp.icon}</span>
                                            ) : (
                                                <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                                            )}
                                            {exp.badge}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{exp.title}</h3>
                                        <p className="text-gray-300 mb-6 text-sm md:text-base line-clamp-2 md:line-clamp-none">
                                            {exp.description}
                                        </p>
                                        <button className={`flex items-center gap-2 text-white font-bold text-sm border-b-2 ${exp.badgeText === 'text-primary' ? 'border-primary' : exp.badgeText === 'text-[#9c27b0]' ? 'border-[#9c27b0]' : exp.badgeText === 'text-secondary' ? 'border-secondary' : 'border-green-500'} pb-1 group/btn hover:${exp.badgeText} transition-colors`}>
                                            Ver Detalles
                                            <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
          PARTNERS SECTION
          ============================================ */}
            <section className="py-12 border-y border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">Nuestros Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        <div className="h-10 w-32 bg-white/20 mask-image flex items-center justify-center grayscale hover:grayscale-0">
                            <span className="font-black text-2xl italic tracking-tighter text-white">Red Bull</span>
                        </div>
                        <div className="h-10 w-32 bg-white/20 mask-image flex items-center justify-center grayscale hover:grayscale-0">
                            <span className="font-bold text-2xl text-white">TECHO</span>
                        </div>
                        <div className="h-10 w-32 bg-white/20 mask-image flex items-center justify-center grayscale hover:grayscale-0">
                            <span className="font-bold text-2xl text-white tracking-widest">GATORADE</span>
                        </div>
                        <div className="h-10 w-32 bg-white/20 mask-image flex items-center justify-center grayscale hover:grayscale-0">
                            <span className="font-bold text-2xl text-white">NIKE</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
