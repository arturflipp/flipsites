import { Check } from 'lucide-react';

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        O Melhor Investimento do <span className="text-violet-500">Seu Mês</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Preço transparente. Sem letras miúdas.
                    </p>
                </div>

                <div className="max-w-lg mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                        <div className="relative bg-slate-900 ring-1 ring-white/10 rounded-2xl p-8 md:p-12">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                                    Mais Popular
                                </span>
                            </div>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-bold text-white">R$ 50</span>
                                <span className="text-slate-400">/mês</span>
                            </div>

                            <ul className="space-y-4 mb-10 text-slate-300">
                                {[
                                    'Domínio Grátis (.com.br)',
                                    'Hospedagem Inclusa (AWS)',
                                    'Certificado de Segurança SSL',
                                    'Botão Flutuante WhatsApp',
                                    'Design Premium Responsivo',
                                    'Suporte Técnico Dedicado'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex bg-blue-500/10 rounded-full p-1">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/5511999999999" // Example link
                                className="block w-full text-center py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-colors shadow-lg shadow-blue-600/25"
                            >
                                Garantir meu Preço
                            </a>

                            <p className="mt-6 text-center text-xs text-slate-500">
                                Taxa única de ativação: R$ 150,00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
