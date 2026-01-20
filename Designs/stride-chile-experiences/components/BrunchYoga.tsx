import React from 'react';

interface PageProps {
    onBack: () => void;
}

export const BrunchYoga: React.FC<PageProps> = ({ onBack }) => {
    return (
        <div className="w-full animate-fade-in bg-background-dark">
             <div className="fixed bottom-6 right-6 z-50">
                <button onClick={onBack} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full p-4 shadow-lg transition-all">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
            </div>

            <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRNXccgQnJujdmh0U-1Gn-j3LaNTIqgtY0hAqBHRRivJ0vKqs8oi1M6eZ5CnYZlVXd18NOpsZJ2-vFQT_OPGXHgIVCFwdt5_X_Qvr93UM51dQ6qPFuPhgLFQnGQP_i9P7AjOzj5iiI54Sz96Nae9xz0NBNWdzzOZo2ZyBY1Gyc0pOOKk302VgWeDN2qxA04mF9qTGXjO3aC2KvIqJtNaEw5MNwvKtxZXzjpRbj2MN6EmX2Tqek-N55wI56s3lOoSqisuc3d2Z_czWW" alt="Yoga session" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC107] text-xs font-bold uppercase tracking-[0.2em]">Experiencia Wellness</span>
                    <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tight text-white">
                        <span className="text-[#FFC107]">Brunch</span> & <span className="text-[#00BCD4]">Yoga</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl leading-relaxed">
                        El equilibrio perfecto entre movimiento, calma y sabor.
                    </p>
                </div>
            </section>

            <section className="relative z-30 -mt-20 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#242424] rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-6">
                            <div>
                                <h2 className="text-3xl font-black text-white mb-2">Próxima Edición</h2>
                                <p className="text-gray-400">Cupos limitados para asegurar una experiencia íntima.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-10 h-10 rounded-full bg-[#FFC107]/10 flex items-center justify-center text-[#FFC107]">
                                        <span className="material-symbols-outlined">calendar_today</span>
                                    </div>
                                    <span className="font-semibold">Domingo, 24 de Noviembre - 09:00 AM</span>
                                </div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-10 h-10 rounded-full bg-[#00BCD4]/10 flex items-center justify-center text-[#00BCD4]">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <span className="font-semibold">Jardines Universidad de Concepción</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <button className="w-full md:w-64 py-5 bg-gradient-wellness rounded-2xl text-black font-black text-lg shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:shadow-[0_15px_40px_rgba(255,193,7,0.4)] transition-all transform hover:-translate-y-1">
                                Reservar Cupo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Pilares de la Experiencia</h2>
                        <div className="h-1.5 w-24 bg-gradient-wellness mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Yoga & Movilidad", icon: "self_improvement", color: "text-[#00BCD4]", bg: "bg-[#00BCD4]/10", desc: "45 minutos de vinyasa flow suave enfocado en la recuperación y flexibilidad." },
                            { title: "Social Run Suave", icon: "directions_run", color: "text-[#e92063]", bg: "bg-[#e92063]/10", desc: "Un trote ligero de 4-5K para despertar el cuerpo y disfrutar del aire libre." },
                            { title: "Healthy Brunch", icon: "restaurant", color: "text-[#FFC107]", bg: "bg-[#FFC107]/10", desc: "Menú nutritivo artesanal en nuestro café partner local." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#242424] p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all group">
                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined ${item.color} text-4xl`}>{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
