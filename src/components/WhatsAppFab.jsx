import { useSettings } from "@/context/SettingsContext";
import { buildWhatsappUrl } from "@/lib/api";
import { TEST_IDS } from "@/lib/testIds";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppFab({ message }) {
    const { settings } = useSettings();
    const url = buildWhatsappUrl(settings.whatsapp, message);
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={TEST_IDS.whatsappFab}
            aria-label="Falar no WhatsApp"
            className="fixed bottom-6 right-6 z-[300] w-14 h-14 md:w-16 md:h-16 grid place-items-center bg-[color:var(--petrus-yellow)] text-black rounded-full pulse-yellow shadow-2xl hover:bg-white hover:text-black transition-colors"
        >
            <WhatsappLogo weight="fill" size={30} />
        </a>
    );
}
