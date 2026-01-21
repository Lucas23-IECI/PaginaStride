import { ALLIANCES } from '@/mocks/content.mock';

const Alliances = () => {
    const mainSponsors = ALLIANCES.filter(a => a.category === 'main');
    const partners = ALLIANCES.filter(a => a.category === 'partner');
    const collaborators = ALLIANCES.filter(a => a.category === 'collaborator');

    return (
        <div className="min-h-screen bg-background-dark pt-20">
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Partners</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Nuestros <span className="text-gradient">Aliados</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Marcas que comparten nuestra visión de comunidad y movimiento.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest">Main Sponsors</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12">
                        {mainSponsors.map((s) => (
                            <div key={s.id} className="w-64 h-40 bg-surface-dark rounded-3xl border border-white/5 flex items-center justify-center p-8 hover:border-primary/30 transition-all">
                                <span className="text-3xl font-black text-white">{s.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-surface-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold text-sm uppercase tracking-widest">Partners</span>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {partners.map((p) => (
                            <div key={p.id} className="h-32 bg-background-dark rounded-2xl border border-white/5 flex items-center justify-center p-6 hover:border-secondary/30 transition-all">
                                <span className="text-xl font-bold text-gray-400 text-center">{p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Colaboradores</span>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {collaborators.map((c) => (
                            <div key={c.id} className="h-24 bg-surface-dark rounded-xl border border-white/5 flex items-center justify-center p-4 hover:border-white/20 transition-all">
                                <span className="text-sm font-medium text-gray-500 text-center">{c.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-white mb-6">¿Quieres ser parte?</h2>
                    <p className="text-gray-400 text-lg mb-8">Si tu marca comparte nuestros valores, conversemos.</p>
                    <a href="mailto:partnerships@stride.cl" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all">
                        <span className="material-symbols-outlined">mail</span>
                        partnerships@stride.cl
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Alliances;
