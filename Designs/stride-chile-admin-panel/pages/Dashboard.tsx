import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Sem 1', uv: 4000 },
  { name: 'Sem 2', uv: 3000 },
  { name: 'Sem 3', uv: 5000 },
  { name: 'Sem 4', uv: 2780 },
  { name: 'Sem 5', uv: 1890 },
  { name: 'Sem 6', uv: 2390 },
  { name: 'Sem 7', uv: 3490 },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <header className="w-full px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-dark bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Tablero de Usuarios</h2>
          <p className="text-text-secondary text-sm">Visión general del crecimiento y actividad de la comunidad Stride.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38292e] border border-border-dark text-white text-sm hover:bg-[#4a353c] transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="hidden sm:inline">Exportar DB</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>Newsletter</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-5 flex flex-col gap-3 shadow-md">
              <div className="flex justify-between items-start">
                <p className="text-text-secondary text-sm font-medium">Crecimiento Tribu</p>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full font-bold">+12%</span>
              </div>
              <h3 className="text-3xl font-bold text-white">+1,240</h3>
              <div className="h-2 w-full flex items-end gap-1 opacity-80">
                 <div className="w-full bg-primary h-1 rounded-full"></div>
              </div>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-5 flex flex-col gap-3 shadow-md">
              <div className="flex justify-between items-start">
                <p className="text-text-secondary text-sm font-medium">Estado Usuarios</p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div>
                  <h3 className="text-2xl font-bold text-white">850</h3>
                  <p className="text-xs text-emerald-400 font-medium">Activos</p>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div>
                  <h3 className="text-2xl font-bold text-text-secondary">120</h3>
                  <p className="text-xs text-text-secondary font-medium">Inactivos</p>
                </div>
              </div>
              <div className="w-full bg-[#38292e] rounded-full h-1.5 mt-2">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-5 flex flex-col gap-3 shadow-md">
              <div className="flex justify-between items-start">
                <p className="text-text-secondary text-sm font-medium">Tasa de Retención</p>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full font-bold">+2.4%</span>
              </div>
              <h3 className="text-3xl font-bold text-white mt-1">92%</h3>
              <p className="text-xs text-text-secondary">Media de la industria: 85%</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-5 flex flex-col gap-3 shadow-md">
              <div className="flex justify-between items-start">
                <p className="text-text-secondary text-sm font-medium">Género</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">female</span>
                  <span className="text-xl font-bold text-white">55%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-400 text-[20px]">male</span>
                  <span className="text-xl font-bold text-white">45%</span>
                </div>
              </div>
              <div className="w-full flex h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-primary h-full" style={{ width: '55%' }}></div>
                <div className="bg-cyan-400 h-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Chart */}
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 shadow-md h-[350px]">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-white text-lg font-bold">Actividad de la Comunidad</h3>
                    <p className="text-text-secondary text-sm">Eventos y Compras (Últimos 30 días)</p>
                  </div>
                  <select className="bg-[#38292e] border-none text-white text-sm rounded-lg focus:ring-1 focus:ring-primary py-1 px-3">
                    <option>Últimos 30 días</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height="70%">
                  <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#b89da6" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#211116', border: '1px solid #3d2e33', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                      cursor={{ fill: 'rgba(233, 32, 99, 0.1)' }}
                    />
                    <Bar dataKey="uv" fill="#e92063" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Segments */}
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 shadow-md">
                <h3 className="text-white text-lg font-bold mb-4">Segmentación de la Tribu</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-medium">Social Girl</span>
                      <span className="text-primary font-bold">45%</span>
                    </div>
                    <div className="w-full bg-[#38292e] rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">Interés: Running social, eventos de fin de semana.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-medium">Social Run</span>
                      <span className="text-cyan-400 font-bold">30%</span>
                    </div>
                    <div className="w-full bg-[#38292e] rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">Interés: Entrenamiento, 10K, Maratones.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-medium">Brunch & Yoga</span>
                      <span className="text-purple-400 font-bold">25%</span>
                    </div>
                    <div className="w-full bg-[#38292e] rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">Interés: Wellness, Networking, Relajación.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1 bg-surface-dark border border-border-dark rounded-xl p-6 shadow-md flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-lg font-bold">Actividad Reciente</h3>
                <button className="text-primary text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">Ver Todo</button>
              </div>
              <div className="flex flex-col gap-0 relative">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full h-10 w-10 bg-cover bg-center border-2 border-[#181113] z-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlqAJ0DLFF4fBQG26SQnYD-VBJDQzB09Yw_UxLp82L45N_gwOTVXT5SXl9gDUo3DAfNDIKWzWuFx-LmgRqyq3u0Gh_u0HzH9Y9zg6NV0H2QOJql7TCyjJJfqJh58-ECJTK5Tv98epye3EnL0W3Bti4C10oPJbpzoLnTVukObiZWjvyfaqtnuKtJxszCfn2ElGP6OHVrIUPrD7gZbHcXS57_xvzUkinsiwr1Q1uB_9Ox2lit_5XLbr5ZYu4LcoaBqkitRVEnJ-NnXtP')" }}></div>
                    <div className="w-0.5 bg-border-dark h-full my-1"></div>
                  </div>
                  <div className="pb-8 pt-1">
                    <p className="text-white text-sm font-medium leading-tight">Camila J. <span className="text-text-secondary font-normal">se inscribió a</span> Social Run</p>
                    <p className="text-text-secondary text-xs mt-1">Hace 5 min</p>
                  </div>
                </div>
                 <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full h-10 w-10 bg-cover bg-center border-2 border-[#181113] z-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5jgY5bncSWarN-RwIkPrXNeGUQKFgEF6hT2tlvqDO3hIkW30eP1V7w6RZ271Q7lUF6iCqKRDx5jI8q2OMbc-OdJ5luOfmZqLCTarMb-yHrin7LCIB-ivaMoNGHa_0SaD62BZfbT3nX8GbLKVPqU-_WR-COURrV0naTtb2EFcTwXyJx0mhaN0MtdSfeQPKsT32haOw0mCLrXNcMrs6TLMHWEF7QDVDT3-_3jtMHfQQIJBSpsGQIX9Matslv56_xntJQ8Mx4Smz5Jpx')" }}></div>
                    <div className="w-0.5 bg-border-dark h-full my-1"></div>
                  </div>
                  <div className="pb-8 pt-1">
                    <p className="text-white text-sm font-medium leading-tight">Juan P. <span className="text-text-secondary font-normal">compró</span> Classic Tee</p>
                    <p className="text-text-secondary text-xs mt-1">Hace 2 horas</p>
                  </div>
                </div>
                 <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                     <div className="rounded-full h-10 w-10 bg-primary/20 flex items-center justify-center border-2 border-[#181113] z-10 text-primary">
                        <span className="material-symbols-outlined text-[20px]">person_add</span>
                     </div>
                    <div className="w-0.5 bg-border-dark h-full my-1 opacity-0"></div>
                  </div>
                  <div className="pb-8 pt-1">
                    <p className="text-white text-sm font-medium leading-tight">Nuevo miembro: <span className="text-white font-bold">Andrea M.</span></p>
                    <p className="text-text-secondary text-xs mt-1">Hace 4 horas</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-border-dark">
                <button className="w-full py-2 bg-[#38292e] text-white text-sm rounded-lg hover:bg-[#4a353c] transition-colors">Ver registro completo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;