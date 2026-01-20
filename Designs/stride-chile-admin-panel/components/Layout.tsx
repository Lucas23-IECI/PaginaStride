import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'dashboard', label: 'Dashboard' },
    { path: '/events', icon: 'calendar_month', label: 'Eventos' },
    { path: '/users', icon: 'group', label: 'Usuarios' },
    { path: '/sales', icon: 'attach_money', label: 'Ventas' }, // or shopping_cart based on different screens
    { path: '/inventory', icon: 'inventory_2', label: 'Stock' },
    { path: '/settings', icon: 'settings', label: 'Ajustes' },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-64 h-full bg-surface-dark border-r border-border-dark flex flex-col shrink-0 transition-all duration-300 hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
            S
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Stride Chile</h1>
            <p className="text-text-muted text-xs font-medium">Panel Admin</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined ${!isActive && 'group-hover:scale-110 transition-transform'}`}>
                  {item.icon}
                </span>
                <span className="font-medium text-sm">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border-dark">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
            <div 
              className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-primary/50" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-feDbAGhy0g9CqrpnX-fNMHJ1_FGSCSusbwveWaKx_Hvf847x9IMKeKHiiG7iQcDKcT9wFD_qTtIjaaLAKNFurlRVbUAUNLaRYgdV9LQnhFCpFQkcrwgV7D5gK1iJ-otaMKD4yTSrWy_dSnKEVITRyDd8ev9DvSKSWonNt1r-_gcjvtTSJJzIxqEr-WvkSARkaJ_1vhhbvwOXugUheJ0TD7fczyN2KFGlJWW7M4iZtal8ilLRms3S7YzmC_cLQ6kqKpxcDL9TBK4Y')" }}
            ></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Camila Silva</p>
              <p className="text-xs text-text-muted truncate">camila@stride.cl</p>
            </div>
            <span className="material-symbols-outlined text-text-muted text-sm">logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;