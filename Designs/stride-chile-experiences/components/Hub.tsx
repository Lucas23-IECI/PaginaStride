import React from 'react';
import { ViewState, Experience } from '../types';

interface HubProps {
    onNavigate: (view: ViewState) => void;
}

const experiences: Experience[] = [
    {
        id: ViewState.SOCIAL_RUN,
        title: "Social Run",
        description: "Corre en comunidad cada martes y jueves. Todos los ritmos bienvenidos.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCymrBjJc_xHHu36JIrgp-KvzfNKrxhHpMnCdzDFHB1tpdGxTrww29jWxMQOTD3oUXXrse7yXAzTSN_yN8Gf2qXxr5nX1BVl-d9r2UD1qWyzKHpguoxhFxsEB_hLLfKOYdjsN3RSSsb2s2JnKsgdu4q9pI8qcS3qTnEUlS_YPsr6z8X9p4DjhD5PUjC__O3K_AzhH4nufQSnASdofyP4gU8Gj06gBJSxtTsTFwdZy4XfUg5MjQ5ocVQmwRS-FCkSSO-xwZAK-vCa1Ko",
        color: "text-primary",
        icon: "groups"
    },
    {
        id: ViewState.SOCIAL_GIRL,
        title: "Social Girl",
        description: "Potencia femenina en cada paso. Un espacio seguro y motivador.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-F59hcnE2dySwfwSvWfhDLbMDqHDRbD_2RPk7GFODX1_ql3wznG7d1pSjyBwYCDXjubZ0TMI5Tyf1YSCXj5GS17N1p78qy_FybbubboKlRQgqOMhiiZ7amgOVZd6ltYq0mWGsdlgtJbViSw5N1lF8qs2aEzZAKqktlo4TBiiXClSBLHQmqHWXE-sz1Z-f2FIyIGVuDNHtorea6D0fpSFSFEThmqToHZxkBtWD4aX5Ywf3AGYjOOtaX3J4k26cRmjJHFeBpgOov5z",
        color: "text-[#e92063]",
        icon: "female"
    },
    {
        id: ViewState.BRUNCH_YOGA,
        title: "Brunch & Yoga",
        description: "Equilibrio y bienestar. Conecta cuerpo y mente, luego disfruta.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLMNOH8KIdBff0vOm5fqogod8w_x2GdIrggSXYDHIMADCheStOcv4-zTfkz88g0ktXPCzxMcFU6ljmsyekLLhgDhHbGyg-rA1SWilt_5t08x7hVwdxtCnA8Zh7OsgofVRi1IX1EZWYKwpfWRvLt7JEb2ZZTdyYNPRr8_V-mrOcR1Hp6Y89vd4wYpeMtvbGfdASDHBq6ac8VOwxbfc1TEBq4iY13l3fGHtFMTBTyZp-wVSl3-ZxySnc_GBpTwWzsKbmNwZPOxP7m9vJ",
        color: "text-[#FFC107]",
        icon: "self_improvement"
    },
    {
        id: ViewState.BENEFIT,
        title: "Benefit",
        description: "Impacto real en Concepción. Corremos por causas que importan.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFNBZhTzyPdO0p8x6P2WjAQwUE0m0AH0dQnqFLzdsx-xMj5lwg0tf0oBDiKbFpgJ8qjsX9WVkSIKeHceCqYqokbHFeVN9qIx1rXv04ySdBM4U6bwbn1iAObR427PdUZePiGic0T6E8BBDQV7A9yoPGx8jwtWrMEg_0giEMxRiDzBRAdEOhsaxT50kobd0JxuYp3KEXqOGMoDDxvs-ykLdmxH9HjQ-Xrv6xJ77m21OJXW-Qiyrby3aZ5qJn5xoHRPk_rSmP6eNycwrj",
        color: "text-[#135bec]",
        icon: "volunteer_activism"
    }
];

export const Hub: React.FC<HubProps> = ({ onNavigate }) => {
    return (
        <div className="flex flex-col items-center w-full animate-fade-in">
            {/* Hero Hub */}
            <section className="relative w-full flex justify-center py-5 md:py-10 px-4 md:px-10 z-10">
                <div className="max-w-[1200px] w-full relative rounded-2xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-6 md:p-12 shadow-2xl border border-white/10 group">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-105" 
                        style={{backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.4) 0%, rgba(26, 26, 26, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCONfhiOXKZokLVlDAIruMyeYDKTKpRGyhjBuSND2bVbWGYRh2OjHBOKNYLnaxFgnl5LzlcKc0dn4wfKi2Jx-65ja8zz-LgXYkZIkQU_C4opSbgKX3ossaWvQQDuk0k2O6IfKHUvloqxrH5NrV1IeqeXNOrvFhPFnijhkihOgj507LOyiovBOEyn_SDCzQY0gTIHyIUt2PBQ90R_UFe7vSA4GUvU0r74JIfZv1MnVcLMbNchCbZAvKV_Wy2CE_PrpZuzYgOATpogsBg")'}}>
                    </div>
                    
                    <div className="relative z-10 flex flex-col gap-6 max-w-3xl items-center">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-sm mb-2">
                            <span className="text-primary text-xs font-bold tracking-wider uppercase">Comunidad Running #1 en Concepción</span>
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.033em] drop-shadow-xl font-display">
                            VIVE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff4d94]">EXPERIENCIA</span> STRIDE
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            Más que correr, es ser parte de algo más grande. Únete a la revolución del movimiento.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Title */}
            <section className="w-full flex justify-center pt-8 pb-4 px-4 z-10">
                <div className="max-w-[960px] w-full text-center">
                    <h2 className="text-white text-[32px] md:text-[40px] font-extrabold leading-tight pb-3">
                        Nuestras Experiencias
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Grid */}
            <section className="w-full flex justify-center py-5 px-4 md:px-10 z-10 mb-20">
                <div className="max-w-[1200px] w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {experiences.map((exp) => (
                            <div 
                                key={exp.id}
                                onClick={() => onNavigate(exp.id)}
                                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl aspect-[3/5] cursor-pointer transition-transform duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl border border-white/5"
                            >
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url("${exp.image}")`}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                                <div className={`absolute inset-0 bg-gradient-to-t ${exp.color.replace('text-', 'from-')}/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 mix-blend-overlay`}></div>
                                
                                <div className="relative z-10 p-6 flex flex-col gap-3">
                                    <div className={`size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center ${exp.color} mb-2 border border-white/20`}>
                                        <span className="material-symbols-outlined">{exp.icon}</span>
                                    </div>
                                    <h3 className="text-white text-2xl font-bold leading-tight">{exp.title}</h3>
                                    <p className="text-gray-200 text-sm font-medium leading-snug line-clamp-2">{exp.description}</p>
                                    <div className="mt-2 flex items-center text-white text-sm font-bold group/btn">
                                        Ver más 
                                        <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
