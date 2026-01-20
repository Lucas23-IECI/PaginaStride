import React from 'react';

interface PageProps {
    onBack: () => void;
}

export const SocialRun: React.FC<PageProps> = ({ onBack }) => {
    return (
        <div className="w-full animate-fade-in bg-[#1A1A1A]">
             <div className="fixed bottom-6 right-6 z-50">
                <button onClick={onBack} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full p-4 shadow-lg transition-all">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
            </div>

            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent z-10"></div>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6" alt="Mixed group running" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6 mt-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#E91E63] animate-pulse"></span>
                        Experiencia Stride
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-white drop-shadow-2xl">
                        <span className="text-[#00BCD4]">Social</span> <span className="text-[#E91E63]">Run</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl">
                        Donde cada paso cuenta para socializar.
                    </p>
                </div>
            </section>

            <section className="relative z-30 -mt-24 px-6 mb-20">
                <div className="max-w-4xl mx-auto bg-[#252525] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="bg-[#1A1A1A] rounded-2xl p-4 text-center min-w-[100px] border border-white/5">
                            <span className="block text-4xl font-black text-white leading-none">24</span>
                            <span className="text-sm font-bold text-[#E91E63] uppercase tracking-wider">OCT</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">Próxima Edición</h3>
                            <div className="flex flex-col gap-1 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#00BCD4] text-lg">location_on</span>
                                    <span>Parque Bicentenario</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#00BCD4] text-lg">schedule</span>
                                    <span>19:30 hrs - Check-in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full md:w-auto h-14 px-10 bg-[#E91E63] hover:bg-[#C2185B] rounded-full text-white text-base font-bold transition-all shadow-[0_4px_20px_rgba(233,30,99,0.4)] flex items-center justify-center gap-2">
                        <span>Inscribirse</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </section>

            <section className="py-24 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Logística y Seguridad</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Todo está organizado milimétricamente para que tu única preocupación sea disfrutar el recorrido.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Guardarropía", icon: "checkroom", text: "Deja tus pertenencias con total confianza en nuestro punto de encuentro.", color: "text-[#00BCD4]" },
                        { title: "Primeros Auxilios", icon: "medical_services", text: "Botiquín disponible y comunicación directa con servicios de emergencia.", color: "text-[#E91E63]" },
                        { title: "Rol del Pacer", icon: "group_work", text: "Líderes de ritmo que marcan la velocidad y aseguran que nadie se quede atrás.", color: "text-[#E91E63]" },
                        { title: "Ruta Segura", icon: "map", text: "Circuitos probados, evitando cruces peligrosos y priorizando zonas iluminadas.", color: "text-[#00BCD4]" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start p-6 rounded-3xl bg-[#202020] border border-white/5 hover:bg-[#252525] transition-colors">
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
        </div>
    );
};
