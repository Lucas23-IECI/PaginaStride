import React from 'react';

export const Achievements: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto h-full bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex flex-col lg:flex-row gap-8 justify-between items-end">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                Temporada 2023
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider">
                Rango Top 15%
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter mb-1">
              Mis Logros
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Bienvenido de vuelta, Campeón.
            </p>
          </div>
          <div className="w-full lg:w-[480px] bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Nivel Actual
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary fill-1">
                    military_tech
                  </span>
                  Nivel 5: Runner Social
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  450 <span className="text-gray-500">/ 800 XP</span>
                </p>
                <p className="text-xs text-secondary mt-1">
                  Próx: Capitán de Ruta
                </p>
              </div>
            </div>
            <div className="relative h-3 w-full bg-gray-100 dark:bg-black rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                style={{ width: "56%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">info</span>
              Sigue corriendo para subir de nivel y desbloquear beneficios.
            </p>
          </div>
        </header>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                workspace_premium
              </span>
              Últimas Medallas Ganadas
            </h3>
            <a
              className="text-sm font-medium text-primary hover:text-white transition-colors"
              href="#"
            >
              Ver historial completo
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="gradient-border p-[1px] group hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-surface-dark rounded-2xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
                <div className="w-24 h-24 mb-4 relative z-10 transition-transform group-hover:scale-110 duration-300">
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
                  >
                    <span className="material-symbols-outlined text-4xl text-white">
                      flag
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Finisher 21K
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Completado el 12 Oct
                </p>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  +500 XP
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300 group">
              <div className="w-24 h-24 mb-4 relative z-10 transition-transform group-hover:scale-110 duration-300">
                <div
                  className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30"
                >
                  <span className="material-symbols-outlined text-4xl text-white">
                    local_fire_department
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Racha de 3 Semanas
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                Mantenida por 21 días
              </p>
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold">
                +150 XP
              </span>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300 group">
              <div className="w-24 h-24 mb-4 relative z-10 transition-transform group-hover:scale-110 duration-300">
                <div
                  className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30"
                >
                  <span className="material-symbols-outlined text-4xl text-white">
                    wb_twilight
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Madrugador
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                5 carreras AM seguidas
              </p>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                +200 XP
              </span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          <section>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
              <span className="material-symbols-outlined text-secondary">
                straighten
              </span>
              Hitos de Kilómetros
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Club 10K
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Alcanza 10km acumulados
                  </p>
                </div>
                <span className="text-xs font-bold text-secondary">
                  OBTENIDO
                </span>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Club 50K
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Alcanza 50km acumulados
                  </p>
                </div>
                <span className="text-xs font-bold text-secondary">
                  OBTENIDO
                </span>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 dark:bg-black/40 p-4 rounded-xl border border-transparent opacity-75 group relative">
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-600 dark:text-gray-400">
                    Club 100K
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Alcanza 100km acumulados
                  </p>
                </div>
                <div className="invisible group-hover:visible absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  Faltan 12km
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
              <span className="material-symbols-outlined text-primary">
                groups
              </span>
              Comunidad &amp; Impacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border-l-4 border-primary shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Social Girl Star
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Asististe a 5 eventos sociales
                  </p>
                </div>
                <span className="text-xs font-bold text-primary">OBTENIDO</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 dark:bg-black/40 p-4 rounded-xl border border-transparent opacity-75 group relative">
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-600 dark:text-gray-400">
                    Corredor Benéfico
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Participa en evento 'Benefit'
                  </p>
                </div>
                <div className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10 shadow-lg">
                  Inscríbete en la próxima 'Benefit Run'
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 dark:bg-black/40 p-4 rounded-xl border border-transparent opacity-75 group relative">
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-600 dark:text-gray-400">
                    Corredor de Lluvia
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Corre bajo la lluvia
                  </p>
                </div>
                <div className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10 shadow-lg">
                  Corre 3 veces con clima lluvioso
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
