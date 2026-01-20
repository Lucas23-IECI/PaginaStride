import React from 'react';
import { ViewState } from '../types';

interface PageProps {
    onBack: () => void;
}

export const SocialGirl: React.FC<PageProps> = ({ onBack }) => {
    return (
        <div className="w-full animate-fade-in">
             <div className="fixed bottom-6 right-6 z-50">
                <button onClick={onBack} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full p-4 shadow-lg transition-all">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
            </div>

            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[#e92063]/10 mix-blend-overlay z-10"></div>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtjLWlx8p5iB8sEtx6IaBp1EXnTil7JfrY1VBW1G0_hDUC5nY3dlTOV_wRI8FjG4fXJkRssMl0gh6UydxgVEk150MQok6ZtcNiCbqjwAN-Ul6BDssJ3nOFeMlOxw7j6VbektU9ULrAvJvFmwQfkJ6YijNfy2vBuQKtPJNfdrVZRx_XsWAD41nP6xGDGPirJne0w29CpueI8O5F5vsQ_2o2LeOwurLDg5Mo1CN4s44tW2CPYpCuhl6TPZfvupfnlgk82GiaHOMZvwU3" alt="Women running" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6 mt-10">
                    <span className="px-4 py-1 rounded-full border border-primary/50 bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        Experiencias / Social Girl
                    </span>
                    <h1 className="font-script text-7xl md:text-9xl text-white drop-shadow-[0_0_30px_rgba(233,32,99,0.5)]">
                        Social <span className="text-primary">Girl</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-white/90 max-w-2xl">
                        Tu espacio para conectar y disfrutar del running.
                    </h2>
                </div>
            </section>

            <div className="relative z-30 -mt-24 px-6 mb-20">
                <div className="max-w-5xl mx-auto bg-[#252525]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="bg-gradient-to-br from-primary to-[#F48FB1] w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg shadow-primary/30">
                            <span className="text-sm font-bold uppercase">Dic</span>
                            <span className="text-4xl font-black leading-none">12</span>
                        </div>
                        <div>
                            <span className="text-[#F48FB1] font-bold uppercase tracking-wider text-xs block mb-1">Próxima Fecha</span>
                            <h3 className="text-2xl font-bold text-white mb-1">Parque Bicentenario</h3>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span>09:30 AM — Punto de Encuentro: Explanada</span>
                            </div>
                        </div>
                    </div>
                    <button className="h-12 px-8 bg-white text-primary hover:bg-gray-100 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
                        <span className="material-symbols-outlined">notifications_active</span>
                        Avísame
                    </button>
                </div>
            </div>

            <section className="py-20 relative overflow-hidden bg-[#151515]">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">La Experiencia <span className="font-script text-primary">Completa</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Cada detalle está pensado para que disfrutes desde el calentamiento hasta la vuelta a la calma.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Rutas Planificadas", icon: "map", text: "Recorridos seguros y escénicos por Concepción. 5K y 8K diseñados para conversar.", color: "text-primary" },
                            { title: "Girl Power Snack", icon: "nutrition", text: "Fruta fresca, hidratación isotónica y un café para cerrar la sesión con energía.", color: "text-[#F48FB1]" },
                            { title: "Charlas con Invitadas", icon: "campaign", text: "Espacios de aprendizaje con nutricionistas, kinesiólogas y atletas destacadas.", color: "text-secondary" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#262626] border border-white/5 rounded-[2rem] p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
