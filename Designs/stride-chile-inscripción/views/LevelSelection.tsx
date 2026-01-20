import React from 'react';
import { RunLevel } from '../types';

interface LevelSelectionProps {
  onSelectLevel: (level: RunLevel) => void;
}

const LEVELS: RunLevel[] = [
  {
    id: 'fun',
    title: 'Trote Social',
    monitor: 'Camilo',
    monitorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpD0x7K4GrpHsmOJL4exI2F6ufH7_GkruvjqZpRKSfLbSHNPFyAl7PFOKgfIb4LcQqhPR9ImYOLX8OS8CCxFnt_1uDQTvoXpDG9r16fE37wN8Mc2vkb4p0hyyJIT5PKO8HPhs0e2ftwewwCBAM4RsDwVXT2twxy-d2F_72r08pcmv9G9gxtB_2x1xirTBGcYSpb60Wuiqm54ylzpZDII52O-GPzFBjI7n3H5eEQS1eriIDVZx-RyBR55KyUcPo7zH0P5VRlecaBpoj',
    description: 'Ideal para principiantes. Ritmo conversacional y buena onda. Foco en disfrutar el recorrido y conocer gente nueva. Nadie se queda atrás.',
    pace: 'Ritmo libre / Conversacional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjTYyjPlg5DRQRofPD14b2-TrFsyhluDU9rLkSaR1n6u6NZEZjKrF4dzriBUe0DlZvJCfihu2l-v8YEwXhW_NMV-dngrZLgqmxkyoWdpyWNKZ9xYQPrYGhMlGcXt3X5H70r9Vss0e-Q2JVzsh0x3oFalkfoWVqujoBP82urVac74BOG49JXN5kH4oUTqOWxdAFKnkdXW2g8MHuKHRu3Xxo4hetN26LjzbTJMb9GCpR8wRx1R8breIdzwmwn8vjXdtY3-dt2uqLxmIj',
    tag: 'FUN RUN',
    tagColor: 'primary',
    type: 'fun'
  },
  {
    id: 'training',
    title: 'Intermedio 5:30',
    monitor: 'Daniela',
    monitorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATqeHx9LjJuMxhj76n789NjdcRacirPj_4L6Ucvn5SAhi2bcXZiQg-0KA8TLput0-ue4HDZz9ib9iS6cTEBYdmdWtM6x0QJ5MkPUibxjyU5zwidZmvsPEA53Q1RWQ_tnscNG9tuNdtPuuc4L2DKQDSU81e9UhlA9hjzrc0X0gCOQBzrKq_0kQLTphQwB9-zqnxJd93_roJffJzOQTVBEgKta78C55_nK5tpommpaRC_FuYNy9PixQqABd0b_AMVYR1qoqyQd0-9Hul',
    description: 'Ritmo controlado 5:30 - 6:00 min/km. Enfoque en resistencia aeróbica y mantener el paso constante durante todo el trayecto.',
    pace: '5:30 - 6:00 min/km',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5PHSG7PnAICYms5jobUES0LqHW5uPzB766eeDl4e61pG3DELuSmMdPZ49fHvgTJjFkw1lvEiP8goHu5zoTtxXH2ePBN0wYf9A4eiwSTGMIja7vIhGlEtgphAZ2CAihBi_GA2ttjGkCWHr5snWK0VBmvfL3OmBMdFx8pzJwCLYlGMWdIQ2MLwz1AlhacEWVXW0ate9GVHF2FmqebrvF7Bva8cry0VTxS_otxByWhQbDVEWtxMKDYlYgGI5GoPzsmhjmrKDKM0xolhw',
    tag: '10K TRAINING',
    tagColor: 'secondary',
    type: 'training'
  },
  {
    id: 'performance',
    title: 'Avanzado Sub 5',
    monitor: 'Felipe',
    monitorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfxFfYLlK-fopIrSmKeAniveAJRhz5xyBx025LFpKAp-9XPbmMEIDG9Lt_wnvewTpBLC5j1KF4Jqk8jC-s0SslepEEbulrGYYX2Bmf0vvffpw9c11k9ZZsxqgvZeMFWBCHPHd8QN9JcJuz9BhnyNTLS_XCJ2aa-Epf3YtIJr9yX37EFEwvy1xLVXAYcefOk2RCMSnmstYqjBRySTuf20d_W2g-Uu9exBJLM8m81d1osI3s605nIkvwxX_WROc2AMhzbI9GlcxxlR1t',
    description: 'Alto rendimiento. Ritmo bajo 5:00 min/km. Solo expertos o corredores buscando romper sus marcas personales.',
    pace: '< 5:00 min/km',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuUlalWYn5FFEiP7w36uS8iODLbO1DuhsCNMqaApPcwDvwJy2ivQZStkdF6I0EIHWJ3ZGnyoj44P2RtFCYlUiVMqkmERiwZjmCVWTwJdT1_uHaeixadPdfnpcY098wyV3M1fPZFWp2iDdVUlC-K_07cbG_9XMvfnKs1rNp93IIP_raOQ_3dteKXsisaJg4KD6bF0xs0EU64sa8D7PrtWd7XuOYTN0OFIBTP3MkalbW4dAV4R4w1bwOuUdK8L6K2iB0qUXU4JpYD3d-',
    tag: 'PERFORMANCE',
    tagColor: 'primary',
    type: 'performance'
  }
];

export const LevelSelection: React.FC<LevelSelectionProps> = ({ onSelectLevel }) => {
  return (
    <div className="relative min-h-full flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 opacity-15" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATJR8hyEBsyZgJQ0c_iI8VIUEmz4jckxvrMpN-SBb5_rTTFnRfSVtYNFddniWyV6DTLAbSa_Sb-w3zl71on3WfgXAzodb1fQuCAqwVkNvykfMpQQI1jjHHu6BXq4V4lOrf1lzbzrgytKdPG32WuAW9S9PQZ2uKDl-kqmNoXwcoWyRX3THxT7J3bsNe3om-bHp5rTNDHPcyQ89hzD-6mgaoNuf8VeRwo0ag9uU_Cz8F-yWlu_icXY18Bzw_1onZdaRcx5JFPM3Tqgqg')", maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }}></div>

      <div className="px-6 md:px-10 lg:px-40 flex flex-1 justify-center py-10 z-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          
          <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Elige tu ritmo</h1>
            <p className="text-text-secondary text-lg font-normal leading-normal max-w-2xl">
              Selecciona el grupo que mejor se adapte a tu entrenamiento de hoy. No te preocupes, ¡siempre hay alguien para apoyarte!
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">directions_run</span>
                <p className="text-white text-base font-bold leading-normal">Paso 1: Selección de Nivel</p>
              </div>
              <div className="flex gap-4 text-sm text-text-secondary/60">
                <span className="hidden md:inline">Paso 2: Datos Personales</span>
                <span className="hidden md:inline">Paso 3: Confirmación</span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary rounded-full shadow-[0_0_10px_#E91E63]" style={{ width: '33%' }}></div>
              <div className="absolute top-0 left-1/3 w-0.5 h-full bg-background-dark/50"></div>
              <div className="absolute top-0 left-2/3 w-0.5 h-full bg-background-dark/50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {LEVELS.map((level) => (
              <div key={level.id} className="group relative flex flex-col bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_30px_rgba(233,30,99,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${level.image}')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
                  <div className={`absolute top-4 right-4 ${level.tagColor === 'secondary' ? 'bg-secondary/90' : 'bg-primary/90'} text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
                    {level.tag}
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6 pt-0 relative">
                  <div className="flex justify-between items-end -mt-8 mb-4">
                    <div className="size-16 rounded-full border-4 border-surface-dark bg-cover bg-center" style={{ backgroundImage: `url('${level.monitorAvatar}')` }}></div>
                    <div className={`flex gap-2 ${level.tagColor === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                      <span className="material-symbols-outlined" title="Info">{level.type === 'fun' ? 'chat' : level.type === 'training' ? 'fitness_center' : 'bolt'}</span>
                      <span className="material-symbols-outlined" title="Pace">{level.type === 'fun' ? 'sentiment_satisfied' : level.type === 'training' ? 'timer' : 'timer_off'}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{level.title}</h3>
                  <p className={`text-sm font-medium ${level.tagColor === 'secondary' ? 'text-secondary' : 'text-primary'} mb-4`}>Monitor: {level.monitor}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{level.description}</p>
                  <div className="flex items-center gap-3 text-xs text-text-secondary mb-6 bg-white/5 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-lg">speed</span>
                    <span>{level.pace}</span>
                  </div>
                  <button 
                    onClick={() => onSelectLevel(level)}
                    className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
                  >
                    <span>Seleccionar</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};