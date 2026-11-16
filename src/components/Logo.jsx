import { useState } from "react";
import { LOGO } from "@/lib/mediaPlaceholders";

/** Escudo do Univôlei: usa LOGO.src quando definido; senão um emblema SVG nas cores do clube. */
export default function Logo({ className = "h-11 w-11", withText = true }) {
    const [failed, setFailed] = useState(false);

    const mark =
        LOGO.src && !failed ? (
            <img src={LOGO.src} alt={LOGO.alt} onError={() => setFailed(true)} className={`${className} object-contain`} />
        ) : (
            <svg viewBox="0 0 64 64" className={className} aria-label={LOGO.alt} role="img">
                <circle cx="32" cy="32" r="29" fill="#111827" stroke="#FF6B00" strokeWidth="4" />
                <path d="M32 3a29 29 0 0 1 0 58M9 17c14 4 25 16 29 43M55 17C41 21 30 33 26 60" fill="none" stroke="#00A8E8" strokeWidth="3.5" />
                <text x="32" y="39" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="900" fontSize="20" fill="#E2E8F0">UNI</text>
            </svg>
        );

    if (!withText) return mark;
    return (
        <span className="flex items-center gap-3">
            {mark}
            <span className="leading-none">
                <span className="block font-display uppercase text-xl tracking-wide text-uni-silver">Univôlei</span>
                <span className="block text-[10px] font-mono-c uppercase tracking-[0.3em] text-uni-orange">Sumaré · SP</span>
            </span>
        </span>
    );
}
