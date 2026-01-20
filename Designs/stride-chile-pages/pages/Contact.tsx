import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="bg-background-dark text-white font-display overflow-x-hidden antialiased min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#383838] bg-background-dark/80 backdrop-blur-md px-4 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-[32px]">directions_run</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Stride Chile</h2>
        </Link>
        <div className="hidden md:flex items-center gap-9">
          <Link className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/">Inicio</Link>
          <Link className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/viajes">Eventos</Link>
          <Link className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/entrenamiento">Experiencias</Link>
          <Link className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/nosotros">Nosotros</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/entrenamiento" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Únete</span>
          </Link>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] w-full px-4 py-12 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 z-0 w-full h-full bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUhm8f8GkPg-vmsk059BX38BYDmO4aOAvCXtG6OMySQvgASbe3TFVyDFuUZr37y9jotuDHRZljZ4MmD6Pi9XwvTCe7xcqX0PWKCwT9qa1PO50a_ApXhRaFNEWksvTYGqklM0dk4FqHZ8ebzWIJ0ulsxTyljKW_Oun9Qeb9x1oNCKq7aq2mGe332DtB1mgblWJAIcmVhzpJDAYItHfAgsUQrnS37i4CtsKBtK1r6UjhqxiRN55lq3UVGsDOUUaCZLuBhps0z11JiMqM')"}}></div>
          <div className="absolute inset-0 z-0 bg-chevron-pattern opacity-30"></div>
          <div className="relative z-10 max-w-4xl flex flex-col gap-6 items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Soporte Stride</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase">
              Estamos aquí para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ayudarte</span>
            </h1>
            <h2 className="text-gray-300 text-base md:text-lg font-normal max-w-2xl leading-relaxed">
              ¿Tienes dudas sobre nuestros entrenamientos, inscripciones o eventos? Conecta con nuestro equipo y sigamos avanzando juntos.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <a className="flex items-center justify-center h-12 px-8 rounded-xl bg-white text-background-dark font-bold text-sm hover:bg-gray-200 transition-colors" href="#contacto">
                Formulario de Contacto
              </a>
            </div>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="relative z-20 -mt-16 px-4 md:px-10 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* WhatsApp Card */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-border-dark bg-[#262626] p-6 shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#25D366]/20 text-[#25D366]">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-border-dark text-xs font-medium text-gray-300">Comunidad</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">WhatsApp</h3>
                <p className="text-sm text-gray-400">Respuesta rápida para dudas urgentes.</p>
              </div>
              <button className="mt-auto w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-background-dark font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span>Chatear ahora</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            {/* Email Card */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-border-dark bg-[#262626] p-6 shadow-xl hover:border-secondary/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-secondary/20 text-secondary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-border-dark text-xs font-medium text-gray-300">Formal</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-sm text-gray-400">Propuestas, sponsorships y corporativo.</p>
              </div>
              <a className="mt-auto w-full h-12 rounded-xl bg-border-dark hover:bg-gray-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2" href="#contacto">
                <span>Ir al formulario</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>
            {/* Instagram Card */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-border-dark bg-[#262626] p-6 shadow-xl hover:border-[#E1306C]/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#E1306C]/20 text-[#E1306C]">
                  <span className="material-symbols-outlined">photo_camera</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-border-dark text-xs font-medium text-gray-300">Social</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Instagram</h3>
                <p className="text-sm text-gray-400">DM & Social media updates.</p>
              </div>
              <button className="mt-auto w-full h-12 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-bold text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2">
                <span>Seguir @stridecl</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="flex-1 py-16 px-4 md:px-10 lg:px-40 bg-background-dark" id="contacto">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                  <span className="text-secondary">&gt;&gt;&gt;</span> Envíanos un Mensaje
                </h2>
                <p className="text-gray-400">Completa el formulario y te contactaremos a la brevedad.</p>
              </div>
              <form className="flex flex-col gap-6 bg-[#262626] p-8 rounded-2xl border border-border-dark relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Nombre</label>
                    <input className="h-12 w-full rounded-xl bg-background-dark border border-border-dark text-white px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-gray-600" placeholder="Tu nombre" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Apellido</label>
                    <input className="h-12 w-full rounded-xl bg-background-dark border border-border-dark text-white px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-gray-600" placeholder="Tu apellido" type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Email</label>
                  <input className="h-12 w-full rounded-xl bg-background-dark border border-border-dark text-white px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-gray-600" placeholder="nombre@ejemplo.com" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Asunto</label>
                  <div className="relative">
                    <select className="h-12 w-full appearance-none rounded-xl bg-background-dark border border-border-dark text-white px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all">
                      <option>Información general</option>
                      <option>Membresías</option>
                      <option>Eventos y Carreras</option>
                      <option>Merchandising</option>
                      <option>Otro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Mensaje</label>
                  <textarea className="w-full rounded-xl bg-background-dark border border-border-dark text-white p-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-gray-600 resize-none" placeholder="¿Cómo podemos ayudarte?" rows={4}></textarea>
                </div>
                <button className="mt-2 w-full h-14 rounded-xl bg-gradient-to-r from-primary to-secondary hover:to-primary text-white font-bold text-base tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5" type="submit">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
            
            {/* Right Column: Location & Map */}
            <div className="lg:w-[420px] flex flex-col gap-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Nuestra Base</h2>
                <p className="text-gray-400 text-sm">Entrenamos en el corazón de Concepción. Únete a nosotros en nuestros puntos de encuentro habituales.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#262626] border border-border-dark">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Parque Bicentenario</h3>
                    <p className="text-sm text-gray-400 mt-1">Punto de encuentro principal para corridas largas de fin de semana.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#262626] border border-border-dark">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0">
                    <span className="material-symbols-outlined">flag</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Universidad de Concepción (UdeC)</h3>
                    <p className="text-sm text-gray-400 mt-1">Entrenamientos de velocidad y técnica en pista.</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-border-dark bg-[#262626] map-container group">
                <div className="absolute inset-0 bg-[#262626] z-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Cargando mapa...</span>
                </div>
                <iframe 
                  className="group-hover:opacity-80" 
                  height="100%" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.227448740513!2d-73.05663784577823!3d-36.8282315802279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d2b775196b%3A0x629555c17d74e304!2sParque%20Bicentenario%20de%20Concepci%C3%B3n!5e0!3m2!1sen!2scl!4v1715462847255!5m2!1sen!2scl" 
                  style={{border:0, position: 'relative', zIndex: 10, opacity: 0.6, transition: 'opacity 0.3s'}}
                  width="100%"
                ></iframe>
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                  <span className="bg-background-dark/90 backdrop-blur text-xs px-2 py-1 rounded text-white border border-border-dark">Concepción, Chile</span>
                </div>
              </div>
              <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
                <h4 className="font-bold text-white mb-2">¿No encuentras lo que buscas?</h4>
                <p className="text-sm text-gray-300 mb-4">Revisa nuestra sección de preguntas frecuentes o escríbenos directamente.</p>
                <Link className="text-primary text-sm font-bold hover:underline flex items-center gap-1" to="/faq">
                  Ver Preguntas Frecuentes <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#262626] border-t border-border-dark py-12 px-4 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">directions_run</span>
              <span className="text-white font-bold tracking-tight">Stride Chile</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a className="hover:text-white transition-colors" href="#">Términos</a>
              <a className="hover:text-white transition-colors" href="#">Privacidad</a>
              <a className="hover:text-white transition-colors" href="#">Cookies</a>
            </div>
            <div className="flex gap-4">
              <a className="size-10 rounded-full bg-background-dark border border-border-dark flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all" href="#">
                <span className="text-sm font-bold">IG</span>
              </a>
              <a className="size-10 rounded-full bg-background-dark border border-border-dark flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all" href="#">
                <span className="text-sm font-bold">TW</span>
              </a>
              <a className="size-10 rounded-full bg-background-dark border border-border-dark flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all" href="#">
                <span className="text-sm font-bold">YT</span>
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 text-center md:text-left text-xs text-gray-500">
            © 2024 Stride Chile. Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Contact;