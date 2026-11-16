import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import { NR_LIST } from "@/lib/nrData";
import { TEST_IDS } from "@/lib/testIds";

const CONSULTORIA = [
    ["PGR — Programa de Gerenciamento de Riscos", "Elaboração, atualização e monitoramento com base em risco real do processo produtivo."],
    ["PCMSO", "Programa de Controle Médico de Saúde Ocupacional coordenado com médico do trabalho."],
    ["LTCAT & Insalubridade / Periculosidade", "Perícia técnica com defesa em juízo e conformidade previdenciária."],
    ["Auditorias de Segurança", "Diagnóstico independente antes de auditorias de cliente ou órgão fiscalizador."],
    ["Adequação às NRs", "Plano executivo de adequação para múltiplas NRs simultâneas."],
    ["CIPA — Assessoria e Eleição", "Condução completa do processo eleitoral, plano anual e SIPAT."],
    ["Palestras / SIPAT", "Temas focados na Abordagem HOP e Segurança Psicológica, substituindo a culpa pelo aprendizado contínuo das equipes."],
    ["Primeiros Socorros", "Capacitação prática para ação imediata em emergências, priorizando a estabilização e a proteção real da vida no chão de fábrica."]
];

const OUTRAS_NRs = ["NR 06 · EPI", "NR 10 · Elétrica", "NR 11 · Movimentação", "NR 17 · Ergonomia", "NR 18 · Construção", "NR 20 · Inflamáveis", "NR 23 · Incêndio", "NR 26 · Sinalização"];

export default function Servicos() {
    return (
        <>
            <Seo title="Serviços — Consultoria SST e Treinamentos NR | PETRUS" description="Consultoria em Segurança do Trabalho: PGR, PCMSO, LTCAT, CIPA e treinamentos NR 05, NR 12, NR 33 e NR 35." />

            <section className="relative border-b border-[color:var(--petrus-border)]">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Serviços</p>
                    <MaskedReveal
                        tag="h1"
                        className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-neutral-900 max-w-5xl"
                        lines={["Consultoria técnica", <span key="1"><span className="text-[color:var(--petrus-yellow)]">+ </span>treinamentos NR.</span>]}
                    />
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Consultoria em Segurança do Trabalho</p>
                <h2 className="font-display uppercase text-3xl md:text-5xl text-neutral-900 leading-[0.9] mb-14 max-w-3xl">Programas, laudos e adequação normativa.</h2>
                <div className="grid md:grid-cols-2 gap-px bg-[color:var(--petrus-border)]">
                    {CONSULTORIA.map(([t, d], i) => (
                        <FadeUp key={t} delay={i * 0.03}>
                            <div className="bg-[color:var(--petrus-black)] p-8 md:p-10 h-full hover:bg-[color:var(--petrus-card)] transition-colors">
                                <div className="font-mono-c text-xs uppercase tracking-[0.2em] text-[color:var(--petrus-yellow)]">/{i < 9 ? `0${i + 1}` : i + 1}</div>
                                <h3 className="font-display uppercase text-xl md:text-2xl text-neutral-900 mt-4">{t}</h3>
                                <p className="text-neutral-600 mt-3 leading-relaxed">{d}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            <section className="bg-[color:var(--petrus-surface)] border-y border-[color:var(--petrus-border)]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Treinamentos NR e Formação Tática</p>
                            <h2 className="font-display uppercase text-3xl md:text-5xl text-neutral-900 leading-[0.9] max-w-3xl">Certificação com validade nacional.</h2>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-px bg-[color:var(--petrus-border)]">
                        {NR_LIST.map((nr, i) => (
                            <FadeUp key={nr.slug} delay={i * 0.04} className={`h-full ${i === 0 ? "md:col-span-2" : ""}`}>
                                <Link
                                    to={`/treinamento-${nr.slug}`}
                                    className="group flex flex-col h-full bg-[color:var(--petrus-black)] overflow-hidden"
                                    data-testid={TEST_IDS[`nrCardNr${nr.slug.split("-")[1]}`] || `nr-card-${nr.slug}`}
                                >
                                    {nr.image && (
                                        <div className={`overflow-hidden border-b border-[color:var(--petrus-border)] ${i === 0 ? "aspect-video md:aspect-[24/9]" : "aspect-[16/9]"}`}>
                                            <img
                                                src={nr.image}
                                                alt={nr.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-900ms"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                                        <div className="flex items-start justify-between mb-8">
                                            <span className="font-mono-c text-xs uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)]">/ {nr.code}</span>
                                            <div className="w-10 h-10 rounded-full border border-[color:var(--petrus-border-hi)] flex items-center justify-center group-hover:bg-[color:var(--petrus-yellow)] group-hover:border-[color:var(--petrus-yellow)] transition-all duration-300">
                                                <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-black transition-colors" />
                                            </div>
                                        </div>
                                        <h3 className="font-display uppercase text-2xl md:text-3xl text-neutral-900 leading-tight mb-4">{nr.title}</h3>
                                        <p className="text-neutral-600 mb-8 flex-grow">{nr.shortTitle}</p>
                                        <div className="text-xs font-mono-c uppercase tracking-[0.2em] text-neutral-500 pt-6 border-t border-[color:var(--petrus-border)]">
                                            {nr.cargaHoraria}
                                        </div>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Outros treinamentos</p>
                <h2 className="font-display uppercase text-3xl md:text-5xl text-neutral-900 leading-[0.9] max-w-3xl mb-10">Também atendemos:</h2>
                <div className="flex flex-wrap gap-3">
                    {OUTRAS_NRs.map((n) => (
                        <span key={n} className="px-5 py-3 border border-[color:var(--petrus-border-hi)] font-mono-c text-xs uppercase tracking-[0.2em] text-neutral-700 hover:text-[color:var(--petrus-yellow)] hover:border-[color:var(--petrus-yellow)] transition-colors cursor-default">
                            {n}
                        </span>
                    ))}
                </div>
            </section>
        </>
    );
}