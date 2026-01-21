import { useState } from 'react';
import { MOCK_INVENTORY, type InventoryItem } from '@/mocks/admin.mock';

// ============================================
// INVENTORY PAGE - ADMIN
// ============================================

const Inventory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');

    // Get unique categories
    const categories = ['all', ...new Set(MOCK_INVENTORY.map(item => item.category))];

    // Filter inventory
    const filteredInventory = MOCK_INVENTORY.filter(item => {
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.sku.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Calculate stats
    const totalProducts = MOCK_INVENTORY.length;
    const lowStockCount = MOCK_INVENTORY.filter(item => item.stock < item.minStock && item.stock > 0).length;
    const outOfStockCount = MOCK_INVENTORY.filter(item => item.stock === 0).length;
    const totalValue = MOCK_INVENTORY.reduce((acc, item) => acc + (item.price * item.stock), 0);

    const getStockStatus = (item: InventoryItem) => {
        if (item.stock === 0) {
            return { label: 'Sin stock', class: 'bg-red-500/10 text-red-400 border-red-500/20' };
        }
        if (item.stock < item.minStock) {
            return { label: 'Stock bajo', class: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
        }
        return { label: 'OK', class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <>
            {/* Header */}
            <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/5 bg-background-dark/50 backdrop-blur-sm sticky top-0 z-10">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Inventario</h2>
                    <p className="text-sm text-gray-400">Control de stock y productos</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-4 py-2 rounded-lg transition-colors border border-white/10">
                        <span className="material-symbols-outlined text-xl">download</span>
                        Exportar
                    </button>
                    <button className="flex items-center gap-2 bg-primary hover:bg-primary-light text-black font-semibold px-4 py-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-xl">add</span>
                        Nuevo Producto
                    </button>
                </div>
            </header>

            <div className="p-6 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Total Productos</p>
                                <p className="text-2xl font-bold text-white">{totalProducts}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">inventory_2</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Valor en Stock</p>
                                <p className="text-2xl font-bold text-white">{formatPrice(totalValue)}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-emerald-400">attach_money</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Stock Bajo</p>
                                <p className="text-2xl font-bold text-amber-400">{lowStockCount}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-amber-400">warning</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Sin Stock</p>
                                <p className="text-2xl font-bold text-red-400">{outOfStockCount}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-red-400">error</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder="Buscar por nombre o SKU..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoryFilter(cat)}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${categoryFilter === cat
                                        ? 'bg-primary text-black'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {cat === 'all' ? 'Todos' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="bg-card-dark border border-white/5 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Producto</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">SKU</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Categoría</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Precio</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Stock</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Estado</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Último Restock</th>
                                    <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInventory.map((item) => {
                                    const stockStatus = getStockStatus(item);
                                    const isLowStock = item.stock < item.minStock;

                                    return (
                                        <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-gray-400">
                                                            {item.category === 'Ropa' ? 'checkroom' : 'category'}
                                                        </span>
                                                    </div>
                                                    <span className="text-white font-medium">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-400 font-mono text-sm">{item.sku}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-300">{item.category}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-white">{formatPrice(item.price)}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-bold ${item.stock === 0 ? 'text-red-400' :
                                                            isLowStock ? 'text-amber-400' : 'text-white'
                                                        }`}>
                                                        {item.stock}
                                                    </span>
                                                    <span className="text-gray-500 text-sm">/ {item.minStock} mín</span>
                                                    {isLowStock && item.stock > 0 && (
                                                        <span className="material-symbols-outlined text-amber-400 text-lg" title="Stock bajo">
                                                            warning
                                                        </span>
                                                    )}
                                                    {item.stock === 0 && (
                                                        <span className="material-symbols-outlined text-red-400 text-lg" title="Sin stock">
                                                            error
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${stockStatus.class}`}>
                                                    {stockStatus.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-400 text-sm">{item.lastRestocked}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors" title="Editar">
                                                        <span className="material-symbols-outlined text-gray-400 text-xl">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors" title="Reabastecer">
                                                        <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {filteredInventory.length === 0 && (
                        <div className="text-center py-12">
                            <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">inventory_2</span>
                            <p className="text-gray-400">No se encontraron productos</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Inventory;
