import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Trophy, Users, Sparkles } from "lucide-react";
import { InstagramLogo as Instagram, YoutubeLogo as Youtube } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import ImageSlot from "@/components/ImageSlot";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEST_IDS } from "@/lib/testIds";
import { HERO_BG, GALLERY_ITEMS } from "@/lib/mediaPlaceholders";
import { CATEGORIES, HIGHLIGHTS, STATS, SOCIAL, HASHTAG } from "@/lib/univoleiData";

const FEED = GALLERY_ITEMS.filter((g) => g.id.startsWith("feed-"));
const YT_COVER = GALLERY_ITEMS.find((g) => g.id === "youtube-capa");
const CARD_TEST_IDS = {
    adulto: TEST_IDS.categoryCardAdulto,
    projeto: TEST_IDS.categoryCardProjeto,
    "nova-geracao": TEST_IDS.categoryCardNovaGeracao,
};

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <>
            <Seo
                title="Univôlei Sumaré | Time e Projeto de Voleibol #Vem_Ser_Uni"
                description="Time e projeto de voleibol de Sumaré/SP fundado em 14/11/2022. Treinos adulto, projeto, Nova Geração e Seletivas 2k27."
            />

            {/* ================= HERO ================= */}
            <section ref={heroRef} className="relative overflow-hidden">
                <div className="absolute inset-0 court-lines" />
                <div className="absolute inset-0 spotlight-uni" />

                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 grid gap-12 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-uni-orange"
                        >
                            🦁 Desde 14/11/2022 • Sumaré/SP
                        </motion.span>

                        <MaskedReveal
                            tag="h1"
                            className="font-display uppercase italic text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.88] tracking-tight text-uni-silver"
                            lines={[
                                "Mais que um time,",
                                "uma família",
                                <span key="q">em <span className="text-gradient-uni">quadra.</span></span>,
                            ]}
                            stagger={0.12}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            className="font-display uppercase italic text-3xl md:text-4xl text-uni-blue"
                        >
                            {HASHTAG}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.7 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <Link to="/seletivas" className="btn-uni" data-testid={TEST_IDS.heroCtaSeletivas}>
                                Seletivas 2k27 <ArrowRight size={18} />
                            </Link>
                            <Link to="/categorias" className="btn-uni-outline" data-testid={TEST_IDS.heroCtaCategorias}>
                                Conhecer Categorias
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div style={{ y: yImg }} className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, rotate: -4, scale: 0.92 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-uni-orange/40 to-uni-blue/40 blur-2xl" />
                            <ImageSlot slot={HERO_BG} aspectRatio="4/5" className="relative rounded-[1.75rem]" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="relative border-y border-white/10 bg-uni-card/50">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {STATS.map((s) => (
                            <div key={s.label} className="py-7 px-4 md:px-8">
                                <div className="font-display italic text-3xl md:text-5xl text-uni-orange">{s.value}</div>
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-uni-muted mt-2">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= DESTAQUES (STORIES) ================= */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-14">
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x" data-lenis-prevent>
                    {HIGHLIGHTS.map((h, i) => (
                        <motion.div
                            key={h.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="snap-start shrink-0"
                        >
                            <Link to={h.to} className="group flex flex-col items-center gap-3 w-24 md:w-28">
                                <span className="story-ring rounded-full p-[3px] transition-transform group-hover:scale-105">
                                    <span className="block rounded-full bg-uni-bg p-[3px]">
                                        <ImageSlot slot={h.cover} aspectRatio="1/1" compact className="w-[84px] md:w-[100px] rounded-full !border" />
                                    </span>
                                </span>
                                <span className="text-xs font-bold text-center text-uni-silver group-hover:text-uni-orange transition-colors">{h.label}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= SOBRE / O LEÃO ================= */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-12 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                    <SectionTitle eyebrow="O Leão de Sumaré">
                        Nascemos em <span className="text-uni-orange">14/11/2022</span> para rugir em quadra.
                    </SectionTitle>
                    <FadeUp delay={0.1}>
                        <p className="text-uni-muted text-lg leading-relaxed">
                            O Univôlei é um time amador competitivo e um projeto de voleibol de Sumaré/SP. Treinamos sério, competimos com raça e
                            acolhemos quem chega: do primeiro toque na bola às finais regionais, aqui ninguém joga sozinho.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.15} className="flex flex-wrap gap-4">
                        <Link to="/sobre" className="btn-uni-outline">Nossa história <ArrowRight size={16} /></Link>
                        <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-uni-silver font-bold hover:text-uni-orange transition-colors">
                            <Youtube size={20} className="text-red-500" /> youtube.com/@UnivoleiSumare
                        </a>
                    </FadeUp>
                </div>
                <div className="lg:col-span-6 grid grid-cols-3 gap-4">
                    {[
                        { icon: Users, t: "Família", d: "Atletas, comissão e torcida juntos." },
                        { icon: Trophy, t: "Competição", d: "Municipal, CRV e ligas regionais." },
                        { icon: Sparkles, t: "Formação", d: "Projeto e Nova Geração." },
                    ].map((x, i) => (
                        <FadeUp key={x.t} delay={i * 0.08}>
                            <div className="glass rounded-2xl p-5 h-full">
                                <x.icon className="text-uni-blue" size={26} />
                                <h3 className="font-display uppercase italic text-2xl text-uni-silver mt-4">{x.t}</h3>
                                <p className="text-uni-muted text-sm mt-1">{x.d}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ================= CATEGORIAS ================= */}
            <section className="border-y border-white/10 bg-uni-card/40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <SectionTitle eyebrow="Categorias & Treinos" color="text-uni-blue">Escolha sua quadra.</SectionTitle>
                        <Link to="/categorias" className="btn-uni-outline w-fit">Ver detalhes <ArrowRight size={16} /></Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {CATEGORIES.map((c, i) => (
                            <FadeUp key={c.slug} delay={i * 0.08}>
                                <Link to="/categorias" data-testid={CARD_TEST_IDS[c.slug]} className="group block h-full">
                                    <Card className="h-full overflow-hidden bg-uni-card/80 border-white/10 backdrop-blur-md transition-all group-hover:-translate-y-1 group-hover:border-uni-orange/60">
                                        <ImageSlot slot={c.image} aspectRatio="4/5" className="rounded-none border-0 border-b-2" />
                                        <CardContent className="p-6 space-y-3">
                                            <Badge className="bg-uni-blue/15 text-uni-blue border-uni-blue/30 hover:bg-uni-blue/25 uppercase tracking-wider">{c.tag}</Badge>
                                            <h3 className="font-display uppercase italic text-3xl text-uni-silver group-hover:text-uni-orange transition-colors">{c.title}</h3>
                                            <p className="text-uni-muted text-sm leading-relaxed">{c.short}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MURAL INSTAGRAM & YOUTUBE ================= */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <SectionTitle eyebrow="Mural da Família Uni">Direto do {SOCIAL.instagramHandle}</SectionTitle>
                    <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="btn-uni w-fit">
                        <Instagram size={18} /> Seguir no Instagram
                    </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {FEED.map((g, i) => (
                        <FadeUp key={g.id} delay={(i % 4) * 0.05}>
                            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                                <ImageSlot slot={g} aspectRatio="4/5" className="rounded-xl" />
                            </a>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp className="mt-10">
                    <a
                        href={SOCIAL.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl glass hover:border-red-500/50 transition-colors"
                    >
                        <div className="relative">
                            <ImageSlot slot={YT_COVER} aspectRatio="16/9" className="rounded-none border-0" />
                            <span className="absolute inset-0 grid place-items-center pointer-events-none">
                                <span className="w-16 h-16 rounded-full bg-red-600 grid place-items-center shadow-2xl group-hover:scale-110 transition-transform">
                                    <Play className="text-white fill-white ml-1" size={26} />
                                </span>
                            </span>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
                            <Badge className="w-fit bg-red-600/15 text-red-400 border-red-500/30 hover:bg-red-600/25">YouTube</Badge>
                            <h3 className="font-display uppercase italic text-3xl md:text-5xl text-uni-silver">Jogos, bastidores e transmissões</h3>
                            <p className="text-uni-muted">Acompanhe o Leão no canal {SOCIAL.youtubeHandle}.</p>
                            <span className="inline-flex items-center gap-2 text-uni-orange font-bold">Assistir no canal <ArrowRight size={16} /></span>
                        </div>
                    </a>
                </FadeUp>
            </section>

            {/* ================= CTA FINAL ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-uni-orange to-uni-orange-2">
                <div className="absolute inset-0 opacity-10 court-lines" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-24 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <h2 className="font-display uppercase italic text-5xl md:text-7xl leading-[0.9] text-white max-w-3xl">
                        Bora rugir com a gente? {HASHTAG}
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/seletivas" className="inline-flex items-center gap-2 rounded-full bg-uni-bg text-white px-7 py-4 font-extrabold uppercase tracking-wider text-sm hover:bg-black transition-colors">
                            Quero participar <ArrowRight size={18} />
                        </Link>
                        <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white px-7 py-4 font-extrabold uppercase tracking-wider text-sm hover:bg-white hover:text-uni-orange transition-colors">
                            Seja patrocinador
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
