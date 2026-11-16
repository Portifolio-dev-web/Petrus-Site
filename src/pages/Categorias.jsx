import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Target } from "lucide-react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import ImageSlot from "@/components/ImageSlot";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CATEGORIES, COMPETITIONS, GAMES } from "@/lib/univoleiData";

export default function Categorias() {
    return (
        <>
            <Seo
                title="Categorias, Treinos & Competições | Univôlei Sumaré"
                description="Treinos Adulto, Treinos Projeto e Nova Geração do Univôlei Sumaré, além das competições: Municipal 2K26, CRV 2026 e amistosos."
            />

            <section className="relative border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 court-lines" />
                <div className="absolute inset-0 spotlight-uni" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-uni-blue mb-6">Categorias & Torneios</p>
                    <MaskedReveal
                        tag="h1"
                        className="font-display uppercase italic text-5xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-uni-silver max-w-5xl"
                        lines={["Treinos,", <span key="1">categorias & <span className="text-gradient-uni">competições</span>.</span>]}
                    />
                </div>
            </section>

            {/* Categorias detalhadas */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 space-y-16">
                {CATEGORIES.map((c, i) => (
                    <FadeUp key={c.slug}>
                        <article id={c.slug} className="grid gap-8 lg:grid-cols-12 items-center scroll-mt-24">
                            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                                <ImageSlot slot={c.image} aspectRatio="4/5" className="rounded-2xl" />
                            </div>
                            <div className="lg:col-span-7 space-y-5">
                                <Badge className="bg-uni-orange/15 text-uni-orange border-uni-orange/30 hover:bg-uni-orange/25 uppercase tracking-wider">{c.tag}</Badge>
                                <h2 className="font-display uppercase italic text-5xl md:text-6xl text-uni-silver leading-[0.92]">{c.title}</h2>
                                <p className="text-uni-muted text-lg leading-relaxed max-w-2xl">{c.short}</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Info icon={Clock} label="Horários" value={c.horario} />
                                    <Info icon={MapPin} label="Local" value={c.local} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-uni-blue mb-3 flex items-center gap-2"><Target size={14} /> Objetivos</p>
                                    <ul className="space-y-2">
                                        {c.objetivos.map((o) => (
                                            <li key={o} className="flex items-start gap-3 text-uni-silver">
                                                <span className="mt-2 w-2 h-2 rounded-full bg-uni-orange shrink-0" /> {o}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </FadeUp>
                ))}
            </section>

            {/* Competições */}
            <section id="competicoes" className="border-y border-white/10 bg-uni-card/40 scroll-mt-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
                    <SectionTitle eyebrow="Competições" color="text-uni-blue" className="mb-12">Onde o Leão ruge.</SectionTitle>
                    <div className="grid md:grid-cols-2 gap-6">
                        {COMPETITIONS.map((c, i) => (
                            <FadeUp key={c.name} delay={(i % 2) * 0.06}>
                                <div className="glass rounded-2xl overflow-hidden h-full hover:border-uni-orange/60 transition-colors">
                                    {c.image && <ImageSlot slot={c.image} aspectRatio="16/9" className="rounded-none border-0 border-b-2" />}
                                    <div className="p-6 md:p-8 space-y-3">
                                        <Badge className="bg-uni-blue/15 text-uni-blue border-uni-blue/30 hover:bg-uni-blue/25">{c.tag}</Badge>
                                        <h3 className="font-display uppercase italic text-4xl text-uni-silver">{c.name}</h3>
                                        <p className="text-uni-muted">{c.text}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp className="mt-14">
                        <h3 className="font-display uppercase italic text-3xl text-uni-silver mb-5">Tabela de jogos</h3>
                        <div className="glass rounded-2xl overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-white/10 hover:bg-transparent">
                                        {["Data", "Competição", "Adversário", "Local", "Resultado"].map((h) => (
                                            <TableHead key={h} className="text-uni-blue uppercase text-xs tracking-wider">{h}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {GAMES.map((g, i) => (
                                        <TableRow key={i} className="border-white/10 hover:bg-white/5">
                                            <TableCell className="text-uni-muted whitespace-nowrap">{g.data}</TableCell>
                                            <TableCell className="text-uni-orange font-bold">{g.competicao}</TableCell>
                                            <TableCell className="text-uni-silver">Univôlei × {g.adversario}</TableCell>
                                            <TableCell className="text-uni-muted">{g.local}</TableCell>
                                            <TableCell className="text-uni-silver font-mono-c">{g.resultado}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h2 className="font-display uppercase italic text-4xl md:text-5xl text-uni-silver">Quer marcar um amistoso?</h2>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contato" className="btn-uni">Falar com o clube <ArrowRight size={18} /></Link>
                    <Link to="/seletivas" className="btn-uni-outline">Seletivas 2k27</Link>
                </div>
            </section>
        </>
    );
}

function Info({ icon: Icon, label, value }) {
    return (
        <div className="glass rounded-xl px-4 py-3 flex items-start gap-3">
            <Icon size={20} className="text-uni-blue mt-0.5 shrink-0" />
            <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-uni-muted">{label}</div>
                <div className="text-uni-silver text-sm">{value}</div>
            </div>
        </div>
    );
}
