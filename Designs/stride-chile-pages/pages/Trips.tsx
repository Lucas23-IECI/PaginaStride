import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Trips: React.FC = () => {
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
              <Link className="text-primary text-sm font-medium leading-normal transition-colors" to="/viajes">Viajes</Link>
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/entrenamiento">Entrenamiento</Link>
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/aliados">Comunidad</Link>
              <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/contacto">Contacto</Link>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_0_15px_rgba(233,32,99,0.5)]">
              <span className="truncate">Únete Ahora</span>
            </button>
          </div>
          <div className="lg:hidden text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </div>
        </header>

        <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Group of runners running through a scenic mountain landscape" className="w-full h-full object-cover opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdPU_4LoItV9gnxJpkusra0M9WATeclT1a6myIFf-0D5dUxaht5Xd_LxCdLkqe7eaFLNKMSEaW68n38Q8FbdL8za8BHF28TfZapvGx1LI_cU4ddYrsgR25v5aHI2CATZIAvLRy2cy9VHMBs0VVdgLHzEKT5DovemfKUsWPAAple9LC3G8caaIMn8-BzsH2dfYs-esXcWs_q_J38txg5PPoutPHSsBxtCcPUmKX5_TluUFN1M8-vopUTujgFv7EA92vdvEyugFHa1RD" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181113] via-[#181113]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-dark/60 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="material-symbols-outlined text-lg text-primary">public</span>
              Experiencias Internacionales & Nacionales
            </div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-5xl md:text-8xl font-black leading-tight tracking-[-0.033em] uppercase drop-shadow-2xl mb-4">
              Viajes Stride
            </h1>
            <h2 className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mb-12 drop-shadow-lg tracking-wide">
              Cruza fronteras con la tribu.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white text-base font-bold tracking-wide shadow-[0_0_20px_rgba(233,32,99,0.4)] transition-all transform hover:scale-105">
                <span>Ver Próximas Salidas</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] relative py-20">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Calendario 2024-2025</span>
                <h3 className="text-white text-4xl font-black tracking-tight uppercase">Destinos Épicos</h3>
              </div>
              <p className="text-gray-400 max-w-md text-sm md:text-right">
                Cupos extremadamente limitados para asegurar una experiencia personalizada y premium.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-surface-dark border border-[#38292e] hover:border-secondary transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <div className="h-64 overflow-hidden relative">
                  <img alt="Runner tying shoes on a city street marathon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_gMaQ-R59zS_9JCERq9noEJ1H1KnzgBaaOGiAkzrgByogrt0TaQ2x8pP_38YocOw9cbptMkxbVSCnPE5F0qmk1s5c_S8jRhPdk6s_m6PdG4KcTNnWXGk3uUtG7zjqV8oalWsIWjqlV1mgiA2lV8Y8XxJtGIO_g6sWAtHNhQra7Ew3skIq1ZN69cvWdmuFwn4gg8yNqysZOvlli0Adu6gIM_77NjoqwQpbxqYP3PBboj1zi6OQ6qKUwP3zom5Dp4UqYKOsYE6Of8iO" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span> Cupos Limitados
                  </div>
                  <div className="absolute bottom-4 left-4 bg-surface-dark/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-lg border border-white/10">
                    NOV 2024
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">Maratón de Nueva York</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-secondary text-lg">flight</span>
                      <span>Vuelos Internacionales</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-secondary text-lg">hotel</span>
                      <span>Alojamiento 4 Estrellas</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-secondary text-lg">local_activity</span>
                      <span>Inscripción Garantizada</span>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Desde</span>
                      <span className="text-gold font-bold text-xl">$2.450.000</span>
                    </div>
                    <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-surface-dark border border-[#38292e] hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,32,99,0.15)]">
                <div className="h-64 overflow-hidden relative">
                  <img alt="Snowy mountain peaks in Patagonia during sunrise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNniTQZqFLRs1fSWrYYS5dSvlL3Vp2l4WQSwYyw-J3ZdNrmHWlCEqyYvsMZ3ZVd9yVo-L2_y1sLL-aMfvpAgEKTmpAKA3vKd1-3S5WTzctCNkW0FMzRJSX2rGm1KsRTfagOQR7qsh7SStBCYtIxB9v0PV_YWUzxr94yb_gq66NEs0X9zzxKnO_SnEN2DZet6fQp6v8FpmVDRz49sdvYpBKFEtx4lEarCkeZCZ-Mg6V87vCG-bD06p0YsY1h7AjtVknpbs7CSEkF3jF" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span> Cupos Limitados
                  </div>
                  <div className="absolute bottom-4 left-4 bg-surface-dark/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-lg border border-white/10">
                    ENE 2025
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Trail Torres del Paine</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-primary text-lg">hiking</span>
                      <span>Guías Certificados</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-primary text-lg">cabin</span>
                      <span>Refugios Premium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-primary text-lg">airport_shuttle</span>
                      <span>Logística Completa</span>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Desde</span>
                      <span className="text-gold font-bold text-xl">$850.000</span>
                    </div>
                    <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-surface-dark border border-[#38292e] hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                <div className="h-64 overflow-hidden relative">
                  <img alt="Hiking boots on a trail with a scenic view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUpSl0dnZcBxgSDDXIPieGF7jwKw81dr4WIPk8nQPfUFo3aJQqCFS_rUb8RgQLKk9Gq6Uj4Ti2DFSKjAyxLOZ-KzOBhZsk9in9HaotcZD7Xa_fTXB0DFckDihKXmWYMbHFhnS4Q9gmPUh1nsX8sRGE4YasfwA4liT_8Vv1--6b-ZCwcj4DH1wUMr-tcXvlSxAJjwOsEq2yC9qQoGFIaj4dCXFrEDYYGdngznfM5EWZECUqI9D9OMJrNhLZ_HWNzfVfsZDkgNQF_oc3" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span> Cupos Limitados
                  </div>
                  <div className="absolute bottom-4 left-4 bg-surface-dark/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-lg border border-white/10">
                    FEB 2025
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">Desierto de Atacama</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-gold text-lg">spa</span>
                      <span>Hotel & Spa</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-gold text-lg">directions_bus</span>
                      <span>Traslados Privados</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="material-symbols-outlined text-gold text-lg">local_dining</span>
                      <span>Cena de Camaradería</span>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Desde</span>
                      <span className="text-gold font-bold text-xl">$600.000</span>
                    </div>
                    <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#120c0e] py-24 relative overflow-hidden border-y border-white/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(135deg, #23191d 25%, transparent 25%), linear-gradient(225deg, #23191d 25%, transparent 25%), linear-gradient(45deg, #23191d 25%, transparent 25%), linear-gradient(315deg, #23191d 25%, transparent 25%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '20px 20px', backgroundRepeat: 'repeat'}}></div>
          <div className="container mx-auto px-4 sm:px-10 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">¿Qué Incluye Stride?</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">No solo es un viaje, es una experiencia deportiva diseñada al detalle para que solo te preocupes de correr.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-primary">luggage</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Logística Completa</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Traslados, alojamientos y reservas gestionadas por expertos.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-secondary/30 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary">sprint</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Entrenamiento Previo</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Planes específicos para llegar a tu destino en tu mejor forma.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-primary">photo_camera</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Fotos y Videos</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Cobertura audiovisual profesional para inmortalizar tu hazaña.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-secondary/30 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary">wine_bar</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Cena de Camaradería</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Celebramos juntos cada meta cruzada con la mejor gastronomía.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] py-16">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center">
              <div className="flex flex-col items-center flex-1">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">15k+</span>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">KM Recorridos</span>
              </div>
              <div className="w-full h-px md:w-px md:h-16 bg-white/10"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">20+</span>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">Ciudades Visitadas</span>
              </div>
              <div className="w-full h-px md:w-px md:h-16 bg-white/10"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">500+</span>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">Viajeros Felices</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] py-20 relative">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">La Experiencia Viajera</h2>
              <p className="text-gray-400">Voces reales de quienes ya cruzaron la meta con nosotros.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-dark p-8 rounded-3xl border border-white/5 relative hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Portrait of a smiling young woman" class="w-14 h-14 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkChYtzEv1AXBFZtdNWvxuWpxwIChL0rCaRwngU7BncpOHi5UpKocCN4tbd29vETZN9LyT111PYe0vtmpsBgBdpZavRLXmEi8HzSYcJxGh8BMpZh2eo_GUq2DbaQgpQG7bXwC75hqKOELbTZL0pDkz1q1GtsEwKkih73S3gcqUQkI9ZDVeQN6dE50Oqlmt26T7HBTr8zXZ0awYMj50Ha52b-oug9KbqoyF6_iepDtG2SdmDtT9wyuGd7yobFIwdTZWaCNOhEL7wJtN" />
                  <div>
                    <h4 className="text-white font-bold text-base">Carolina M.</h4>
                    <span className="text-xs text-secondary font-medium">Viaje a NY</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">"Nueva York con Stride fue otro nivel. No tuve que preocuparme de nada más que de correr. ¡La cena post-carrera fue inolvidable!"</p>
              </div>
              <div className="bg-surface-dark p-8 rounded-3xl border border-white/5 relative hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Portrait of a smiling man with a beard" className="w-14 h-14 rounded-full object-cover border-2 border-secondary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFI1eQhzNPy6E6Ns6cRC3d6yKH88A9GCV4xDP1gCAchg767TGt3q9ANOXROqiKhzbHotS3Lxhz3qY_umokxLZMdOs63PGgoWnxv15FM4f1HEE7ySqHfemxVT-5eFkN_eVMamOXKQdMWgUFqGs8o_rgoprNRWvPciDjMToSV6tjXiM8Bjc4nH6l6Zy4h4gUNNDECYhWccRXPmU6QKuEHFB4bHuwvnJUIcHVFUvFjMxDNW6mdKHoDBDWOC5IItv1W0hJCKV727Y93_NP" />
                  <div>
                    <h4 className="text-white font-bold text-base">Felipe R.</h4>
                    <span className="text-xs text-secondary font-medium">Torres del Paine</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">"Conectar con la naturaleza en la Patagonia con este grupo de gente increíble es algo que repetiría mil veces. La logística 10/10."</p>
              </div>
              <div className="bg-surface-dark p-8 rounded-3xl border border-white/5 relative hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Portrait of a young woman looking confident" className="w-14 h-14 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCow42xm_DnJJ4dlDV32Vs5OR8yvdwKBgG6Hl0ht1lTcQYLGzsXsQJXVnHAKgCgh0E-_TS34UP-z7FHUkrQF4-GOBLWASGNNnSKCQ9qzKIYm18sCaPLvsj6aN9b_XtsDqUs15NCHf9to1L7OCP52RpcGMvpHVj3MBQ7OLPAEbo2nnkbOMhwvWxEe1eK7TnqK69oZNiIE1Liw7aU2UBWr_YEhCc7WMwCW7qzg5Fb_kNKpzXZKiH8OoXBzcppwgv0NtboJ7qVZcf9TiwH" />
                  <div>
                    <h4 className="text-white font-bold text-base">Andrea S.</h4>
                    <span className="text-xs text-secondary font-medium">Desierto Atacama</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">"El desierto es duro, pero con el soporte del equipo se hace mucho más llevadero. El hotel spa al final fue el broche de oro."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#181113] py-20 flex justify-center border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
            <button className="group relative flex items-center gap-3 cursor-pointer justify-center overflow-hidden rounded-full h-20 px-12 bg-gradient-to-r from-primary via-[#be124e] to-secondary text-white text-xl font-bold tracking-wide shadow-[0_0_40px_rgba(233,32,99,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 mx-auto">
              <span>Ver Próximas Salidas</span>
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
            <p className="mt-6 text-gray-500 text-sm">¿Tienes dudas? <a className="text-primary hover:text-white transition-colors underline" href="#">Habla con un asesor de viajes</a></p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Trips;