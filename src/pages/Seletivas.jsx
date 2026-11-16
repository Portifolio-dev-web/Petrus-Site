import { Toaster } from "sonner";
import { motion } from "framer-motion";
import { CheckCircle2, CalendarDays, MapPin, Users } from "lucide-react";
import { InstagramLogo } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import ImageSlot from "@/components/ImageSlot";
import SectionTitle from "@/components/SectionTitle";
import LeadForm from "@/components/LeadForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CATEGORIES_IMAGES } from "@/lib/mediaPlaceholders";
import { POSITIONS, SELETIVAS_REQUISITOS, SELETIVAS_FAQ, SOCIAL, HASHTAG } from "@/lib/univoleiData";

const SUBJECTS = POSITIONS.map((p) => `Seletivas 2k27 — ${p.name}`).concat("Seletivas 2k27 — Ainda não sei minha posição");

export default function Seletivas() {
    return (
        <>
            <Seo
                title="Seletivas 2k27 — Inscrições | Univôlei Sumaré"
                description="Inscreva-se nas Seletivas 2k27 do Univôlei Sumaré: levantador, ponteiro, central, oposto e líbero. #Vem_Ser_Uni"
            />
            <Toaster theme="dark" richColors position="top-right" />

            {/* HERO */}
            <section className="relative border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 court-lines" />
                <div className="absolute inset-0 spotlight-uni" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 grid gap-12 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-uni-orange">
                            🦁 Inscrições abertas
                        </span>
                        <MaskedReveal
                            tag="h1"
                            className="font-display uppercase italic text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-uni-silver"
                            lines={["Seletivas", <span key="y" className="text-gradient-uni">2k27</span>]}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            className="text-uni-muted text-lg leading-relaxed max-w-2xl"
                        >
                            O processo anual de captação de novos talentos para a rugida do Leão. Venha mostrar seu jogo e encontrar seu lugar na família Uni.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }} className="flex flex-wrap gap-4">
                            <a href="#inscricao" className="btn-uni">Quero me inscrever</a>
                            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="btn-uni-outline">
                                <InstagramLogo size={18} weight="bold" /> Datas no Instagram
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5"
                    >
                        <ImageSlot slot={CATEGORIES_IMAGES.seletivas} aspectRatio="4/5" className="rounded-[1.75rem]" />
                    </motion.div>
                </div>
            </section>

            {/* META */}
            <section className="border-b border-white/10 bg-uni-card/40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {[
                        [CalendarDays, "Datas", "Divulgadas no @univolei_sumare"],
                        [MapPin, "Local", "Sumaré/SP"],
                        [Users, "Para quem", "Atletas de todas as frentes"],
                    ].map(([Icon, k, v]) => (
                        <div key={k} className="py-7 px-4 md:px-8 flex items-center gap-4">
                            <Icon className="text-uni-blue shrink-0" size={28} />
                            <div>
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-uni-muted">{k}</div>
                                <div className="font-display uppercase italic text-2xl text-uni-silver">{v}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* POSIÇÕES */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                <SectionTitle eyebrow="Posições" className="mb-12">Qual é a sua?</SectionTitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {POSITIONS.map((p, i) => (
                        <FadeUp key={p.name} delay={i * 0.06}>
                            <div className="glass rounded-2xl p-6 h-full hover:border-uni-orange/60 hover:-translate-y-1 transition-all">
                                <div className="font-display italic text-5xl text-uni-orange/80">0{i + 1}</div>
                                <h3 className="font-display uppercase italic text-2xl text-uni-silver mt-3">{p.name}</h3>
                                <p className="text-uni-muted text-sm mt-2 leading-relaxed">{p.text}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* REQUISITOS + FORM */}
            <section id="inscricao" className="border-y border-white/10 bg-uni-card/40 scroll-mt-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-5 space-y-8">
                        <SectionTitle eyebrow="Requisitos" color="text-uni-blue">O que você precisa.</SectionTitle>
                        <ul className="space-y-4">
                            {SELETIVAS_REQUISITOS.map((r) => (
                                <li key={r} className="flex items-start gap-3 text-uni-silver">
                                    <CheckCircle2 size={22} className="text-uni-orange mt-0.5 shrink-0" /> {r}
                                </li>
                            ))}
                        </ul>
                        <p className="font-display uppercase italic text-3xl text-uni-orange">{HASHTAG}</p>
                    </div>
                    <FadeUp className="lg:col-span-7">
                        <LeadForm
                            origem="seletivas-2k27"
                            subjects={SUBJECTS}
                            subjectLabel="Posição pretendida"
                            secondLabel="Idade"
                            secondType="number"
                            secondRequired
                            messagePlaceholder="Conte sua experiência com vôlei (onde já jogou, há quanto tempo, outras posições)..."
                            submitLabel="Enviar inscrição"
                        />
                    </FadeUp>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
                <SectionTitle eyebrow="FAQ" className="mb-10">Dúvidas frequentes.</SectionTitle>
                <Accordion type="single" collapsible className="glass rounded-2xl px-6">
                    {SELETIVAS_FAQ.map(([q, a], i) => (
                        <AccordionItem key={q} value={`faq-${i}`} className="border-white/10">
                            <AccordionTrigger className="text-left text-uni-silver font-bold hover:text-uni-orange hover:no-underline">{q}</AccordionTrigger>
                            <AccordionContent className="text-uni-muted leading-relaxed">{a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </>
    );
}
