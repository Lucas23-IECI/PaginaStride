import { TEAM } from '@/mocks/content.mock';

const About = () => {
    return (
        <div className="min-h-screen bg-background-dark pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10"></div>
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBawmU0d_l949owZ419WMp1PcryUCMZ3d2psCq4Zp4-IPwyszyEh3S9bU7NOhffJBmxTUEE85mdVOyQTbFyl1-1UDYlQMAGfSjgFdy9egKCF62SaiVAyApLhxYKeEt0pu7-kHAd9egjc5NJM-s3dOCzGxQ_7Pw4QxqbRtwvAA1Kyd5RcTBwgvHYhPvWBO6wXop21mYlcNsGmA3vzksIxc1gax_bCidD6iAnCrBCbBrbkuodcVtunGjHhv9LqDJsNc91HI4f2bC8omW"
                        alt="Stride Community Running"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 text-center px-6 max-w-4xl">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Nuestra Historia</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Más que <span className="text-gradient">kilómetros</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Nacimos en Concepción con una misión simple: unir a la comunidad a través del deporte.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black text-white">Todo comenzó con una carrera</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            En 2021, un grupo de amigos decidió correr juntos cada martes. Lo que comenzó como 5 personas
                            en el Parque Bicentenario, hoy es una comunidad de más de 1.000 runners que comparten la misma pasión.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            <strong className="text-white">Stride</strong> nació de la idea de que correr es la excusa perfecta
                            para conectar, crecer y celebrar cada paso juntos.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6"
                            alt="Stride founders"
                            className="relative rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-surface-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">Lo que nos mueve</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Nuestros Valores</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background-dark p-8 rounded-3xl border border-white/5 group hover:border-primary/30 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Comunidad</h3>
                            <p className="text-gray-400">
                                Creemos que juntos llegamos más lejos. Cada corredor es parte de algo más grande que ellos mismos.
                            </p>
                        </div>
                        <div className="bg-background-dark p-8 rounded-3xl border border-white/5 group hover:border-secondary/30 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Bienestar</h3>
                            <p className="text-gray-400">
                                Promovemos la salud física y mental. Correr es nuestra terapia y el movimiento es medicina.
                            </p>
                        </div>
                        <div className="bg-background-dark p-8 rounded-3xl border border-white/5 group hover:border-white/20 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                                <span className="material-symbols-outlined text-white text-3xl">public</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Impacto</h3>
                            <p className="text-gray-400">
                                Devolvemos a la comunidad. Cada carrera benéfica y acción social refuerza nuestro compromiso con Concepción.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">La Tribu</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Nuestro Equipo</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM.map((member) => (
                            <div key={member.id} className="group relative overflow-hidden rounded-3xl bg-surface-dark border border-white/5">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium text-sm">{member.role}</p>
                                    {member.instagram && (
                                        <a href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                                            className="inline-flex items-center gap-1 text-gray-400 text-sm mt-2 hover:text-white transition-colors"
                                            target="_blank" rel="noopener noreferrer">
                                            <span className="material-symbols-outlined text-base">photo_camera</span>
                                            {member.instagram}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-r from-primary/20 to-secondary/20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-white mb-6">¿Quieres ser parte de la tribu?</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Únete a nuestra próxima carrera y descubre lo que significa ser Stride.
                    </p>
                    <a href="/experiences" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 rounded-full text-white font-bold transition-all shadow-lg shadow-primary/25">
                        Ver Próximos Eventos
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
