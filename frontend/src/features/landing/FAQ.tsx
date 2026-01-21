import { useState } from 'react';
import { FAQS } from '@/mocks/content.mock';

const FAQ = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background-dark pt-20">
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">Ayuda</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Preguntas <span className="text-gradient">Frecuentes</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Todo lo que necesitas saber sobre Stride, eventos, tienda y membresías.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 pb-32">
                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQS.map((faq) => (
                        <div key={faq.id} className="bg-surface-dark rounded-2xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggle(faq.id)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className="text-lg font-bold text-white group-hover:text-primary transition-colors pr-4">
                                    {faq.question}
                                </span>
                                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openId === faq.id ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 bg-surface-dark">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-white mb-6">¿No encontraste lo que buscabas?</h2>
                    <p className="text-gray-400 text-lg mb-8">Escríbenos y te responderemos lo antes posible.</p>
                    <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all">
                        Contáctanos
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
