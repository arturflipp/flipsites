import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center pt-24 lg:pt-20 overflow-hidden bg-[#030712]">
            {/* Aurora Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="aurora-blob top-0 left-[-10%] w-[35rem] h-[35rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob"></div>
                <div className="aurora-blob top-0 right-[-10%] w-[35rem] h-[35rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
                <div className="aurora-blob bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-violet-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-semibold mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Novidade: Planos a partir de R$ 50
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-['Plus_Jakarta_Sans'] font-bold leading-[1.1] mb-6 tracking-tight">
                        Seu Negócio Precisa de um <span className="text-gradient">Site Profissional</span>.
                    </h1>

                    <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                        Transformamos sua presença digital com sites de alta conversão, design premium e manutenção completa. Você cuida do negócio, nós cuidamos do clique.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-0">
                        <motion.a
                            href="#pricing"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 transition-shadow duration-300"
                        >
                            Quero meu site por R$ 50/mês
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <a
                            href="#how-it-works"
                            className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-semibold flex items-center justify-center transition-colors backdrop-blur-sm"
                        >
                            Ver como funciona
                        </a>
                    </div>

                    <div className="mt-10 hidden sm:flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Entrega em 7 dias</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Suporte Humanizado</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Visual - Visible on Mobile too now */}
                <div className="hidden lg:flex relative h-[600px] items-center justify-center perspective-[2000px] w-full mt-8 lg:mt-0">
                    <motion.div style={{ opacity, y: y1 }} className="relative w-full h-full flex items-center justify-center pointer-events-none">
                        {/* Back Card (Phone) */}
                        <motion.div
                            style={{ rotateY: -15, rotateX: 10, z: -100 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute right-[5%] lg:right-20 top-0 lg:top-20 w-[180px] lg:w-[280px] h-[380px] lg:h-[580px] bg-slate-900 rounded-[2rem] lg:rounded-[3rem] border-[4px] lg:border-8 border-slate-800 shadow-2xl overflow-hidden z-20"
                        >
                            <div className="w-full h-full bg-slate-800/50 relative">
                                <div className="h-full w-full bg-gradient-to-b from-slate-900 to-slate-950 p-3 lg:p-4 space-y-3 lg:space-y-4">
                                    <div className="w-1/2 h-3 lg:h-4 bg-slate-800 rounded-full animate-pulse" />
                                    <div className="w-full h-24 lg:h-32 bg-blue-500/20 rounded-lg lg:rounded-xl" />
                                    <div className="space-y-2">
                                        <div className="w-full h-2 bg-slate-800 rounded-full" />
                                        <div className="w-3/4 h-2 bg-slate-800 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Front Card (Desktop) */}
                        <motion.div
                            style={{ rotateY: 15, rotateX: 5 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, y: [0, 20, 0] }}
                            transition={{
                                scale: { duration: 0.8, delay: 0.2 },
                                opacity: { duration: 0.8, delay: 0.2 },
                                y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                            }}
                            className="absolute left-[5%] lg:left-0 top-[20%] lg:top-[unset] w-[280px] sm:w-[500px] lg:w-[600px] h-[180px] sm:h-[300px] lg:h-[400px] bg-slate-900 rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-30"
                        >
                            <div className="h-6 lg:h-8 bg-slate-800 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="p-4 lg:p-8 grid grid-cols-2 gap-4 lg:gap-8 h-full bg-slate-950/50 backdrop-blur-sm">
                                <div className="space-y-3 lg:space-y-4">
                                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg bg-blue-500/20" />
                                    <div className="h-4 lg:h-8 w-3/4 bg-white/10 rounded" />
                                    <div className="h-12 lg:h-20 w-full bg-slate-800/50 rounded" />
                                </div>
                                <div className="h-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                                    <div className="text-white/20 font-bold text-2xl lg:text-4xl">FLIP</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
