import { Link } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";
import { buildWhatsappUrl } from "@/lib/api";
import { InstagramLogo, YoutubeLogo, WhatsappLogo, EnvelopeSimple, PhoneCall, MapPin } from "@phosphor-icons/react";
import { HASHTAG } from "@/lib/univoleiData";
import Logo from "@/components/Logo";

const social = "w-10 h-10 grid place-items-center rounded-full border border-white/15 text-uni-muted hover:border-uni-orange hover:text-uni-orange transition-colors";

export default function Footer() {
    const { settings } = useSettings();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#070A12] border-t border-white/10">
            <div className="h-1 w-full bg-gradient-to-r from-uni-orange via-uni-orange-2 to-uni-blue" />
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid gap-10 md:grid-cols-12">
                <div className="md:col-span-5 space-y-6">
                    <Logo className="h-14 w-14" />
                    <p className="text-uni-muted max-w-md leading-relaxed">
                        Time amador de Voleibol • Fundado em 14/11/2022. Mais que um time, uma família em quadra em Sumaré/SP.
                    </p>
                    <p className="font-display uppercase text-2xl text-uni-orange sport-italic">{HASHTAG}</p>
                    <div className="flex items-center gap-3">
                        <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={social}><InstagramLogo size={18} /></a>
                        <a href={settings.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={social}><YoutubeLogo size={18} /></a>
                        <a href={buildWhatsappUrl(settings.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={social}><WhatsappLogo size={18} /></a>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-uni-blue mb-5">Navegação</p>
                    <ul className="space-y-3 text-uni-muted">
                        <li><Link to="/" className="hover:text-uni-silver">Início</Link></li>
                        <li><Link to="/sobre" className="hover:text-uni-silver">O Clube</Link></li>
                        <li><Link to="/categorias" className="hover:text-uni-silver">Categorias & Torneios</Link></li>
                        <li><Link to="/seletivas" className="hover:text-uni-silver">Seletivas 2k27</Link></li>
                        <li><Link to="/contato" className="hover:text-uni-silver">Contato & Patrocínio</Link></li>
                        <li><Link to="/admin/login" className="hover:text-uni-silver text-slate-600">Área Administrativa</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-uni-blue mb-5">Contato</p>
                    <ul className="space-y-3 text-uni-muted">
                        {settings.telefone && <li className="flex items-start gap-3"><PhoneCall size={18} className="mt-0.5 text-uni-orange" /> {settings.telefone}</li>}
                        {settings.email && <li className="flex items-start gap-3"><EnvelopeSimple size={18} className="mt-0.5 text-uni-orange" /> {settings.email}</li>}
                        <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-uni-orange" /> {settings.endereco}</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-slate-500">
                    <span>© {year} Univôlei Sumaré. Todos os direitos reservados.</span>
                    <span className="uppercase tracking-[0.2em]">🦁 A rugida do Leão de Sumaré</span>
                </div>
            </div>
        </footer>
    );
}
