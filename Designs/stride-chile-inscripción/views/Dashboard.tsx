import React from 'react';
import { Event, ViewState } from '../types';

interface DashboardProps {
  onSelectEvent: (event: Event) => void;
}

const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Morning Power Run',
    date: 'OCT 16',
    day: 'Jueves',
    time: '07:00 AM - 08:30 AM',
    location: 'Laguna Redonda',
    type: 'Social Girl',
    monitors: [{ name: 'Cata', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDiFRn7Ie_19EYI2iG5k1Dp8TzGxHJma6O2WMjCq4Xjbqsx7rY-ZJA7naGLA4IG7OMofSggEh0DdoHoNYpR7WrZJRLufxJeL7OJtI1f8vopWqQ0ggTleE3SeOrV62bnuLBn-AB_IPB0_mHDvKmEE6VLSX6Og4yMiyaNNQADyj-n_0ZwR81qgsLHyXhh54A40qK4X2CumykfLC-PByAVuyGHMvrzl4iC_pbBX3nu7G62bewbuPBCFoVp_1mA2TH-JLrgrwMOUx7lFcd' }]
  },
  {
    id: '2',
    title: 'Yoga Flow & Café',
    date: 'OCT 18',
    day: 'Sábado',
    time: '10:00 AM - 12:00 PM',
    location: 'Café Baqué, Centro',
    type: 'Brunch & Yoga',
    monitors: [{ name: 'Paz', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvSHEGFgO0tLLvuYqQERpvFW9BU4HH7sMRowGRgxP6sYiP4kBhDgUPCulj6CLcd6Z_XFSPvYogVN40TC6JQcbEssVtm5wa7ch8UBdylBydHAs8w4clDAEVROuGpZu3LAQ2rKLs2-pUmC75aUeiXM7oO1UaaNyS6MH6pKjVdmxSfyyEkC_JtV7TPjvD8aFw1XXHy6FXRde5U3pzERghU8ZQggZVkwx3aHqHMM_RXGdyaCLg_kPGG53KBqCY2e4UBlAEXtUHHvgEbaH7' }]
  },
  {
    id: '3',
    title: 'Largo Dominical 10K',
    date: 'OCT 19',
    day: 'Domingo',
    time: '09:00 AM - 11:30 AM',
    location: 'U. de Concepción',
    type: 'Social Run',
    monitors: [
      { name: 'Tomás', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDexK7k4FdXS82ThFd7FUoO1VFTQHd-S1cThE6RrovIDabB_m_ZQKAx28Wp0V21setyZfodQxxblFkAo_1pII0FCd6bZbSp8owOJHOsrXC1bzb1D4hhjnQ_jqRLeKxuiYQzA-a8pD_-WYB5a39fuBouJ8_Cnl-9FI3No1xXl6EoG0L9MpUG-VSpikPhrqCuhOpGiR99Zbc8_ojTwdtyUC0ZblFaRc22GRyCgxBubAxwHS5M28qaJlqvBzqmLfbRsRrcUOqKkCv3b1U0' },
      { name: 'Nico', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN9HJNk28tN_amOEedIrBeJJN-uugN9FIg6EMkvbghvRsOCauvIL8GUCECH8Xav-MB7nY7HzZSLnfydHsWo1RLLq9F_Z2xheP8af_K3MKtNdKnBaSG_p2J1RwJJcYfD6Gh0UoEd7CSJRtlqwKAyvJf1w6K_rHqjssfPfBaEmpjF-W7pUkoAfcWCsyJXq83xE7heMyI_3e0OJeo-gpS4-aPVIFfIuqjRyZJ96vW-fjYwJcFLxFpUeovdLohFtj_wN_XNHA_t7VT3xB0' }
    ]
  }
];

export const Dashboard: React.FC<DashboardProps> = ({ onSelectEvent }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col gap-8">
      {/* Featured Event Hero */}
      <section className="relative w-full rounded-2xl overflow-hidden bg-surface-dark shadow-2xl border border-[#38292e] group">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnbBwSYdqb5Dk2LCtIQyEOZveMQX71_4E9mmextfGxiLqxaXGwMlk7nBQq80Gz4or895XVVeyR562nVtHIc-0Dz4I82aThszxNzJAPDhr3sQ45EVODOnIsR9n1k27k9-wx1rNt8SfD86hhohErUuu0SHH7tmt4bZmq5hphj1u8cNVFAtvXTkHX0qxgnFipRVsUimgG2v5mTrUQ8HpdTynvFdLfp3P1jyzV1S77h0vvkBV9c6cMbCZbe3hkfbcXCX89y-hE6l1ZQnxH')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">Próximo Evento</span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <span className="material-symbols-outlined text-base">location_on</span>
                Parque Bicentenario, Concepción
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Social Run 5K <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Edición Atardecer</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-lg">
              Únete a nuestra carrera más popular de la semana. Disfruta de la puesta de sol, buena música y la mejor compañía.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <button 
                onClick={() => onSelectEvent({
                  id: 'featured',
                  title: 'Social Run 5K - Edición Atardecer',
                  date: 'OCT 20',
                  day: 'Lunes',
                  time: '19:00 PM',
                  location: 'Parque Bicentenario',
                  type: 'Social Run',
                  monitors: []
                })}
                className="flex items-center gap-2 cursor-pointer rounded-xl h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(233,32,106,0.4)] text-white text-base font-bold transition-all transform hover:-translate-y-0.5"
              >
                <span>Inscribirme Ahora</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="flex items-center justify-center rounded-xl h-12 px-6 border border-[#38292e] bg-surface-dark/50 hover:bg-surface-dark text-white text-sm font-medium transition-colors backdrop-blur-md">
                Ver Detalles
              </button>
            </div>
          </div>

          {/* Timer */}
          <div className="flex flex-col items-center gap-3 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest">Tiempo Restante</p>
            <div className="flex gap-3 text-center">
              {[ {v:'02', l:'Días'}, {v:'04', l:'Hrs'}, {v:'35', l:'Min'} ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col gap-1">
                    <div className="flex size-14 md:size-16 items-center justify-center rounded-xl bg-surface-dark border border-[#38292e]">
                      <span className="text-2xl md:text-3xl font-bold text-white">{item.v}</span>
                    </div>
                    <span className="text-xs text-text-secondary">{item.l}</span>
                  </div>
                  {i < 2 && <div className="flex items-center pb-6 text-white/30 text-2xl">:</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Main Feed */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Filters */}
          <div className="sticky top-[73px] z-40 bg-background-dark/95 backdrop-blur py-4 -my-4 border-b border-[#38292e] mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary text-white px-4 text-sm font-medium transition-colors">Todos</button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface-dark hover:bg-[#38292e] border border-[#38292e] text-text-secondary hover:text-white px-4 text-sm font-medium transition-colors"><span className="size-2 rounded-full bg-primary"></span>Social Run</button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface-dark hover:bg-[#38292e] border border-[#38292e] text-text-secondary hover:text-white px-4 text-sm font-medium transition-colors"><span className="size-2 rounded-full bg-pink-400"></span>Social Girl</button>
             </div>
             <div className="flex items-center bg-surface-dark rounded-lg p-1 border border-[#38292e] self-start md:self-auto">
                <button className="p-1.5 rounded bg-[#38292e] text-white shadow-sm"><span className="material-symbols-outlined text-[20px]">view_list</span></button>
                <button className="p-1.5 rounded text-text-secondary hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">calendar_month</span></button>
             </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-2">Esta Semana</h3>
            {EVENTS.map(event => (
               <article key={event.id} className="group relative flex flex-col sm:flex-row items-stretch gap-4 bg-surface-dark hover:bg-[#2d2126] border border-[#38292e] hover:border-primary/50 rounded-2xl p-4 transition-all duration-300">
                  <div className="flex flex-col items-center justify-center min-w-[80px] rounded-xl bg-[#1A1A1A] border border-[#38292e] py-3 px-2">
                    <span className="text-primary text-sm font-bold uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-3xl font-extrabold text-white">{event.date.split(' ')[1]}</span>
                    <span className="text-text-secondary text-xs">{event.day}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1 gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-block size-2 rounded-full shadow-[0_0_8px] ${event.type === 'Social Girl' ? 'bg-pink-400 shadow-pink-400/60' : event.type === 'Brunch & Yoga' ? 'bg-teal-400 shadow-teal-400/60' : 'bg-primary shadow-primary/60'}`}></span>
                        <span className={`text-xs font-bold uppercase tracking-wide ${event.type === 'Social Girl' ? 'text-pink-400' : event.type === 'Brunch & Yoga' ? 'text-teal-400' : 'text-primary'}`}>{event.type}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{event.title}</h4>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
                      <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">schedule</span><span>{event.time}</span></div>
                      <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">location_on</span><span>{event.location}</span></div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {event.monitors.map((m, idx) => (
                            <img key={idx} src={m.avatar} className="size-6 rounded-full border border-surface-dark object-cover" alt={m.name} />
                          ))}
                        </div>
                        <span className="text-xs text-text-secondary">Monitor: <span className="text-white">{event.monitors.map(m => m.name).join(' & ')}</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center sm:self-center">
                    <button 
                      onClick={() => onSelectEvent(event)}
                      className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border font-bold text-sm transition-all shadow-[0_0_0_0] hover:shadow-[0_0_15px] ${event.type === 'Social Girl' ? 'border-primary text-primary hover:bg-primary hover:text-white hover:shadow-primary/40' : event.type === 'Brunch & Yoga' ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black hover:shadow-teal-400/40' : 'border-primary text-primary hover:bg-primary hover:text-white hover:shadow-primary/40'}`}
                    >
                      Anotarme
                    </button>
                  </div>
               </article>
            ))}
          </div>
        </div>

        {/* Sticky Map */}
        <div className="lg:col-span-4 lg:block sticky top-[96px] h-[calc(100vh-120px)] hidden">
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#38292e] bg-[#261c20]">
             <div className="w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfNbfvrGOe-FO-Gves4G2Jlv8t3XQfTEgjW0qGKhAwwLaGV69aKagAtQgmxB39FjJUZDum2nrRgxPNl5s1uKHgW9MBSumYbBWXa26LbQyXE6HSocfJExetakAKArZXQyO_7FcYMnQd749onEsvr_mf6dtGvMtvHYOqMULU9yCXa3_T_TWt_HaSyaLcdVj2cF2l-bILdLUeV4l51G-KvIuRSw037mjthMRA3ArpQKZ1oFZ7-nCPDjYG6V88-SKn21aW9HE0SjDzi9R_')", filter: 'grayscale(100%) invert(1) brightness(0.6)' }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
             {/* Map Pins */}
             <div className="absolute top-[30%] left-[45%] flex flex-col items-center group cursor-pointer animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Social Run</div>
                <span className="material-symbols-outlined text-primary text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">location_on</span>
             </div>
             <div className="absolute bottom-4 left-4 right-4 bg-surface-dark/90 backdrop-blur border border-[#38292e] p-4 rounded-xl">
                <div className="flex items-start gap-3">
                   <span className="material-symbols-outlined text-primary mt-0.5">map</span>
                   <div>
                      <h5 className="text-white font-bold text-sm">Mapa de Eventos</h5>
                      <p className="text-text-secondary text-xs mt-1">Explora las locaciones de esta semana en Concepción.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};