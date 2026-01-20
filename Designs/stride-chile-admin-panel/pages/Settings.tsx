import React from 'react';

const Settings: React.FC = () => {
  return (
    <>
      <header className="flex flex-col gap-4 px-8 py-6 shrink-0 border-b border-border-dark bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-3xl font-extrabold tracking-tight">Configuración General</h2>
            <p className="text-text-muted text-sm">Administra la identidad de marca, integraciones y seguridad de la plataforma.</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8 pb-20">
          <section className="bg-surface-dark rounded-2xl border border-border-dark overflow-hidden">
            <div className="p-6 border-b border-border-dark flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Identidad de Marca</h3>
                <p className="text-text-muted text-xs">Logotipos, colores y tipografía del sitio público.</p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Logo Principal</label>
                  <div className="flex items-center gap-4">
                     <div className="h-20 w-20 bg-white/5 rounded-xl border border-dashed border-text-muted/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-text-muted">image</span>
                     </div>
                     <button className="px-4 py-2 bg-surface-card hover:bg-border-dark text-white text-xs font-bold rounded-lg border border-border-dark transition-colors">Subir imagen</button>
                  </div>
               </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Settings;