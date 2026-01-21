import { NavLink, Outlet, useLocation } from 'react-router-dom';

// ============================================
// PROFILE LAYOUT - Layout específico para perfil de usuario
// Incluye sidebar de navegación lateral
// ============================================

const ProfileLayout = () => {
    const location = useLocation();

    const navLinks = [
        { to: '/profile', label: 'Mi Perfil', icon: 'dashboard', exact: true },
        { to: '/profile/events', label: 'Mis Eventos', icon: 'calendar_month' },
        { to: '/profile/achievements', label: 'Logros', icon: 'military_tech' },
        { to: '/profile/registrations', label: 'Mis Runs', icon: 'directions_run' },
        { to: '/profile/edit', label: 'Ajustes', icon: 'settings' },
    ];

    const isActive = (path: string, exact?: boolean) => {
        if (exact) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-background-dark">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-surface-dark border-r border-white/5 flex flex-col z-50">
                <div className="p-8">
                    <NavLink to="/">
                        <h1 className="font-script text-4xl font-bold text-gradient">stride</h1>
                    </NavLink>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.exact}
                            className={({ isActive: active }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active || isActive(link.to, link.exact)
                                    ? 'bg-white/10 text-white border-l-4 border-primary'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">{link.icon}</span>
                            <span className="font-semibold">{link.label}</span>
                        </NavLink>
                    ))}
                </nav>
                <div className="p-6 mt-auto">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-semibold">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 h-screen overflow-y-auto no-scrollbar">
                <Outlet />
            </main>
        </div>
    );
};

export default ProfileLayout;
