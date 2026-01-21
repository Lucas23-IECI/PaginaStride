// ============================================
// REGISTRATIONS - Gestión de mis Runs
// Fuente: HTML #5 - MIS RUNS
// ============================================

interface HistoryItem {
    date: string;
    title: string;
    subtitle: string;
    location: string;
    level: string;
    points: number;
    image: string;
}

const Registrations = () => {
    const history: HistoryItem[] = [
        {
            date: '05 Oct, 2023',
            title: 'Morning Run',
            subtitle: '',
            location: 'Providencia',
            level: 'Social',
            points: 100,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjn4mFKvXAGSGSaK_tKfyd6zyUKmSy92h7a2Ths9PJSDb9A2M4Q3c4Tnr1mtLYkdOxbASVZJDMfU2neBOrML37mdeb39f6hawKOUaRtMS1LV_JXvTZlV7DfK_PF1c-mFDmTnNQVAmcy2YR-3GHF7SvPEX22vkr_Rfih0J1_6bqdp5hv3sbYcPzyGhvDQ09TCX2WS2uAYhHAP3aPcM7Ul279rol7i-6_Pk64_UlNv5PfF7c_mRHPquhZnxi5fyNz6kgCoBIjnZ0VowO'
        },
        {
            date: '28 Sep, 2023',
            title: 'Night Owl Run',
            subtitle: '',
            location: 'Las Condes',
            level: 'Intermedio',
            points: 150,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo-UsW7cr56-oV8Wcv7DGMVWV-403TfA3FRCNsFN05jGnkonlELUEev1B-5DO9G7mor0iM7JLbn-MIuYflb3Eow1I6MWb00LduEHbMPPjCGBpq3r-nHxSVfBNFcNZ2GFHxOROyvRpMIndiVzIlq9PzojWG0soFwD_twBU4Nvj6Lvwyy6nZ5c3NPfoYfrFX14uh_Gx_cpkh_7mgpvxIJ2EFs5Wd68YPvujqpSqoQn4zMRu5BGb1SMf64gEaaVa1dpuov1XBkCABTpaP'
        },
        {
            date: '15 Sep, 2023',
            title: 'Sunday Long Run',
            subtitle: '',
            location: 'Vitacura',
            level: 'Avanzado',
            points: 200,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5pmAROY77O9wZD4J5mM2fXIrVmeBqN_jYSK3lA9LzKBFto57S86PPFa1wrsNoguPrqvkmdPAMC-kbml9brdDZENI0tiU1HB7digwQMhKHFVh0wKRs-CGTJvykUGtbIZ41JKhr68_jV1W-kIuQB-hY88A78TsP6L4JH8303qlqkHRpz1Ezm7JVp2Na78H92UzNAedRjbTECZS-vCnly3zQxEzkDecjh9g3sYioVVv7dG6gv4v3bvtz04w8ut6KLssNsxWhTRMEpYZm'
        }
    ];

    return (
        <div className="max-w-[1024px] mx-auto px-4 py-8 flex flex-col gap-8">
            {/* Profile Summary Section */}
            <section className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-surface-dark p-6 rounded-2xl shadow-lg border border-white/5">
                <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/20 p-1 transition-all group-hover:border-primary">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_y7yTyXZ0KszhSJvrtqT_Z1okxNoxBHmvvoRWxjs-qLt7uPSld2W2QNKbQ1FoIejglg4gHHOQjE1CIIsTCViUIh7YIGOJ3hgW-KB_iA27sbr66VcNyVoBkm4bZUtmczICrXJVABbCWwLsPdwxkouivQCPCzpZh5r9m8U0Ypj3MsNJHPlGAaHkV5v7FIA1SMDV1Czn1zr0avFr7xP_amKPEzcpGf1ztg7L3X1bNLdDnkEM8At_A8JqYlRV3ZIJ0_doanzHZBJ_idQ"
                            alt="Avatar"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-surface-dark flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">edit</span>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start flex-1 gap-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Hola, Matías</h1>
                        <span className="bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-full border border-secondary/20">Corredor Elite</span>
                    </div>
                    <p className="text-gray-400 text-sm">Miembro desde Marzo 2023</p>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Puntos</span>
                            <span className="text-2xl font-black text-primary">1,250</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Runs Completados</span>
                            <span className="text-2xl font-black text-white">14</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page Heading */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Gestión de mis Inscripciones</h2>
                <p className="text-gray-400">Administra tus próximos eventos, edita tu nivel o revisa tu historial.</p>
            </div>

            {/* Active Registrations Section */}
            <section className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">event_upcoming</span>
                        Inscripciones Activas
                    </h3>
                </div>

                {/* Warning Banner */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-3 items-start">
                    <span className="material-symbols-outlined text-red-400 mt-0.5">warning</span>
                    <div className="flex flex-col gap-1">
                        <p className="text-red-200 text-sm font-medium">Política de Cancelación</p>
                        <p className="text-red-300/80 text-xs leading-relaxed">Si cancelas tu participación con menos de 24 horas de antelación, se descontarán los Puntos Sociales asociados a este evento.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Card 1 */}
                    <div className="bg-surface-dark rounded-xl p-4 md:p-5 shadow-lg border border-white/5 flex flex-col md:flex-row gap-5 hover:border-white/10 transition-all group">
                        <div className="w-full md:w-48 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <div className="absolute bottom-2 left-2 z-20 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">location_on</span>
                                Santiago
                            </div>
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAufITRpFYPZJAlOcXo5BdVa0k5ZjIztbbqYrnqsat90ExmBuyuiARQddKAIw_trr-BNPIkg4OFvg2qMX9Ibzlqob4qTkRRFWWzsMC3kTozSSF8V3a0Y7klDZ5-sp1fnGFQzwLd7n2M7KWFKCpbk1oe3HC9Oz3nLeLhXIGgvKiKOfTUI7KpIVTwdT9Xg2hJV0ChRFV0zyCJQHHIzdnlKEeulVZ0Q14AdLXNLiN4BDWehmjYaoIZ8VicT7r5XnfOpG4PHbRco4zSP3j1"
                                alt="Event"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <span className="bg-secondary/20 text-secondary text-xs font-bold px-2.5 py-1 rounded-full border border-secondary/30">Nivel Intermedio</span>
                                    <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">+ 150 Pts</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-bold leading-tight mb-1">Stride Parque Forestal</h4>
                                    <div className="flex flex-col text-sm text-gray-400 gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                            <span>Jueves 12 de Octubre</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                                            <span>19:00 hrs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2 border-t border-white/5 pt-4">
                                <button className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-semibold h-10 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                    Editar Nivel
                                </button>
                                <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/5 transition-colors" title="Darse de baja">
                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-surface-dark rounded-xl p-4 md:p-5 shadow-lg border border-white/5 flex flex-col md:flex-row gap-5 hover:border-white/10 transition-all group">
                        <div className="w-full md:w-48 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <div className="absolute bottom-2 left-2 z-20 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">location_on</span>
                                Viña del Mar
                            </div>
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeslCKuUd8nTgZZAZ0Kr5VNuhVHZgg4wByMW8GBSXbYV_Ikp_ZooxjW66xLNtO5yKnXuVOFsyQtWVLkAB87eYQ3Y2KcNJ4oSRYi8WoQCLLo0cQlrk3nPVbL6uar9aMUhjvkIkUbi_LvKVnpe7kMrrljfcsuMnlZWT46iRGBNBYIr5Y9c5bf7izjSJg3AyPLJvqT7KWwVO9ub9fX7FlQUa0hY2BqVJcF5GkKyJWLdFnAdPeIWGH5Wut9o0Llsdx0P97cx0FGl_Z5IBC"
                                alt="Event"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-2.5 py-1 rounded-full border border-purple-500/30">Nivel Avanzado</span>
                                    <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">+ 200 Pts</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-bold leading-tight mb-1">Stride Costanera Norte</h4>
                                    <div className="flex flex-col text-sm text-gray-400 gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                            <span>Sábado 21 de Octubre</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                                            <span>08:30 hrs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2 border-t border-white/5 pt-4">
                                <button className="flex-1 bg-surface-dark border border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold h-10 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                    Editar Nivel
                                </button>
                                <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/5 transition-colors" title="Darse de baja">
                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="flex flex-col gap-5 mt-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">history</span>
                    Runs Pasadas
                </h3>
                <div className="bg-surface-dark border border-white/5 rounded-xl overflow-hidden shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-xs uppercase text-gray-500 bg-white/5">
                                    <th className="p-4 font-semibold">Evento</th>
                                    <th className="p-4 font-semibold hidden md:table-cell">Ubicación</th>
                                    <th className="p-4 font-semibold">Nivel</th>
                                    <th className="p-4 font-semibold text-right">Puntos</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {history.map((item, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img src={item.image} className="w-10 h-10 rounded-full object-cover" alt="Run" />
                                                <div>
                                                    <p className="font-bold text-white">{item.title}</p>
                                                    <p className="text-gray-400 text-xs">{item.date}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-300 hidden md:table-cell">{item.location}</td>
                                        <td className="p-4">
                                            <span className={`text-xs font-medium px-2 py-1 rounded 
                        ${item.level === 'Social' ? 'text-emerald-400 bg-emerald-400/10' :
                                                    item.level === 'Intermedio' ? 'text-secondary bg-secondary/10' :
                                                        'text-purple-300 bg-purple-500/20'}`}>
                                                {item.level}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right font-bold text-primary">+{item.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registrations;
