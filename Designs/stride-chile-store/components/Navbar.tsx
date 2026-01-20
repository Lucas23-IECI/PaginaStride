import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { openCart, items } = useCart();
  const location = useLocation();
  
  // Hide navbar on specific pages if needed, but per design it's mostly present
  // The Checkout page has a different header in the design, so we might check route
  const isCheckout = location.pathname === '/checkout';
  const isConfirmation = location.pathname === '/confirmation';

  if (isCheckout) {
      return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/5 bg-[#181113] px-6 lg:px-40 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            <div className="flex items-center gap-4 text-white">
                <div className="size-8 text-primary">
                    <span className="material-symbols-outlined text-4xl text-primary">diamond</span>
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight">Stride Chile</h2>
            </div>
            <Link className="text-slate-400 hover:text-white text-sm font-medium leading-normal flex items-center gap-2 transition-colors" to="/">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Volver a la tienda
            </Link>
        </header>
      );
  }

  if (isConfirmation) {
     return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283739] px-6 py-4 md:px-10 lg:px-40 bg-[#111718]/90 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-3xl text-primary">diamond</span>
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Stride Chile</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/">Tienda</Link>
                    <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Eventos</a>
                    <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Comunidad</a>
                    <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Mi Cuenta</a>
                </div>
                <button 
                    onClick={openCart}
                    className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#283739] hover:bg-[#344648] text-white gap-2 text-sm font-bold min-w-0 px-4 transition-colors"
                >
                    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                </button>
            </div>
            <button className="md:hidden text-white">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
     );
  }

  // Default Navbar
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-script text-4xl text-white hover:text-primary transition-colors">stride</Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Inicio</Link>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Comunidad</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Próximas Runs</a>
          <Link to="/" className="text-sm font-bold text-white border-b-2 border-primary pb-1">Store</Link>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</a>
        </nav>

        <div className="flex items-center gap-6">
           <button className="text-gray-300 hover:text-white transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button onClick={openCart} className="relative group text-gray-300 hover:text-white transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-black ring-2 ring-background-dark">
                {items.length}
              </span>
            )}
          </button>
          <button className="md:hidden text-gray-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
