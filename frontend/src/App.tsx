import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';
import { CartDrawer } from '@/components/store';
import { CartProvider, useCart } from '@/contexts/CartContext';
import { Home, About, Training, Trips, Alliances, FAQ, Contact } from '@/features/landing';
import { Catalog, ProductDetail, Checkout, Confirmation } from '@/features/store';
import { Dashboard, Users, EventList, CreateEvent, Sales, Inventory, Settings } from '@/features/admin';
import { ProfileDashboard, MyEvents, EditProfile, Achievements, Registrations } from '@/features/profile';
import { MonitorDashboard, SessionReport, MonitorProfile } from '@/features/monitor';
import { ExperienceHub, ExperienceDetail } from '@/features/experiences';
import { LevelSelection, RegistrationForm, InscriptionSuccess } from '@/features/events/inscription';
import DashboardLayout from '@/layouts/DashboardLayout';
import ProfileLayout from '@/layouts/ProfileLayout';

// ============================================
// LAYOUTS
// ============================================

const PublicLayout = () => (
  <div className="min-h-screen flex flex-col bg-background-dark">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const StoreLayout = () => {
  const { itemCount, toggleCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background-dark">
      <Navbar cartItemCount={itemCount} onCartClick={toggleCart} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

// Layout minimal para checkout/confirmation/inscripción (sin distracciones)
const MinimalLayout = () => {
  const location = useLocation();
  const isSuccess = location.pathname.includes('success') || location.pathname.includes('confirmation');

  return (
    <div className="min-h-screen flex flex-col bg-background-dark">
      {/* Navbar Minimal */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background-dark/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/experiences" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-medium hidden sm:inline">Volver</span>
          </Link>
          <Link to="/" className="font-script text-3xl text-white">stride</Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-secondary">lock</span>
            <span className="hidden sm:inline">Inscripción Segura</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      {isSuccess && <Footer />}
    </div>
  );
};

// Layout minimal para checkout de tienda
const CheckoutLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background-dark">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background-dark/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/store" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-medium">Volver a la tienda</span>
          </Link>
          <Link to="/" className="font-script text-3xl text-white">stride</Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-secondary">lock</span>
            <span className="hidden sm:inline">Checkout Seguro</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      {location.pathname === '/store/confirmation' && <Footer />}
    </div>
  );
};

// ============================================
// PÁGINAS PLACEHOLDER (Por migrar)
// ============================================

const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-white/60">Página por migrar desde Stitch</p>
    </div>
  </div>
);

const AdminPlaceholder = ({ title }: { title: string }) => (
  <>
    <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/5 bg-background-dark/50 backdrop-blur-sm sticky top-0">
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
    </header>
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">construction</span>
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400">Módulo en desarrollo</p>
      </div>
    </div>
  </>
);

// ============================================
// APP - ROUTER CON CART PROVIDER
// ============================================

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/entrenamiento" element={<Training />} />
        <Route path="/viajes" element={<Trips />} />
        <Route path="/aliados" element={<Alliances />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contact />} />
        {/* Experiencias */}
        <Route path="/experiences" element={<ExperienceHub />} />
        <Route path="/experiences/:slug" element={<ExperienceDetail />} />
      </Route>

      {/* Rutas Inscripción - Minimal Layout */}
      <Route path="/inscription" element={<MinimalLayout />}>
        <Route path="level" element={<LevelSelection />} />
        <Route path="form" element={<RegistrationForm />} />
        <Route path="success" element={<InscriptionSuccess />} />
      </Route>

      {/* Rutas Tienda - Layout Normal */}
      <Route path="/store" element={<StoreLayout />}>
        <Route index element={<Catalog />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>

      {/* Rutas Tienda - Layout Minimal (Checkout) */}
      <Route path="/store" element={<CheckoutLayout />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Route>

      {/* Rutas Admin - Dashboard Layout */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/new" element={<CreateEvent />} />
        <Route path="users" element={<Users />} />
        <Route path="sales" element={<Sales />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Rutas Perfil Usuario - Profile Layout con Sidebar propio */}
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfileDashboard />} />
        <Route path="events" element={<MyEvents />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="registrations" element={<Registrations />} />
      </Route>

      {/* Rutas Monitor - Dashboard Layout */}
      <Route path="/monitor" element={<DashboardLayout />}>
        <Route index element={<MonitorDashboard />} />
        <Route path="report" element={<SessionReport />} />
        <Route path="profile" element={<MonitorProfile />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
