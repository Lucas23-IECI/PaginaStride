import React from 'react';
import { Link } from 'react-router-dom';

const Alliances: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary selection:text-white" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16l-1.41-1.41L11.17 10 6.59 5.41 8 4l6 6-6 6z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")"}}>
      {/* Navigation */}
      <div className="w-full border-b border-[#38292e] bg-[#181114]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <h2 className="text-white text-xl font-extrabold tracking-tight">Stride Chile</h2>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Inicio</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/viajes">Eventos</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/entrenamiento">Experiencias</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/nosotros">Nosotros</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/aliados">Aliados</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/entrenamiento" className="hidden sm:flex h-10 px-6 cursor-pointer items-center justify-center rounded-xl bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20">
              <span>Únete</span>
            </Link>
            <button className="md:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to bottom, rgba(24, 17, 20, 0.4) 0%, rgba(24, 17, 20, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvpW3YcT6z0_oMLtFUbra40sT1fQQd_OYBixhptZSRFadE6drypGSrq54Ql41557wneUzcJqkNfDRpD_zBVVNPKqlhfhqugx_xSx6EXzpJhRfMaGNrBvHcbGoQgaElICPYXZfOeCWMFE7JhMximVj3LIMwTzdxzcAtuuDOph3LbmPd2yPeaS0e7Zo22Tu_c2gzo_wTY4nqDb5G7azaWqCHChMCPS8B5rlBbPCNV3s9WNbfFUZwFzXOsgI8OEPw_nZ8wYZsyFcYEv_i")'}}></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-6 py-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-white">Comunidad Running Concepción</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            NUESTROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">ALIADOS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-body">
            Marcas que impulsan el movimiento y la comunidad en Concepción. Juntos construimos experiencias que van más allá de correr.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="h-12 px-8 rounded-xl bg-white text-[#181114] font-bold hover:bg-gray-100 transition-colors">
              Ver Alianzas
            </button>
            <button className="h-12 px-8 rounded-xl bg-[#261c20] border border-[#38292e] text-white font-bold hover:bg-[#38292e] transition-colors">
              Ser Partner
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Section: Strategic Partners */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Socios Estratégicos</h2>
            <div className="h-px bg-[#38292e] flex-1"></div>
          </div>
          <div className="flex flex-col gap-6">
            {/* Partner Card 1: TECHO */}
            <div className="group relative overflow-hidden rounded-2xl bg-card-dark border border-[#38292e] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,32,106,0.15)]">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="flex-1 p-8 flex flex-col justify-center gap-6 z-10 relative bg-card-dark/95 backdrop-blur-sm md:bg-transparent">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mb-2">
                    <span className="material-symbols-outlined text-black text-4xl">home_work</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">TECHO Chile</h3>
                    <p className="text-[#b89da7] font-body leading-relaxed">
                      Construyendo comunidad y hogares juntos. Colaboramos en voluntariados masivos y recaudación de fondos a través de kilómetros solidarios.
                    </p>
                  </div>
                  <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group-hover:text-white" href="#">
                    Ver eventos conjuntos <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
                <div className="flex-1 min-h-[300px] md:min-h-auto bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNxGL48MAqEn0JNKT6j8CQqCAN-moGt36nxwy9OL3vJTNZz1de_8bfA2LrkAmwlYJPhFfV6eLizZqJMVnlZ4xSoYTDbQ7L4UYHfqAdAexKK9yPdP-5a01ohIBZ15RCRlOVZyadJUgMvXcyXRNa7ZLn_cQE_zMrwsqp-EJedzwb4cIZ-kPqsJVWFmN2uJRIF9XiWHb4p0IYAt5mSYJY4uHxD4h0AMceZLdhZdIlygEy58Qt1z8fNhdb1x0OD7Xh4Kk2F0akDiSsinwR")'}}>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            {/* Partner Card 2: Red Bull */}
            <div className="group relative overflow-hidden rounded-2xl bg-card-dark border border-[#38292e] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,32,106,0.15)]">
              <div className="flex flex-col md:flex-row-reverse items-stretch">
                <div className="flex-1 p-8 flex flex-col justify-center gap-6 z-10 relative bg-card-dark/95 backdrop-blur-sm md:bg-transparent">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mb-2">
                    <span className="material-symbols-outlined text-black text-4xl">bolt</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Red Bull</h3>
                    <p className="text-[#b89da7] font-body leading-relaxed">
                      Energía para cada kilómetro. Partner oficial de hidratación y activación en nuestros eventos principales, dándonos alas en cada meta.
                    </p>
                  </div>
                  <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group-hover:text-white" href="#">
                    Ver activaciones <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
                <div className="flex-1 min-h-[300px] md:min-h-auto bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPoSKa-8kbY5LJzoAVRJGVtUb_sZpdwOCasxwJIE9rZHpdLd7epzVXzvq21YhGd4A9RvXaa7beyx9VNxHZ9NKIaWwxi34fEB2ifgpmyOeEIgAVZBEPjLU9To8JiNdeIbNUWH0OpyxWrvq2tsIGBzAfZ_OGtqZnu26Iz3kHVQEW9tTjpA7-GajgrQEXivSH7LozbTXGZ1x1TQtLje8JxFpgS4FpDitribK9GecxePmpGGTojbWv-vpCIDW6WLdrfYVcQ0r9ef8nVsKV")'}}>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            {/* Partner Card 3: The Body Club */}
            <div className="group relative overflow-hidden rounded-2xl bg-card-dark border border-[#38292e] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,32,106,0.15)]">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="flex-1 p-8 flex flex-col justify-center gap-6 z-10 relative bg-card-dark/95 backdrop-blur-sm md:bg-transparent">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mb-2">
                    <span className="material-symbols-outlined text-black text-4xl">fitness_center</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">The Body Club</h3>
                    <p className="text-[#b89da7] font-body leading-relaxed">
                      Preparación física de alto nivel. Acceso exclusivo a entrenamientos de fuerza y recuperación para evitar lesiones y mejorar rendimiento.
                    </p>
                  </div>
                  <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group-hover:text-white" href="#">
                    Ver planes <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
                <div className="flex-1 min-h-[300px] md:min-h-auto bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCy_m70ff1DjQy-94WAWNVFIm3McIO5d3FUiFt2yzKtpjhWpOb_qUo5fZdYj95D9_8xhSoOvqTDhjIxaFR767HNV-b8r_6orSAFwY6HM88OWhtQz1PeqeAGexMXFdYPVB1aYfB_IIb2Y73BuMo7W49ZwPsh2YK883hrZpJjLfuSX2mLVVi1-NUbcYzWwHczA3Nd5zfLht42OMqJErmiVFyzs68CwdtPpoKbvucxfNJPN1SsPILFBw4vbKYskJDBBYUwLPXXjYmpiJ8w")'}}>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Local Heroes */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Héroes Locales</h2>
              <p className="text-[#b89da7]">Emprendimientos penquistas que hacen grande a nuestra tribu.</p>
            </div>
            <button className="text-sm font-bold text-white bg-[#261c20] px-4 py-2 rounded-lg border border-[#38292e] hover:bg-[#38292e] transition-colors self-start md:self-auto">
              Ver todos los beneficios
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Local Card 1 */}
            <div className="bg-card-dark rounded-xl p-6 border border-[#38292e] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-black">local_cafe</span>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  20% OFF
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Café Tostado</h3>
              <p className="text-sm text-[#b89da7] mb-4 line-clamp-2">El mejor café de especialidad para el pre y post entreno. Ubicado en el centro.</p>
              <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Beneficio exclusivo miembros
              </div>
            </div>
            {/* Local Card 2 */}
            <div className="bg-card-dark rounded-xl p-6 border border-[#38292e] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-black">monitor_heart</span>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  Eval. Gratis
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Kine Concepción</h3>
              <p className="text-sm text-[#b89da7] mb-4 line-clamp-2">Centro de kinesiología deportiva especializado en corredores y prevención.</p>
              <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Beneficio exclusivo miembros
              </div>
            </div>
            {/* Local Card 3 */}
            <div className="bg-card-dark rounded-xl p-6 border border-[#38292e] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-black">shopping_bag</span>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  15% OFF
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Tienda Runner</h3>
              <p className="text-sm text-[#b89da7] mb-4 line-clamp-2">Equipamiento técnico, zapatillas y nutrición deportiva. Todo lo que necesitas.</p>
              <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Beneficio exclusivo miembros
              </div>
            </div>
            {/* Local Card 4 */}
            <div className="bg-card-dark rounded-xl p-6 border border-[#38292e] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-black">spa</span>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  2x1
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Recovery Lab</h3>
              <p className="text-sm text-[#b89da7] mb-4 line-clamp-2">Botas de compresión, crioterapia y masajes deportivos para recuperar piernas.</p>
              <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Beneficio exclusivo miembros
              </div>
            </div>
            {/* Local Card 5 */}
            <div className="bg-card-dark rounded-xl p-6 border border-[#38292e] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-black">local_pizza</span>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  Post-Run
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Pizzería Napoli</h3>
              <p className="text-sm text-[#b89da7] mb-4 line-clamp-2">Carbohidratos de calidad para después del largo del domingo. Refill de bebida.</p>
              <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Beneficio exclusivo miembros
              </div>
            </div>
            {/* Local Card 6 */}
            <div className="bg-card-dark rounded-xl p-6 border border-[#38292e] hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center group cursor-pointer">
              <div className="text-center">
                <div className="mx-auto size-12 rounded-full bg-[#38292e] flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-white">add</span>
                </div>
                <h3 className="text-base font-bold text-white">Ver todos los aliados</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Transparency & Impact */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 rounded-3xl -z-10"></div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Nuestro Impacto</h2>
            <p className="text-[#b89da7]">Resultados reales de la colaboración con nuestros partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">foundation</span>
              </div>
              <div className="text-4xl font-black text-white mb-1">5+</div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#b89da7]">Casas construidas con TECHO</p>
            </div>
            <div className="text-center p-4 border-t md:border-t-0 md:border-l border-[#38292e]">
              <div className="inline-flex p-3 rounded-full bg-accent-cyan/10 text-accent-cyan mb-4">
                <span className="material-symbols-outlined text-4xl">directions_run</span>
              </div>
              <div className="text-4xl font-black text-white mb-1">12K+</div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#b89da7]">Kilómetros recorridos</p>
            </div>
            <div className="text-center p-4 border-t md:border-t-0 md:border-l border-[#38292e]">
              <div className="inline-flex p-3 rounded-full bg-purple-500/10 text-purple-400 mb-4">
                <span className="material-symbols-outlined text-4xl">water_drop</span>
              </div>
              <div className="text-4xl font-black text-white mb-1">2.500L</div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#b89da7]">Hidratación entregada</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">¿Quieres ser aliado?</h2>
            <p className="text-white/90 text-lg mb-8 font-medium">
              Únete a la comunidad de running más grande de Concepción y conecta tu marca con cientos de corredores apasionados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 h-12 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">chat</span>
                Contáctanos por WhatsApp
              </button>
              <button className="w-full sm:w-auto px-8 h-12 bg-black/20 text-white font-bold rounded-xl hover:bg-black/30 transition-colors border border-white/20">
                Descargar Media Kit
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#38292e] bg-[#120d0f] pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-white mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                <span className="text-lg font-bold">Stride Chile</span>
              </div>
              <p className="text-[#b89da7] text-sm leading-relaxed">
                Impulsando el running en Concepción. Somos más que un club, somos un movimiento.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-[#b89da7]">
                <li><Link className="hover:text-primary transition-colors" to="/viajes">Eventos</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/entrenamiento">Experiencias</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/aliados">Aliados</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[#b89da7]">
                <li><Link className="hover:text-primary transition-colors" to="#">Términos y Condiciones</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="#">Política de Privacidad</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="#">Reglamento Interno</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-[#261c20] flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                  <span className="text-xs">IG</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-[#261c20] flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                  <span className="text-xs">FB</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-[#261c20] flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                  <span className="text-xs">YT</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#38292e] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#b89da7]">
            <p>© 2024 Stride Chile. Todos los derechos reservados.</p>
            <p>Diseñado con pasión en Concepción.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Alliances;