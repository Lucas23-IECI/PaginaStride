import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-white selection:bg-primary/30">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4 md:px-20 lg:px-40 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"></path>
            </svg>
          </div>
          <h2 class="text-white text-xl font-bold tracking-tight">Stride Chile</h2>
        </Link>
        <div class="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav class="flex items-center gap-8">
            <Link className="text-white/80 hover:text-primary text-sm font-medium transition-colors" to="/">Inicio</Link>
            <Link className="text-white text-sm font-bold border-b-2 border-primary" to="/nosotros">Sobre Nosotros</Link>
            <Link className="text-white/80 hover:text-primary text-sm font-medium transition-colors" to="/entrenamiento">Entrenamientos</Link>
            <Link className="text-white/80 hover:text-primary text-sm font-medium transition-colors" to="/aliados">Comunidad</Link>
          </nav>
          <Link to="/entrenamiento" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20">
            Unirse al Club
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 md:px-20 lg:px-40 py-10">
          <div className="@container">
            <div className="relative overflow-hidden rounded-xl lg:rounded-3xl min-h-[500px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAm51431RSDaQ43yX4Z9aFxUjyLkvRZZULDjQa89Q_S9IhHlj1_DbofVss3tCEHZPAu8RGZAeMAYSB5YDWMvcnPk_ShZ1UVUyc-rOfdE6rjEr6Cy14-5KftyEoz0wWzvkzSD0kyzSDR2JGBqqTqY6LFIH2qm9doRPZGd9F_vMlKEn7zscRLHKbFnHSOI6Qo-9HiWf5XlbX7cU09WZDvbRzeS8enIJ-YXOSA9BLhXbwLGCapGH04cSNVBFZn65Xk1HTV3S48pKrlhyjx")'}}>
              <div className="max-w-3xl space-y-6">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight uppercase">
                  MÁS QUE UN CLUB,<br /><span className="text-primary">UNA TRIBU</span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-medium">
                  La historia detrás de los kilómetros en Concepción
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-transform">
                    Conoce más
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all">
                    Ver Galería
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="px-6 md:px-20 lg:px-40 py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px grow bg-white/10"></span>
              <h2 className="text-3xl font-bold tracking-tight text-center">Nuestra Historia</h2>
              <span className="h-px grow bg-white/10"></span>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-x-8">
              {/* Item 1 */}
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div className="w-0.5 bg-white/10 h-20 grow"></div>
              </div>
              <div className="pb-12 pt-2">
                <h3 className="text-xl font-bold text-primary mb-1">El Origen</h3>
                <p className="text-white/60 text-sm mb-3">Septiembre 2022 - Fundación en Concepción</p>
                <p className="text-white/80 leading-relaxed">
                  Stride nació de la necesidad de encontrar un espacio donde el rendimiento deportivo no fuera el único protagonista. Comenzamos como un pequeño grupo de amigos trotando por la costanera de Concepción.
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary-cyan/20 text-secondary-cyan border border-secondary-cyan/30">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div className="w-0.5 bg-white/10 h-20 grow"></div>
              </div>
              <div className="pb-12 pt-2">
                <h3 className="text-xl font-bold text-secondary-cyan mb-1">Crecimiento</h3>
                <p className="text-white/60 text-sm mb-3">2023 - Expandiendo la Tribu</p>
                <p className="text-white/80 leading-relaxed">
                  Lo que empezó con 5 personas se convirtió en una comunidad de más de 100 integrantes activos. Sumamos guías especializados y diversificamos nuestras rutas por todo el Gran Concepción.
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-primary mb-1">Nuestra Misión</h3>
                <p className="text-white/60 text-sm mb-3">Hoy - El running como excusa para socializar</p>
                <p className="text-white/80 leading-relaxed">
                  Creemos firmemente que correr es el mejor vehículo para conectar personas. Nuestra misión es fomentar un estilo de vida saludable donde la comunidad sea el motor principal de cada kilómetro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fundadores */}
        <section className="px-6 md:px-20 lg:px-40 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center md:text-left uppercase border-l-4 border-primary pl-6">Fundadores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Creador */}
              <div className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 aspect-square bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0G_Iiu-gEvi9xq0nUxCQKLo5dEc0VjduQzsxW7Moqy_pQ5NBZ9C9mud0D_YHA8yojiHCRCAkwfrKLoJWsLEwYvQgSD8isDngyL7IwRctvFMPH0yOPiyu6EqkTk-mT7_kSwA53MDLJDhCuIsfyQh9CKed0znl0EFuu1fQZ3N0MQpoGJ1vS-yozXi9zymOzt5vPqG-G9WWtlPhx0_IPZ27qGGj5QqforIVsjjfWd7Giq9epyhq9NkXSRzkdsT5BmZG_5hPrV9q_dY5t")'}}></div>
                  <div className="p-8 lg:w-3/5 flex flex-col justify-center">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Creador</span>
                    <h3 className="text-2xl font-bold mb-4">Sebastián Rivas</h3>
                    <p className="italic text-white/70">"Fundé Stride para que nadie más tuviera que correr solo en esta ciudad. Buscamos impacto, no solo velocidad."</p>
                  </div>
                </div>
              </div>
              {/* Co-Creador */}
              <div className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-secondary-cyan/50 transition-all">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 aspect-square bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD91JCpYtiXFIYGYuQgqZx7YsZrthXqhBVRvtIT338zJ3rTI1KunOADaHbr1Z48chivg-gHM7l93P6kJ_crXMG9_Gb9JbudBWqImuQMVUkYdnZQ3PNbsh5f1Oj-HcIUX9BG_garQ7rIhCpYda1bLHRU-jONWWQTNIGGUvbB9uYiuhg2MZR6lVFAC_XrsHfxndP5e_WLj4zUnCysq35zaws0oojdxUwfURyvi3eremxkz4pKyrz_XR169R5o7AuakTCcVI0xluJHdEwH")'}}></div>
                  <div className="p-8 lg:w-3/5 flex flex-col justify-center">
                    <span className="text-secondary-cyan font-bold text-sm tracking-widest uppercase mb-2">Co-Creadora</span>
                    <h3 className="text-2xl font-bold mb-4">Valentina Paz</h3>
                    <p className="italic text-white/70">"La magia ocurre cuando cruzamos la meta juntos. Stride es el corazón de Concepción en movimiento."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Guías */}
        <section className="px-6 md:px-20 lg:px-40 py-20 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight uppercase">Nuestros Guías</h2>
                <p className="text-white/60 mt-2">Los rostros que lideran cada zancada</p>
              </div>
              <div className="h-1 bg-primary/20 flex-1 mx-8 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Guía 1 */}
              <div className="flex flex-col group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8PKoyu69Hv0U2F8nfkk6nmW3W3f9GfAyN2NZtEe_Qhq9ihsQF0tSl33yOklYn2RGSZ0pIVBmvOGhOPXZmDNAZ0xXPFIxu7g5zBG0IEcDcQGT7UoM6bs5m0Z3mQnrsCSuWVLgogM0F6DLJ18N5-XsHEj-fH4HbSe5iamyGKhnM3foMGu1ctIOka8SOxrsoiL-HlIx7VOf4X6bRM-laBOyInE4GJGrTt78QXrp-gBSV2IT1Vao0XOTP72xOnPNngqHKdo-0HKyIdtFo")'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Social Girl</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg">Fran</h4>
                <Link to="/perfil" className="mt-2 text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver Perfil <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              {/* Guía 2 */}
              <div className="flex flex-col group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGgLzJqHt8GyYK4FdxdQlgKuXHiGT052fM6STUlRHO-I6q9SBhRRmelgHEJLko9PgaXB6ebmqsQkk3-_nPmk-EuQo3FrjElV69jTEafoSVTIxfBTr3l8VgOt8z3kUkfNXMRQAqAjmkdF4Jl_2gF2bJ-JepONzi4ygjT0DQg2WQyKsTFtkx6D1iuZrCuy23gMpDu4SLV7Bydw-LTjCBAiT0T_kpqRub98H0I77m9wCEXLyLu8nLpMmciAv4_LpqpPJoIK0ieol41kOP")'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary-cyan/90 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">5K Lead</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg">Camilo</h4>
                <button className="mt-2 text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver Perfil <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Guía 3 */}
              <div className="flex flex-col group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPASFS9YWRb9bL3MHz1AOoxfCNWvmxLCVn641XaqeULHjlxduhnp8uHM9U9HrOOsl10qbe3QfX6BXUhW1RT1PHO2EAM_DpuR2cI5DV4G32qERRKlXGxqdjoeQosXWWqW2yfityyvd8pOtC06Fc4Z_rX3uQRO7OdnPx2e6QvDMuDl21k2UiCWXm5aDCdJkC0NkDKNJR4fvAGmf-4c4KMb7BYfUy79IVd0tQ88lx9lwbEHDXd9pXHTVHpYj376txb5UYjR3sNric5vhf")'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Pace Master</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg">Sofi</h4>
                <button className="mt-2 text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver Perfil <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Guía 4 */}
              <div className="flex flex-col group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzkBaPur3KTuuUoiqv0RkNSHe5ZXmqPEaAYRikZhTyeA0vlvKvDFZnabBEpiwymbROUktXKE8Uaw-07msBuvydTD7itilGkE-CmNyqFZeksjFNugg6PkVBNpdbUwpuZefKuuiCGCV6_N-uZqtgmOPsbw-z52YB49S7heBJlwjSSQni_x_x5iiT_Qg-eC7xaMJzsoz_tmjVzjYMLa6ROc-NNhSB7-cU9-SDJJb4KXq7DEzITuJdLRKQrtlnQpDhmZ5kR6NvIy8yaJJI")'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary-cyan/90 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Endurance</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg">Nico</h4>
                <button className="mt-2 text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver Perfil <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Guía 5 */}
              <div className="flex flex-col group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDP_V-QxBA4z0SHAkoEgygcyf1PqfegKIgUwHKqxmStLr7K7E7Pu8g1j4dA_LZAda_Q67zB2xV89JRAPjm0_SjTYwkLdoXqwBHJsZsqroOrmU6t4WPZ2ehcVWsXDMaBChohKFBcVbsoFtQFk45PkSmjgngWBKiO1l8Us-SA5I6FGE66VENzFDnC2BnEJPRVktPqRTK-eU-Pz_-Kjea7Tuzqv2eV4BRzgwuAmQ2yhBs4ifsbk5XMb-ODFdSemWiNfhk1nBqaOP6P93zs")'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Trail Lead</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg">Tomás</h4>
                <button className="mt-2 text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver Perfil <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Propósito y Valores */}
        <section className="px-6 md:px-20 lg:px-40 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">Nuestro Propósito</h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Comunidad */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
                <div className="size-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">diversity_3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Comunidad</h3>
                <p className="text-white/60">No dejamos a nadie atrás. Fomentamos lazos que van más allá del entrenamiento semanal.</p>
              </div>
              {/* Bienestar */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
                <div className="size-16 rounded-2xl bg-secondary-cyan/20 text-secondary-cyan flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Bienestar</h3>
                <p className="text-white/60">Corremos por salud física, pero sobre todo por salud mental y equilibrio personal.</p>
              </div>
              {/* Impacto Local */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
                <div className="size-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">location_on</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Impacto Local</h3>
                <p className="text-white/60">Amamos Concepción. Buscamos activar los espacios públicos de nuestra ciudad.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default About;