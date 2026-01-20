import React from 'react';

interface PageProps {
    onBack: () => void;
}

export const Benefit: React.FC<PageProps> = ({ onBack }) => {
    return (
        <div className="w-full animate-fade-in font-lexend bg-[#1A1A1A]">
             <div className="fixed bottom-6 right-6 z-50">
                <button onClick={onBack} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full p-4 shadow-lg transition-all">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
            </div>

            <section className="py-10 lg:py-16 max-w-[1200px] mx-auto px-4 lg:px-0">
                <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden flex items-end">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM4b1hcVTdtlumBmP3lruUhdJgQln3SNDCMkM7msUmmPxEsYJMkjaJFfpX1AXHO-xEHWoMMyxlFf-GiA3C5shVguwkN6SOuclB5QdtobiTs7Hsbu7ibYTd0M1PFtg6CkAeBSKngcDFIJYszNjAr41b176rYG4kuI2xgXLIIvpsCtie6nfHo_HLZSkQc8k3AZ7Rkt8r1j9XYoeKAcS0CM5UEEus8-Fsde6AXB7tzRNUY8w8EJ4Az8kpubyfWj6LHnyKRiNd2VHw33fZ")'}}></div>
                    <div className="relative z-10 p-8 lg:p-16 max-w-2xl">
                        <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight">
                            Stride <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-[#00ffff]">Benefit</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 font-normal mb-8">
                            Kilómetros que construyen realidad. Correr con un propósito.
                        </p>
                        <button className="bg-[#135bec] hover:scale-105 transition-transform text-white font-bold py-4 px-10 rounded-lg text-lg">
                            Ver Eventos Solidarios
                        </button>
                    </div>
                </div>
            </section>

            <main className="max-w-[1200px] mx-auto px-4 lg:px-0">
                {/* Transparency Bar */}
                <section className="mb-16 bg-[#252525] p-8 rounded-xl border border-white/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                        <div>
                            <h3 className="text-xl font-bold">Meta de Recaudación: Proyecto TECHO 2024</h3>
                            <p className="text-white/60 text-sm">Próxima meta: Construcción de 5 viviendas de emergencia en Biobío</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black text-[#00ffff]">65%</span>
                        </div>
                    </div>
                    <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#135bec] to-[#00ffff]" style={{width: '65%'}}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-medium text-white/40 uppercase tracking-widest">
                        <span>$0 CLP Recaudados</span>
                        <span>Objetivo: $15.000.000 CLP</span>
                    </div>
                </section>

                {/* Experience Pillars */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10 text-center justify-center">
                        <div className="h-[1px] w-20 bg-white/10"></div>
                        <h2 className="text-3xl font-bold">Nuestros Pilares</h2>
                        <div className="h-[1px] w-20 bg-white/10"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#252525] p-8 rounded-xl border-t-4 border-[#135bec] hover:-translate-y-2 transition-transform">
                            <div className="size-14 bg-[#135bec]/20 text-[#135bec] rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Correr con Causa</h4>
                            <p className="text-white/60 leading-relaxed">
                                Transformamos el sudor en solidaridad. Cada evento de Stride Benefit está aliado con ONGs locales.
                            </p>
                        </div>
                        <div className="bg-[#252525] p-8 rounded-xl border-t-4 border-[#00ffff] hover:-translate-y-2 transition-transform">
                            <div className="size-14 bg-[#00ffff]/20 text-[#00ffff] rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">analytics</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Impacto Directo</h4>
                            <p className="text-white/60 leading-relaxed">
                                Transparencia absoluta. Modelo <span className="text-white font-bold">"10km = 1 kit de construcción"</span>.
                            </p>
                        </div>
                        <div className="bg-[#252525] p-8 rounded-xl border-t-4 border-[#ff00ff] hover:-translate-y-2 transition-transform">
                            <div className="size-14 bg-[#ff00ff]/20 text-[#ff00ff] rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">groups</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Comunidad Activa</h4>
                            <p className="text-white/60 leading-relaxed">
                                No solo corremos; construimos comunidad. Voluntariado post-carrera para conectar.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
