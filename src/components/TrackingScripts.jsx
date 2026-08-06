import { useEffect } from "react";
import { useSettings } from "@/context/SettingsContext";

/**
 * Injects Google Analytics 4, Google Ads and Meta Pixel scripts based on
 * IDs configured in the admin panel. Silent no-ops when IDs are empty.
 */
export default function TrackingScripts() {
    const { settings } = useSettings();

    useEffect(() => {
        if (!settings) return;

        const scripts = [];

        // Google Analytics 4
        if (settings.ga4_id) {
            const s1 = document.createElement("script");
            s1.async = true;
            s1.src = `https://www.googletagmanager.com/gtag/js?id=${settings.ga4_id}`;
            document.head.appendChild(s1);
            scripts.push(s1);

            const s2 = document.createElement("script");
            s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${settings.ga4_id}');`;
            document.head.appendChild(s2);
            scripts.push(s2);
        }

        // Google Ads
        if (settings.gads_id) {
            const s = document.createElement("script");
            s.async = true;
            s.src = `https://www.googletagmanager.com/gtag/js?id=${settings.gads_id}`;
            document.head.appendChild(s);
            scripts.push(s);
            const s2 = document.createElement("script");
            s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${settings.gads_id}');`;
            document.head.appendChild(s2);
            scripts.push(s2);
        }

        // Meta Pixel
        if (settings.meta_pixel_id) {
            const s = document.createElement("script");
            s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${settings.meta_pixel_id}');fbq('track','PageView');`;
            document.head.appendChild(s);
            scripts.push(s);
        }

        return () => {
            scripts.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
        };
    }, [settings]);

    return null;
}

// Global conversion helpers usable from any component
export function trackConversion(kind = "lead") {
    try {
        if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", { send_to: "AW-XXXX/YYYY", event_category: kind });
        }
        if (typeof window.fbq === "function") {
            window.fbq("track", kind === "whatsapp" ? "Contact" : "Lead");
        }
    } catch {
        /* noop */
    }
}
