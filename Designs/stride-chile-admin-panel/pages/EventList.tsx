import React from 'react';
import { Link } from 'react-router-dom';

const EventList: React.FC = () => {
  return (
    <>
      <div className="flex-shrink-0 px-6 py-6 md:px-10 border-b border-border-dark bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex flex-col gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-3xl font-black tracking-tight">GESTIÓN DE EVENTOS</h2>
              <p className="text-text-muted text-sm md:text-base">Administra, edita y crea nuevos eventos para la comunidad.</p>
            </div>
            <Link to="/events/new" className="flex items-center justify-center gap-2 h-12 px-6 bg-gradient-to-r from-primary to-[#ff2b7a] hover:brightness-110 text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Crear Nuevo Evento</span>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="w-full lg:max-w-md relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-muted group-focus-within:text-primary transition-colors">search</span>
              </div>
              <input className="block w-full h-11 pl-10 pr-4 rounded-xl bg-surface-dark border border-white/5 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" placeholder="Buscar por nombre, ID o categoría..." type="text" />
            </div>
            <div className="w-full lg:w-auto overflow-x-auto">
              <div className="flex gap-2 p-1 bg-surface-dark rounded-lg border border-white/5">
                <button className="px-4 py-2 rounded-md bg-white/10 text-white text-sm font-semibold shadow-sm">Todos</button>
                <button className="px-4 py-2 rounded-md hover:bg-white/5 text-text-muted hover:text-white text-sm font-medium transition-colors">Próximos</button>
                <button className="px-4 py-2 rounded-md hover:bg-white/5 text-text-muted hover:text-white text-sm font-medium transition-colors">Pasados</button>
                <button className="px-4 py-2 rounded-md hover:bg-white/5 text-text-muted hover:text-white text-sm font-medium transition-colors">Borradores</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-surface-lighter/50">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-text-muted">Evento</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-text-muted">Tipo</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-text-muted">Fecha / Hora</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-text-muted">Inscritos</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-text-muted">Estado</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-text-muted text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="group hover:bg-surface-lighter transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="relative size-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img className="w-full h-full object-cover" alt="Sunset Stride" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmXnPUPN4QzNhztV7spPiPZJ733lJUzYQLsco7qMZgEtGvSNssvyriS3GHz3l8B1iKGLHInivsA6gjowvL55kc4axFhPLZ5vCFJ8FRiLtzAvpjk74UrjEz2_a4cWz68Vm51_J4t6X1zdv1erX32xVLxnb8fiLhgEnbGliBBJcxQI3NcjvpB6oRloOVyFzr1_cvA6RxVYVwmVPLyGlpTXi8fg__-V51JOBEPQ5wRmA_7mBUW5tvxMIBwkG3ofLXd9eQ2mNyh_zEvFpd" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Sunset Stride 5K</p>
                          <p className="text-text-muted text-xs">ID: #EV-2023-089</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Running</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-white text-sm">12 Oct, 2023</span>
                        <span className="text-text-muted text-xs">19:00 hrs</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1 w-32">
                        <div className="flex justify-between text-xs text-white">
                          <span>185</span>
                          <span className="text-text-muted">/ 200</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-white text-sm">Publicado</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                        <button className="p-2 rounded-lg hover:bg-primary/20 text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-surface-lighter/30">
              <span className="text-xs text-text-muted">Mostrando 1 de 1 eventos (Demo)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventList;