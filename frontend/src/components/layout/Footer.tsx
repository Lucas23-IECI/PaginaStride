import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="font-script text-3xl text-white">stride</h2>
                        <p className="text-gray-400 text-sm">
                            La comunidad de running más vibrante de Concepción. Únete al movimiento.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors" href="https://instagram.com/stridechile" target="_blank" rel="noopener noreferrer">
                                <span className="font-bold text-xs">IG</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors" href="https://tiktok.com/@stridechile" target="_blank" rel="noopener noreferrer">
                                <span className="font-bold text-xs">TK</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Explora</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link className="hover:text-primary transition-colors" to="/">Inicio</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/nosotros">Sobre Nosotros</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/entrenamiento">Entrenamientos</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/viajes">Viajes</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/aliados">Aliados</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Newsletter</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="Tu correo" type="email" />
                            <button className="w-full h-12 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Encuéntranos</h3>
                        <div className="h-40 w-full rounded-2xl overflow-hidden bg-gray-800 relative group">
                            <img alt="Map of Concepcion" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXRQUyX4i2C8t3cS_kdkGz8cGBd4DVQGE8MCsMRupBICs-3KowuvAVYvyBhJ1koY84rjAxQGhYKhKx30W6C-wE7UWbfRhuLc1fRMGnWCulAOGHVflJhWOaHudl-8CjEx3gYjD8JL0gfASXK-Pe7zTZUCuvmKBlitNlNYUN__wnRGMi-WrRXRpM92P5yetJ-BwYBTSv214LGxMeUbHBctwrBCBSMUAm8RfhAfYLaHunfCbibT4YZOTohQYpSPtfN15XkmBLBbT1YbZ2" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary text-3xl drop-shadow-lg">location_on</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Concepción, Región del Biobío</p>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 Stride Chile. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link className="hover:text-white" to="/faq">Preguntas Frecuentes</Link>
                        <Link className="hover:text-white" to="/contacto">Contacto</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
