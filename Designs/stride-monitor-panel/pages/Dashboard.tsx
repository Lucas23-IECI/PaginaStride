import React, { useState } from 'react';
import { Runner } from '../types';

const INITIAL_RUNNERS: Runner[] = [
  {
    id: '1',
    name: 'Javiera Soto',
    initials: 'JS',
    pace: '5:30 min/km',
    status: 'Primera vez',
    paymentStatus: 'PAGADO',
    checkIn: false
  },
  {
    id: '2',
    name: 'Matías Rojas',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOVPgWAdgbQLmN-UaNOZLmuq5ZG4RMaw7_UHzyrggeanbRG0zYL6ZhF9C0i4Ni7eS9rJazWeEpxsVZohLj40VeknSFdMTRHDpgZg13uqaCGgeeQYrALkVhqCyeKudGZ3_2E02HEQweI4Xcoy5Cwj9UpyqzfFMAy4outI51zGW5UDR1QednnmwURUOPmi2Hq8dkiMBdu97yUWI5DIg0bHkhyrfKwNJkUyvt9fUUCgsqUQ1hh8Gf-BC1ovOBJEr6qX_8-4e21Qpje4Gx',
    pace: '4:45 min/km',
    status: 'Regular',
    equipment: 'Polera Stride (M)',
    paymentStatus: 'PENDIENTE',
    checkIn: true
  },
  {
    id: '3',
    name: 'Fernanda Pérez',
    initials: 'FP',
    pace: '6:00 min/km',
    status: 'VIP',
    paymentStatus: 'PAGADO',
    checkIn: true
  },
  {
    id: '4',
    name: 'Carlos López',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7cDu5S2U6CTGaKGR0BMKiUV3280ra2mwVCsBxmy9Xe3DKJ_6_RsbDiB0-Gzzr3OmtUhYj1_Y8XtbhFBtGd6y0awNg8Cd_d5Iy65_y0pVUQknt0AgIw5n8xBTQT4bOvHGVr0SaJN_eQ1HNZXz3fRw8H2Gm58gG1vU5Y3EVGuDOcVXowaKLSZFwijvsH5af-mdEzc1lWUFDPKtKHX9XmvhDKYAGSeB_2odzUwT7Y9TU_e3bW1f_Nvddd-BoFbcd6LnxZ4Gif7Hhp9Ou',
    pace: '5:00 min/km',
    status: 'Regular',
    equipment: 'Chip 024',
    paymentStatus: 'PAGADO',
    checkIn: false
  },
  {
    id: '5',
    name: 'Ana González',
    initials: 'AG',
    pace: '6:15 min/km',
    status: 'Primera vez',
    paymentStatus: 'PAGADO',
    checkIn: false
  }
];

const Dashboard: React.FC = () => {
  const [runners, setRunners] = useState<Runner[]>(INITIAL_RUNNERS);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCheckIn = (id: string) => {
    setRunners(runners.map(runner => 
      runner.id === id ? { ...runner, checkIn: !runner.checkIn } : runner
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-secondary/20 text-secondary border-secondary/20';
      case 'Regular': return 'bg-gray-700 text-gray-300 border-white/5';
      case 'Primera vez': return 'bg-primary/20 text-primary border-primary/20';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getAvatarBg = (id: string) => {
      const colors = ['bg-gradient-to-tr from-blue-500 to-purple-600', 'bg-gradient-to-tr from-primary to-orange-500', 'bg-indigo-600'];
      const index = parseInt(id) % colors.length;
      return colors[index];
  };

  const filteredRunners = runners.filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="lg:hidden mb-6 bg-surface-dark border border-white/10 p-4 rounded-dashboard flex items-center gap-3 shadow-md">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary">location_on</span>
        </div>
        <div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Hoy, 24 Octubre</p>
          <p className="text-white font-bold">Parque Bicentenario - 19:00 hrs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Total Inscritos</p>
              <h3 className="text-4xl font-black text-white">48</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">groups</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+12 vs semana pasada</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-secondary/30 transition-colors">
          <div className="absolute right-0 top-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Check-ins</p>
              <h3 className="text-4xl font-black text-white">32</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">how_to_reg</span>
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-secondary h-full rounded-full" style={{ width: '66%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-right">66% asistencia</p>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-white/20 transition-colors">
          <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Cupos Libres</p>
              <h3 className="text-4xl font-black text-white">2</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-white">
              <span className="material-symbols-outlined">event_seat</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-yellow-500 font-medium">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>Casi lleno</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-surface-dark border border-white/5 p-6 rounded-dashboard shadow-lg relative overflow-hidden group hover:border-blue-400/30 transition-colors">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10 mb-3">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Clima en Vivo</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-white">14°C</h3>
                <span className="material-symbols-outlined text-yellow-400">partly_cloudy_day</span>
              </div>
              <p className="text-xs text-gray-400">Concepción</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined">thermostat</span>
            </div>
          </div>
          <div className="pt-3 border-t border-white/10">
            <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Equipamiento Sugerido</p>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="material-symbols-outlined text-sm text-secondary">checkroom</span>
              <span>Cortavientos ligero</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] px-4 py-2.5 rounded-dashboard font-semibold transition-all">
          <span className="material-symbols-outlined">campaign</span>
          Fijar Aviso WhatsApp
        </button>
      </div>

      <div className="bg-surface-dark border border-white/5 rounded-dashboard shadow-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">list_alt</span>
            Gestión de Asistentes
          </h3>
          <div className="flex flex-wrap gap-2 w-full xl:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-surface-lighter hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold text-gray-300 transition-all">
              <span className="material-symbols-outlined text-[18px]">upload_file</span>
              <span>Importar Excel</span>
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-surface-lighter hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold text-gray-300 transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Exportar CSV</span>
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-sm font-bold text-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Mensaje Masivo</span>
            </button>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-black/20 flex items-center gap-3">
          <div className="relative flex-grow max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined text-[20px]">search</span>
            <input 
              className="w-full bg-surface-dark border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary placeholder-gray-600" 
              placeholder="Buscar runner por nombre..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-xs text-gray-500 hidden sm:block">Mostrando {filteredRunners.length} runners</div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/40 text-gray-400 text-xs uppercase tracking-wider border-b border-white/5">
                <th className="px-6 py-4 font-bold">Nombre</th>
                <th className="px-6 py-4 font-bold text-center">Status</th>
                <th className="px-6 py-4 font-bold text-center">Equipo Prestado</th>
                <th className="px-6 py-4 font-bold text-center">Pago Pendiente</th>
                <th className="px-6 py-4 font-bold text-center">Contacto</th>
                <th className="px-6 py-4 font-bold text-right">Check-in</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredRunners.map((runner) => (
                <tr key={runner.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {runner.avatar ? (
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300">
                           <img alt="" className="rounded-full w-full h-full object-cover" src={runner.avatar} />
                        </div>
                      ) : (
                        <div className={`w-8 h-8 rounded-full ${getAvatarBg(runner.id)} flex items-center justify-center text-xs font-bold`}>
                          {runner.initials}
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-white">{runner.name}</div>
                        <div className="text-xs text-gray-500">Pace: {runner.pace}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(runner.status)}`}>
                      {runner.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    {runner.equipment ? (
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${runner.status === 'Regular' && runner.equipment.includes('Stride') ? 'bg-secondary/10 text-secondary' : 'bg-white/5 text-gray-300'}`}>
                        {runner.equipment}
                      </span>
                    ) : '-'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {runner.paymentStatus === 'PENDIENTE' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse">
                          <span className="material-symbols-outlined text-[12px]">warning</span> PENDIENTE
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                          <span className="material-symbols-outlined text-[12px]">check</span> PAGADO
                        </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 hover:bg-green-500/20 text-green-500 transition-colors" href="#">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-surface-dark appearance-none cursor-pointer transition-all duration-300 left-0" 
                        id={`toggle${runner.id}`} 
                        name="toggle" 
                        type="checkbox"
                        checked={runner.checkIn}
                        onChange={() => toggleCheckIn(runner.id)}
                      />
                      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-700 cursor-pointer" htmlFor={`toggle${runner.id}`}></label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-black/20">
          <span className="text-xs text-gray-500">Mostrando {filteredRunners.length} de 48</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/10 text-gray-400 transition-colors disabled:opacity-50">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/10 text-gray-400 text-xs font-bold transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/10 text-gray-400 text-xs font-bold transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/10 text-gray-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;