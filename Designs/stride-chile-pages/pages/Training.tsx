import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Training: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden">
      <div className="relative flex flex-col w-full min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#38292e] bg-[#181113]/90 backdrop-blur-md px-4 sm:px-10 py-3">
          <Link to="/" className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Stride Chile</h2>
          </Link>
          <div className="hidden lg:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Inicio</Link>
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/viajes">Viajes</Link>
              <Link className="text-primary text-sm font-bold leading-normal transition-colors" to="/entrenamiento">Entrenamiento</Link>
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/aliados">Comunidad</Link>
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/contacto">Contacto</Link>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_0_15px_rgba(233,32,99,0.5)]">
              <span className="truncate">Empieza Ya</span>
            </button>
          </div>
          <div className="lg:hidden text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </div>
        </header>

        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Runner checking watch and tying shoes before training" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_gMaQ-R59zS_9JCERq9noEJ1H1KnzgBaaOGiAkzrgByogrt0TaQ2x8pP_38YocOw9cbptMkxbVSCnPE5F0qmk1s5c_S8jRhPdk6s_m6PdG4KcTNnWXGk3uUtG7zjqV8oalWsIWjqlV1mgiA2lV8Y8XxJtGIO_g6sWAtHNhQra7Ew3skIq1ZN69cvWdmuFwn4gg8yNqysZOvlli0Adu6gIM_77NjoqwQpbxqYP3PBboj1zi6OQ6qKUwP3zom5Dp4UqYKOsYE6Of8iO" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181113] via-[#181113]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#181113]/90 to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-10 flex flex-col items-start justify-center h-full pt-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <span className="material-symbols-outlined text-base">fitness_center</span>
              Entrenamiento Personalizado
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] uppercase drop-shadow-xl mb-6 max-w-4xl">
              PLANES DE<br />ENTRENAMIENTO
            </h1>
            <h2 className="text-gray-200 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mb-10 drop-shadow-md">
              Tu mejor versión empieza con un plan diseñado para ti. Estructura, seguimiento y resultados reales.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-[#be124e] hover:to-primary text-white text-base font-bold tracking-wide shadow-[0_0_20px_rgba(233,32,99,0.4)] transition-all transform hover:scale-105">
                <span>Elegir mi Plan</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_downward</span>
              </button>
              <button className="flex items-center gap-2 cursor-pointer justify-center rounded-full h-14 px-8 border border-white/20 hover:bg-white/10 text-white text-base font-bold transition-all">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] py-16 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-secondary text-2xl">smartphone</span>
                </div>
                <h3 className="text-white font-bold text-lg">App Stride Premium</h3>
                <p className="text-gray-400 text-sm">Tu plan en tu bolsillo. Sincronización con Garmin y Apple Watch.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">chat</span>
                </div>
                <h3 className="text-white font-bold text-lg">Feedback Diario</h3>
                <p className="text-gray-400 text-sm">Comunicación fluida con tu coach para ajustar cargas.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-secondary text-2xl">restaurant</span>
                </div>
                <h3 className="text-white font-bold text-lg">Nutrición Deportiva</h3>
                <p className="text-gray-400 text-sm">Guías de alimentación para optimizar tu energía y recuperación.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">fitness_center</span>
                </div>
                <h3 className="text-white font-bold text-lg">Entrenamiento de Fuerza</h3>
                <p className="text-gray-400 text-sm">Rutinas complementarias para prevenir lesiones y ganar potencia.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] py-20 relative overflow-hidden" id="planes">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(135deg, #23191d 25%, transparent 25%), linear-gradient(225deg, #23191d 25%, transparent 25%), linear-gradient(45deg, #23191d 25%, transparent 25%), linear-gradient(315deg, #23191d 25%, transparent 25%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '20px 20px', backgroundRepeat: 'repeat'}}></div>
          <div className="container mx-auto px-4 sm:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Elige tu nivel</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">NUESTROS PLANES</h2>
              <p className="text-gray-400 text-lg">Desde tus primeros 5K hasta tu mejor maratón. Tenemos el plan perfecto para ti.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Recreativo */}
              <div className="flex flex-col rounded-3xl bg-[#1A1A1A] border border-white/10 p-8 relative hover:border-secondary/50 transition-colors duration-300 shadow-xl">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded bg-white/5 text-gray-300 text-xs font-bold uppercase mb-4">Recreativo</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Básico / Social</h3>
                  <p className="text-gray-400 text-sm">Ideal para 5K/10K y disfrutar del running sin presiones.</p>
                </div>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-gold">$25.000</span><span className="text-gray-500 text-sm">/mes</span>
                </div>
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Plan mensual estructurado
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Acceso a trotes sociales
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Guía básica de fuerza
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Comunidad WhatsApp
                  </li>
                </ul>
                <button className="w-full py-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-primary hover:to-primary text-white font-bold transition-all shadow-lg">
                  Elegir mi Plan
                </button>
              </div>
              {/* Competitivo */}
              <div className="flex flex-col rounded-3xl bg-[#1A1A1A] border-2 border-primary p-8 relative scale-105 shadow-[0_0_40px_rgba(233,32,99,0.15)] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-[#be124e] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">Más Popular</div>
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase mb-4">Competitivo</div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Elite / Maratón
                    <span className="material-symbols-outlined text-gold">emoji_events</span>
                  </h3>
                  <p className="text-gray-400 text-sm">Personalizado para objetivos de carrera (21K, 42K).</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gold">$45.000</span><span className="text-gray-500 text-sm">/mes</span>
                </div>
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    <strong>App Stride Premium</strong>
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    Ajustes semanales de plan
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    Estrategia de carrera
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    Análisis de ritmos
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    Guía nutricional carrera
                  </li>
                </ul>
                <button className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-[#be124e] hover:brightness-110 text-white font-bold transition-all shadow-[0_0_20px_rgba(233,32,99,0.3)]">
                  Elegir mi Plan
                </button>
              </div>
              {/* Exclusivo */}
              <div className="flex flex-col rounded-3xl bg-[#1A1A1A] border border-secondary/50 p-8 relative hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded bg-secondary/20 text-secondary text-xs font-bold uppercase mb-4">Exclusivo</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coaching 1-on-1</h3>
                  <p className="text-gray-400 text-sm">La máxima experiencia con seguimiento diario.</p>
                </div>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-gold">$75.000</span><span className="text-gray-500 text-sm">/mes</span>
                </div>
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Todo lo de Elite / Maratón
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    <strong>Videollamadas mensuales</strong>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Feedback diario por WhatsApp
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    Análisis biomecánico video
                  </li>
                </ul>
                <button className="w-full py-4 rounded-full bg-gradient-to-r from-secondary to-cyan-600 hover:brightness-110 text-black font-bold transition-all shadow-lg">
                  Elegir mi Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#120c0e] py-16 border-y border-white/5">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center">
              <div className="flex flex-col items-center flex-1">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">15k+</span>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">KM Entrenados</span>
              </div>
              <div className="w-full h-px md:w-px md:h-16 bg-white/10"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">500+</span>
                <span className="text-secondary font-bold text-sm tracking-widest uppercase">PRs Batidos</span>
              </div>
              <div className="w-full h-px md:w-px md:h-16 bg-white/10"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">100%</span>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">Compromiso</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] py-20">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Historias de Éxito</h2>
              <p className="text-gray-400">Resultados reales de atletas que confiaron en Stride.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-dark p-6 rounded-2xl border border-white/5 relative hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-white/5">emoji_events</span>
                <div className="flex items-center gap-4 mb-4">
                  <img alt="Portrait of a smiling young woman" className="w-12 h-12 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkChYtzEv1AXBFZtdNWvxuWpxwIChL0rCaRwngU7BncpOHi5UpKocCN4tbd29vETZN9LyT111PYe0vtmpsBgBdpZavRLXmEi8HzSYcJxGh8BMpZh2eo_GUq2DbaQgpQG7bXwC75hqKOELbTZL0pDkz1q1GtsEwKkih73S3gcqUQkI9ZDVeQN6dE50Oqlmt26T7HBTr8zXZ0awYMj50Ha52b-oug9KbqoyF6_iepDtG2SdmDtT9wyuGd7yobFIwdTZWaCNOhEL7wJtN" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Carolina M.</h4>
                    <span className="text-xs text-secondary">Plan Elite / Maratón</span>
                  </div>
                </div>
                <div className="mb-4 bg-black/20 p-3 rounded-lg border border-white/5">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Maratón Santiago</span>
                    <span className="text-green-400 font-bold">-15 min PR</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"Bajé mis tiempos de 4:15 a 3:58 en solo un ciclo de entrenamiento. La estructura del plan Elite fue clave."</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-2xl border border-white/5 relative hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-white/5">trending_up</span>
                <div className="flex items-center gap-4 mb-4">
                  <img alt="Portrait of a smiling man with a beard" className="w-12 h-12 rounded-full object-cover border-2 border-secondary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFI1eQhzNPy6E6Ns6cRC3d6yKH88A9GCV4xDP1gCAchg767TGt3q9ANOXROqiKhzbHotS3Lxhz3qY_umokxLZMdOs63PGgoWnxv15FM4f1HEE7ySqHfemxVT-5eFkN_eVMamOXKQdMWgUFqGs8o_rgoprNRWvPciDjMToSV6tjXiM8Bjc4nH6l6Zy4h4gUNNDECYhWccRXPmU6QKuEHFB4bHuwvnJUIcHVFUvFjMxDNW6mdKHoDBDWOC5IItv1W0hJCKV727Y93_NP" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Felipe R.</h4>
                    <span className="text-xs text-secondary">Coaching 1-on-1</span>
                  </div>
                </div>
                <div className="mb-4 bg-black/20 p-3 rounded-lg border border-white/5">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>21K Viña del Mar</span>
                    <span className="text-green-400 font-bold">-8 min PR</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"El feedback diario marcó la diferencia. Corregimos técnica y nutrición semana a semana. ¡Gracias coach!"</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-2xl border border-white/5 relative hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-white/5">favorite</span>
                <div className="flex items-center gap-4 mb-4">
                  <img alt="Portrait of a young woman looking confident" className="w-12 h-12 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCow42xm_DnJJ4dlDV32Vs5OR8yvdwKBgG6Hl0ht1lTcQYLGzsXsQJXVnHAKgCgh0E-_TS34UP-z7FHUkrQF4-GOBLWASGNNnSKCQ9qzKIYm18sCaPLvsj6aN9b_XtsDqUs15NCHf9to1L7OCP52RpcGMvpHVj3MBQ7OLPAEbo2nnkbOMhwvWxEe1eK7TnqK69oZNiIE1Liw7aU2UBWr_YEhCc7WMwCW7qzg5Fb_kNKpzXZKiH8OoXBzcppwgv0NtboJ7qVZcf9TiwH" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Andrea S.</h4>
                    <span className="text-xs text-secondary">Básico / Social</span>
                  </div>
                </div>
                <div className="mb-4 bg-black/20 p-3 rounded-lg border border-white/5">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Primeros 10K</span>
                    <span className="text-green-400 font-bold">Completado</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-secondary to-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"Pasé del sofá a correr 10K disfrutando cada kilómetro. El grupo social es pura motivación."</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Training;