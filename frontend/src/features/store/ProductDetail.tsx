import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '@/mocks/products.mock';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const product = MOCK_PRODUCTS.find(p => p.id === id);

    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Magenta');

    // Si no existe el producto, mostrar mensaje
    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
                <span className="material-symbols-outlined text-6xl text-gray-500 mb-4">inventory_2</span>
                <h1 className="text-2xl font-bold text-white mb-2">Producto no encontrado</h1>
                <p className="text-gray-400 mb-6">El producto que buscas no existe o fue removido.</p>
                <Link to="/store" className="px-6 py-3 bg-primary rounded-full text-white font-bold hover:bg-primary/90 transition-colors">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, 1, selectedSize, selectedColor);
    };

    return (
        <div className="container mx-auto px-4 py-12 lg:py-16 pt-28 relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-chevron opacity-5 -translate-x-20 -translate-y-20 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-chevron opacity-5 translate-x-20 rotate-180 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Gallery */}
                <div className="flex flex-col gap-6">
                    <div className="aspect-[4/5] w-full rounded-[16px] overflow-hidden relative group bg-surface-dark shadow-2xl">
                        <img
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src={product.image}
                        />
                        {product.badge === 'BEST SELLER' && (
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Best Seller
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <button className="aspect-square rounded-[16px] overflow-hidden border-2 border-secondary p-0.5 bg-surface-dark">
                            <img alt="Front view" className="w-full h-full object-cover rounded-[12px]" src={product.image} />
                        </button>
                        <button className="aspect-square rounded-[16px] overflow-hidden border-2 border-transparent hover:border-white/20 bg-surface-dark opacity-70 hover:opacity-100 transition-all">
                            <div className="w-full h-full bg-gradient-to-br from-surface-dark to-black flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-600">checkroom</span>
                            </div>
                        </button>
                        <button className="aspect-square rounded-[16px] overflow-hidden border-2 border-transparent hover:border-white/20 bg-surface-dark opacity-70 hover:opacity-100 transition-all">
                            <div className="w-full h-full bg-gradient-to-br from-surface-dark to-black flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-600">texture</span>
                            </div>
                        </button>
                        <button className="aspect-square rounded-[16px] overflow-hidden border-2 border-transparent hover:border-white/20 bg-surface-dark opacity-70 hover:opacity-100 transition-all">
                            <div className="w-full h-full bg-gradient-to-br from-surface-dark to-black flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-600">accessibility_new</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col h-full justify-center">
                    <nav className="flex mb-4 text-sm text-gray-400 gap-2">
                        <Link className="hover:text-white transition-colors" to="/store">Tienda</Link> /
                        <span className="text-primary capitalize">{product.category}</span>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{product.name}</h1>

                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#FFD700]">${product.price.toLocaleString('es-CL')}</span>
                            <span className="text-sm text-gray-400">IVA incluído</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 bg-surface-dark px-3 py-1 rounded-full">
                            {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                            <span className="text-white text-xs font-semibold ml-1">(4.8)</span>
                        </div>
                    </div>

                    <div className="mb-10">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {product.description || `Diseñada para la tribu. Nuestra ${product.name} combina tecnología de ventilación avanzada con el espíritu urbano de Concepción. Tejido transpirable de secado rápido que te mantiene ligero kilómetro tras kilómetro. Únete al movimiento.`}
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <span className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Color Seleccionado: <span className="text-white">{selectedColor}</span></span>
                            <div className="flex gap-4">
                                {['Magenta', 'Cyan', 'Black'].map(color => (
                                    <label key={color} className="cursor-pointer group relative">
                                        <input
                                            type="radio"
                                            name="color"
                                            className="peer sr-only"
                                            checked={selectedColor === color}
                                            onChange={() => setSelectedColor(color)}
                                        />
                                        <div className={`w-12 h-12 rounded-full border-2 border-transparent peer-checked:border-white peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-background-dark transition-all ${color === 'Magenta' ? 'bg-primary peer-checked:ring-primary' : color === 'Cyan' ? 'bg-secondary peer-checked:ring-secondary' : 'bg-black border-white/20 peer-checked:ring-gray-500'}`}></div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="block text-sm font-bold text-gray-300 uppercase tracking-wider">Talla</span>
                                <button className="flex items-center gap-1 text-sm text-secondary hover:text-white transition-colors group">
                                    <span className="material-symbols-outlined text-lg">straighten</span>
                                    <span className="underline decoration-secondary/30 group-hover:decoration-secondary">Guía de medidas</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-5 gap-3">
                                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                    <label key={size} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            value={size}
                                            className="peer sr-only"
                                            checked={selectedSize === size}
                                            onChange={() => setSelectedSize(size)}
                                        />
                                        <div className="h-12 flex items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:border-white/20 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold transition-all">
                                            {size}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-lg uppercase tracking-wide shadow-[0_10px_40px_-10px_rgba(233,32,99,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(233,32,99,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                            >
                                <span className="material-symbols-outlined">shopping_cart</span>
                                Añadir al Carrito
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">local_shipping</span>
                                Envío Gratis &gt; $50.000
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                Garantía Stride 30 días
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
