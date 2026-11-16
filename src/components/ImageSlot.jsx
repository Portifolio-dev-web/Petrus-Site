import { useState } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Exibe a foto real quando `src` existe; senão (ou se o arquivo falhar)
 * mostra um placeholder com nome do slot, tamanho recomendado e caminho.
 * Aceita `slot` (item de mediaPlaceholders.js) ou props avulsas.
 */
export default function ImageSlot({
    slot = {},
    src = slot.src,
    alt = slot.alt,
    label = slot.title,
    recommendedSize = slot.dimensions,
    path = slot.SuggestedPath,
    aspectRatio = "4/5",
    compact = false,
    className = "",
    imgClassName = "",
}) {
    const [failed, setFailed] = useState(false);
    const style = aspectRatio ? { aspectRatio } : undefined;

    if (src && !failed) {
        return (
            <div className={cn("relative overflow-hidden", className)} style={style}>
                <img
                    src={src}
                    alt={alt || label || ""}
                    loading="lazy"
                    onError={() => setFailed(true)}
                    className={cn("w-full h-full object-cover", imgClassName)}
                />
            </div>
        );
    }

    return (
        <div
            role="img"
            aria-label={`Espaço reservado: ${label || alt || "imagem"}`}
            title={path ? `Salvar em public${path}` : undefined}
            className={cn(
                "relative overflow-hidden grid place-items-center text-center bg-slate-900/80 border-2 border-dashed border-orange-500/40 hover:border-sky-400/60 transition-all",
                className
            )}
            style={style}
        >
            <div className="absolute inset-0 court-lines opacity-60" />
            <div className={cn("relative flex flex-col items-center gap-2", compact ? "p-2" : "p-5")}>
                <Camera className="text-uni-orange" size={compact ? 20 : 30} strokeWidth={1.6} />
                {!compact && (
                    <>
                        <span className="font-display uppercase text-uni-silver text-lg leading-tight">{label}</span>
                        {recommendedSize && (
                            <span className="text-[11px] font-mono-c text-uni-blue">{recommendedSize}</span>
                        )}
                        {path && <span className="text-[10px] font-mono-c text-uni-muted break-all">public{path}</span>}
                    </>
                )}
            </div>
        </div>
    );
}
