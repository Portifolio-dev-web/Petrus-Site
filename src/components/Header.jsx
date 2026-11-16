import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X, InstagramLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { TEST_IDS } from "@/lib/testIds";
import { useSettings } from "@/context/SettingsContext";
import { HASHTAG } from "@/lib/univoleiData";
import Logo from "@/components/Logo";

const NAV = [
    { to: "/", label: "Início", id: TEST_IDS.navHome },
    { to: "/sobre", label: "O Clube", id: TEST_IDS.navSobre },
    { to: "/categorias", label: "Categorias & Torneios", id: TEST_IDS.navCategorias },
    { to: "/seletivas", label: "Seletivas 2k27", id: TEST_IDS.navSeletivas },
    { to: "/contato", label: "Contato", id: TEST_IDS.navContato },
];

export default function Header() {
    const { settings } = useSettings();
    const [open, setOpen] = useState(false);

    const navClass = ({ isActive }) =>
        `text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
            isActive ? "text-uni-orange" : "text-uni-muted hover:text-uni-silver"
        }`;

    return (
        <header className="sticky top-0 z-[150] backdrop-blur-xl bg-uni-bg/80 border-b border-white/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                <Link to="/" data-testid={TEST_IDS.headerLogo} aria-label="Univôlei Sumaré — início">
                    <Logo />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV.map((n) => (
                        <NavLink key={n.to} to={n.to} end={n.to === "/"} data-testid={n.id} className={navClass}>
                            {n.label}
                        </NavLink>
                    ))}
                </nav>

                <a
                    href={settings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex btn-uni !py-2.5 !px-5"
                    data-testid="header-cta-instagram"
                >
                    <InstagramLogo size={18} weight="bold" /> {HASHTAG}
                </a>

                <button
                    className="lg:hidden text-uni-silver p-2"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
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
                        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                        className="lg:hidden border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-5 bg-uni-bg/95">
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
                            <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="btn-uni w-fit">
                                <InstagramLogo size={18} weight="bold" /> @univolei_sumare
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
