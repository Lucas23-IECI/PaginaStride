import { Link, useNavigate } from 'react-router-dom';
import { RUN_LEVELS } from '@/mocks';


const LevelSelection = () => {
    const navigate = useNavigate();

    const handleSelectLevel = (levelId: string) => {
        localStorage.setItem('selectedLevel', levelId);
        navigate('/inscription/form');
    };

    return (
        <div className="relative min-h-screen flex flex-col bg-background-dark pt-24">
            {/* Background Decor */}
            <div
                className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 opacity-15 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATJR8hyEBsyZgJQ0c_iI8VIUEmz4jckxvrMpN-SBb5_rTTFnRfSVtYNFddniWyV6DTLAbSa_Sb-w3zl71on3WfgXAzodb1fQuCAqwVkNvykfMpQQI1jjHHu6BXq4V4lOrf1lzbzrgytKdPG32WuAW9S9PQZ2uKDl-kqmNoXwcoWyRX3THxT7J3bsNe3om-bHp5rTNDHPcyQ89hzD-6mgaoNuf8VeRwo0ag9uU_Cz8F-yWlu_icXY18Bzw_1onZdaRcx5JFPM3Tqgqg')",
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                }}
            ></div>

            <div className="px-6 md:px-10 lg:px-40 flex flex-1 justify-center py-10 z-10">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Elige tu ritmo</h1>
                        <p className="text-gray-400 text-lg font-normal leading-normal max-w-2xl">
                            Selecciona el grupo que mejor se adapte a tu entrenamiento de hoy. No te preocupes, ¡siempre hay alguien para apoyarte!
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex flex-col gap-4 mb-12">
                        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">directions_run</span>
                                <p className="text-white text-base font-bold leading-normal">Paso 1: Selección de Nivel</p>
                            </div>
                            <div className="flex gap-4 text-sm text-gray-500">
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

                    {/* Level Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                        {RUN_LEVELS.map((level) => (
                            <div
                                key={level.id}
                                className="group relative flex flex-col bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_30px_rgba(233,30,99,0.15)] transition-all duration-300 transform hover:-translate-y-1"
                            >
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
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{level.description}</p>
                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-6 bg-white/5 p-3 rounded-lg">
                                        <span className="material-symbols-outlined text-lg">speed</span>
                                        <span>{level.pace}</span>
                                    </div>
                                    <button
                                        onClick={() => handleSelectLevel(level.id)}
                                        className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
                                    >
                                        <span>Seleccionar</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Back Link */}
                    <div className="mt-12 text-center">
                        <Link to="/experiences" className="text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2">
                            <span className="material-symbols-outlined">arrow_back</span>
                            Volver a experiencias
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelSelection;
