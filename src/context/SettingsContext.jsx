import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";

const SettingsContext = createContext(null);

const FALLBACK = {
    whatsapp: "551999684-0992",
    telefone: "(11) 9 99684-0992",
    email: "petro_seg@hotmail.com",
    endereco: "Campinas — São Paulo/SP",
    instagram: "https://instagram.com/petrus_sst",
    linkedin: "https://linkedin.com/company/petrusconsultoria",
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
