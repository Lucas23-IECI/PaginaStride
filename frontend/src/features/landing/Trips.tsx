import { TRIPS } from '@/mocks/content.mock';

const Trips = () => {
    return (
        <div className="min-h-screen bg-background-dark pt-20">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600"
                        alt="Travel background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark"></div>
                </div>
                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">Aventuras Stride</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Corre el <span className="text-gradient">Mundo</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Viaja con la tribu a los maratones y destinos más increíbles del planeta.
                    </p>
                </div>
            </section>

            {/* Featured Trips */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">star</span>
                        Destacados
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {TRIPS.filter(t => t.isFeatured).map((trip) => (
                            <div
                                key={trip.id}
                                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all"
                            >
                                <img
                                    src={trip.image}
                                    alt={trip.destination}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <span className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-bold uppercase mb-4">
                                        <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                                        {trip.country}
                                    </span>
                                    <h3 className="text-3xl font-black text-white mb-2">{trip.destination}</h3>
                                    <p className="text-gray-300 mb-4">{trip.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-lg">calendar_month</span>
                                                {trip.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-lg">schedule</span>
                                                {trip.duration}
                                            </div>
                                        </div>
                                        <span className="text-2xl font-black text-white">
                                            ${trip.price.toLocaleString('es-CL')}
                                        </span>
                                    </div>
                                    <button className="mt-6 w-full py-4 bg-white text-black font-bold rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Reservar Cupo
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Trips */}
            <section className="py-16 px-6 bg-surface-dark">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">Próximos Viajes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TRIPS.filter(t => !t.isFeatured).map((trip) => (
                            <div
                                key={trip.id}
                                className="group bg-background-dark rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={trip.image}
                                        alt={trip.destination}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-bold">
                                        {trip.spots} cupos
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-secondary text-sm font-bold mb-2">
                                        <span className="material-symbols-outlined text-base">location_on</span>
                                        {trip.country}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{trip.destination}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{trip.description}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <div className="text-sm text-gray-400">
                                            <span className="block font-bold text-white">{trip.date}</span>
                                            {trip.duration}
                                        </div>
                                        <span className="text-xl font-black text-primary">
                                            ${trip.price.toLocaleString('es-CL')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-black text-white mb-6">¿Qué incluyen nuestros viajes?</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">flight</span>
                                </div>
                                <span className="text-white font-bold">Vuelos</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">hotel</span>
                                </div>
                                <span className="text-white font-bold">Alojamiento</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">directions_run</span>
                                </div>
                                <span className="text-white font-bold">Inscripción</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">groups</span>
                                </div>
                                <span className="text-white font-bold">Guía Stride</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trips;
