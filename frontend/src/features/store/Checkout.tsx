import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { items, total } = useCart();
    const navigate = useNavigate();
    const [shippingMethod, setShippingMethod] = useState('standard');
    const shippingCost = shippingMethod === 'standard' ? 3990 : 0;
    const finalTotal = total + shippingCost;

    const handlePayment = () => {
        // Simular procesamiento
        setTimeout(() => {
            navigate('/store/confirmation');
        }, 500);
    };

    // Si el carrito está vacío, redirigir
    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
                <span className="material-symbols-outlined text-6xl text-gray-500 mb-4">shopping_cart</span>
                <h1 className="text-2xl font-bold text-white mb-2">Tu carrito está vacío</h1>
                <p className="text-gray-400 mb-6">Agrega productos antes de continuar con el checkout.</p>
                <button onClick={() => navigate('/store')} className="px-6 py-3 bg-primary rounded-full text-white font-bold hover:bg-primary/90 transition-colors">
                    Ir a la tienda
                </button>
            </div>
        );
    }

    return (
        <main className="flex-1 w-full px-6 lg:px-40 py-8 pt-28 flex justify-center">
            <div className="max-w-[1200px] w-full">
                {/* Page Heading */}
                <div className="mb-10">
                    <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-2">Finalizar Compra</h1>
                    <div className="flex items-center gap-2 text-[#b89da6]">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <p className="text-base font-medium">Checkout seguro SSL encriptado</p>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Left Column: Forms */}
                    <div className="lg:col-span-7 flex flex-col gap-10">

                        {/* 1. Contact Info */}
                        <section className="group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">1</div>
                                <h3 className="text-white text-xl font-bold">Información de Contacto</h3>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Correo Electrónico</label>
                                    <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="ejemplo@correo.com" type="email" />
                                </div>
                                <label className="flex items-center gap-3 px-4 cursor-pointer group/check">
                                    <input className="form-checkbox rounded bg-card-dark border-secondary/20 text-primary focus:ring-offset-0 focus:ring-0 w-5 h-5" type="checkbox" />
                                    <span className="text-sm text-slate-400 group-hover/check:text-slate-300 transition-colors">Quiero recibir noticias y ofertas exclusivas de Stride.</span>
                                </label>
                            </div>
                        </section>

                        {/* 2. Shipping Info */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">2</div>
                                <h3 className="text-white text-xl font-bold">Información de Envío</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Nombre</label>
                                    <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Juan" type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Apellido</label>
                                    <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Pérez" type="text" />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">RUT</label>
                                    <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="12.345.678-9" type="text" />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Dirección</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">home</span>
                                        <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 pl-12 pr-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Av. Providencia 1234, Depto 501" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Región</label>
                                    <select className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer">
                                        <option disabled value="">Selecciona tu región</option>
                                        <option value="RM">Región Metropolitana</option>
                                        <option value="V">Valparaíso</option>
                                        <option value="VIII">Biobío</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Comuna</label>
                                    <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Providencia" type="text" />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-slate-300 text-sm font-medium mb-2 ml-4">Teléfono</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">call</span>
                                        <input className="w-full h-12 rounded-full bg-card-dark border border-secondary/20 text-white placeholder-slate-500 pl-12 pr-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="+56 9 1234 5678" type="tel" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Delivery Method */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">3</div>
                                <h3 className="text-white text-xl font-bold">Método de Entrega</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="relative cursor-pointer group" onClick={() => setShippingMethod('standard')}>
                                    <input className="peer sr-only" name="delivery" type="radio" checked={shippingMethod === 'standard'} readOnly />
                                    <div className="p-5 rounded-2xl bg-card-dark border border-secondary/20 peer-checked:border-primary peer-checked:bg-primary/5 transition-all h-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="material-symbols-outlined text-secondary text-3xl">local_shipping</span>
                                        </div>
                                        <p className="text-white font-bold text-lg">Envío Estándar</p>
                                        <p className="text-slate-400 text-sm mt-1">2-4 días hábiles</p>
                                        <p className="text-primary font-bold mt-2">$3.990</p>
                                    </div>
                                </label>
                                <label className="relative cursor-pointer group" onClick={() => setShippingMethod('pickup')}>
                                    <input className="peer sr-only" name="delivery" type="radio" checked={shippingMethod === 'pickup'} readOnly />
                                    <div className="p-5 rounded-2xl bg-card-dark border border-secondary/20 peer-checked:border-primary peer-checked:bg-primary/5 transition-all h-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="material-symbols-outlined text-secondary text-3xl">storefront</span>
                                        </div>
                                        <p className="text-white font-bold text-lg">Retiro en Tienda</p>
                                        <p className="text-slate-400 text-sm mt-1">Disponible mañana en Concepción</p>
                                        <p className="text-green-400 font-bold mt-2">Gratis</p>
                                    </div>
                                </label>
                            </div>
                        </section>

                        {/* 4. Payment Info */}
                        <section className="pb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">4</div>
                                <h3 className="text-white text-xl font-bold">Información de Pago</h3>
                            </div>
                            <div className="bg-card-dark rounded-2xl border border-secondary/20 p-6">
                                <div className="flex flex-col items-center justify-center text-center gap-4 py-4">
                                    <p className="text-slate-300 text-sm">Serás redirigido a una plataforma segura para completar tu pago.</p>
                                    <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                                        <div className="h-10 px-3 bg-white rounded flex items-center justify-center border border-slate-200">
                                            <span className="text-[#FF421D] font-black italic tracking-tighter text-lg">webpay</span>
                                            <span className="text-[#1A1A1A] font-bold text-xs ml-1 bg-yellow-400 px-1 rounded-sm">PLUS</span>
                                        </div>
                                        <div className="h-10 px-3 bg-white rounded flex items-center justify-center border border-slate-200">
                                            <span className="text-[#E60000] font-bold tracking-tight">Transbank</span>
                                        </div>
                                        <div className="flex gap-2 text-slate-400">
                                            <span className="material-symbols-outlined text-3xl">credit_card</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-white/5 my-2"></div>
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                                        <span className="material-symbols-outlined">verified_user</span>
                                        Todas las transacciones son seguras y encriptadas.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-24 bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl shadow-black/50">
                            <div className="p-6 md:p-8 flex flex-col gap-6">
                                <h3 className="text-white text-xl font-bold border-b border-white/10 pb-4">Resumen de Compra</h3>

                                {/* Items List */}
                                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-center">
                                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shrink-0 border border-white/5 relative overflow-hidden">
                                                <img className="w-full h-full object-cover opacity-80" alt={item.name} src={item.image} />
                                                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">x{item.quantity}</span>
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <h4 className="text-white font-bold text-sm leading-tight">{item.name}</h4>
                                                <p className="text-slate-400 text-xs">{item.subtitle || `Talla: ${item.selectedSize}`}</p>
                                            </div>
                                            <p className="text-white font-medium text-sm">${item.price.toLocaleString('es-CL')}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Discount Code */}
                                <div className="flex gap-2 pt-2">
                                    <input className="flex-1 h-10 rounded-full bg-[#181113] border border-secondary/20 text-sm text-white px-4 focus:outline-none focus:border-secondary" placeholder="Código de descuento" type="text" />
                                    <button className="bg-[#38292e] hover:bg-[#533c44] text-white px-4 rounded-full text-sm font-bold transition-colors">Aplicar</button>
                                </div>

                                {/* Cost Breakdown */}
                                <div className="flex flex-col gap-3 py-4 border-t border-b border-white/10 text-sm">
                                    <div className="flex justify-between text-slate-400">
                                        <span>Subtotal</span>
                                        <span className="text-white">${total.toLocaleString('es-CL')}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span>Envío</span>
                                        <span className="text-white font-medium">{shippingCost === 0 ? 'Gratis' : `$${shippingCost.toLocaleString('es-CL')}`}</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-end">
                                    <span className="text-white text-lg font-bold">Total a pagar</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-slate-400 text-xs mb-1">CLP (Pesos Chilenos)</span>
                                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">${finalTotal.toLocaleString('es-CL')}</span>
                                    </div>
                                </div>

                                {/* Main CTA */}
                                <button
                                    onClick={handlePayment}
                                    className="group relative w-full h-14 rounded-full overflow-hidden mt-2 transition-all duration-300 shadow-[0_0_15px_rgba(233,32,99,0.3)] hover:shadow-[0_0_25px_rgba(233,32,99,0.5)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#e92063] to-secondary transition-transform duration-300 group-hover:scale-105"></div>
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="relative z-10 text-white font-black text-lg tracking-wide flex items-center justify-center gap-2">
                                        PAGAR AHORA
                                        <span className="material-symbols-outlined font-bold">arrow_forward</span>
                                    </span>
                                </button>

                                {/* Trust Elements */}
                                <div className="flex items-center justify-center gap-6 mt-2">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                        <span className="material-symbols-outlined text-base text-secondary">lock</span>
                                        <span>Compra Segura</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                        <span className="material-symbols-outlined text-base text-primary">verified</span>
                                        <span>Garantía Stride</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
