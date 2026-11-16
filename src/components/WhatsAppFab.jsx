import { useSettings } from "@/context/SettingsContext";
import { buildWhatsappUrl, DEFAULT_WA_MESSAGE } from "@/lib/api";
import { TEST_IDS } from "@/lib/testIds";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppFab({ message = DEFAULT_WA_MESSAGE }) {
    const { settings } = useSettings();
    return (
        <a
            href={buildWhatsappUrl(settings.whatsapp, message)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={TEST_IDS.whatsappFab}
            aria-label="Falar com o Univôlei no WhatsApp"
            className="fixed bottom-6 right-6 z-[300] w-14 h-14 md:w-16 md:h-16 grid place-items-center bg-uni-orange text-white rounded-full pulse-orange shadow-2xl hover:bg-uni-blue transition-colors"
        >
            <WhatsappLogo weight="fill" size={30} />
        </a>
    );
}
