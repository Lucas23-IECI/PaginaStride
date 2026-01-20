import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/report': return 'Cierre de Sesión';
      case '/profile': return 'Mi Perfil de Monitor';
      default: return 'Panel del Monitor';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-dark shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="group relative">
              <h1 className="font-script text-3xl font-bold text-gradient pb-1">stride</h1>
            </Link>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <h2 className="text-lg font-bold text-white tracking-wide hidden md:block">{getPageTitle()}</h2>
            
            {/* Simple Navigation for Demo Purpose */}
            <nav className="hidden lg:flex gap-4 ml-4">
               <Link to="/" className={`text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-gray-400'}`}>Panel</Link>
               <Link to="/report" className={`text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors ${location.pathname === '/report' ? 'text-primary' : 'text-gray-400'}`}>Reporte</Link>
               <Link to="/profile" className={`text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors ${location.pathname === '/profile' ? 'text-primary' : 'text-gray-400'}`}>Perfil</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-dashboard border border-white/5">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-400 font-bold uppercase">Evento Actual</span>
                <span className="text-sm font-semibold">Parque Bicentenario • 19:00 hrs</span>
              </div>
            </div>
            
            <Link to="/profile" className="flex items-center gap-3 pl-0 md:pl-6 border-l-0 md:border-l border-white/10 hover:opacity-80 transition-opacity">
              <div className="flex flex-col items-end mr-2">
                <span className="text-sm font-bold text-white">Camilo</span>
                <span className="text-xs text-secondary font-medium">Trote Social</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                <img 
                  alt="Monitor Avatar" 
                  className="rounded-full w-full h-full object-cover border-2 border-background-dark" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsKACXqXeHYEG_rQ0kriDOmXtE80Mytxta355HdzD4Ux02i6-7GsZfIXNc1fXc38-PbCKrfIQr5gE8Y0b-dXBZe0ZuPYfZ8ZfxvyFD-tKxedp4V4DtdvAwvUzBzvOi0351x1qCvG4mqXKCE16TI97SPU20_Sce1-0QsUVF0dd5yevLCAJaxSJFuxvEkq0IhHzV9IsSGfCl-yuXosQ6xrlNxdgbGMRNGgZTVznMgaJ-H9_tNkfqyTIJGMcBA8ifeoyD2FXrwYKnoQTI"
                />
              </div>
            </Link>
            
            <button className="text-gray-400 hover:text-white transition-colors" title="Cerrar Sesión">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>

      <footer className="mt-auto border-t border-white/5 py-6 bg-surface-dark">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">
            © 2023 Stride Chile. Uso Interno.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Soporte</a>
            <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Reportar Problema</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;