import React from 'react';

const Users: React.FC = () => {
  return (
    <>
      <header className="bg-background-dark/80 backdrop-blur-md border-b border-border-dark sticky top-0 z-30 px-8 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Gestión de Usuarios</h2>
          <p className="text-text-muted text-sm mt-1">Administra los miembros, roles y permisos de acceso.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-surface-dark p-6 rounded-2xl border border-border-dark shadow-sm flex items-center justify-between">
                <div>
                   <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">Total Miembros</p>
                   <h3 className="text-3xl font-bold text-white">1,248</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">group</span>
                </div>
             </div>
             <div className="bg-surface-dark p-6 rounded-2xl border border-border-dark shadow-sm flex items-center justify-between">
                <div>
                   <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">Monitores Activos</p>
                   <h3 className="text-3xl font-bold text-white">42</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <span className="material-symbols-outlined">badge</span>
                </div>
             </div>
          </div>

          <div className="bg-surface-dark rounded-2xl border border-border-dark shadow-sm overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/20 border-b border-border-dark text-text-muted text-xs uppercase font-semibold tracking-wider">
                    <th className="px-6 py-4">Usuario</th>
                    <th className="px-6 py-4">Rol</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4">Última Actividad</th>
                    <th className="px-6 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-border-dark" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAarhkcgNpWyCVQ-xj8rKFYIqFbCuk7Lsn5svKGLFUWK3SvcAVNYfWLA6jnGCGbhODErQDNcUo_djjEI52vEgqGPcP58kNJgoyDsyeBhsKoQ25z3sjFk50Ibz7-JNuyPU1hPyktly2AOTgGWMLPkU0VkFj833dpq2eMz4-oO0YnLwb_lamWIzeJEbIaBw_cyMamj3AN8ELT3t8bEHl-vO0LXBvZFlXMgaKD_8DgIVDcLCtx5cd-pHvZqu-LuwWUkN3jEZFupqlcFrdN')" }}></div>
                        <div>
                          <p className="text-sm font-bold text-white">Sofía Morales</p>
                          <p className="text-xs text-text-muted">sofia.m@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Monitor</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-white">Activo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">Hace 2 horas</td>
                    <td className="px-6 py-4 text-right">
                       <button className="text-text-muted hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;