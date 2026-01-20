import React from 'react';
import { SidebarProps, View } from '../types';

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  return (
    <aside className="w-full md:w-64 bg-surface-dark border-r border-white/5 flex flex-col z-50 flex-shrink-0">
      <div className="p-8 cursor-pointer" onClick={() => onChangeView('dashboard')}>
        <h1 className="font-script text-4xl font-bold text-gradient">stride</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <button
          onClick={() => onChangeView('dashboard')}
          className={`sidebar-link w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all ${currentView === 'dashboard' ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-semibold">Mi Perfil</span>
        </button>
        <button
          onClick={() => onChangeView('events')}
          className={`sidebar-link w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all ${currentView === 'events' ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="font-semibold">Mis Eventos</span>
        </button>
        <button
          onClick={() => onChangeView('achievements')}
          className={`sidebar-link w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all ${currentView === 'achievements' ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined">military_tech</span>
          <span className="font-semibold">Logros</span>
        </button>
        <button
            onClick={() => onChangeView('edit-profile')}
            className={`sidebar-link w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all ${currentView === 'edit-profile' ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-semibold">Ajustes</span>
        </button>
      </nav>
      <div className="p-6 mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-semibold">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};