import { Link } from 'react-router-dom';

const InscriptionSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark pt-20 px-6">
            <div className="max-w-lg w-full text-center">
                {/* Success Icon */}
                <div className="mb-8 relative">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 animate-pulse">
                        <span className="material-symbols-outlined text-white text-6xl">check</span>
                    </div>
                    <div className="absolute inset-0 w-32 h-32 mx-auto bg-primary/20 rounded-full blur-2xl"></div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    ¡Inscripción <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Exitosa</span>!
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    Tu lugar está confirmado. Nos vemos en la próxima carrera.
                </p>

                {/* Info Card */}
                <div className="bg-surface-dark border border-white/10 rounded-3xl p-6 mb-8 text-left">
                    <h3 className="text-white font-bold text-lg mb-4">Próximos pasos:</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary">chat</span>
                            <div>
                                <p className="text-white font-medium">WhatsApp</p>
                                <p className="text-gray-500 text-sm">Recibirás una invitación al grupo temporal del evento.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary">qr_code_2</span>
                            <div>
                                <p className="text-white font-medium">Tu QR de acceso</p>
                                <p className="text-gray-500 text-sm">Está disponible en tu perfil para el check-in.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#00BCD4]">location_on</span>
                            <div>
                                <p className="text-white font-medium">Punto de Encuentro</p>
                                <p className="text-gray-500 text-sm">Parque Bicentenario, 19:15 hrs para check-in.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/profile/events"
                        className="flex-1 h-14 px-8 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:brightness-110 transition-all"
                    >
                        <span className="material-symbols-outlined">qr_code_2</span>
                        Ver mi QR
                    </Link>
                    <Link
                        to="/"
                        className="flex-1 h-14 px-8 bg-white/10 border border-white/10 rounded-full text-white font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                    >
                        <span className="material-symbols-outlined">home</span>
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InscriptionSuccess;
