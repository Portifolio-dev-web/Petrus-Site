import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";

const SettingsContext = createContext(null);

const FALLBACK = {
    // Valores reais são definidos no Painel Admin → Configurações.
    whatsapp: "",
    telefone: "",
    email: "",
    endereco: "Sumaré — São Paulo/SP",
    instagram: "https://www.instagram.com/univolei_sumare/",
    youtube: "https://youtube.com/@UnivoleiSumare",
    ga4_id: "",
    gads_id: "",
    gads_conversion_label: "",
    meta_pixel_id: "",
    map_embed_url: "",
};

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(FALLBACK);

    const load = useCallback(async () => {
        try {
            const { data } = await api.get("/settings/public");
            setSettings({ ...FALLBACK, ...data });
        } catch {
            /* fallback silently */
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return (
        <SettingsContext.Provider value={{ settings, refresh: load }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);
