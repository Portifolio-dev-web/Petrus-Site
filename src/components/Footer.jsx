import { Link } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";
import { buildWhatsappUrl } from "@/lib/api";
import { InstagramLogo, LinkedinLogo, WhatsappLogo, EnvelopeSimple, PhoneCall, MapPin } from "@phosphor-icons/react";

const LOGO_URL =
    "https://customer-assets-m6fa6gv7.emergentagent.net/job_2036765d-f8b7-48c4-86ac-87bcb493441b/artifacts/9kus3x8p_270c029d-5427-4dd2-ae06-81b263bf269f.jpg";

export default function Footer() {
    const { settings } = useSettings();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[color:var(--petrus-black)] border-t border-[color:var(--petrus-border)]">
            <div className="caution-tape h-3 w-full" />
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid gap-10 md:grid-cols-12">
                <div className="md:col-span-5 space-y-6">
                    <img src={LOGO_URL} alt="PETRUS Consultoria" className="h-12 w-auto" />
                    <p className="text-neutral-600 max-w-md leading-relaxed">
                        Consultoria em Segurança do Trabalho e treinamentos normativos com foco no cuidado humano, segurança psicológica e na construção de uma cultura de prevenção baseada na Abordagem HOP.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                        <a href={buildWhatsappUrl(settings.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 grid place-items-center border border-[color:var(--petrus-border-hi)] hover:border-[color:var(--petrus-yellow)] hover:text-[color:var(--petrus-yellow)] transition-colors">
                            <WhatsappLogo size={18} />
                        </a>
                        <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center border border-[color:var(--petrus-border-hi)] hover:border-[color:var(--petrus-yellow)] hover:text-[color:var(--petrus-yellow)] transition-colors">
                            <InstagramLogo size={18} />
                        </a>
                        {/* Ocultando o LinkedIn:
                        <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center border border-[color:var(--petrus-border-hi)] hover:border-[color:var(--petrus-yellow)] hover:text-[color:var(--petrus-yellow)] transition-colors">
                            <LinkedinLogo size={18} />
                        </a>
                        */}
                    </div>
                </div>

                <div className="md:col-span-3">
                    <p className="text-xs font-mono-c uppercase tracking-[0.2em] text-[color:var(--petrus-yellow)] mb-5">Navegação</p>
                    <ul className="space-y-3 text-neutral-700">
                        <li><Link to="/" className="hover:text-neutral-900">Início</Link></li>
                        <li><Link to="/sobre" className="hover:text-neutral-900">Sobre</Link></li>
                        <li><Link to="/servicos" className="hover:text-neutral-900">Serviços</Link></li>
                        <li><Link to="/contato" className="hover:text-neutral-900">Contato</Link></li>
                        <li><Link to="/admin/login" className="hover:text-neutral-900 text-neutral-500">Área Administrativa</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <p className="text-xs font-mono-c uppercase tracking-[0.2em] text-[color:var(--petrus-yellow)] mb-5">Contato</p>
                    <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start gap-3"><PhoneCall size={18} className="mt-0.5 text-[color:var(--petrus-yellow)]" /> {settings.telefone}</li>
                        <li className="flex items-start gap-3"><EnvelopeSimple size={18} className="mt-0.5 text-[color:var(--petrus-yellow)]" /> {settings.email}</li>
                        <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-[color:var(--petrus-yellow)]" /> {settings.endereco}</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[color:var(--petrus-border)]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between text-xs text-neutral-500">
                    <span>© {year} PETRUS Consultoria. Todos os direitos reservados.</span>
                    <span className="font-mono-c uppercase tracking-[0.2em]">Consultoria Humanizada · Segurança Psicológica · Confiança e Transparência</span>
                </div>
            </div>
        </footer>
    );
}
