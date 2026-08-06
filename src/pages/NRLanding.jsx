import { Link, Navigate } from "react-router-dom";
import { CheckCircle, ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import { NR_DATA } from "@/lib/nrData";
import { buildWhatsappUrl } from "@/lib/api";
import { useSettings } from "@/context/SettingsContext";
import { motion } from "framer-motion";

export default function NRLanding({ slug }) {
    const nr = NR_DATA[slug];
    const { settings } = useSettings();

    if (!nr) return <Navigate to="/servicos" replace />;

    const waMessage = `Olá, gostaria de solicitar um orçamento para o treinamento ${nr.code} (${nr.title}) com a PETRUS Consultoria.`;
    const waHref = buildWhatsappUrl(settings.whatsapp, waMessage);

    return (
        <>
            <Seo title={nr.seoTitle} description={nr.metaDescription} />

            {/* HERO */}
            <section className="relative border-b border-[color:var(--petrus-border)] overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-25" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 grid gap-12 lg:grid-cols-12 items-end">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-3 text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)]">
                            <Link to="/servicos" className="hover:text-neutral-900">Serviços</Link>
                            <span className="opacity-40">/</span>
                            <span>{nr.code}</span>
                        </div>
                        <MaskedReveal
                            tag="h1"
                            className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-neutral-900"
                            lines={[nr.code, nr.title]}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.9 }}
                            className="text-neutral-700 text-lg leading-relaxed max-w-2xl"
                        >
                            {nr.shortTitle}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.9 }} className="flex flex-wrap gap-4">
                            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-petrus" data-testid={`nr-cta-whatsapp-${nr.slug}`}>
                                <WhatsappLogo size={18} weight="fill" />
                                Solicitar orçamento {nr.code}
                            </a>
                            <Link to="/contato" className="btn-ghost">Formulário completo <ArrowRight size={16} /></Link>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-[color:var(--petrus-border-hi)]"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 6% 100%)" }}
                    >
                        <img src={nr.image} alt={nr.title} className="w-full h-full object-cover grayscale contrast-125" loading="eager" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 bg-[color:var(--petrus-yellow)] text-black px-3 py-1.5 font-mono-c uppercase text-xs tracking-[0.2em]">{nr.code}</div>
                    </motion.div>
                </div>
            </section>

            {/* META */}
            <section className="border-b border-[color:var(--petrus-border)]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[color:var(--petrus-border)]">
                    {[
                        ["Carga horária", nr.cargaHoraria],
                        ["Modalidade", "Presencial · in company · turmas abertas"],
                        ["Certificação", "Válida em todo território nacional"],
                    ].map(([k, v]) => (
                        <div key={k} className="py-8 px-4 md:px-8">
                            <div className="text-xs font-mono-c uppercase tracking-[0.2em] text-[color:var(--petrus-yellow)] mb-3">{k}</div>
                            <div className="font-display uppercase text-xl md:text-2xl text-neutral-900">{v}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-14 lg:grid-cols-12">
                <div className="lg:col-span-7 space-y-14">
                    <FadeUp>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-4">/ Objetivo</p>
                        <h2 className="font-display uppercase text-3xl md:text-5xl text-neutral-900 leading-[0.9] mb-6">O que este treinamento entrega.</h2>
                        <p className="text-neutral-700 text-lg leading-relaxed">{nr.objetivo}</p>
                    </FadeUp>

                    <FadeUp>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-4">/ Conteúdo programático</p>
                        <h2 className="font-display uppercase text-3xl md:text-5xl text-neutral-900 leading-[0.9] mb-6">Programa detalhado.</h2>
                        <ul className="space-y-4">
                            {nr.conteudo.map((c, i) => (
                                <li key={i} className="flex items-start gap-4 border-t border-[color:var(--petrus-border)] pt-4">
                                    <span className="font-mono-c text-[color:var(--petrus-yellow)] text-sm mt-1">/{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-neutral-800 leading-relaxed">{c}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeUp>
                </div>

                <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 h-fit">
                    <FadeUp>
                        <div className="border border-[color:var(--petrus-border-hi)] p-8 md:p-10">
                            <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-4">/ Diferencial PETRUS</p>
                            <p className="text-neutral-900 text-lg leading-relaxed">{nr.diferencial}</p>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <div className="bg-[color:var(--petrus-yellow)] text-black p-8 md:p-10">
                            <p className="font-mono-c uppercase text-xs tracking-[0.2em] mb-4">/ Público-alvo</p>
                            <p className="leading-relaxed">{nr.publico}</p>
                            <a href={waHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-black text-[color:var(--petrus-yellow)] px-6 py-4 uppercase font-bold text-sm tracking-[0.1em] hover:bg-neutral-900 transition-colors">
                                <WhatsappLogo size={18} weight="fill" /> Orçamento {nr.code}
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* KEYWORDS + FAQ-LITE */}
            <section className="bg-[color:var(--petrus-surface)] border-y border-[color:var(--petrus-border)]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-10 lg:grid-cols-2 items-start">
                    <div>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-4">/ Por que treinar com a PETRUS</p>
                        <ul className="space-y-4 mt-6">
                            {["Instrutores com vivência real de campo", "Simulados práticos com equipamentos profissionais", "Emissão de certificado com validade nacional", "Reciclagens organizadas pelo nosso time"].map((v) => (
                                <li key={v} className="flex items-start gap-3 text-neutral-800">
                                    <CheckCircle size={22} weight="fill" className="text-[color:var(--petrus-yellow)] mt-0.5 flex-shrink-0" />
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-neutral-500 text-sm leading-relaxed">
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-4">/ Tags</p>
                        <p>{nr.keywords.map((k) => `#${k}`).join(" · ")}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
