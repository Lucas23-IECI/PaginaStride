import { NavLink, useLocation, Link } from 'react-router-dom';

// Diferentes navegaciones según el rol
const adminNavItems = [
    { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/events', icon: 'calendar_month', label: 'Eventos' },
    { path: '/admin/users', icon: 'group', label: 'Usuarios' },
    { path: '/admin/sales', icon: 'attach_money', label: 'Ventas' },
    { path: '/admin/inventory', icon: 'inventory_2', label: 'Stock' },
    { path: '/admin/settings', icon: 'settings', label: 'Ajustes' },
];

const userNavItems = [
    { path: '/profile', icon: 'dashboard', label: 'Dashboard' },
    { path: '/profile/events', icon: 'calendar_month', label: 'Mis Eventos' },
    { path: '/profile/purchases', icon: 'shopping_bag', label: 'Mis Compras' },
    { path: '/profile/settings', icon: 'settings', label: 'Ajustes' },
];

const monitorNavItems = [
    { path: '/monitor', icon: 'how_to_reg', label: 'Check-in' },
    { path: '/monitor/report', icon: 'description', label: 'Reportes' },
];

interface SidebarProps {
    isMobileOpen?: boolean;
    onClose?: () => void;
    role?: 'admin' | 'monitor' | 'user';
}

const Sidebar = ({ isMobileOpen, onClose, role = 'admin' }: SidebarProps) => {
    const location = useLocation();

    // Detectar rol basado en la ruta si no se especifica
    const detectedRole = location.pathname.startsWith('/monitor') ? 'monitor' :
        location.pathname.startsWith('/profile') ? 'user' : role;

    const navItems = detectedRole === 'admin' ? adminNavItems :
        detectedRole === 'user' ? userNavItems : monitorNavItems;

    const isActive = (path: string) => {
        if (path === '/admin' || path === '/profile' || path === '/monitor') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    const logoText = detectedRole === 'admin' ? 'Panel Admin' :
        detectedRole === 'monitor' ? 'Panel Monitor' : 'Mi Perfil';

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 h-full bg-surface-dark border-r border-white/5
          flex flex-col shrink-0 transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
            >
                {/* Logo */}
                <div className="p-6 flex items-center gap-3">
                    <Link to="/" className="h-10 w-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                        S
                    </Link>
                    <div>
                        <h1 className="text-white font-bold text-lg leading-tight">Stride Chile</h1>
                        <p className="text-gray-500 text-xs font-medium">{logoText}</p>
                    </div>
                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="md:hidden ml-auto text-gray-400 hover:text-white"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/admin' || item.path === '/profile' || item.path === '/monitor'}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive(item.path)
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className={`material-symbols-outlined ${!isActive(item.path) && 'group-hover:scale-110 transition-transform'}`}>
                                {item.icon}
                            </span>
                            <span className="font-medium text-sm">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* User Footer */}
                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                        <div
                            className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-primary/50"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-feDbAGhy0g9CqrpnX-fNMHJ1_FGSCSusbwveWaKx_Hvf847x9IMKeKHiiG7iQcDKcT9wFD_qTtIjaaLAKNFurlRVbUAUNLaRYgdV9LQnhFCpFQkcrwgV7D5gK1iJ-otaMKD4yTSrWy_dSnKEVITRyDd8ev9DvSKSWonNt1r-_gcjvtTSJJzIxqEr-WvkSARkaJ_1vhhbvwOXugUheJ0TD7fczyN2KFGlJWW7M4iZtal8ilLRms3S7YzmC_cLQ6kqKpxcDL9TBK4Y')" }}
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                                {detectedRole === 'admin' ? 'Camila Silva' : detectedRole === 'monitor' ? 'Monitor' : 'Mateo F.'}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                                {detectedRole === 'admin' ? 'camila@stride.cl' : detectedRole === 'monitor' ? 'monitor@stride.cl' : 'mateo@email.com'}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-gray-500 text-sm">logout</span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
