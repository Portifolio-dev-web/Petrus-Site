import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { TEST_IDS } from "@/lib/testIds";
import { buildWhatsappUrl } from "@/lib/api";
import { useSettings } from "@/context/SettingsContext";

const LOGO_URL =
    "https://customer-assets-m6fa6gv7.emergentagent.net/job_2036765d-f8b7-48c4-86ac-87bcb493441b/artifacts/9kus3x8p_270c029d-5427-4dd2-ae06-81b263bf269f.jpg";

const NAV = [
    { to: "/", label: "Início", id: TEST_IDS.navHome },
    { to: "/sobre", label: "Sobre", id: TEST_IDS.navSobre },
    { to: "/servicos", label: "Serviços", id: TEST_IDS.navServicos },
    { to: "/contato", label: "Contato", id: TEST_IDS.navContato },
];

export default function Header() {
    const { settings } = useSettings();
    const [open, setOpen] = useState(false);

    const navClass = ({ isActive }) =>
        `text-xs font-mono-c uppercase tracking-[0.22em] transition-colors ${
            isActive ? "text-[color:var(--petrus-yellow)]" : "text-neutral-700 hover:text-neutral-900"
        }`;

    return (
        <header className="sticky top-0 z-[150] backdrop-blur-xl bg-white/80 border-b border-[color:var(--petrus-border)]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                <Link to="/" data-testid={TEST_IDS.headerLogo} className="flex items-center gap-3">
                    <img src={LOGO_URL} alt="PETRUS Consultoria" className="h-10 md:h-11 w-auto" />
                </Link>

                <nav className="hidden lg:flex items-center gap-10">
                    {NAV.map((n) => (
                        <NavLink key={n.to} to={n.to} end={n.to === "/"} data-testid={n.id} className={navClass}>
                            {n.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={buildWhatsappUrl(settings.whatsapp, "Olá, gostaria de solicitar um orçamento com a PETRUS.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-petrus"
                        data-testid="header-cta-whatsapp"
                    >
                        Orçamento
                    </a>
                </div>

                <button
                    className="lg:hidden text-neutral-900 p-2"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Abrir menu"
                    data-testid={TEST_IDS.mobileMenuToggle}
                >
                    {open ? <X size={26} /> : <List size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="lg:hidden border-t border-[color:var(--petrus-border)] overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-5 bg-white/95">
                            {NAV.map((n) => (
                                <NavLink
                                    key={n.to}
                                    to={n.to}
                                    end={n.to === "/"}
                                    data-testid={`${n.id}-mobile`}
                                    onClick={() => setOpen(false)}
                                    className={navClass}
                                >
                                    {n.label}
                                </NavLink>
                            ))}
                            <a
                                href={buildWhatsappUrl(settings.whatsapp)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-petrus w-fit"
                            >
                                Orçamento no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
