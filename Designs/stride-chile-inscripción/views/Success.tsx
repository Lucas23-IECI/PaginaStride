import React from 'react';
import { Event } from '../types';

interface SuccessProps {
  onBackHome: () => void;
  selectedEvent: Event;
}

export const Success: React.FC<SuccessProps> = ({ onBackHome, selectedEvent }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center relative py-8 px-4 sm:px-6 w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ 
          backgroundImage: 'radial-gradient(#e92063 2px, transparent 2px), radial-gradient(#e92063 2px, transparent 2px)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
      }}></div>
      <div className="absolute top-1/4 left-10 size-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 size-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1024px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold uppercase tracking-wider w-fit">
               <span className="material-symbols-outlined !text-lg">check_circle</span>
               Inscripción Exitosa
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
               ¡LISTO PARA <br/><span className="text-primary">CORRER!</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium">
               Tu cupo está reservado. Prepárate para una experiencia inolvidable con la comunidad.
            </p>
          </div>

          <div className="bg-[#211116] border border-[#533c44] rounded-xl p-6 shadow-lg relative overflow-hidden group">
             <div className="absolute -right-6 -top-6 w-24 h-24 bg-whatsapp/10 rounded-full blur-2xl group-hover:bg-whatsapp/20 transition-all"></div>
             <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-whatsapp/10 rounded-full text-whatsapp">
                      <span className="material-symbols-outlined !text-2xl">groups</span>
                   </div>
                   <div>
                      <h3 className="font-bold text-lg leading-tight text-white">Únete al grupo de WhatsApp</h3>
                      <p className="text-sm text-text-secondary mt-1">Aquí compartiremos la ruta detallada y la logística en tiempo real.</p>
                   </div>
                </div>
                <button className="w-full mt-2 bg-whatsapp hover:bg-[#1DA851] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                   <span className="material-symbols-outlined">chat</span>
                   Unirme al grupo de WhatsApp
                </button>
             </div>
          </div>

          <div className="bg-transparent dark:border dark:border-[#38292e] rounded-xl p-6 shadow-sm">
             <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-4 border-b border-[#38292e] pb-2">Resumen del Evento</h3>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"><span className="material-symbols-outlined">calendar_today</span></div>
                   <div className="flex-1">
                      <p className="text-xs text-text-secondary font-medium uppercase">Fecha</p>
                      <p className="font-bold text-base text-white">{selectedEvent.day} {selectedEvent.date}</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"><span className="material-symbols-outlined">schedule</span></div>
                   <div className="flex-1">
                      <p className="text-xs text-text-secondary font-medium uppercase">Hora</p>
                      <p className="font-bold text-base text-white">{selectedEvent.time.split('-')[0]}</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"><span className="material-symbols-outlined">location_on</span></div>
                   <div className="flex-1">
                      <p className="text-xs text-text-secondary font-medium uppercase">Punto de encuentro</p>
                      <p className="font-bold text-base text-white">{selectedEvent.location}</p>
                   </div>
                </div>
             </div>
             <div className="mt-6 pt-4 border-t border-[#38292e]">
                <button onClick={onBackHome} className="w-full bg-[#38292e] hover:bg-[#533c44] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all">
                   <span className="material-symbols-outlined">event_available</span>
                   Volver a Eventos
                </button>
             </div>
          </div>

          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-3 text-sm font-medium text-text-secondary">
             <span className="material-symbols-outlined text-primary">share</span>
             <span>¿Emocionado? Etiquétanos en tus historias <a href="#" className="text-primary hover:underline">@stridechile</a></span>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
           <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9-ZQvBY_q3wBd1so0lU_yXjEUToVGc0_CUxY4EzHeixPEHYsQeHpJUHhjqJ6vVvZrENE3cYRtnG6IIavJR2bKET02SDSFHofJY3ZKnPT2-3njkGmWg5SnWtH5CS8c1bYykaH2zyEFzMxRn918aLyi0LyvS_qg642zskxjglxWBOWoHRRA0HSTHNJ2tJPbFozt4nw9g3Plv5y5BX2N_oQGtIp-a1FeMITJPlEX2olPybU_EaEJIVG5kHjLXRdPenVC7witRnLbtEpC')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                 <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                 Social Run
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGdPwwd_unX7FOL2ZwAqztpLDq6FWL9XGb5nk_ecJvNc7JcF5yupIhNPaq-VatiBWNpHZVbNUF46dBxiC0THqdm9Sd5pSDkiyR5__iJhD8kDRlgr3DmSR6bSmNzSbjsQMm9zJiV_k7dc9IlngPgr0YvKEdDY4nSCxwILGK54xBBbPwM1v666T1ySLXBwaZxSXsrpqDw42m3P9ZdQPzyIjqqoppqHvilTYxuYF8LpgbvkLrcpf9b4hGABLjHxWaKfLwuCWANyxN12Je" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-primary" />
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVLxzuLg2XlSATKyypLJKGgnauxGN99g-esDi7DeSJC-8605zKWnNG2KjVguU7ummXo4X4ZwG_YABa7N1xWiyjS-0bvRV3TLG2J49yeMDYb-UnRNpe41Z3s0wOHvtcVZiSx109Pm2vO0SOW7LJxyn4abTR9xf8IHM3EfxpacJM-YOZD7iQONZAJSaNYRGtXxjfnB3u6cn0I6JmBRK61Jr8SV7Dzwt8tW_PAR0J5Xc_bix3FP1XgFFqef14C5DoHnXqdGG48p9OMpYR" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-primary" />
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV3DIjnO6jw6NuQ27M4WkHDx3qs2DENEBHOf81pKVntpmzRSiFLFqCe0RbKMTKCjSnkR322pVz-QZGWCE4fLluMb0SlFSo2LEt3qjGBwfRr9JCoAJXqytLJIYA1BinxrH-jNeDEdjeFZZ_Gixbgnl2vi2zxvrd7U2ViLNdb7DuUyfAzBuO-ZpP2ky340bOhNLnZsb7M8W8niVoNY1lGc1kaBt5OF6mRVcHdS_LJ12AMHu6Jx3p8Vc8BChrHe5pYdwKVWhPe105NcoL" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-primary" />
                    </div>
                    <span className="text-white text-xs font-semibold">+42 corredores inscritos</span>
                 </div>
                 <p className="text-white/80 text-sm leading-snug">La comunidad te espera. ¡No olvides traer tu mejor energía!</p>
              </div>
           </div>
           {/* Abstract shapes */}
           <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none"></div>
           <div className="absolute bottom-10 -left-6 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-30 animate-bounce delay-700 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};