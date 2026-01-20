import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <Link to="/" className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </Link>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight">Stride Chile</h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-white/70 hover:text-primary transition-colors text-sm font-medium" to="/nosotros">Nosotros</Link>
              <Link className="text-white/70 hover:text-primary transition-colors text-sm font-medium" to="/aliados">Comunidad</Link>
              <Link className="text-white/70 hover:text-primary transition-colors text-sm font-medium" to="/viajes">Rutas</Link>
            </nav>
            <div className="flex gap-4">
              <Link className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10" to="/nosotros">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="text-sm font-medium">Volver a Nosotros</span>
              </Link>
              <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Mi Cuenta
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-20 py-12">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
            <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz-U5oc9ezaWV_2UV-7epZsjCTR_JYvqjKVebc0qnYHQhMQgaJ3UFZYqTGN0zSQH8cw8rKhj6ilb-MyyfgHDkrwDqM4J5KQbgediLE6f43TK2M0ibGZIUUvjR_pRODCgZ77koJMxCK5dKEzfpKKHwuY89FjIH2jKtv2Qf1uQi6Qhcb6E4RlYb6BEagnOSpa5Q4TnXUYPAeQArMaNZcmX4OyNB5SxtFVyENJtmeeS4GyCWjq-BV_tDNC9b1kWTGt3McWFWnj1wSZwqU")'}}></div>
            <div className="absolute bottom-6 left-6 flex flex-col gap-1">
              <span className="bg-primary/90 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold w-fit">Guía Destacada</span>
              <p className="text-white/60 text-xs font-medium">Concepción, Chile</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gradient leading-[0.9]">
                HOLA,<br />SOY FRAN
              </h1>
              <h2 className="text-xl text-white/80 font-medium max-w-lg leading-relaxed">
                Lead de <span className="text-primary font-bold">Social Girl</span> en Stride Chile. 
                Correr me enseñó que la verdadera meta es la comunidad y el apoyo entre nosotras.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">speaker_phone</span>
                <span className="text-sm font-semibold">Motivadora</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-secondary">coffee</span>
                <span className="text-sm font-semibold">Fan del Café</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">groups</span>
                <span className="text-sm font-semibold">Ritmo Social</span>
              </div>
            </div>
            <a className="w-fit bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20 flex items-center gap-3" href="#sesiones">
              Anotarme a una sesión
              <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(233, 32, 106, 0.05) 1px, transparent 0)', backgroundSize: '20px 20px'}}>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Sesiones Lideradas</p>
            <h3 className="text-4xl font-black text-white">45+</h3>
            <div className="absolute -right-4 -bottom-4 text-primary/10">
              <span className="material-symbols-outlined text-[80px]">run_circle</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(233, 32, 106, 0.05) 1px, transparent 0)', backgroundSize: '20px 20px'}}>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Kilómetros Compartidos</p>
            <h3 className="text-4xl font-black text-secondary">320<span className="text-lg">km</span></h3>
            <div className="absolute -right-4 -bottom-4 text-secondary/10">
              <span className="material-symbols-outlined text-[80px]">route</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(233, 32, 106, 0.05) 1px, transparent 0)', backgroundSize: '20px 20px'}}>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Miembro desde</p>
            <h3 className="text-4xl font-black text-white">2022</h3>
            <div className="absolute -right-4 -bottom-4 text-white/5">
              <span className="material-symbols-outlined text-[80px]">calendar_today</span>
            </div>
          </div>
        </section>

        {/* Story & Route Section */}
        <section className="flex flex-col lg:flex-row gap-20 mb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Mi Historia
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-lg">
              <p>
                Desde mis primeros kilómetros en Concepción, descubrí que correr es mucho más que un ejercicio: es una forma de conectar. La brisa del Biobío fue mi primer entrenador, y desde entonces no he parado.
              </p>
              <p>
                Como líder de <span className="text-white font-bold italic">Social Girl</span>, mi misión es crear un espacio donde cada mujer se sienta bienvenida, motivada y capaz de superar sus propios límites, siempre con un buen café de por medio al terminar la ruta.
              </p>
              <p>
                Creo firmemente que el ritmo más importante no es el que marca el reloj, sino el que nos permite conversar, reír y disfrutar del paisaje juntas.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-secondary rounded-full"></span>
              Mi Ruta Favorita
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
              <div className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXZe2sbXL3jbh6L-JDBojsmw95LEUjd_Yb6HuRL4RfmcZI13r3_rarMzAA_XWW1btjN6lBSjgFUaNUlGSRzGXhES3_7wdqyOJUmaAJv53NtQCZyOIyGdjXbb4EVXWqhYgKZaLses2vcChAgc-ooohS7xdOxikiabyaxymOJkOM1u9KyP74NEJs7-0itzXpBa0eJjxar1LNqtC3dq98ZL2y4kfAc_finvtpx5PFpG4qlR0bvx7AF6-QUeV4vqHCtkjAnBOY-ZjVecUk")'}}>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 class="text-xl font-bold">Desembocadura del Biobío</h4>
                  <span className="bg-secondary/20 text-secondary text-[10px] px-2 py-1 rounded font-bold">MODERADA</span>
                </div>
                <p className="text-white/60 text-sm italic">"La mezcla perfecta entre bosque y mar. El aire aquí te renueva por completo después de cada subida."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sessions List */}
        <section className="mb-24" id="sesiones">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-black mb-2 uppercase italic tracking-tighter">Próximas Sesiones</h2>
              <p className="text-white/50">Únete a nuestras salidas de Social Girl esta semana.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-white/10 mx-10 mb-4"></div>
          </div>
          <div className="space-y-4">
            {/* Session Item */}
            <div className="group bg-white/5 border border-white/10 hover:border-primary/50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-white/[0.07]">
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="bg-primary/20 text-primary w-16 h-16 rounded-xl flex flex-col items-center justify-center font-black">
                  <span className="text-xs uppercase">Oct</span>
                  <span className="text-2xl">24</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">Social Girl: Trote Suave & Brunch</h4>
                  <p className="text-white/50 text-sm flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Campus UdeC, Concepción
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto justify-between">
                <div className="text-right">
                  <p className="text-white/80 font-bold">07:30 AM</p>
                  <p className="text-white/40 text-xs">8km - Ritmo Conversacional</p>
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                  Anotarme
                </button>
              </div>
            </div>
            {/* Session Item */}
            <div className="group bg-white/5 border border-white/10 hover:border-primary/50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-white/[0.07]">
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="bg-primary/20 text-primary w-16 h-16 rounded-xl flex flex-col items-center justify-center font-black">
                  <span className="text-xs uppercase">Oct</span>
                  <span className="text-2xl">27</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">Hill Challenge: Caracol</h4>
                  <p className="text-white/50 text-sm flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Cerro Caracol, Concepción
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto justify-between">
                <div className="text-right">
                  <p className="text-white/80 font-bold">08:00 AM</p>
                  <p className="text-white/40 text-xs">6km - Desnivel Positivo</p>
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                  Anotarme
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-24">
          <h2 className="text-center text-white/30 text-xs font-black uppercase tracking-[0.3em] mb-12 italic">Lo que dicen de correr con Fran</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left space-y-4">
              <span className="material-symbols-outlined text-primary/40 text-4xl">format_quote</span>
              <p className="text-xl italic font-medium leading-relaxed">
                "Empecé con mucho miedo a no poder seguir el ritmo, pero Fran me hizo sentir parte del grupo desde el segundo uno. Su energía es contagiosa."
              </p>
              <p className="text-primary font-bold text-sm">— Elena M., Miembro desde 2023</p>
            </div>
            <div className="text-center md:text-left space-y-4">
              <span className="material-symbols-outlined text-secondary/40 text-4xl">format_quote</span>
              <p className="text-xl italic font-medium leading-relaxed">
                "Las mejores rutas de Concepción las conocí gracias a ella. No solo es una guía, es una mentora que te empuja a ser tu mejor versión."
              </p>
              <p className="text-secondary font-bold text-sm">— Carla R., Miembro desde 2022</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-white opacity-50">
            <div className="size-5">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 class="text-sm font-bold tracking-tight">Stride Chile</h2>
          </div>
          <p class="text-white/40 text-xs">© 2024 Stride Chile. Hecho para la comunidad que nunca para.</p>
          <div class="flex gap-6">
            <a class="text-white/40 hover:text-primary transition-colors" href="#">Instagram</a>
            <a class="text-white/40 hover:text-primary transition-colors" href="#">Strava</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;