import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';

// Props para configurar el layout según el rol
interface DashboardLayoutProps {
    role?: 'admin' | 'monitor' | 'user';
}

const DashboardLayout = ({ role = 'admin' }: DashboardLayoutProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Detectar rol basado en la ruta si no se especifica
    const detectedRole = location.pathname.startsWith('/monitor') ? 'monitor' :
        location.pathname.startsWith('/profile') ? 'user' : role;

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-dark text-white">
            {/* Sidebar - Solo para admin, no para monitor/user mobile */}
            {detectedRole === 'admin' && (
                <Sidebar
                    isMobileOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
                {/* Mobile Header para Admin */}
                {detectedRole === 'admin' && (
                    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-white/5 bg-surface-dark">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 text-gray-400 hover:text-white"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                S
                            </div>
                            <span className="font-bold text-white">Stride Admin</span>
                        </div>
                        <div className="w-10" />
                    </div>
                )}

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
