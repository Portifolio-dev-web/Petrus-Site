import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    HardHat,
    Users,
    ShieldCheck,
    Target,
    WhatsappLogo,
    Heartbeat,
    MagnifyingGlass,
    Lightbulb,
    FileText
} from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import { NR_LIST } from "@/lib/nrData";
import { buildWhatsappUrl, api } from "@/lib/api";
import { useSettings } from "@/context/SettingsContext";
import Seo from "@/components/Seo";
import { TEST_IDS } from "@/lib/testIds";

const HERO_IMG =
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=srgb&fm=jpg&auto=format&w=1600&q=85";

const CHAPTERS = [
    {
        n: "01",
        title: "Planejar",
        text: "Avaliar riscos de forma realista e definir controles eficazes antes da execução.",
    },
    {
        n: "02",
        title: "Fazer",
        text: "Implementar ações, treinar as equipes envolvidas e monitorar a eficácia em campo.",
    },
    {
        n: "03",
        title: "Checar",
        text: "Melhorar continuamente, aprender com os desvios e acompanhar os resultados práticos.",
    },
    {
        n: "04",
        title: "Agir",
        text: "Corrigir falhas, documentar lições aprendidas, revisar processos e evoluir a cultura.",
    },
];

const DIFERENCIAIS = [
    { icon: MagnifyingGlass, title: "Antecipar Desvios", text: "Aprenda com os desvios cotidianos antes que eles se transformem em acidentes graves." },
    { icon: Heartbeat, title: "Apoiar Pessoas", text: "As pessoas são a solução, não o problema. Focamos no cuidado humano e no suporte." },
    { icon: ShieldCheck, title: "Segurança Psicológica", text: "Criamos um ambiente onde relatar riscos e falhas é seguro e incentivado." },
    { icon: Target, title: "Fortalecer a Cultura", text: "Construímos uma cultura inquebrável, técnica e sustentável baseada em transparência." },
];

export default function Home() {
    const { settings } = useSettings();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    const waHref = (msg) => buildWhatsappUrl(settings.whatsapp || "5519996840992", msg);

    return (
        <>
            <Seo
                title="PETRUS Consultoria — 25 Anos Construindo Prevenção"
                description="Especialistas em Segurança do Trabalho, Gestão de Emergências e Consultoria Humanizada baseada na Abordagem HOP."
            />

            {/* ================= HERO ================= */}
            <section ref={heroRef} className="relative overflow-hidden bg-[color:var(--petrus-black)]">
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="absolute inset-0 spotlight-yellow" />

                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-14 grid gap-14 lg:grid-cols-12 lg:gap-10 items-end">
                    <motion.div style={{ y: yText }} className="lg:col-span-8 space-y-10">
                        <div className="flex items-center gap-3 text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)]">
                            <span className="w-8 h-px bg-[color:var(--petrus-yellow)]" />
                            <span>Pessoas · Consciência · Prevenção</span>
                        </div>

                        <MaskedReveal
                            tag="h1"
                            className="font-display uppercase text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] leading-[0.86] tracking-[-0.03em] text-neutral-900"
                            lines={["Como manter", "Zero Acidentes", <span key="y" className="text-[color:var(--petrus-yellow)]">Graves?</span>]}
                            stagger={0.14}
                            duration={1.05}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.9 }}
                            className="max-w-2xl text-neutral-700 text-base md:text-xl font-medium leading-relaxed"
                        >
                            Não é sorte. É método, cultura e, acima de tudo, <span className="text-neutral-900 font-bold">olhar para as pessoas por inteiro</span>. Punir não previne falhas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.9 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a
                                href={waHref("Olá, gostaria de saber mais sobre a consultoria humanizada e abordagem HOP.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-petrus"
                                data-testid={TEST_IDS.heroCtaWhatsapp}
                            >
                                <WhatsappLogo size={18} weight="fill" />
                                Iniciar Transformação
                            </a>
                            <Link to="/contato" className="btn-ghost" data-testid={TEST_IDS.heroCtaContato}>
                                Formulário de Contato <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div style={{ y: yImg }} className="lg:col-span-4 relative h-[420px] lg:h-[560px]">
                        <div
                            className="absolute inset-0 border border-[color:var(--petrus-border-hi)]"
                            style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
                        >
                            <img
                                src={HERO_IMG}
                                alt="Profissional de segurança focado"
                                className="w-full h-full object-cover grayscale contrast-125"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-[color:var(--petrus-yellow)] text-black px-4 py-3 font-mono-c uppercase text-xs tracking-[0.2em] font-bold">
                            EXPERIÊNCIA · MÉTODO · RESULTADOS
                        </div>
                    </motion.div>
                </div>

                <div className="relative border-t border-[color:var(--petrus-border)]">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--petrus-border)]">
                        {[
                            ["25", "Anos de Experiência"],
                            ["HOP", "Abordagem Prática"],
                            ["ZERO", "Acidentes Graves"],
                            ["360º", "Cuidado Humano"],
                        ].map(([n, l]) => (
                            <div key={l} className="py-8 px-4 md:px-8">
                                <div className="font-display text-3xl md:text-5xl text-neutral-900">{n}</div>
                                <div className="text-xs font-mono-c uppercase tracking-[0.2em] text-neutral-600 mt-2">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* ================= SERVICES OVERVIEW ================= */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32 grid gap-16 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Nossos serviços</p>
                    <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight text-neutral-900">
                        25 anos construindo <span className="text-[color:var(--petrus-yellow)]">prevenção</span>.
                    </h2>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-[color:var(--petrus-border)]">
                    {[
                        { icon: Users, title: "Consultoria Humanizada", text: "Focada em pessoas, processos e na Abordagem HOP para resultados eficientes." },
                        { icon: FileText, title: "Planos de Emergência", text: "Gestão robusta e planejamento focado na proteção de vidas e continuidade do negócio." },
                        { icon: HardHat, title: "Treinamentos NR", text: "Capacitação normativa e formação de brigadistas com foco no aprendizado, não na culpa." },
                        { icon: Lightbulb, title: "Engenharia & Psicologia", text: "Equipe sênior multidisciplinar unindo médicos, engenheiros e psicólogos organizacionais." },
                    ].map((s, i) => (
                        <FadeUp key={s.title} delay={i * 0.05}>
                            <div className="bg-[color:var(--petrus-black)] p-8 md:p-10 min-h-[220px] flex flex-col justify-between hover:bg-[color:var(--petrus-card)] transition-colors">
                                <s.icon size={32} className="text-[color:var(--petrus-yellow)]" />
                                <div>
                                    <h3 className="font-display uppercase text-2xl text-neutral-900 mt-6">{s.title}</h3>
                                    <p className="text-neutral-600 mt-2 text-sm leading-relaxed">{s.text}</p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ================= MANIFESTO CHAPTERS (PDCA) ================= */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
                <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Nossa metodologia</p>
                <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight text-neutral-900 mb-16 max-w-3xl">
                    O método protege mais do que a reação.
                </h2>
                <div className="space-y-px bg-[color:var(--petrus-border)]">
                    {CHAPTERS.map((c) => (
                        <FadeUp key={c.n}>
                            <div className="grid grid-cols-12 gap-6 bg-[color:var(--petrus-black)] py-10 md:py-14 px-4 md:px-6 items-start">
                                <div className="col-span-3 md:col-span-2">
                                    <div className="font-mono-c text-4xl md:text-6xl text-[color:var(--petrus-yellow)]">{c.n}</div>
                                </div>
                                <div className="col-span-9 md:col-span-4">
                                    <h3 className="font-display uppercase text-2xl md:text-4xl text-neutral-900">{c.title}</h3>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <p className="text-neutral-700 md:text-lg leading-relaxed">{c.text}</p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ================= DIFERENCIAIS (HOP) ================= */}
            <section className="bg-[color:var(--petrus-surface)] border-y border-[color:var(--petrus-border)]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
                    <div className="grid gap-14 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Diferenciais</p>
                            <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight text-neutral-900 mb-6">
                                HOP na prática.
                            </h2>
                            <p className="text-neutral-700 text-lg leading-relaxed max-w-sm">
                                Ignorar o esgotamento mental e o medo de reportar cria riscos ocultos. Construímos confiança e transparência nas operações.
                            </p>
                        </div>
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                            {DIFERENCIAIS.map((d, i) => (
                                <FadeUp key={d.title} delay={i * 0.05}>
                                    <div className="border border-[color:var(--petrus-border)] p-6 md:p-8 h-full hover:border-[color:var(--petrus-yellow)] transition-colors">
                                        <d.icon size={28} className="text-[color:var(--petrus-yellow)]" />
                                        <h3 className="font-display uppercase text-xl text-neutral-900 mt-6">{d.title}</h3>
                                        <p className="text-neutral-600 text-sm mt-3 leading-relaxed">{d.text}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ESTUDO DE CASO ================= */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32 grid gap-14 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6 bg-[color:var(--petrus-black)] inline-block px-4 py-2 font-bold">ESTUDO DE CASO</p>
                    <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight text-neutral-900 mb-8">
                        Case HONDA:<br /> Zero acidentes graves.
                    </h2>
                    <p className="text-neutral-700 text-xl leading-relaxed mb-8">
                        Transparência, confiança e cuidado humano para operações de alta complexidade.
                    </p>
                    <div className="flex items-center gap-4 text-neutral-900 font-mono-c text-sm tracking-widest font-bold">
                        <ArrowUpRight size={24} className="text-[color:var(--petrus-yellow)]" /> SEGURANÇA NÃO É SORTE. É GESTÃO.
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="aspect-[4/3] rounded-full overflow-hidden border-4 border-[color:var(--petrus-yellow)] p-2">
                        <img 
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=srgb&fm=jpg&auto=format&w=800&q=85" 
                            alt="Operação industrial complexa" 
                            className="w-full h-full object-cover rounded-full grayscale"
                        />
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative bg-[color:var(--petrus-yellow)] text-black overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #000 0 2px, transparent 2px 12px)" }} />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32 grid gap-10 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-8">
                        <h2 className="font-display uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-6">
                            Pronto para uma cultura inquebrável?
                        </h2>
                        <p className="text-lg md:text-xl max-w-2xl font-medium">
                            Pare de apagar incêndios e comece a construir uma cultura de segurança humana, técnica e sustentável. Vamos construir segurança que dura.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <a
                            href={waHref("Olá, quero agendar uma conversa sobre a cultura de segurança na minha empresa.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-black text-[color:var(--petrus-yellow)] px-6 py-5 uppercase font-bold text-sm tracking-[0.1em] hover:bg-neutral-900 transition-colors"
                        >
                            <WhatsappLogo size={20} weight="fill" /> Falar com Especialista
                        </a>
                        <Link to="/contato" className="inline-flex items-center justify-center gap-3 border border-black px-6 py-5 uppercase font-bold text-sm tracking-[0.1em] hover:bg-black hover:text-[color:var(--petrus-yellow)] transition-colors">
                            Ver contatos <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}