import { Toaster } from "sonner";
import { InstagramLogo, YoutubeLogo, WhatsappLogo, EnvelopeSimple, PhoneCall, MapPin } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import LeadForm from "@/components/LeadForm";
import ImageSlot from "@/components/ImageSlot";
import { buildWhatsappUrl } from "@/lib/api";
import { useSettings } from "@/context/SettingsContext";
import { SPONSORS_LOGOS } from "@/lib/mediaPlaceholders";
import { SOCIAL } from "@/lib/univoleiData";

const ASSUNTOS = [
    "Dúvidas sobre treinos",
    "Inscrição nas Seletivas 2k27",
    "Marcar amistoso",
    "Patrocínio / Apoio",
    "Imprensa / Parcerias",
    "Outro",
];

export default function Contato() {
    const { settings } = useSettings();
    const channel = "flex items-center gap-4 glass rounded-xl px-5 py-4 hover:border-uni-orange/60 transition-colors";

    return (
        <>
            <Seo title="Contato, Amistosos & Patrocínio | Univôlei Sumaré" description="Fale com o Univôlei Sumaré: treinos, seletivas, amistosos e patrocínio do vôlei em Sumaré/SP." />
            <Toaster theme="dark" richColors position="top-right" />

            <section className="relative border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 court-lines" />
                <div className="absolute inset-0 spotlight-uni" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-uni-orange mb-6">Contato</p>
                    <MaskedReveal
                        tag="h1"
                        className="font-display uppercase italic text-5xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-uni-silver max-w-5xl"
                        lines={["Chama a", <span key="a"><span className="text-gradient-uni">família Uni</span>.</span>]}
                    />
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
                <FadeUp className="lg:col-span-5 space-y-4">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-uni-blue mb-2">Canais diretos</p>
                    <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className={channel}>
                        <InstagramLogo size={26} className="text-uni-orange" /> <span className="text-uni-silver font-bold">{SOCIAL.instagramHandle}</span>
                    </a>
                    <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className={channel}>
                        <YoutubeLogo size={26} className="text-red-500" /> <span className="text-uni-silver font-bold">{SOCIAL.youtubeHandle}</span>
                    </a>
                    <a href={buildWhatsappUrl(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className={channel}>
                        <WhatsappLogo size={26} className="text-green-500" /> <span className="text-uni-silver font-bold">WhatsApp {settings.telefone}</span>
                    </a>
                    <ul className="space-y-3 pt-4 text-uni-muted">
                        {settings.email && <li className="flex items-center gap-3"><EnvelopeSimple size={20} className="text-uni-orange" />{settings.email}</li>}
                        {settings.telefone && <li className="flex items-center gap-3"><PhoneCall size={20} className="text-uni-orange" />{settings.telefone}</li>}
                        <li className="flex items-center gap-3"><MapPin size={20} className="text-uni-orange" />{settings.endereco}</li>
                    </ul>
                    {settings.map_embed_url ? (
                        <div className="rounded-xl overflow-hidden aspect-video border border-white/10">
                            <iframe title="Mapa" src={settings.map_embed_url} className="w-full h-full" loading="lazy" />
                        </div>
                    ) : null}
                </FadeUp>

                <FadeUp className="lg:col-span-7" delay={0.1}>
                    <LeadForm
                        origem="site-contato"
                        subjects={ASSUNTOS}
                        subjectLabel="Assunto"
                        secondLabel="Equipe / Empresa"
                        messagePlaceholder="Conte pra gente: dúvida, proposta de amistoso ou de patrocínio..."
                        submitLabel="Enviar mensagem"
                    />
                </FadeUp>
            </section>

            {/* Patrocinadores */}
            <section className="border-t border-white/10 bg-uni-card/40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 grid gap-10 lg:grid-cols-12 items-center">
                    <FadeUp className="lg:col-span-5 space-y-4">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-uni-orange">Patrocinadores & Apoiadores</p>
                        <h2 className="font-display uppercase italic text-4xl md:text-5xl text-uni-silver leading-[0.92]">Sua marca vestindo o Leão.</h2>
                        <p className="text-uni-muted leading-relaxed">
                            Apoie o vôlei em Sumaré: uniformes, transporte para campeonatos, bolas e estrutura de treino. Escolha "Patrocínio / Apoio" no formulário.
                        </p>
                    </FadeUp>
                    <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                        {SPONSORS_LOGOS.map((s) => (
                            <ImageSlot key={s.id} slot={s} aspectRatio="2/1" className="rounded-xl" imgClassName="object-contain p-4" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
