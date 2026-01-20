import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '@/mocks/products.mock';
import { useCart } from '@/contexts/CartContext';

const Catalog = () => {
    const { addToCart } = useCart();

    // Display only the first 4 products for the grid
    const displayProducts = MOCK_PRODUCTS.slice(0, 4);

    return (
        <div className="relative pt-20">
            {/* Background Patterns */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-40 right-0 w-64 h-64 bg-chevron opacity-5 rotate-180"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-chevron opacity-5"></div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
                <img
                    alt="Community wearing Stride apparel"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4 drop-shadow-xl">
                        Viste la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tribu</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                        Equipamiento oficial diseñado para correr por Concepción. Únete al movimiento.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="relative z-10 px-6 -mt-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-3 overflow-x-auto scrollbar-hide py-2">
                        <button className="px-6 py-3 rounded-full bg-white text-background-dark font-bold shadow-lg hover:scale-105 transition-transform text-sm">Todos</button>
                        <button className="px-6 py-3 rounded-full bg-surface-dark border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all text-sm whitespace-nowrap">Camisetas</button>
                        <button className="px-6 py-3 rounded-full bg-surface-dark border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all text-sm whitespace-nowrap">Accesorios</button>
                        <button className="px-6 py-3 rounded-full bg-surface-dark border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all text-sm whitespace-nowrap">Colecciones Especiales</button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="relative z-10 px-6 pb-24 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                        Novedades
                    </h2>
                    <div className="flex gap-1 text-gray-500 text-xs tracking-widest uppercase">
                        <span>&gt;&gt;&gt;</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product) => (
                        <div key={product.id} className="group bg-card-dark rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-white/5 flex flex-col">
                            <Link to={`/store/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-800">
                                <img
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                                    src={product.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-90"></div>
                                {product.badge && (
                                    <div className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${product.badge === 'NEW' ? 'bg-primary' : 'bg-secondary text-black'}`}>
                                        {product.badge}
                                    </div>
                                )}
                            </Link>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="mb-auto">
                                    <Link to={`/store/product/${product.id}`}>
                                        <h3 className="text-lg font-bold mb-1 hover:text-primary transition-colors">{product.name}</h3>
                                    </Link>
                                    <p className="text-sm text-gray-400 mb-2">{product.subtitle}</p>
                                </div>
                                <div className="flex items-end justify-between mt-4">
                                    <span className="text-xl font-bold text-[#FFD700]">${product.price.toLocaleString('es-CL')}</span>
                                </div>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full mt-4 py-3 bg-surface-dark hover:bg-white hover:text-black text-white text-xs uppercase tracking-wide font-bold rounded-full transition-colors flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white"
                                >
                                    <span>Añadir al carrito</span>
                                    <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promo Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-white/5">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
                        <img alt="Background pattern" className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OkwXfgaBTWJtfaGJlO_baG3ed7Uu91UMuV6hnPd10ni7QPTeOwE3ASScM4f05Aa283DcBAJnfky8r7nXDmNccOzUC8iF9VnSYjf9xmgwRJ_1vf4vwAqjFolmA137Hl5ZjoLGsg-J8IVQm9rSnVFXS1h_lw4beR2YYDNM0DwTYU_2jn7NIJXXFmU-PN-QacztH1-SPMOQGVuJgrqnok39xKrPONuKjKg8sYl4DoQ5prcr5-4L9qSO9YfwDGsh4V6acoNlPSbRDJy6" />
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary blur-[100px] opacity-20"></div>
                        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary blur-[100px] opacity-20"></div>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                                Compra tu kit para el <br />
                                <span className="text-gradient">próximo Social Run</span>
                            </h2>
                            <p className="text-gray-300 max-w-md text-lg">
                                Prepárate con lo mejor para disfrutar cada kilómetro junto a la comunidad.
                            </p>
                        </div>
                        <button className="shrink-0 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center gap-2">
                            Ver Colección Social
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Catalog;
