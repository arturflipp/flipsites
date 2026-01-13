import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Autorize",
        desc: "A gente cria o modelo sem compromisso. Você não paga nada para ver o primeiro rascunho.",
        delay: 0
    },
    {
        number: "02",
        title: "Aprove",
        desc: "Veja como ficou no seu celular. Ajustamos os detalhes até ficar perfeito para você.",
        delay: 0.2
    },
    {
        number: "03",
        title: "Ative",
        desc: "Gostou? Pague a taxa única de ativação e vire o jogo. Seu site no ar em 24h.",
        delay: 0.4
    }
];

export const StepsSection = () => {
    return (
        <section id="how-it-works" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Seu site no ar em <span className="text-gradient">3 passos</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line - Animated */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 origin-left"
                    />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay, duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-slate-800 border-2 border-blue-500/20 flex items-center justify-center text-4xl font-bold text-blue-500 mb-8 relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.15)] mx-auto md:mx-0 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 bg-slate-900">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left group-hover:text-blue-400 transition-colors">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-center md:text-left">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
