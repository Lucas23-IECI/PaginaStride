import React, { useState } from 'react';
import { ViewState } from '../types';

interface LayoutProps {
    children: React.ReactNode;
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Dynamic brand color based on view
    const getBrandColor = () => {
        switch (currentView) {
            case ViewState.SOCIAL_GIRL: return 'text-[#e92063]';
            case ViewState.SOCIAL_RUN: return 'text-transparent bg-clip-text bg-gradient-to-r from-[#e92063] to-[#00BCD4]';
            case ViewState.BRUNCH_YOGA: return 'text-[#FFC107]';
            case ViewState.BENEFIT: return 'text-[#135bec]';
            default: return 'text-primary';
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#121212]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 frosted-glass transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <button 
                        onClick={() => onNavigate(ViewState.HUB)} 
                        className="group relative focus:outline-none"
                    >
                        <h1 className={`font-script text-4xl font-bold pb-2 transition-all duration-500 ${getBrandColor()}`}>
                            stride
                        </h1>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Inicio', 'Eventos'].map((item) => (
                            <a key={item} href="#" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                        <button 
                            onClick={() => onNavigate(ViewState.HUB)}
                            className={`text-sm font-bold transition-colors ${currentView !== ViewState.HUB ? 'text-white' : 'text-primary'}`}
                        >
                            Experiencias
                        </button>
                        {['Nosotros', 'Merch'].map((item) => (
                            <a key={item} href="#" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex h-10 px-6 items-center justify-center bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
                            Únete
                        </button>
                        <button 
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#121212] pt-24 px-6 md:hidden">
                    <nav className="flex flex-col gap-6 text-xl">
                        <a href="#" className="text-white/80">Inicio</a>
                        <button onClick={() => { onNavigate(ViewState.HUB); setMobileMenuOpen(false); }} className="text-primary font-bold text-left">Experiencias</button>
                        <a href="#" className="text-white/80">Nosotros</a>
                        <a href="#" className="text-white/80">Merch</a>
                    </nav>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#0e0e0e] border-t border-white/5 pt-20 pb-10 mt-auto">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <h2 className="font-script text-3xl text-white">stride</h2>
                            <p className="text-gray-400 text-sm">
                                La comunidad de running más vibrante de Concepción. Únete al movimiento.
                            </p>
                            <div className="flex gap-4">
                                {['IG', 'TK'].map(social => (
                                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                                        <span className="font-bold text-xs">{social}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-6">Explora</h3>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><button onClick={() => onNavigate(ViewState.HUB)} className="hover:text-primary transition-colors">Experiencias</button></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Eventos</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Galería</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Tienda</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-6">Newsletter</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="email" 
                                    placeholder="Tu correo" 
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                />
                                <button className="w-full h-12 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                    Suscribirse
                                </button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-6">Encuéntranos</h3>
                            <div className="h-40 w-full rounded-2xl overflow-hidden bg-gray-800 relative group">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXRQUyX4i2C8t3cS_kdkGz8cGBd4DVQGE8MCsMRupBICs-3KowuvAVYvyBhJ1koY84rjAxQGhYKhKx30W6C-wE7UWbfRhuLc1fRMGnWCulAOGHVflJhWOaHudl-8CjEx3gYjD8JL0gfASXK-Pe7zTZUCuvmKBlitNlNYUN__wnRGMi-WrRXRpM92P5yetJ-BwYBTSv214LGxMeUbHBctwrBCBSMUAm8RfhAfYLaHunfCbibT4YZOTohQYpSPtfN15XkmBLBbT1YbZ2" 
                                    alt="Map of Concepcion" 
                                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 transition-opacity"
                                />
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
                            <a href="#" className="hover:text-white">Privacidad</a>
                            <a href="#" className="hover:text-white">Términos</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
