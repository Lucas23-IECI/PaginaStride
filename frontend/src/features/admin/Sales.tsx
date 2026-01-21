import { useState } from 'react';
import { MOCK_SALES, type Sale } from '@/mocks/admin.mock';

// ============================================
// SALES PAGE - ADMIN
// ============================================

const Sales = () => {
    const [filter, setFilter] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Calculate KPIs
    const totalSales = MOCK_SALES
        .filter(s => s.status === 'completed')
        .reduce((acc, sale) => acc + sale.amount, 0);

    const completedSales = MOCK_SALES.filter(s => s.status === 'completed');
    const averageTicket = completedSales.length > 0
        ? totalSales / completedSales.length
        : 0;

    const pendingSales = MOCK_SALES.filter(s => s.status === 'pending').length;
    const refundedSales = MOCK_SALES.filter(s => s.status === 'refunded').length;

    // Filter sales
    const filteredSales = MOCK_SALES.filter(sale => {
        const matchesFilter = filter === 'all' || sale.status === filter;
        const matchesSearch = sale.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.product.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getStatusBadge = (status: Sale['status']) => {
        const styles = {
            completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            pending: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            refunded: 'bg-red-500/10 text-red-400 border-red-500/20',
            cancelled: 'bg-gray-500/10 text-gray-400 border-gray-500/20'
        };
        const labels = {
            completed: 'Completada',
            pending: 'Pendiente',
            refunded: 'Reembolsada',
            cancelled: 'Cancelada'
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    const getPaymentIcon = (method: Sale['paymentMethod']) => {
        const icons = {
            card: 'credit_card',
            transfer: 'account_balance',
            cash: 'payments'
        };
        return icons[method];
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(price);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CL', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <>
            {/* Header */}
            <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/5 bg-background-dark/50 backdrop-blur-sm sticky top-0 z-10">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Ventas</h2>
                    <p className="text-sm text-gray-400">Gestión de transacciones y pedidos</p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary-light text-black font-semibold px-4 py-2 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-xl">download</span>
                    Exportar
                </button>
            </header>

            <div className="p-6 space-y-6">
                {/* KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Ventas Totales</p>
                                <p className="text-2xl font-bold text-white">{formatPrice(totalSales)}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-emerald-400">trending_up</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Ticket Promedio</p>
                                <p className="text-2xl font-bold text-white">{formatPrice(averageTicket)}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">receipt_long</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Pedidos Pendientes</p>
                                <p className="text-2xl font-bold text-amber-400">{pendingSales}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-amber-400">pending</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark border border-white/5 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Reembolsos</p>
                                <p className="text-2xl font-bold text-red-400">{refundedSales}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-red-400">undo</span>
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
                            placeholder="Buscar por orden, cliente o producto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                        />
                    </div>
                    <div className="flex gap-2">
                        {['all', 'completed', 'pending', 'refunded'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${filter === status
                                        ? 'bg-primary text-black'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {status === 'all' ? 'Todas' :
                                    status === 'completed' ? 'Completadas' :
                                        status === 'pending' ? 'Pendientes' : 'Reembolsos'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sales Table */}
                <div className="bg-card-dark border border-white/5 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Orden</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Cliente</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Producto</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Monto</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Pago</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Estado</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Fecha</th>
                                    <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSales.map((sale) => (
                                    <tr key={sale.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="text-white font-mono text-sm">{sale.orderId}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-white font-medium">{sale.user}</p>
                                                <p className="text-gray-500 text-sm">{sale.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-300">{sale.product}</span>
                                            {sale.quantity > 1 && (
                                                <span className="text-gray-500 ml-1">x{sale.quantity}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-white font-semibold">{formatPrice(sale.amount)}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="material-symbols-outlined text-gray-400" title={sale.paymentMethod}>
                                                {getPaymentIcon(sale.paymentMethod)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {getStatusBadge(sale.status)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-400 text-sm">{formatDate(sale.date)}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                                                <span className="material-symbols-outlined text-gray-400">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredSales.length === 0 && (
                        <div className="text-center py-12">
                            <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">shopping_cart</span>
                            <p className="text-gray-400">No se encontraron ventas</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sales;
