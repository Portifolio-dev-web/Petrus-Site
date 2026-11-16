import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import ImageSlot from "@/components/ImageSlot";
import SectionTitle from "@/components/SectionTitle";
import { GALLERY_ITEMS, ROSTER_PHOTOS } from "@/lib/mediaPlaceholders";
import { TIMELINE, VALUES, HASHTAG } from "@/lib/univoleiData";

const MOMENTS = GALLERY_ITEMS.filter((g) => g.id.startsWith("momento-"));

export default function Sobre() {
    return (
        <>
            <Seo
                title="O Clube — Nossa História | Univôlei Sumaré"
                description="A história do Univôlei Sumaré desde 14/11/2022: valores, estrutura de treinos, comissão técnica e momentos marcantes."
            />

            <section className="relative border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 court-lines" />
                <div className="absolute inset-0 spotlight-uni" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-uni-orange mb-6">🦁 O Clube</p>
                    <MaskedReveal
                        tag="h1"
                        className="font-display uppercase italic text-5xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-uni-silver max-w-5xl"
                        lines={["Nossa história", <span key="1">& <span className="text-gradient-uni">identidade</span>.</span>]}
                    />
                </div>
            </section>

            {/* Linha do tempo */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                <SectionTitle eyebrow="Linha do tempo" className="mb-14">Desde 14/11/2022.</SectionTitle>
                <ol className="relative border-l-2 border-uni-blue/30 ml-3 space-y-12">
                    {TIMELINE.map((t, i) => (
                        <FadeUp key={t.date} delay={i * 0.05}>
                            <li className="pl-8 relative">
                                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-uni-orange ring-4 ring-uni-bg" />
                                <span className="font-mono-c text-sm text-uni-blue">{t.date}</span>
                                <h3 className="font-display uppercase italic text-3xl text-uni-silver mt-1">{t.title}</h3>
                                <p className="text-uni-muted mt-2 max-w-2xl leading-relaxed">{t.text}</p>
                            </li>
                        </FadeUp>
                    ))}
                </ol>
            </section>

            {/* Valores */}
            <section className="border-y border-white/10 bg-uni-card/40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                    <SectionTitle eyebrow="Valores" color="text-uni-blue" className="mb-12">O que faz o Leão rugir.</SectionTitle>
                    <div className="grid md:grid-cols-2 gap-5">
                        {VALUES.map(([t, d], i) => (
                            <FadeUp key={t} delay={i * 0.05}>
                                <div className="glass rounded-2xl p-8 h-full hover:border-uni-orange/50 transition-colors">
                                    <div className="font-mono-c text-uni-orange text-sm">/0{i + 1}</div>
                                    <h3 className="font-display uppercase italic text-3xl text-uni-silver mt-3">{t}</h3>
                                    <p className="text-uni-muted mt-3 leading-relaxed">{d}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estrutura de treinos */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-10 lg:grid-cols-2 items-center">
                <SectionTitle eyebrow="Estrutura">Treinos em Sumaré, do básico ao competitivo.</SectionTitle>
                <FadeUp delay={0.1} className="space-y-6">
                    <p className="text-uni-muted text-lg leading-relaxed">
                        Organizamos o clube em três frentes: <strong className="text-uni-silver">Treinos Adulto</strong> (equipes competitivas),{" "}
                        <strong className="text-uni-silver">Treinos Projeto</strong> (iniciação) e <strong className="text-uni-silver">Nova Geração</strong>{" "}
                        (evolução técnica). Assim cada atleta treina no ritmo certo e sabe qual é o próximo passo.
                    </p>
                    <Link to="/categorias" className="btn-uni-outline">Ver categorias <ArrowRight size={16} /></Link>
                </FadeUp>
            </section>

            {/* Galeria de momentos */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
                <SectionTitle eyebrow="Momentos marcantes" className="mb-10">Aniver. 2k26 & conquistas.</SectionTitle>
                <div className="grid sm:grid-cols-2 gap-4">
                    {MOMENTS.map((m, i) => (
                        <FadeUp key={m.id} delay={(i % 2) * 0.06}>
                            <ImageSlot slot={m} aspectRatio="4/3" className="rounded-2xl" />
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* Comissão técnica / Diretoria */}
            <section className="border-t border-white/10 bg-uni-card/40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                    <SectionTitle eyebrow="Comissão Técnica & Diretoria" color="text-uni-blue" className="mb-10">Quem faz acontecer.</SectionTitle>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {ROSTER_PHOTOS.map((p, i) => (
                            <FadeUp key={p.id} delay={i * 0.05}>
                                <ImageSlot slot={p} aspectRatio="4/5" className="rounded-2xl" />
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-uni-orange to-uni-orange-2">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="font-display uppercase italic text-4xl md:text-5xl text-white">Faça parte da história. {HASHTAG}</h3>
                    <Link to="/seletivas" className="inline-flex items-center gap-2 rounded-full bg-uni-bg text-white px-7 py-4 font-extrabold uppercase tracking-wider text-sm hover:bg-black transition-colors w-fit">
                        Seletivas 2k27 <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </>
    );
}
