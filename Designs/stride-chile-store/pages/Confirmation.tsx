import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Confirmation: React.FC = () => {
  const { clearCart, items } = useCart();
  
  // We should ideally use the items from state before clearing, but for simplicity
  // we will just show what's currently there or use mock data if empty (since context clears on unmount/refresh usually)
  // For this demo, let's pretend we just paid.
  
  // In a real app, you'd pass order details via navigation state or fetch by ID.
  
  useEffect(() => {
     // Optional: Clear cart on mount if successful
     return () => clearCart();
  }, [clearCart]);

  return (
    <div className="flex-grow flex flex-col relative min-h-screen">
        {/* Hero Background & Overlay */}
        <div className="absolute inset-0 z-0 h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark z-10 opacity-90"></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            {/* Background Image */}
            <div 
                className="h-full w-full bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOQsJtQvnEaMh92GEkf8PaI9HxTzXnXveh7Hlr9BiaoGUrVBebYh9pgLJsnFmQcWm5VdqUoDUbnO1N8RfggJ0k25J3ZbFHY2UnzD3AL0L5B4s9Bh3DgCAsn55-Kwouvt37UC3_40grQF1NE-ztN36KonWQmXcNhzXH6AcoKBzzz31n3iU1WcF13306_Zeuv2XhwxChZZo128BEjELbnOBeacZ1Zbdw_93o72VnaqErUxFN5GCgvmpxSyprZxThPM_36SVqyKxzlEtZ")`}}
            />
        </div>

        <div className="relative z-20 container mx-auto px-4 py-12 md:px-6 lg:px-40 flex flex-col items-center">
            {/* Celebration Header */}
            <div className="text-center mb-10 max-w-4xl mx-auto animate-fade-in-up">
                <div className="inline-flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl text-primary animate-bounce">celebration</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4 text-gradient uppercase drop-shadow-lg">
                    ¡BIENVENIDO A LA TRIBU!
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide">
                    Tu pedido <span className="text-white font-bold font-mono">#ST-9843</span> ha sido confirmado
                </p>
            </div>

            {/* Main Card Layout */}
            <div className="w-full max-w-[800px] flex flex-col gap-6">
                
                {/* Order Status Bar */}
                <div className="bg-card-dark/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#283739] shadow-xl">
                    <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">local_shipping</span> Estado del envío
                    </h3>
                    <div className="relative">
                        {/* Progress Line Background */}
                        <div className="absolute top-[26px] left-[15%] right-[15%] h-1 bg-[#283739] rounded-full z-0"></div>
                        {/* Active Progress Line */}
                        <div className="absolute top-[26px] left-[15%] w-[35%] h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full z-0 shadow-[0_0_10px_rgba(19,218,236,0.5)]"></div>
                        
                        <div className="grid grid-cols-3 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="size-14 rounded-full bg-card-dark border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(19,218,236,0.3)]">
                                    <span className="material-symbols-outlined text-primary text-[28px]">inventory_2</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-bold text-sm md:text-base">Procesando</p>
                                    <p className="text-primary text-xs mt-1 font-mono">En curso</p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center gap-3 opacity-60">
                                <div className="size-14 rounded-full bg-card-dark border-2 border-[#3b5254] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gray-400 text-[28px]">local_shipping</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-300 font-medium text-sm md:text-base">En camino</p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center gap-3 opacity-60">
                                <div className="size-14 rounded-full bg-card-dark border-2 border-[#3b5254] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gray-400 text-[28px]">check_circle</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-300 font-medium text-sm md:text-base">Entregado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary Card */}
                <div className="bg-card-dark rounded-3xl overflow-hidden border border-primary/30 shadow-2xl relative group">
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6 border-b border-[#283739] pb-4">
                            <h3 className="text-xl font-bold text-white">Resumen del pedido</h3>
                            <span className="text-primary text-sm font-mono bg-primary/10 px-3 py-1 rounded-full">{items.length > 0 ? items.length : 3} Artículos</span>
                        </div>

                        {/* List Items - Mocking items if cart was cleared */}
                        <div className="flex flex-col gap-4 mb-8">
                           {items.length > 0 ? items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between gap-4 group/item hover:bg-white/5 p-2 rounded-xl transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="h-16 w-16 rounded-xl bg-cover bg-center border border-[#3b5254]" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                        <div className="flex flex-col">
                                            <p className="text-white font-bold text-sm md:text-base">{item.name}</p>
                                            <p className="text-[#9db7b9] text-xs md:text-sm">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-white font-medium">${item.price.toLocaleString('es-CL')}</p>
                                </div>
                           )) : (
                                // Fallback mock items for visual demo if cart empty
                                <>
                                    <div className="flex items-center justify-between gap-4 group/item hover:bg-white/5 p-2 rounded-xl transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 rounded-xl bg-cover bg-center border border-[#3b5254]" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9AFkROC94dLlAGnUtJA_NU8H6VxkWbzmaiNjgmPkSOTDp-gqo_cYF8ve2s5SE7JoPm9QXJaOEShAuGKK8ZNfAtJlmaypybQHjPAh6WkuBT7nqBckfIKCBWmwGA_HF5NrrlkP9pUf5DTecdX37xc2CMtAjEfN_CMt1xz9441-VHHjDkB2qHAirBWi3g-OgGTz4HUJLhM33JcAfl9Pn4leloYIfu6FK9ohanVKdiTVwEKorriltmV41OvhU312c00njn1oNtXNUzoh")` }}></div>
                                            <div className="flex flex-col">
                                                <p className="text-white font-bold text-sm md:text-base">Camiseta Técnica Stride Neon</p>
                                                <p className="text-[#9db7b9] text-xs md:text-sm">Talla M • Neon Green</p>
                                            </div>
                                        </div>
                                        <p className="text-white font-medium">$29.990</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 group/item hover:bg-white/5 p-2 rounded-xl transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 rounded-xl bg-cover bg-center border border-[#3b5254]" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7bDJumkvaLI1pML_vZn4SD0kYTB8F1NIZwhF_Y0N4n-OccvNDpfFUIZeNhbxl7gA0lABNlxS5-QOjeKub2j1P4i5ILUzsXEXoW5oaA8bTvBYNtrI4NSvaySvZTJeoEOujgdqjnr8SbDd4b6EbEfs9iXC8GyYwChB1-FCqQ6SgOoiaBpGdb1wDe3l864xhULt2IdH9rfLBNpvnWnDt1jxxk6bNgZFqgaHU5nw0RbJCp57MCJ3MUqTpGUI--3tT_JsGyhAtXNAz5rOS")` }}></div>
                                            <div className="flex flex-col">
                                                <p className="text-white font-bold text-sm md:text-base">Shorts de Velocidad Pro</p>
                                                <p className="text-[#9db7b9] text-xs md:text-sm">Talla M • Negro</p>
                                            </div>
                                        </div>
                                        <p className="text-white font-medium">$24.990</p>
                                    </div>
                                </>
                           )}
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111718] rounded-2xl p-5 border border-[#283739]">
                            <div className="flex flex-col gap-1">
                                <p className="text-[#9db7b9] text-xs uppercase tracking-wider font-bold mb-1">Dirección de envío</p>
                                <p className="text-white text-sm font-medium">Av. Siempre Viva 123</p>
                                <p className="text-white text-sm font-medium">Depto 402, Concepción</p>
                                <p className="text-white text-sm font-medium">Región del Biobío</p>
                            </div>
                            <div className="flex flex-col gap-1 md:items-end md:text-right">
                                <p className="text-[#9db7b9] text-xs uppercase tracking-wider font-bold mb-1">Fecha Estimada</p>
                                <div className="flex items-center gap-2 md:flex-row-reverse text-primary">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    <p className="text-lg font-bold">Viernes 24 Oct</p>
                                </div>
                                <p className="text-[#9db7b9] text-xs">Envío Express Stride</p>
                            </div>
                        </div>
                    </div>
                    {/* Total Bar */}
                    <div className="bg-[#212c2e] p-6 flex justify-between items-center border-t border-[#283739]">
                        <p className="text-gray-400 font-medium">Total Pagado</p>
                        <p className="text-2xl font-black text-white">$67.970</p>
                    </div>
                </div>

                {/* Actions Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Social Share */}
                    <div className="bg-card-dark rounded-2xl p-6 border border-[#283739] flex flex-col items-center justify-center gap-4 text-center">
                        <p className="text-white font-bold text-lg">Comparte tu kit con la tribu</p>
                        <div className="flex gap-3">
                            <button className="h-12 w-12 rounded-full bg-[#111718] border border-[#283739] hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all hover:scale-110">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                            <button className="h-12 w-12 rounded-full bg-[#111718] border border-[#283739] hover:border-[#25D366] hover:text-[#25D366] text-white flex items-center justify-center transition-all hover:scale-110">
                                <span className="material-symbols-outlined">chat</span>
                            </button>
                        </div>
                    </div>
                    {/* CTA */}
                    <div className="bg-card-dark rounded-2xl p-6 border border-[#283739] flex flex-col items-center justify-center gap-3">
                        <p className="text-[#9db7b9] font-medium text-sm">¿Ya tienes tu equipo? ¡Úsalo!</p>
                        <Link to="/" className="w-full h-12 bg-primary hover:bg-[#0bc1d3] text-background-dark font-display font-bold text-lg rounded-full flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(19,218,236,0.4)] hover:shadow-[0_0_30px_rgba(19,218,236,0.6)]">
                            Ver Próximas Runs
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center gap-6 mt-4 pb-12">
                    <a className="text-[#9db7b9] hover:text-white text-sm" href="#">Ayuda</a>
                    <a className="text-[#9db7b9] hover:text-white text-sm" href="#">Devoluciones</a>
                    <a className="text-[#9db7b9] hover:text-white text-sm" href="#">Términos y condiciones</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Confirmation;
