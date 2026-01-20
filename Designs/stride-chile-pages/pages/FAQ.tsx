import React from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display text-white selection:bg-primary selection:text-white" style={{backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAnC42TIY1dVPSb96UgyWBOpZAb4NyHKBCVjw13n6TPPh9wVoyUQQA4-p2lM-cecYALv6BZXko_EQnJLZvghc03TaGAg-COPtrINQUc0tCJ46_IqqsdwUKBEeVU0tXpciKbu4I07ICRQqej638Gr9cfTaDv800y1NAfuu65b1iAYRgnd0Qw5Dw8mEmJAP6pZlpJQv9zXJQVxKSCo0ybLA4dKjcnQntpYu3Pulk92Su-LY5ltPbz9G27wU9MpFfY6UnnUwuwg8LQNGk3)", backgroundColor: "#1A1A1A"}}>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#333333] bg-background-dark/95 backdrop-blur-md px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">directions_run</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight">Stride Chile</h2>
        </Link>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-8">
            <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/">Inicio</Link>
            <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/viajes">Eventos</Link>
            <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/entrenamiento">Experiencias</Link>
            <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/nosotros">Nosotros</Link>
            <Link className="text-white text-sm font-medium hover:text-primary transition-colors" to="/aliados">Aliados</Link>
          </nav>
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-[0_0_15px_rgba(233,32,106,0.4)]">
            <span className="truncate">Inicia Sesión</span>
          </button>
        </div>
        <div className="lg:hidden text-white cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>

      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <div className="w-full flex justify-center py-5 px-4 lg:px-0">
          <div className="flex flex-col w-full max-w-[960px]">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-6 shadow-2xl shadow-black/50" style={{backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO1Tc9M0ehet5j_NH8AWHc1vF-6E2Qmg1Df3TjeIQDzZ6JzRa9Wvc6rm9S1Ewr4WdOYdhrgAIfk3lgppjmI0J-GNrcjnl1ED9yPvzhGdHiemZiHYzq3d_cyJhqkihlthTNg7pVgcTFHnzV2-rENsA7wG7a3iDkdK43p9NRSZ5H3QqB9YreaB5I-bvUKggBKNIZEqLFgzP75TYwd14P52HZl7bVAKIXIrp-IGf3YGENvUK9rVU3MHrTITbYn4oI7RFFX6izhvY1uBnh")'}}>
                  <div className="flex flex-col gap-3 text-center z-10 max-w-[600px]">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl uppercase drop-shadow-lg">
                      Preguntas Frecuentes
                    </h1>
                    <h2 className="text-gray-200 text-sm font-medium leading-normal @[480px]:text-lg">
                      ¿TIENES DUDAS? ENCUENTRA TU RESPUESTA AQUÍ
                    </h2>
                  </div>
                  <label className="flex flex-col w-full max-w-[520px] z-10 group transition-all duration-300">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-14 bg-[#262626] border border-[#333333] group-focus-within:border-primary group-focus-within:shadow-[0_0_0_2px_rgba(233,32,106,0.3)] transition-all overflow-hidden">
                      <div className="text-[#9CA3AF] flex items-center justify-center pl-4 pr-2">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input className="flex w-full min-w-0 flex-1 bg-transparent text-white focus:outline-0 placeholder:text-[#9CA3AF] text-base font-normal h-full" placeholder="Busca por palabra clave (ej. ritmo, guardarropía)" />
                      <div className="flex items-center justify-center pr-2">
                        <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors">
                          Buscar
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Categories / Tabs */}
        <div className="px-4 lg:px-40 flex justify-center py-2">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="pb-6">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
                <button className="snap-start shrink-0 flex flex-col items-center justify-center rounded-xl bg-primary px-6 py-4 text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] cursor-pointer min-w-[140px] border border-primary/50">
                  <span className="material-symbols-outlined mb-2 text-2xl">directions_run</span>
                  <p className="text-sm font-bold leading-normal tracking-wide text-center">Sobre las Runs</p>
                </button>
                <button className="snap-start shrink-0 flex flex-col items-center justify-center rounded-xl bg-[#262626] border border-[#333333] hover:border-[#9CA3AF] px-6 py-4 text-[#9CA3AF] hover:text-white transition-all cursor-pointer min-w-[140px] group">
                  <span className="material-symbols-outlined mb-2 text-2xl group-hover:text-secondary transition-colors">badge</span>
                  <p className="text-sm font-bold leading-normal tracking-wide text-center">Inscripciones</p>
                </button>
                <button className="snap-start shrink-0 flex flex-col items-center justify-center rounded-xl bg-[#262626] border border-[#333333] hover:border-[#9CA3AF] px-6 py-4 text-[#9CA3AF] hover:text-white transition-all cursor-pointer min-w-[140px] group">
                  <span className="material-symbols-outlined mb-2 text-2xl group-hover:text-secondary transition-colors">celebration</span>
                  <p className="text-sm font-bold leading-normal tracking-wide text-center">Experiencias</p>
                </button>
                <button className="snap-start shrink-0 flex flex-col items-center justify-center rounded-xl bg-[#262626] border border-[#333333] hover:border-[#9CA3AF] px-6 py-4 text-[#9CA3AF] hover:text-white transition-all cursor-pointer min-w-[140px] group">
                  <span className="material-symbols-outlined mb-2 text-2xl group-hover:text-secondary transition-colors">shopping_bag</span>
                  <p className="text-sm font-bold leading-normal tracking-wide text-center">Store y Merch</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions Section */}
        <div className="px-4 lg:px-40 flex flex-1 justify-center pb-12">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-4">
              <details className="group flex flex-col rounded-2xl bg-[#262626] border border-[#333333] open:border-primary/50 open:bg-[#2A2A2A] transition-colors" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 select-none">
                  <p className="text-white text-base font-bold leading-normal">¿Cuál es el nivel de experiencia requerido?</p>
                  <div className="text-primary group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0 animate-fadeIn">
                  <p className="text-[#9CA3AF] text-base font-normal leading-relaxed">
                    ¡Todos son bienvenidos! No necesitas ser un profesional. Dividimos los grupos por <span className="text-secondary font-medium">ritmos (Pace)</span> para que corras cómodo, desde principiantes hasta grupos avanzados. Nuestro objetivo es que disfrutes la experiencia a tu propia velocidad.
                  </p>
                </div>
              </details>
              <details className="group flex flex-col rounded-2xl bg-[#262626] border border-[#333333] open:border-primary/50 open:bg-[#2A2A2A] transition-colors">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 select-none">
                  <p className="text-white text-base font-bold leading-normal">¿Tienen servicio de guardarropía (Bag Drop)?</p>
                  <div className="text-primary group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[#9CA3AF] text-base font-normal leading-relaxed">
                    Sí, contamos con un servicio de <span className="text-primary font-medium">guardarropía seguro</span> en el punto de encuentro. Puedes dejar mochilas pequeñas y chaquetas. Te recomendamos no llevar objetos de alto valor, aunque siempre hay alguien del staff vigilando.
                  </p>
                </div>
              </details>
              <details className="group flex flex-col rounded-2xl bg-[#262626] border border-[#333333] open:border-primary/50 open:bg-[#2A2A2A] transition-colors">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 select-none">
                  <p className="text-white text-base font-bold leading-normal">¿Cuál es el ritmo promedio de las runs?</p>
                  <div className="text-primary group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[#9CA3AF] text-base font-normal leading-relaxed">
                    Tenemos una amplia variedad de paces. Generalmente organizamos grupos de:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#9CA3AF]">
                    <li><span className="text-secondary">Pace Rápido:</span> 4:30 - 5:00 min/km</li>
                    <li><span className="text-secondary">Pace Medio:</span> 5:30 - 6:00 min/km</li>
                    <li><span className="text-secondary">Party Pace:</span> 6:30 - 7:30 min/km (Conversacional)</li>
                  </ul>
                </div>
              </details>
              <details className="group flex flex-col rounded-2xl bg-[#262626] border border-[#333333] open:border-primary/50 open:bg-[#2A2A2A] transition-colors">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 select-none">
                  <p className="text-white text-base font-bold leading-normal">¿Necesito equipamiento especial?</p>
                  <div className="text-primary group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[#9CA3AF] text-base font-normal leading-relaxed">
                    Lo esencial son unas buenas zapatillas de running. Si corres de noche, recomendamos encarecidamente usar <span class="text-secondary font-medium">ropa reflectante</span> o luces pequeñas por seguridad. ¡Y no olvides tu hidratación para después de la ruta!
                  </p>
                </div>
              </details>
              <details className="group flex flex-col rounded-2xl bg-[#262626] border border-[#333333] open:border-primary/50 open:bg-[#2A2A2A] transition-colors">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 select-none">
                  <p className="text-white text-base font-bold leading-normal">¿Qué pasa si llueve?</p>
                  <div className="text-primary group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[#9CA3AF] text-base font-normal leading-relaxed">
                    En Stride Chile <span class="text-primary font-bold">¡Corremos igual!</span> La lluvia no nos detiene. Solo se suspenden las actividades en caso de alerta oficial por tormenta eléctrica o condiciones climáticas peligrosas. Avisaremos cualquier cambio por nuestras historias de Instagram.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 lg:px-40 flex flex-1 justify-center pb-20">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 @[480px]:px-10 @[480px]:py-16 rounded-3xl bg-[#262626] border border-[#333333] text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="flex flex-col gap-3 relative z-10">
                  <h2 className="text-white tracking-tight text-3xl font-black leading-tight @[480px]:text-4xl max-w-[720px]">
                    ¿Aún necesitas ayuda?
                  </h2>
                  <p className="text-[#9CA3AF] text-base font-normal leading-relaxed max-w-[600px] mx-auto">
                    Si no encontraste lo que buscabas en nuestras preguntas frecuentes, nuestro equipo de soporte está listo para responderte lo antes posible.
                  </p>
                </div>
                <div className="flex w-full justify-center relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px] justify-center">
                    <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white text-base font-bold tracking-wide transition-all grow shadow-lg hover:shadow-[#25D366]/20">
                      <span className="material-symbols-outlined text-xl">chat</span>
                      <span className="truncate">Chatear en WhatsApp</span>
                    </button>
                    <Link to="/contacto" className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-transparent border-2 border-[#333333] hover:border-[#9CA3AF] hover:bg-white/5 text-white text-base font-bold tracking-wide transition-all grow">
                      <span className="material-symbols-outlined text-xl">mail</span>
                      <span className="truncate">Formulario de Contacto</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;