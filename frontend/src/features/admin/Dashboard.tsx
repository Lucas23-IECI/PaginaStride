import { ADMIN_STATS, RECENT_ACTIVITY, CHART_DATA, SEGMENT_DATA } from '@/mocks/admin.mock';

const Dashboard = () => {
    return (
        <>
            {/* Header */}
            <header className="w-full px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Tablero de Usuarios</h2>
                    <p className="text-gray-400 text-sm">Visión general del crecimiento y actividad de la comunidad Stride.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38292e] border border-white/5 text-white text-sm hover:bg-[#4a353c] transition-colors">
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
                        {/* Card 1: Crecimiento Tribu */}
                        <div className="bg-surface-dark border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-md">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-400 text-sm font-medium">Crecimiento Tribu</p>
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full font-bold">{ADMIN_STATS.tribeGrowth.change}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white">{ADMIN_STATS.tribeGrowth.value}</h3>
                            <div className="h-2 w-full flex items-end gap-1 opacity-80">
                                <div className="w-full bg-primary h-1 rounded-full"></div>
                            </div>
                        </div>

                        {/* Card 2: Estado Usuarios */}
                        <div className="bg-surface-dark border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-md">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-400 text-sm font-medium">Estado Usuarios</p>
                            </div>
                            <div className="flex items-center gap-4 mt-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{ADMIN_STATS.activeUsers}</h3>
                                    <p className="text-xs text-emerald-400 font-medium">Activos</p>
                                </div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-500">{ADMIN_STATS.inactiveUsers}</h3>
                                    <p className="text-xs text-gray-500 font-medium">Inactivos</p>
                                </div>
                            </div>
                            <div className="w-full bg-[#38292e] rounded-full h-1.5 mt-2">
                                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: `${(ADMIN_STATS.activeUsers / (ADMIN_STATS.activeUsers + ADMIN_STATS.inactiveUsers)) * 100}%` }}></div>
                            </div>
                        </div>

                        {/* Card 3: Tasa de Retención */}
                        <div className="bg-surface-dark border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-md">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-400 text-sm font-medium">Tasa de Retención</p>
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full font-bold">{ADMIN_STATS.retentionRate.change}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mt-1">{ADMIN_STATS.retentionRate.value}</h3>
                            <p className="text-xs text-gray-500">Media de la industria: 85%</p>
                        </div>

                        {/* Card 4: Género */}
                        <div className="bg-surface-dark border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-md">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-400 text-sm font-medium">Género</p>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">female</span>
                                    <span className="text-xl font-bold text-white">{ADMIN_STATS.genderFemale}%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-cyan-400 text-[20px]">male</span>
                                    <span className="text-xl font-bold text-white">{ADMIN_STATS.genderMale}%</span>
                                </div>
                            </div>
                            <div className="w-full flex h-1.5 rounded-full overflow-hidden mt-1">
                                <div className="bg-primary h-full" style={{ width: `${ADMIN_STATS.genderFemale}%` }}></div>
                                <div className="bg-cyan-400 h-full" style={{ width: `${ADMIN_STATS.genderMale}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Chart Placeholder */}
                            <div className="bg-surface-dark border border-white/5 rounded-xl p-6 shadow-md h-[350px]">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-white text-lg font-bold">Actividad de la Comunidad</h3>
                                        <p className="text-gray-400 text-sm">Eventos y Compras (Últimos 30 días)</p>
                                    </div>
                                    <select className="bg-[#38292e] border-none text-white text-sm rounded-lg focus:ring-1 focus:ring-primary py-1 px-3">
                                        <option>Últimos 30 días</option>
                                    </select>
                                </div>
                                {/* Simplified Chart Bars */}
                                <div className="flex items-end justify-between h-[200px] gap-4 px-4">
                                    {CHART_DATA.map((item, index) => (
                                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                            <div
                                                className="w-full bg-primary rounded-t-md transition-all hover:bg-primary/80"
                                                style={{ height: `${(item.uv / 5000) * 100}%` }}
                                            />
                                            <span className="text-xs text-gray-400">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Segments */}
                            <div className="bg-surface-dark border border-white/5 rounded-xl p-6 shadow-md">
                                <h3 className="text-white text-lg font-bold mb-4">Segmentación de la Tribu</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {SEGMENT_DATA.map((segment) => (
                                        <div key={segment.name} className="flex flex-col gap-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-white font-medium">{segment.name}</span>
                                                <span className={`${segment.textColor} font-bold`}>{segment.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-[#38292e] rounded-full h-2">
                                                <div className={`${segment.color} h-2 rounded-full`} style={{ width: `${segment.percentage}%` }}></div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">{segment.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="lg:col-span-1 bg-surface-dark border border-white/5 rounded-xl p-6 shadow-md flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white text-lg font-bold">Actividad Reciente</h3>
                                <button className="text-primary text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">Ver Todo</button>
                            </div>
                            <div className="flex flex-col gap-0 relative">
                                {RECENT_ACTIVITY.map((activity, index) => (
                                    <div key={activity.id} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            {activity.avatar ? (
                                                <div
                                                    className="rounded-full h-10 w-10 bg-cover bg-center border-2 border-[#181113] z-10"
                                                    style={{ backgroundImage: `url('${activity.avatar}')` }}
                                                />
                                            ) : (
                                                <div className="rounded-full h-10 w-10 bg-primary/20 flex items-center justify-center border-2 border-[#181113] z-10 text-primary">
                                                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                                                </div>
                                            )}
                                            <div className={`w-0.5 bg-white/10 h-full my-1 ${index === RECENT_ACTIVITY.length - 1 ? 'opacity-0' : ''}`}></div>
                                        </div>
                                        <div className="pb-8 pt-1">
                                            <p className="text-white text-sm font-medium leading-tight">
                                                {activity.type === 'newMember' ? (
                                                    <>{activity.action} <span className="text-white font-bold">{activity.userName}</span></>
                                                ) : (
                                                    <>{activity.userName} <span className="text-gray-400 font-normal">{activity.action}</span> {activity.target}</>
                                                )}
                                            </p>
                                            <p className="text-gray-500 text-xs mt-1">{activity.timeAgo}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/5">
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
