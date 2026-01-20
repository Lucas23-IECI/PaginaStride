import React from 'react';

const Inventory: React.FC = () => {
  return (
    <>
      <header className="w-full border-b border-border-dark bg-background-dark/50 backdrop-blur-md z-10 sticky top-0">
        <div className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold leading-tight tracking-tight text-white">GESTIÓN DE INVENTARIO</h2>
            <p className="text-text-muted text-sm mt-1">Administra el stock de mercancía global</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Añadir Producto</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-dark border border-border-dark p-5 rounded-xl flex items-start justify-between">
                 <div>
                    <p className="text-text-muted text-sm font-medium mb-1">Total Productos</p>
                    <h3 className="text-3xl font-bold text-white">142</h3>
                 </div>
                 <div className="bg-primary/10 p-3 rounded-lg text-primary"><span className="material-symbols-outlined">inventory</span></div>
              </div>
           </div>

           <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-sm">
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-black/20 border-b border-border-dark text-xs uppercase tracking-wider text-text-muted font-semibold">
                     <th className="px-6 py-4">Producto</th>
                     <th className="px-6 py-4">Categoría</th>
                     <th className="px-6 py-4">Stock</th>
                     <th className="px-6 py-4 text-right">Acciones</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border-dark">
                   <tr className="hover:bg-white/[0.02] transition-colors group">
                     <td className="px-6 py-4">
                       <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-lg bg-center bg-cover border border-border-dark" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbivFKEaS9NZ4nUgJV4YvMfwrWzdJ7EuIXeRnu2goKmHqETFiSRdbRmRnE4QEEQHe80oQjz2x8NXKxEW_88LkCDDuHvDrU4Si7WBCDHcqkP7Wl_WI2Kz463g0I0B-6kfixp80p5VS7NY1RCr2reEn0rv0Y4djSK2J-ACtmgvYpxC8Hzv6Dk561RdMQqOHEv2GLemRps4uc4khGJmOlcUTipnBcitpg0WfGPP-qX7rNLpOjocq9P_cQZ8U74grLZf0GMkxXHDlfot2y')" }}></div>
                         <div>
                           <p className="font-bold text-white text-sm">Stride Classic Tee</p>
                           <p className="text-xs text-text-muted">SKU: ST-001</p>
                         </div>
                       </div>
                     </td>
                     <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">Poleras</span></td>
                     <td className="px-6 py-4"><span className="text-white">124</span></td>
                     <td className="px-6 py-4 text-right">
                       <button className="text-text-muted hover:text-white"><span className="material-symbols-outlined">edit</span></button>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;