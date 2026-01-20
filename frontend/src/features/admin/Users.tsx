import { MOCK_ADMIN_USERS } from '@/mocks/admin.mock';
import { useState } from 'react';

const Users = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = MOCK_ADMIN_USERS.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalMembers = MOCK_ADMIN_USERS.length;
    const activeMonitors = MOCK_ADMIN_USERS.filter(u => u.role === 'monitor' && u.status === 'active').length;

    return (
        <>
            <header className="bg-background-dark/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-30 px-8 py-4 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Gestión de Usuarios</h2>
                    <p className="text-gray-400 text-sm mt-1">Administra los miembros, roles y permisos de acceso.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-pink-600 text-white text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:brightness-110 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">person_add</span>
                        Añadir Usuario
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-[1600px] mx-auto space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface-dark p-6 rounded-2xl border border-white/5 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Miembros</p>
                                <h3 className="text-3xl font-bold text-white">{totalMembers.toLocaleString()}</h3>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">group</span>
                            </div>
                        </div>
                        <div className="bg-surface-dark p-6 rounded-2xl border border-white/5 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Monitores Activos</p>
                                <h3 className="text-3xl font-bold text-white">{activeMonitors}</h3>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <span className="material-symbols-outlined">badge</span>
                            </div>
                        </div>
                        <div className="bg-surface-dark p-6 rounded-2xl border border-white/5 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Nuevos este mes</p>
                                <h3 className="text-3xl font-bold text-white">+24</h3>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-md relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full h-11 pl-10 pr-4 rounded-xl bg-surface-dark border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                            placeholder="Buscar por nombre o email..."
                            type="text"
                        />
                    </div>

                    {/* Users Table */}
                    <div className="bg-surface-dark rounded-2xl border border-white/5 shadow-sm overflow-hidden flex flex-col">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-black/20 border-b border-white/5 text-gray-400 text-xs uppercase font-semibold tracking-wider">
                                        <th className="px-6 py-4">Usuario</th>
                                        <th className="px-6 py-4">Rol</th>
                                        <th className="px-6 py-4">Estado</th>
                                        <th className="px-6 py-4">Última Actividad</th>
                                        <th className="px-6 py-4">Fecha Registro</th>
                                        <th className="px-6 py-4 text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-white/5"
                                                        style={{ backgroundImage: `url('${user.avatar}')` }}
                                                    />
                                                    <div>
                                                        <p className="text-sm font-bold text-white">{user.name}</p>
                                                        <p className="text-xs text-gray-500">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${user.roleColor}`}>
                                                    {user.role === 'admin' ? 'Admin' : user.role === 'monitor' ? 'Monitor' : 'Usuario'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                                                    <span className="text-sm text-white capitalize">{user.status === 'active' ? 'Activo' : 'Inactivo'}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-400">{user.lastActivity}</td>
                                            <td className="px-6 py-4 text-sm text-gray-400">{user.joinedDate}</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                                    </button>
                                                    <button className="p-2 rounded-lg hover:bg-primary/20 text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-black/20">
                            <span className="text-xs text-gray-500">Mostrando {filteredUsers.length} de {MOCK_ADMIN_USERS.length} usuarios</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
