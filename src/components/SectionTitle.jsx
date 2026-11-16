import { FadeUp } from "@/components/Kinetic";

export default function SectionTitle({ eyebrow, children, className = "", color = "text-uni-orange" }) {
    return (
        <FadeUp className={className}>
            <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3 ${color}`}>
                <span className="w-8 h-0.5 bg-current" /> {eyebrow}
            </p>
            <h2 className="font-display uppercase italic text-4xl md:text-6xl leading-[0.92] tracking-tight text-uni-silver">
                {children}
            </h2>
        </FadeUp>
    );
}
