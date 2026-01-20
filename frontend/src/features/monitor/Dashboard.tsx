import { useState } from 'react';

interface Runner {
    id: string;
    name: string;
    avatar?: string;
    initials?: string;
    pace: string;
    status: 'Primera vez' | 'Regular' | 'VIP';
    equipment?: string;
    paymentStatus: 'PAGADO' | 'PENDIENTE';
    checkIn: boolean;
}

const INITIAL_RUNNERS: Runner[] = [
    { id: '1', name: 'Javiera Soto', initials: 'JS', pace: '5:30 min/km', status: 'Primera vez', paymentStatus: 'PAGADO', checkIn: false },
    { id: '2', name: 'Matías Rojas', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOVPgWAdgbQLmN-UaNOZLmuq5ZG4RMaw7_UHzyrggeanbRG0zYL6ZhF9C0i4Ni7eS9rJazWeEpxsVZohLj40VeknSFdMTRHDpgZg13uqaCGgeeQYrALkVhqCyeKudGZ3_2E02HEQweI4Xcoy5Cwj9UpyqzfFMAy4outI51zGW5UDR1QednnmwURUOPmi2Hq8dkiMBdu97yUWI5DIg0bHkhyrfKwNJkUyvt9fUUCgsqUQ1hh8Gf-BC1ovOBJEr6qX_8-4e21Qpje4Gx', pace: '4:45 min/km', status: 'Regular', equipment: 'Polera Stride (M)', paymentStatus: 'PENDIENTE', checkIn: true },
    { id: '3', name: 'Fernanda Pérez', initials: 'FP', pace: '6:00 min/km', status: 'VIP', paymentStatus: 'PAGADO', checkIn: true },
    { id: '4', name: 'Carlos López', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7cDu5S2U6CTGaKGR0BMKiUV3280ra2mwVCsBxmy9Xe3DKJ_6_RsbDiB0-Gzzr3OmtUhYj1_Y8XtbhFBtGd6y0awNg8Cd_d5Iy65_y0pVUQknt0AgIw5n8xBTQT4bOvHGVr0SaJN_eQ1HNZXz3fRw8H2Gm58gG1vU5Y3EVGuDOcVXowaKLSZFwijvsH5af-mdEzc1lWUFDPKtKHX9XmvhDKYAGSeB_2odzUwT7Y9TU_e3bW1f_Nvddd-BoFbcd6LnxZ4Gif7Hhp9Ou', pace: '5:00 min/km', status: 'Regular', equipment: 'Chip 024', paymentStatus: 'PAGADO', checkIn: false },
    { id: '5', name: 'Ana González', initials: 'AG', pace: '6:15 min/km', status: 'Primera vez', paymentStatus: 'PAGADO', checkIn: false },
];

const MonitorDashboard = () => {
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
    const checkedIn = runners.filter(r => r.checkIn).length;
    const totalRunners = runners.length;

    return (
        <>
            {/* Header del Evento Actual */}
            <header className="bg-background-dark/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-30 px-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Hoy, 24 Octubre</p>
                            <p className="text-white font-bold text-lg">Parque Bicentenario - 19:00 hrs</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-surface-dark border border-white/5 rounded-xl px-4 py-2 flex items-center gap-3">
                            <span className="text-3xl font-black text-white">{checkedIn}</span>
                            <span className="text-gray-500">/</span>
                            <span className="text-xl font-bold text-gray-400">{totalRunners}</span>
                            <span className="text-xs text-gray-500 uppercase">Presentes</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-6 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-surface-dark border border-white/5 p-4 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Inscritos</p>
                                <h3 className="text-2xl font-black text-white">48</h3>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-lg">groups</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-dark border border-white/5 p-4 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Check-ins</p>
                                <h3 className="text-2xl font-black text-white">{checkedIn}</h3>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined text-lg">how_to_reg</span>
                            </div>
                        </div>
                        <div className="mt-2 w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-secondary h-full rounded-full transition-all" style={{ width: `${(checkedIn / totalRunners) * 100}%` }}></div>
                        </div>
                    </div>

                    <div className="bg-surface-dark border border-white/5 p-4 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Cupos Libres</p>
                                <h3 className="text-2xl font-black text-white">2</h3>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-lg">event_seat</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-dark border border-white/5 p-4 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Clima</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-black text-white">14°C</h3>
                                    <span className="material-symbols-outlined text-yellow-400">partly_cloudy_day</span>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <span className="material-symbols-outlined text-lg">thermostat</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lista de Runners */}
                <div className="bg-surface-dark border border-white/5 rounded-xl shadow-xl overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">list_alt</span>
                            Gestión de Asistentes
                        </h3>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg font-semibold text-sm transition-all">
                            <span className="material-symbols-outlined">campaign</span>
                            Aviso WhatsApp
                        </button>
                    </div>

                    <div className="px-4 py-3 bg-black/20 flex items-center gap-3">
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
                        <div className="text-xs text-gray-500 hidden sm:block">{filteredRunners.length} runners</div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/40 text-gray-400 text-xs uppercase tracking-wider border-b border-white/5">
                                    <th className="px-4 py-3 font-bold">Nombre</th>
                                    <th className="px-4 py-3 font-bold text-center">Status</th>
                                    <th className="px-4 py-3 font-bold text-center hidden md:table-cell">Pago</th>
                                    <th className="px-4 py-3 font-bold text-right">Check-in</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredRunners.map((runner) => (
                                    <tr key={runner.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                {runner.avatar ? (
                                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300">
                                                        <img alt="" className="rounded-full w-full h-full object-cover" src={runner.avatar} />
                                                    </div>
                                                ) : (
                                                    <div className={`w-10 h-10 rounded-full ${getAvatarBg(runner.id)} flex items-center justify-center text-xs font-bold text-white`}>
                                                        {runner.initials}
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-bold text-white">{runner.name}</div>
                                                    <div className="text-xs text-gray-500">Pace: {runner.pace}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(runner.status)}`}>
                                                {runner.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center hidden md:table-cell">
                                            {runner.paymentStatus === 'PENDIENTE' ? (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                                                    <span className="material-symbols-outlined text-[12px]">warning</span> PENDIENTE
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                                                    <span className="material-symbols-outlined text-[12px]">check</span> OK
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <button
                                                onClick={() => toggleCheckIn(runner.id)}
                                                className={`w-20 py-2 rounded-full font-bold text-xs transition-all ${runner.checkIn
                                                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                                                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                                                    }`}
                                            >
                                                {runner.checkIn ? '✓ Presente' : 'Check-in'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between bg-black/20">
                        <span className="text-xs text-gray-500">Mostrando {filteredRunners.length} de {totalRunners}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MonitorDashboard;
