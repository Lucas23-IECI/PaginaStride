import React from 'react';
import { AreaChart, Area, XAxis, Tooltip as ReTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const areaData = [
  { name: 'Ene', eventos: 10, merch: 5 },
  { name: 'Feb', eventos: 15, merch: 8 },
  { name: 'Mar', eventos: 12, merch: 10 },
  { name: 'Abr', eventos: 25, merch: 12 },
  { name: 'May', eventos: 35, merch: 8 },
  { name: 'Jun', eventos: 45, merch: 20 },
];

const pieData = [
  { name: 'Social Runs', value: 40, color: '#e92063' },
  { name: 'Merch', value: 25, color: '#22d3ee' },
  { name: 'Planes', value: 20, color: '#a855f7' },
  { name: 'Trips', value: 15, color: '#fbbf24' },
];

const Sales: React.FC = () => {
  return (
    <>
      <header className="flex flex-col gap-4 px-8 py-6 shrink-0 border-b border-border-dark bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-3xl font-extrabold tracking-tight">Reportes y Ventas</h2>
            <p className="text-text-muted text-sm">Resumen financiero y actividad de ventas reciente</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="text-xs font-bold">Exportar</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col p-5 bg-surface-dark rounded-2xl border border-border-dark shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="material-symbols-outlined text-6xl text-yellow-400">payments</span>
               </div>
               <p className="text-text-muted text-sm font-medium">Ingresos Totales</p>
               <p className="text-yellow-400 text-3xl font-black tracking-tight mb-1">$12.450.000</p>
            </div>
             <div className="flex flex-col p-5 bg-surface-dark rounded-2xl border border-border-dark shadow-sm relative overflow-hidden">
               <p className="text-text-muted text-sm font-medium">Inscripciones Activas</p>
               <p className="text-white text-3xl font-black tracking-tight mb-1">342</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-surface-dark rounded-2xl border border-border-dark p-6 flex flex-col h-[400px]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white text-lg font-bold">Crecimiento de Ingresos</h3>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorEventos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e92063" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#e92063" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMerch" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#b89da6" />
                  <ReTooltip contentStyle={{ backgroundColor: '#211116', border: 'none' }} />
                  <Area type="monotone" dataKey="eventos" stroke="#e92063" fillOpacity={1} fill="url(#colorEventos)" />
                  <Area type="monotone" dataKey="merch" stroke="#22d3ee" fillOpacity={1} fill="url(#colorMerch)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="lg:col-span-1 bg-surface-dark rounded-2xl border border-border-dark p-6 flex flex-col h-[400px]">
              <h3 className="text-white text-lg font-bold mb-1">Distribución</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ReTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;