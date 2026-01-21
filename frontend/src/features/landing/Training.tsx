import { Link } from 'react-router-dom';
import { TRAINING_SCHEDULE } from '@/mocks/content.mock';

const Training = () => {
    const getLevelBadge = (level: string) => {
        switch (level) {
            case 'Avanzado':
                return 'bg-primary/20 text-primary border-primary/30';
            case 'Intermedio':
                return 'bg-secondary/20 text-secondary border-secondary/30';
            default:
                return 'bg-white/10 text-gray-300 border-white/10';
        }
    };

    const getDayColor = (day: string) => {
        const colors: Record<string, string> = {
            'Lunes': 'from-blue-500 to-blue-600',
            'Martes': 'from-primary to-pink-600',
            'Miércoles': 'from-orange-500 to-orange-600',
            'Jueves': 'from-secondary to-teal-600',
            'Viernes': 'from-purple-500 to-purple-600',
            'Sábado': 'from-green-500 to-green-600',
            'Domingo': 'from-yellow-500 to-yellow-600',
        };
        return colors[day] || 'from-gray-500 to-gray-600';
    };

    return (
        <div className="min-h-screen bg-background-dark pt-20">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-chevron opacity-5"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">Programa Semanal</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            Entrena con <span className="text-gradient">Nosotros</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Actividades para todos los niveles, desde yoga restaurativo hasta entrenamientos de alta intensidad.
                        </p>
                    </div>

                    {/* Schedule Grid */}
                    <div className="grid gap-4">
                        {TRAINING_SCHEDULE.map((session) => (
                            <div
                                key={session.id}
                                className="bg-surface-dark rounded-2xl border border-white/5 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 hover:border-white/10 transition-all group"
                            >
                                {/* Day Badge */}
                                <div className={`w-24 shrink-0 py-3 px-4 rounded-xl bg-gradient-to-br ${getDayColor(session.day)} text-center`}>
                                    <span className="text-white font-bold text-sm uppercase">{session.day}</span>
                                </div>

                                {/* Activity Info */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {session.activity}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">schedule</span>
                                            {session.time}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">location_on</span>
                                            {session.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Level Badge */}
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getLevelBadge(session.level)}`}>
                                    {session.level}
                                </span>

                                {/* Arrow */}
                                <span className="material-symbols-outlined text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all">
                                    arrow_forward
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Cards */}
            <section className="py-24 px-6 bg-surface-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background-dark p-8 rounded-3xl border border-white/5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Todos los Niveles</h3>
                            <p className="text-gray-400">
                                Desde principiantes hasta corredores experimentados. Siempre hay un grupo para ti.
                            </p>
                        </div>
                        <div className="bg-background-dark p-8 rounded-3xl border border-white/5">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-secondary text-2xl">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Coaches Certificados</h3>
                            <p className="text-gray-400">
                                Nuestros entrenadores tienen certificación y años de experiencia en running.
                            </p>
                        </div>
                        <div className="bg-background-dark p-8 rounded-3xl border border-white/5">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-white text-2xl">favorite</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Gratuito</h3>
                            <p className="text-gray-400">
                                Los Social Runs son 100% gratis. Solo necesitas ganas de correr y pasarla bien.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-white mb-6">¿Listo para empezar?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Explora todas nuestras experiencias y encuentra la que mejor se adapte a ti.
                    </p>
                    <Link
                        to="/experiences"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold transition-all shadow-lg hover:shadow-primary/25 hover:scale-105"
                    >
                        Ver Planes
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Training;
