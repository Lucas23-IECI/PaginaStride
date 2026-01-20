import { useParams, Link } from 'react-router-dom';
import { EXPERIENCES } from '@/mocks';


const ExperienceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const experience = EXPERIENCES.find((exp) => exp.slug === slug);

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">search_off</span>
                    <h1 className="text-2xl font-bold text-white mb-2">Experiencia no encontrada</h1>
                    <Link to="/experiences" className="text-primary hover:underline">Volver al catálogo</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-background-dark">
            {/* Botón flotante volver */}
            <div className="fixed bottom-6 right-6 z-50">
                <Link to="/experiences" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full p-4 shadow-lg transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined">grid_view</span>
                </Link>
            </div>

            {/* Hero */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent z-10"></div>
                    <img src={experience.heroImage || experience.image} alt={experience.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6 mt-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-dark/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: experience.accentColor }}></span>
                        Experiencia Stride
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-white drop-shadow-2xl">
                        <span style={{ color: experience.accentColor }}>{experience.title.split(' ')[0]}</span>{' '}
                        <span className="text-white">{experience.title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl">
                        {experience.longDescription || experience.description}
                    </p>
                </div>
            </section>

            {/* Próxima Edición */}
            {experience.nextEvent && (
                <section className="relative z-30 -mt-24 px-6 mb-20">
                    <div className="max-w-4xl mx-auto bg-surface-dark border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="bg-black rounded-2xl p-4 text-center min-w-[100px] border border-white/5">
                                <span className="block text-4xl font-black text-white leading-none">{experience.nextEvent.date}</span>
                                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: experience.accentColor }}>{experience.nextEvent.month}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Próxima Edición</h3>
                                <div className="flex flex-col gap-1 text-gray-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg" style={{ color: experience.accentColor }}>location_on</span>
                                        <span>{experience.nextEvent.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg" style={{ color: experience.accentColor }}>schedule</span>
                                        <span>{experience.nextEvent.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            to="/inscription/level"
                            className="w-full md:w-auto h-14 px-10 rounded-full text-white text-base font-bold transition-all shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
                            style={{ backgroundColor: experience.accentColor, boxShadow: `0 4px 20px ${experience.accentColor}40` }}
                        >
                            <span>Inscribirme Ahora</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>
            )}

            {/* Features */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Logística y Seguridad</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Todo está organizado milimétricamente para que tu única preocupación sea disfrutar el recorrido.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {experience.features.map((item, i) => (
                        <div key={i} className="flex gap-6 items-start p-6 rounded-3xl bg-surface-dark border border-white/5 hover:bg-white/5 transition-colors">
                            <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 ${item.color}`}>
                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">¿Listo para correr?</h2>
                    <p className="text-gray-400 text-lg mb-8">Únete a la próxima edición de {experience.title} y forma parte de la comunidad Stride.</p>
                    <Link
                        to="/inscription/level"
                        className="inline-flex items-center gap-2 h-16 px-12 rounded-full text-white text-lg font-bold transition-all shadow-lg hover:brightness-110"
                        style={{ backgroundColor: experience.accentColor, boxShadow: `0 4px 30px ${experience.accentColor}40` }}
                    >
                        <span>Inscribirme Ahora</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ExperienceDetail;
