import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_BASE = `${BACKEND_URL}/api`;

export const api = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
});

export function formatApiErrorDetail(detail) {
    if (detail == null) return "Ocorreu um erro. Tente novamente.";
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail))
        return detail
            .map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e)))
            .filter(Boolean)
            .join(" ");
    if (detail && typeof detail.msg === "string") return detail.msg;
    return String(detail);
}

export const DEFAULT_WA_MESSAGE =
    "Olá! Vim pelo site do Univôlei Sumaré e gostaria de informações sobre treinos/seletivas!";

export function buildWhatsappUrl(number, message) {
    // Sem número configurado, wa.me/ abre o seletor de contatos do WhatsApp.
    const digits = (number || "").replace(/\D/g, "");
    const encoded = encodeURIComponent(message || DEFAULT_WA_MESSAGE);
    return `https://wa.me/${digits}?text=${encoded}`;
}
