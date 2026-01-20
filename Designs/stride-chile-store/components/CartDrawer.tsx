import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { isOpen, closeCart, items, total, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#1a1a1a]/95 backdrop-blur-xl border-l border-white/5 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
        
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white">shopping_bag</span>
            <h2 className="text-white text-xl font-bold tracking-tight">Tu Carrito <span className="text-primary ml-1 text-lg font-bold">({items.length})</span></h2>
          </div>
          <button 
            onClick={closeCart}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#38292e] hover:bg-primary/20 text-white transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-[20px]">close</span>
          </button>
        </header>

        {/* Scrollable Item List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <span className="material-symbols-outlined text-6xl mb-4 opacity-50">remove_shopping_cart</span>
                  <p>Tu carrito está vacío</p>
              </div>
          ) : (
            items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                <div className="shrink-0">
                    <div 
                        className="w-24 h-24 bg-center bg-cover rounded-xl border border-white/5 shadow-inner" 
                        style={{ backgroundImage: `url("${item.image}")` }}
                    />
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-2">
                    <div>
                        <p className="text-white text-base font-semibold leading-snug">{item.name}</p>
                        <p className="text-[#b89da6] text-xs font-normal mt-1">{item.subtitle || `${item.selectedSize ? `Talla: ${item.selectedSize} |` : ''} Color: ${item.selectedColor || 'N/A'}`}</p>
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#b89da6] hover:text-primary transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-[#2A2A2A] border border-white/5 rounded-full h-8 px-1">
                        <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-full flex items-center justify-center text-white hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[16px]">remove</span>
                        </button>
                        <span className="text-white text-sm font-medium w-6 text-center tabular-nums">{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-full flex items-center justify-center text-white hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[16px]">add</span>
                        </button>
                    </div>
                    <p className="text-[#FFD700] text-base font-bold tracking-wide">${item.price.toLocaleString('es-CL')}</p>
                    </div>
                </div>
                </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
            <div className="shrink-0 bg-[#211116] p-6 border-t border-white/5">
            <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                <p className="text-[#b89da6] text-sm">Subtotal</p>
                <p className="text-white text-base font-medium">${total.toLocaleString('es-CL')}</p>
                </div>
                <div className="flex justify-between items-center">
                <p className="text-[#b89da6] text-sm">Envío</p>
                <p className="text-white text-sm italic opacity-80">Calculado en el siguiente paso</p>
                </div>
            </div>
            
            <button 
                onClick={handleCheckout}
                className="relative w-full overflow-hidden rounded-full h-14 bg-gradient-to-r from-[#e92063] to-[#ff5c8d] shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center gap-2 text-white text-base font-bold tracking-wide uppercase">
                    Finalizar Compra
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </span>
            </button>
            
            <div className="flex items-center justify-center gap-1.5 mt-4 group cursor-default">
                <p className="text-[#b89da6] text-xs font-medium">¡Estás a un paso de vestir como la tribu!</p>
                <span className="material-symbols-outlined text-cyan-400 text-[16px] animate-pulse">chevron_right</span>
            </div>
            </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
