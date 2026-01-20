import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const linkClasses = (path: string) => 
    `text-sm font-semibold transition-colors ${isActive(path) ? 'text-primary' : 'text-white/80 hover:text-primary'}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 frosted-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link className="group relative" to="/">
          <h1 className="font-script text-4xl font-bold text-gradient pb-2">stride</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link className={linkClasses('/')} to="/">Inicio</Link>
          <Link className={linkClasses('/nosotros')} to="/nosotros">Nosotros</Link>
          <Link className={linkClasses('/entrenamiento')} to="/entrenamiento">Entrenamientos</Link>
          <Link className={linkClasses('/viajes')} to="/viajes">Viajes</Link>
          <Link className={linkClasses('/aliados')} to="/aliados">Aliados</Link>
          <Link className={linkClasses('/faq')} to="/faq">Ayuda</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/entrenamiento" className="hidden sm:flex h-10 px-6 items-center justify-center bg-gradient-primary rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(233,32,99,0.3)] hover:shadow-[0_0_25px_rgba(233,32,99,0.5)] transition-all transform hover:scale-105">
            Únete
          </Link>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
         <div className="md:hidden absolute top-20 left-0 w-full bg-[#121212] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
            <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/entrenamiento" onClick={() => setIsOpen(false)}>Entrenamientos</Link>
            <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/viajes" onClick={() => setIsOpen(false)}>Viajes</Link>
            <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/aliados" onClick={() => setIsOpen(false)}>Aliados</Link>
            <Link className="text-white hover:text-primary py-2" to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
         </div>
      )}
    </header>
  );
};

export default Navigation;