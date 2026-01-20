import React from 'react';
import { View } from '../types';

interface MyEventsProps {
    onChangeView: (view: View) => void;
}

export const MyEvents: React.FC<MyEventsProps> = ({ onChangeView }) => {
  return (
    <div className="flex-1 h-full overflow-y-auto no-scrollbar relative">
      <header className="sticky top-0 z-40 bg-background-dark/80 backdrop-blur-md border-b border-white/5 p-6 md:px-10 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4 w-full md:w-auto">
            <div className="flex items-center justify-between md:justify-start gap-6">
              <h2 className="text-3xl font-black text-white tracking-tight">Mis Eventos</h2>
              <button className="md:hidden p-2 bg-white/5 rounded-full">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-dark p-1 rounded-full inline-flex border border-white/5">
                <button className="px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold shadow-sm transition-all">
                  Próximos
                </button>
                <button className="px-5 py-2 rounded-full text-white/40 hover:text-white text-xs font-bold transition-all">
                  Historial
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-white/40 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                className="bg-surface-dark border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary w-64 transition-all"
                placeholder="Buscar evento o ubicación..."
                type="text"
              />
            </div>
            <button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-lg shadow-white/5">
              <span className="material-symbols-outlined text-lg">download</span>
              <span>Descargar Calendario</span>
            </button>
          </div>
        </div>
      </header>
      <div className="p-6 md:p-10 grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-10">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">event_upcoming</span>
                Próximas Inscripciones
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-card-dark rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-6 border border-white/5 hover:border-primary/40 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-surface-dark rounded-xl w-full sm:w-24 h-24 flex flex-col items-center justify-center border border-white/5 relative z-10 flex-shrink-0">
                  <span className="text-3xl font-black text-white">24</span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    OCT
                  </span>
                </div>
                <div className="flex-1 text-center sm:text-left relative z-10 w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="px-2 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                      Social Run
                    </span>
                    <span className="px-2 py-1 rounded bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-wider">
                      5K / 10K
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    Parque Bicentenario Run
                  </h4>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-white/50 text-xs">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>Av. Bicentenario 3800, Vitacura</span>
                  </div>
                </div>
                <button onClick={() => onChangeView('manage-registrations')} className="relative z-10 w-full sm:w-auto px-6 py-3 bg-white text-black rounded-full font-bold text-xs hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-lg">qr_code_2</span>
                  Ver Ticket
                </button>
              </div>
              <div className="bg-card-dark rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-6 border border-white/5 hover:border-secondary/40 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-surface-dark rounded-xl w-full sm:w-24 h-24 flex flex-col items-center justify-center border border-white/5 relative z-10 flex-shrink-0">
                  <span className="text-3xl font-black text-white">02</span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    NOV
                  </span>
                </div>
                <div className="flex-1 text-center sm:text-left relative z-10 w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="px-2 py-1 rounded bg-secondary text-black text-[10px] font-bold uppercase tracking-wider">
                      Social Girl
                    </span>
                    <span className="px-2 py-1 rounded bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-wider">
                      Yoga + 5K
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    Sunset City Run &amp; Yoga
                  </h4>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-white/50 text-xs">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>Parque Araucano, Las Condes</span>
                  </div>
                </div>
                <button onClick={() => onChangeView('manage-registrations')} className="relative z-10 w-full sm:w-auto px-6 py-3 bg-white text-black rounded-full font-bold text-xs hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-lg">qr_code_2</span>
                  Ver Ticket
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-white/60">history</span>
                Historial de Runs
              </h3>
            </div>
            <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/5 text-xs text-white/40 uppercase tracking-widest">
                      <th className="p-5 font-bold whitespace-nowrap">Fecha</th>
                      <th className="p-5 font-bold whitespace-nowrap">Evento</th>
                      <th className="p-5 font-bold text-center whitespace-nowrap">
                        Distancia
                      </th>
                      <th className="p-5 font-bold text-center whitespace-nowrap">
                        Social Pts
                      </th>
                      <th className="p-5 font-bold text-right whitespace-nowrap">
                        Recuerdos
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-5 text-white/60 font-medium whitespace-nowrap">
                        28 Sep 2023
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-white">Cerro San Cristóbal</div>
                        <span className="text-xs text-white/40">Morning Climb</span>
                      </td>
                      <td className="p-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-surface-dark border border-white/10 text-xs font-bold text-secondary">
                          12.5 km
                        </span>
                      </td>
                      <td className="p-5 text-center">
                        <span className="text-primary font-bold">+150</span>
                      </td>
                      <td className="p-5 text-right">
                        <a
                          className="text-white/60 hover:text-white hover:underline text-xs font-bold inline-flex items-center gap-1 transition-all"
                          href="#"
                        >
                          <span className="material-symbols-outlined text-sm">
                            photo_library
                          </span>{" "}
                          Ver Fotos
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-5 text-white/60 font-medium whitespace-nowrap">
                          15 Sep 2023
                        </td>
                        <td className="p-5">
                          <div className="font-bold text-white">Costanera Night Run</div>
                          <span className="text-xs text-white/40">City Circuit</span>
                        </td>
                        <td className="p-5 text-center">
                          <span className="inline-block px-3 py-1 rounded-full bg-surface-dark border border-white/10 text-xs font-bold text-secondary">
                            8.0 km
                          </span>
                        </td>
                        <td className="p-5 text-center">
                          <span className="text-primary font-bold">+100</span>
                        </td>
                        <td className="p-5 text-right">
                          <a
                            className="text-white/60 hover:text-white hover:underline text-xs font-bold inline-flex items-center gap-1 transition-all"
                            href="#"
                          >
                            <span className="material-symbols-outlined text-sm">
                              photo_library
                            </span>{" "}
                            Ver Fotos
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-5 text-white/60 font-medium whitespace-nowrap">
                          01 Sep 2023
                        </td>
                        <td className="p-5">
                          <div className="font-bold text-white">Spring Kickoff</div>
                          <span className="text-xs text-white/40">Community Event</span>
                        </td>
                        <td className="p-5 text-center">
                          <span className="inline-block px-3 py-1 rounded-full bg-surface-dark border border-white/10 text-xs font-bold text-secondary">
                            5.0 km
                          </span>
                        </td>
                        <td className="p-5 text-center">
                          <span className="text-primary font-bold">+75</span>
                        </td>
                        <td className="p-5 text-right">
                          <a
                            className="text-white/60 hover:text-white hover:underline text-xs font-bold inline-flex items-center gap-1 transition-all"
                            href="#"
                          >
                            <span className="material-symbols-outlined text-sm">
                              photo_library
                            </span>{" "}
                            Ver Fotos
                          </a>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <div className="space-y-6">
          <div className="bg-card-dark p-6 rounded-3xl border border-white/5 sticky top-28 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold">Octubre 2023</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-all text-white/60">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-all text-white/60">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => (
                   <div key={d} className="text-center text-[10px] font-black text-white/30 uppercase tracking-widest pb-2">{d}</div>
              ))}
              {[26, 27, 28, 29, 30].map(d => (
                   <div key={`cal-prev-${d}`} className="calendar-day text-white/10 opacity-20">{d}</div>
              ))}
              {Array.from({length: 31}, (_, i) => i + 1).map(d => {
                    let className = "calendar-day";
                    if(d === 2 || d === 13) className += " has-event-secondary";
                    else if(d === 7 || d === 17 || d === 24) className += " has-event";
                    else if(d === 10) className += " today";
                    return <div key={`cal-curr-${d}`} className={className}>{d}</div>
              })}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-dark border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xs">24</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    Parque Bicentenario
                  </p>
                  <p className="text-xs text-white/40">18:00 hrs</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-dark border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary font-bold text-xs">02</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    Sunset City Run
                  </p>
                  <p className="text-xs text-white/40">19:30 hrs</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};