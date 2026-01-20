import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RUN_LEVELS, type RunLevel } from '@/mocks';


const RegistrationForm = () => {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState<RunLevel | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        firstTime: 'no',
        emergencyContact: '',
        acceptTerms: false,
    });

    useEffect(() => {
        const levelId = localStorage.getItem('selectedLevel');
        if (levelId) {
            const level = RUN_LEVELS.find((l) => l.id === levelId);
            if (level) setSelectedLevel(level);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simular registro
        console.log('Inscripción:', { level: selectedLevel, ...formData });
        localStorage.removeItem('selectedLevel');
        navigate('/inscription/success');
    };

    if (!selectedLevel) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark pt-24">
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">error</span>
                    <h1 className="text-2xl font-bold text-white mb-2">No has seleccionado un nivel</h1>
                    <Link to="/inscription/level" className="text-primary hover:underline">Seleccionar nivel</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center py-8 px-4 md:px-0 relative bg-background-dark pt-24">
            <div className="w-full max-w-[640px] flex flex-col gap-6">
                {/* Progress */}
                <div className="flex flex-col gap-3 px-2">
                    <div className="flex justify-between items-center">
                        <p className="text-white text-base font-medium">Paso 2 de 2: Registro</p>
                        <span className="text-sm font-bold text-secondary">80% Completado</span>
                    </div>
                    <div className="rounded-full bg-surface-dark h-2 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-500 bg-secondary w-[80%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm">Casi listo para correr</p>
                </div>

                {/* Level Summary Card */}
                <div className="bg-surface-dark border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl group-hover:opacity-40 transition-all duration-700 bg-secondary/10"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <div
                                className="h-14 w-14 rounded-full bg-cover bg-center shrink-0 border-2 border-secondary"
                                style={{ backgroundImage: `url('${selectedLevel.monitorAvatar}')` }}
                            ></div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                                    Te estás uniendo al grupo <span className="text-secondary">{selectedLevel.title}</span>
                                </h1>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="material-symbols-outlined text-lg text-secondary">directions_run</span>
                                    <p className="text-gray-400 text-sm">Monitor: <span className="text-white font-medium">{selectedLevel.monitor}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Nombre */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-base font-medium ml-2">Nombre Completo</label>
                        <div className="relative">
                            <input
                                className="w-full bg-surface-dark border border-white/10 text-white rounded-full px-6 h-14 pl-12 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-gray-500"
                                placeholder="Ej. María González"
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">person</span>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-base font-medium ml-2">
                            WhatsApp <span className="text-gray-500 text-xs font-normal">(Para el grupo temporal)</span>
                        </label>
                        <div className="relative flex">
                            <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 pr-2 border-r border-white/10 pointer-events-none z-10">
                                <span className="text-gray-400 font-medium">+56</span>
                            </div>
                            <input
                                className="w-full bg-surface-dark border border-white/10 text-white rounded-full px-6 h-14 pl-16 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-gray-500"
                                placeholder="9 1234 5678"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary">chat</span>
                        </div>
                    </div>

                    {/* Primera vez */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-base font-medium ml-2">¿Es tu primera vez con Stride?</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="first_time"
                                    value="yes"
                                    className="peer sr-only"
                                    checked={formData.firstTime === 'yes'}
                                    onChange={() => setFormData({ ...formData, firstTime: 'yes' })}
                                />
                                <div className="h-14 flex items-center justify-center rounded-full border border-white/10 bg-surface-dark text-gray-400 font-medium transition-all hover:bg-white/5 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-secondary peer-checked:font-bold">
                                    Sí, soy nuevo
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="first_time"
                                    value="no"
                                    className="peer sr-only"
                                    checked={formData.firstTime === 'no'}
                                    onChange={() => setFormData({ ...formData, firstTime: 'no' })}
                                />
                                <div className="h-14 flex items-center justify-center rounded-full border border-white/10 bg-surface-dark text-gray-400 font-medium transition-all hover:bg-white/5 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-secondary peer-checked:font-bold">
                                    No, ya he venido
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Contacto de Emergencia */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-base font-medium ml-2">
                            Contacto de Emergencia <span className="text-gray-500 text-xs font-normal">(Opcional)</span>
                        </label>
                        <div className="relative group">
                            <input
                                className="w-full bg-surface-dark border border-white/10 text-white rounded-full px-6 h-14 pl-12 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-gray-500"
                                placeholder="Nombre y Teléfono"
                                type="text"
                                value={formData.emergencyContact}
                                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                            />
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-secondary transition-colors">medical_services</span>
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="mt-2 flex items-start gap-3 ml-2">
                        <div className="relative flex items-center pt-1">
                            <input
                                type="checkbox"
                                id="waiver"
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/10 bg-surface-dark checked:border-secondary checked:bg-secondary transition-all"
                                required
                                checked={formData.acceptTerms}
                                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                            />
                            <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
                        </div>
                        <label htmlFor="waiver" className="text-sm text-gray-400 cursor-pointer select-none leading-tight">
                            Declaro que estoy en condiciones físicas aptas para participar y acepto los{' '}
                            <a href="#" className="text-secondary underline decoration-secondary/30 hover:decoration-secondary underline-offset-2 transition-colors">términos y condiciones</a>{' '}
                            de salud y responsabilidad.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 pb-12">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-full h-14 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(233,30,99,0.5)]"
                        >
                            <span className="relative z-10">Finalizar Inscripción</span>
                            <span className="material-symbols-outlined text-[24px] font-bold relative z-10">arrow_forward</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            No enviaremos spam. Solo información importante del evento.
                        </p>
                    </div>
                </form>

                {/* Back Link */}
                <div className="text-center pb-8">
                    <Link to="/inscription/level" className="text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Cambiar nivel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
