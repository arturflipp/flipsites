import { Coins, Settings, Layout, ArrowRight } from 'lucide-react';

const FlipCard = ({ frontTitle, backTitle, backDesc, icon: Icon }: any) => {
    return (
        <div className="group h-[320px] w-full perspective-[1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{frontTitle}</h3>
                    <p className="text-slate-400 text-sm mt-4 group-hover:opacity-0 transition-opacity">
                        Passe o mouse para ver
                    </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-xl font-bold text-white mb-4">{backTitle}</h3>
                    <p className="text-white/90 leading-relaxed mb-6">
                        {backDesc}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FlipSection = () => {
    return (
        <section id="flip" className="py-24 relative bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Por que <span className="text-gradient">'Flip'</span>?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Não é só um site bonito. É uma estratégia completa para virar o jogo do seu negócio.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FlipCard
                        icon={Coins}
                        frontTitle="Zero Custo de Criação"
                        backTitle="Esqueça o investimento inicial"
                        backDesc="Você não paga milhares de reais pelo desenvolvimento. Apenas a ativação e mensalidade."
                    />
                    <FlipCard
                        icon={Settings}
                        frontTitle="Manutenção Inclusa"
                        backTitle="Tudo por nossa conta"
                        backDesc="Hospedagem, domínio e segurança SSL. Nós cuidamos da parte técnica para você focar em vender."
                    />
                    <FlipCard
                        icon={Layout}
                        frontTitle="Design de Alta Conversão"
                        backTitle="Feito para vender"
                        backDesc="Layouts pensados psicologicamente para transformar visitantes em clientes no WhatsApp."
                    />
                </div>
            </div>
        </section>
    );
};
