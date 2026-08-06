import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import { buildWhatsappUrl } from "@/lib/api";
import { useSettings } from "@/context/SettingsContext";

// Valores atualizados com base na nova identidade visual da Petrus
const VALUES = [
    ["Cuidado Humano", "As pessoas vêm em primeiro lugar. Respeitamos, ouvimos e apoiamos."],
    ["Segurança Psicológica", "Um ambiente seguro para falar, compartilhar e crescer."],
    ["Foco no Aprendizado", "Aprendemos juntos com as experiências para evoluir."],
    ["Confiança e Transparência", "Relações claras, honestas e consistentes constroem equipes fortes."],
];

export default function Sobre() {
    const { settings } = useSettings();
    return (
        <>
            <Seo
                title="Sobre a PETRUS — Consultoria de Segurança e Treinamentos"
                description="25 anos em Segurança do Trabalho e Gestão de Emergências. Especialistas em consultoria humanizada, planos de emergência e treinamentos."
            />

            <section className="relative border-b border-[color:var(--petrus-border)]">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Sobre nós</p>
                    <MaskedReveal
                        tag="h1"
                        className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-neutral-900 max-w-5xl"
                        lines={["25 anos protegendo", <span key="1">vidas e <span className="text-[color:var(--petrus-yellow)]">patrimônios</span>.</span>]}
                    />
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-14 lg:grid-cols-12">
                <FadeUp className="lg:col-span-6">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-neutral-600 mb-4">/ Experiência</p>
                    <p className="text-neutral-800 text-lg leading-relaxed">
                        Com 25 anos de atuação sólida em Segurança do Trabalho e Gestão de Emergências, a PETRUS Consultoria dedica-se a proteger a continuidade dos negócios. Nossa expertise operacional abrange Análise de Riscos, Planejamento de Resposta, Treinamentos e Simulados, entregando conhecimento prático que transforma planos em ações eficazes e confiáveis.
                    </p>
                </FadeUp>
                <FadeUp className="lg:col-span-6" delay={0.1}>
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-neutral-600 mb-4">/ Propósito</p>
                    <p className="text-neutral-800 text-lg leading-relaxed">
                        Protegendo pessoas. Desenvolvendo potencial. Salvando vidas é o nosso propósito. Adotamos uma consultoria humanizada focada em pessoas, processos e resultados, construindo ambientes seguros com empatia, eficiência e aplicando métodos práticos como a Abordagem HOP.
                    </p>
                </FadeUp>
            </section>

            <section className="bg-[color:var(--petrus-surface)] border-y border-[color:var(--petrus-border)]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Valores</p>
                    <h2 className="font-display uppercase text-4xl md:text-6xl text-neutral-900 mb-14 max-w-3xl leading-[0.9]">Nossa missão e valores.</h2>
                    <div className="grid md:grid-cols-2 gap-px bg-[color:var(--petrus-border)]">
                        {VALUES.map(([t, d], i) => (
                            <FadeUp key={t} delay={i * 0.05}>
                                <div className="bg-[color:var(--petrus-black)] p-8 md:p-12 h-full">
                                    <div className="font-mono-c text-[color:var(--petrus-yellow)] text-sm">/0{i + 1}</div>
                                    <h3 className="font-display uppercase text-3xl text-neutral-900 mt-4">{t}</h3>
                                    <p className="text-neutral-600 mt-4 leading-relaxed">{d}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-14 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Destaque</p>
                    <h2 className="font-display uppercase text-4xl md:text-5xl text-neutral-900 leading-[0.9] mb-6">
                        Equipe multidisciplinar com <span className="text-[color:var(--petrus-yellow)]">resultados comprovados</span>.
                    </h2>
                    <p className="text-neutral-700 leading-relaxed max-w-2xl">
                        Nossa equipe é formada por engenheiros, médicos do trabalho e psicólogos organizacionais. Comprovamos nossa eficiência com cases de excelência, como o <strong>Case Honda</strong>, onde alcançamos a marca de zero acidentes graves em operações industriais. Confiança e resultados práticos que geram valor.
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-[color:var(--petrus-border-hi)]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 8% 100%)" }}
                >
                    {/* Recomendo substituir esta imagem por uma foto real da equipe ou de um treinamento da Petrus */}
                    <img
                        src="https://images.unsplash.com/photo-1543357644-160b53c087e8?crop=entropy&cs=srgb&fm=jpg&auto=format&w=1200&q=85"
                        alt="Instrutor PETRUS em campo"
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>
            </section>

            <section className="border-t border-[color:var(--petrus-border)] bg-[color:var(--petrus-yellow)] text-black">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h3 className="font-display uppercase text-3xl md:text-5xl leading-tight mb-4">
                            Resultados eficientes com método prático.
                        </h3>
                        <div className="flex flex-col gap-2 font-mono-c text-sm font-bold tracking-wide">
                            <span className="flex items-center gap-2"><Phone size={16} /> 19 99684-0992</span>
                            <span className="flex items-center gap-2"><EnvelopeSimple size={16} /> petro_seg@hotmail.com</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                        <a href={buildWhatsappUrl(settings.whatsapp || "5519996840992")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black text-[color:var(--petrus-yellow)] px-6 py-4 uppercase font-bold text-sm tracking-[0.1em] hover:bg-neutral-900 transition-colors">
                            Falar no WhatsApp
                        </a>
                        <Link to="/contato" className="inline-flex items-center gap-3 border border-black px-6 py-4 uppercase font-bold text-sm tracking-[0.1em] hover:bg-black hover:text-[color:var(--petrus-yellow)] transition-colors">
                            Contato <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}