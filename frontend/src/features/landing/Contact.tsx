import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background-dark pt-20">
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Hablemos</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Contacto</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            ¿Tienes preguntas, propuestas o simplemente quieres saludar? Estamos aquí.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Form */}
                        <div className="bg-surface-dark rounded-3xl p-8 border border-white/5">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <span className="material-symbols-outlined text-6xl text-primary mb-4">check_circle</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                                    <p className="text-gray-400">Te responderemos pronto.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full h-12 px-4 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full h-12 px-4 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary"
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Mensaje</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full h-32 px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary resize-none"
                                            placeholder="¿En qué podemos ayudarte?"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 rounded-full text-white font-bold transition-all">
                                        Enviar Mensaje
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Info */}
                        <div className="space-y-8">
                            <div className="bg-surface-dark rounded-2xl p-6 border border-white/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Email</h3>
                                        <a href="mailto:hola@stride.cl" className="text-gray-400 hover:text-primary">hola@stride.cl</a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-dark rounded-2xl p-6 border border-white/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Ubicación</h3>
                                        <p className="text-gray-400">Concepción, Región del Biobío</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-dark rounded-2xl p-6 border border-white/5">
                                <h3 className="font-bold text-white mb-4">Síguenos</h3>
                                <div className="flex gap-4">
                                    <a href="https://instagram.com/stridechile" target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                        <span className="font-bold text-xs">IG</span>
                                    </a>
                                    <a href="https://tiktok.com/@stridechile" target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                        <span className="font-bold text-xs">TK</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
