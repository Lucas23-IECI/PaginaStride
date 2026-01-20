import React, { useState } from 'react';
import { RunLevel } from '../types';

interface RegistrationProps {
  selectedLevel: RunLevel | null;
  onComplete: () => void;
  onBack: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ selectedLevel, onComplete, onBack }) => {
  // Toggle for demo purposes to show both states requested in prompt
  const [isNewUser, setIsNewUser] = useState(true);

  if (!selectedLevel) return null;

  return (
    <div className="flex-1 flex justify-center py-8 px-4 md:px-0 relative">
      <div className="w-full max-w-[640px] flex flex-col gap-6">
        
        {/* Toggle for Demo */}
        <div className="absolute top-4 right-4 md:right-10 opacity-30 hover:opacity-100 transition-opacity">
            <button onClick={() => setIsNewUser(!isNewUser)} className="text-xs text-white border border-white/20 px-2 py-1 rounded">
                Toggle View: {isNewUser ? 'Guest' : 'Logged In'}
            </button>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-3 px-2">
          <div className="flex justify-between items-center">
            <p className="text-white text-base font-medium">Paso 2 de 2: {isNewUser ? 'Registro' : 'Confirmación'}</p>
            <span className={`text-sm font-bold ${isNewUser ? 'text-secondary' : 'text-primary'}`}>{isNewUser ? '80%' : '90%'} Completado</span>
          </div>
          <div className="rounded-full bg-surface-dark h-2 overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${isNewUser ? 'bg-secondary w-[80%]' : 'bg-gradient-to-r from-primary to-secondary w-[90%]'}`}></div>
          </div>
          <p className="text-text-secondary text-sm">Casi listo para correr</p>
        </div>

        {/* Level Summary Card */}
        <div className="bg-surface-dark border border-[#404040] rounded-3xl p-6 relative overflow-hidden group">
          <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl group-hover:opacity-40 transition-all duration-700 ${isNewUser ? 'bg-secondary/10' : 'bg-gradient-to-br from-primary/20 to-secondary/20'}`}></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className={`h-14 w-14 rounded-full bg-cover bg-center shrink-0 border-2 ${isNewUser ? 'border-secondary' : 'border-primary'}`} style={{ backgroundImage: `url('${selectedLevel.monitorAvatar}')` }}></div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  Te estás uniendo al grupo <span className={isNewUser ? 'text-secondary' : 'text-primary'}>{selectedLevel.title}</span>
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`material-symbols-outlined text-lg ${isNewUser ? 'text-secondary' : 'text-text-secondary'}`}>directions_run</span>
                  <p className="text-text-secondary text-sm">Monitor: <span className="text-white font-medium">{selectedLevel.monitor}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onComplete(); }}>
          
          {isNewUser ? (
             /* NEW USER FORM */
            <>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium ml-2">Nombre Completo</label>
                <div className="relative">
                  <input className="w-full bg-surface-dark border border-[#404040] text-white rounded-full px-6 h-14 pl-12 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-text-secondary/50" placeholder="Ej. María González" type="text" required />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">person</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium ml-2">WhatsApp <span className="text-text-secondary text-xs font-normal">(Para el grupo temporal)</span></label>
                <div className="relative flex">
                  <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 pr-2 border-r border-[#404040] pointer-events-none z-10">
                    <span className="text-text-secondary font-medium">+56</span>
                  </div>
                  <input className="w-full bg-surface-dark border border-[#404040] text-white rounded-full px-6 h-14 pl-16 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-text-secondary/50" placeholder="9 1234 5678" type="tel" required />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary">chat</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium ml-2">¿Es tu primera vez con Stride?</label>
                <div className="grid grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                        <input type="radio" name="first_time" value="yes" className="peer sr-only" />
                        <div className="h-14 flex items-center justify-center rounded-full border border-[#404040] bg-surface-dark text-text-secondary font-medium transition-all hover:bg-surface-dark/80 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-secondary peer-checked:font-bold">Sí, soy nuevo</div>
                    </label>
                    <label className="cursor-pointer">
                        <input type="radio" name="first_time" value="no" className="peer sr-only" defaultChecked />
                        <div className="h-14 flex items-center justify-center rounded-full border border-[#404040] bg-surface-dark text-text-secondary font-medium transition-all hover:bg-surface-dark/80 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-secondary peer-checked:font-bold">No, ya he venido</div>
                    </label>
                </div>
              </div>
            </>
          ) : (
            /* LOGGED USER CONFIRMATION */
            <>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end ml-2">
                        <label className="text-white text-base font-medium">Confirmar datos</label>
                    </div>
                    <div className="bg-surface-dark border border-[#404040] rounded-3xl p-5 flex items-center gap-4 relative overflow-hidden">
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#000]/20 to-transparent pointer-events-none"></div>
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg shadow-primary/20">MG</div>
                        <div className="flex flex-col z-10">
                            <p className="text-white font-bold text-lg leading-tight">María González</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="material-symbols-outlined text-secondary text-[16px]">chat</span>
                                <p className="text-text-secondary text-sm">+56 9 1234 5678</p>
                            </div>
                        </div>
                        <div className="ml-auto z-10">
                            <div className="bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                                <p className="text-secondary text-xs font-bold uppercase tracking-wider">Verificado</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-text-secondary ml-2 mt-1">Usaremos estos datos para agregarte al grupo temporal de WhatsApp.</p>
                </div>
            </>
          )}

          {/* Shared Emergency Contact */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-medium ml-2">Contacto de Emergencia <span className="text-text-secondary text-xs font-normal">(Opcional)</span></label>
            <div className="relative group">
              <input className="w-full bg-surface-dark border border-[#404040] text-white rounded-full px-6 h-14 pl-12 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-text-secondary/50 group-hover:border-[#404040]/80" placeholder="Nombre y Teléfono" type="text" />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-secondary transition-colors">medical_services</span>
            </div>
          </div>

          <div className="mt-2 flex items-start gap-3 ml-2">
            <div className="relative flex items-center pt-1">
              <input type="checkbox" id="waiver" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-[#404040] bg-surface-dark checked:border-secondary checked:bg-secondary transition-all" required />
              <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
            </div>
            <label htmlFor="waiver" className="text-sm text-text-secondary cursor-pointer select-none leading-tight">
                Declaro que estoy en condiciones físicas aptas para participar y acepto los <a href="#" className="text-secondary underline decoration-secondary/30 hover:decoration-secondary underline-offset-2 transition-colors">términos y condiciones</a> de salud y responsabilidad.
            </label>
          </div>

          <div className="pt-4 pb-12">
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-full h-14 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(233,30,99,0.5)]">
              <span className="relative z-10">Finalizar Inscripción</span>
              <span className="material-symbols-outlined text-[24px] font-bold relative z-10">arrow_forward</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
            </button>
            <p className="text-center text-xs text-text-secondary mt-4">
                {isNewUser ? 'No enviaremos spam. Solo información importante del evento.' : 'Confirmación inmediata a tu correo y WhatsApp.'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};