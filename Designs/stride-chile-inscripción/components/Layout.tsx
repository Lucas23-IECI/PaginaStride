import React, { useState } from 'react';
import { ViewState } from '../types';
import { AICoachModal } from './AICoachModal';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isCoachOpen, setIsCoachOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark font-display text-white selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#38292e] bg-[#1A1A1A]/95 backdrop-blur-md px-6 py-3">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <div 
            className="flex items-center gap-3 text-white cursor-pointer"
            onClick={() => onNavigate(ViewState.DASHBOARD)}
          >
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined !text-[32px]">sprint</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight hidden md:block">Stride Chile</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate(ViewState.DASHBOARD)} className={`text-sm font-medium transition-colors ${currentView === ViewState.DASHBOARD ? 'text-primary' : 'text-text-secondary hover:text-white'}`}>Eventos</button>
            <button className="text-text-secondary hover:text-white text-sm font-medium transition-colors">Comunidad</button>
            <button className="text-text-secondary hover:text-white text-sm font-medium transition-colors">Tienda</button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCoachOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-primary/20 border border-purple-500/30 hover:border-purple-500 transition-all group"
            >
              <span className="material-symbols-outlined text-purple-400 text-sm group-hover:animate-pulse">smart_toy</span>
              <span className="text-xs font-bold text-purple-200 hidden sm:block">AI Coach</span>
            </button>
            
            <button className="hidden md:flex cursor-pointer items-center justify-center rounded-full h-9 px-5 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-sm font-bold shadow-[0_0_15px_rgba(233,32,99,0.3)]">
              <span>Ingresar</span>
            </button>
            <div className="md:hidden text-white cursor-pointer">
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative w-full overflow-x-hidden">
        {children}
      </main>

      {/* Footer (Simplified) */}
      <footer className="border-t border-[#38292e] py-8 bg-[#150d11] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">© 2024 Stride Chile. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-white text-sm">Términos</a>
            <a href="#" className="text-text-secondary hover:text-white text-sm">Privacidad</a>
            <a href="#" className="text-text-secondary hover:text-white text-sm">Contacto</a>
          </div>
        </div>
      </footer>

      {/* AI Coach Modal */}
      {isCoachOpen && <AICoachModal onClose={() => setIsCoachOpen(false)} />}
    </div>
  );
};