import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Props para controlar comportamiento del Navbar
interface NavbarProps {
    cartItemCount?: number;
    onCartClick?: () => void;
    userName?: string;
    userRole?: 'user' | 'monitor' | 'admin';
}

const Navbar = ({ cartItemCount = 0, onCartClick, userName, userRole }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Detectar contexto de ruta
    const isStore = location.pathname.startsWith('/store');
    const isAdmin = location.pathname.startsWith('/admin');
    const isMonitor = location.pathname.startsWith('/monitor');
    const isCheckout = location.pathname === '/store/checkout';
    const isConfirmation = location.pathname === '/store/confirmation';

    // Estado activo de links
    const isActive = (path: string) => location.pathname === path;

    const linkClasses = (path: string) =>
        `text-sm font-semibold transition-colors ${isActive(path) ? 'text-primary' : 'text-white/80 hover:text-primary'}`;

    // ============================================
    // VARIANTE: CHECKOUT (Mínimo, solo logo + volver)
    // ============================================
    if (isCheckout) {
        return (
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/5 bg-[#181113] px-6 lg:px-40 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-4xl text-primary">diamond</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-tight">Stride Chile</h2>
                </div>
                <Link className="text-slate-400 hover:text-white text-sm font-medium leading-normal flex items-center gap-2 transition-colors" to="/store">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Volver a la tienda
                </Link>
            </header>
        );
    }

    // ============================================
    // VARIANTE: CONFIRMATION (Post-compra)
    // ============================================
    if (isConfirmation) {
        return (
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283739] px-6 py-4 md:px-10 lg:px-40 bg-[#111718]/90 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4 text-white">
                    <span className="material-symbols-outlined text-3xl text-primary">diamond</span>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Stride Chile</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/store">Tienda</Link>
                        <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/">Eventos</Link>
                        <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/nosotros">Comunidad</Link>
                    </div>
                </div>
                <button className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </header>
        );
    }

    // ============================================
    // VARIANTE: ADMIN/MONITOR (Header minimal)
    // ============================================
    if (isAdmin || isMonitor) {
        return (
            <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-dark shadow-lg">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-8">
                        <Link to="/" className="group relative">
                            <h1 className="font-script text-3xl font-bold text-gradient pb-1">stride</h1>
                        </Link>
                        <div className="hidden md:block w-px h-8 bg-white/10"></div>
                        <h2 className="text-lg font-bold text-white tracking-wide hidden md:block">
                            {isAdmin ? 'Panel Admin' : 'Panel Monitor'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {userName && (
                            <div className="flex items-center gap-3 pl-0 md:pl-6 border-l-0 md:border-l border-white/10">
                                <div className="flex flex-col items-end mr-2">
                                    <span className="text-sm font-bold text-white">{userName}</span>
                                    <span className="text-xs text-secondary font-medium capitalize">{userRole}</span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                                    {userName.charAt(0).toUpperCase()}
                                </div>
                            </div>
                        )}
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors" title="Salir al sitio público">
                            <span className="material-symbols-outlined">logout</span>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }

    // ============================================
    // VARIANTE: DEFAULT (Público + Store)
    // ============================================
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 frosted-glass transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link className="group relative" to="/">
                    <h1 className="font-script text-4xl font-bold text-gradient pb-2">stride</h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link className={linkClasses('/')} to="/">Inicio</Link>
                    <Link className={linkClasses('/nosotros')} to="/nosotros">Nosotros</Link>
                    <Link className={linkClasses('/entrenamiento')} to="/entrenamiento">Entrenamientos</Link>
                    <Link className={linkClasses('/viajes')} to="/viajes">Viajes</Link>
                    {isStore ? (
                        <Link className={`text-sm font-bold text-white border-b-2 border-primary pb-1`} to="/store">Store</Link>
                    ) : (
                        <Link className={linkClasses('/store')} to="/store">Store</Link>
                    )}
                    <Link className={linkClasses('/faq')} to="/faq">Ayuda</Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Búsqueda (solo en Store) */}
                    {isStore && (
                        <button className="text-gray-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    )}

                    {/* Carrito (solo en Store) */}
                    {isStore && (
                        <button
                            onClick={onCartClick}
                            className="relative group text-gray-300 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-black ring-2 ring-background-dark">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    )}

                    {/* Link Admin (si es admin) */}
                    {userRole === 'admin' && !isStore && (
                        <Link
                            to="/admin"
                            className="hidden sm:flex h-9 px-4 items-center justify-center bg-white/10 border border-white/20 rounded-full text-white text-xs font-bold hover:bg-white/20 transition-all"
                        >
                            <span className="material-symbols-outlined text-sm mr-1">dashboard</span>
                            Dashboard
                        </Link>
                    )}

                    {/* Botón "Únete" (no en Store) */}
                    {!isStore && (
                        <Link
                            to="/entrenamiento"
                            className="hidden sm:flex h-10 px-6 items-center justify-center bg-gradient-primary rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(233,32,99,0.3)] hover:shadow-[0_0_25px_rgba(233,32,99,0.5)] transition-all transform hover:scale-105"
                        >
                            Únete
                        </Link>
                    )}

                    {/* Menú móvil */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#121212] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                    <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
                    <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/entrenamiento" onClick={() => setIsOpen(false)}>Entrenamientos</Link>
                    <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/viajes" onClick={() => setIsOpen(false)}>Viajes</Link>
                    <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/store" onClick={() => setIsOpen(false)}>Store</Link>
                    <Link className="text-white hover:text-primary py-2 border-b border-white/5" to="/faq" onClick={() => setIsOpen(false)}>Ayuda</Link>
                    <Link className="text-white hover:text-primary py-2" to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>

                    {userRole === 'admin' && (
                        <Link
                            className="text-secondary hover:text-primary py-2 border-t border-white/10 mt-2 flex items-center gap-2"
                            to="/admin"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="material-symbols-outlined text-sm">dashboard</span>
                            Panel Admin
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
