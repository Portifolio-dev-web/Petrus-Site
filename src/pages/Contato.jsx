import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { CheckCircle, EnvelopeSimple, PhoneCall, MapPin, WhatsappLogo, ArrowRight } from "@phosphor-icons/react";
import { MaskedReveal, FadeUp } from "@/components/Kinetic";
import Seo from "@/components/Seo";
import { api, buildWhatsappUrl, formatApiErrorDetail } from "@/lib/api";
import { useSettings } from "@/context/SettingsContext";
import { TEST_IDS } from "@/lib/testIds";
import { trackConversion } from "@/components/TrackingScripts";

const SERVICOS = [
    "Consultoria — PGR",
    "Consultoria — PCMSO",
    "Consultoria — LTCAT",
    "Consultoria — CIPA",
    "Cpnsultoria - Palestras",
    "Consultoria - SIPAT",
    "Formação de Brigadista",
    "Treinamento NR 05 (CIPA)",
    "Treinamento NR 12 (Máquinas)",
    "Treinamento NR 33 (Espaço Confinado)",
    "Treinamento NR 35 (Trabalho em Altura)",
    "Treinamento - Primeiros Socorros",
    "Outro",
];

const EMPTY = { nome: "", empresa: "", email: "", telefone: "", servico: SERVICOS[0], mensagem: "" };

export default function Contato() {
    const { settings } = useSettings();
    const [form, setForm] = useState(EMPTY);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        setSending(true);
        try {
            await api.post("/leads", { ...form, origem: "site-contato" });
            setSuccess(true);
            setForm(EMPTY);
            toast.success("Recebemos seu contato. Retornaremos em breve.");
            trackConversion("lead");
        } catch (err) {
            const msg = formatApiErrorDetail(err.response?.data?.detail) || err.message;
            setError(msg);
            toast.error(msg);
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <Seo title="Contato — Solicite Orçamento | PETRUS Consultoria" description="Fale com a PETRUS Consultoria. Formulário, telefone, e-mail e WhatsApp para orçamento de consultoria e treinamentos NR." />
            <Toaster theme="dark" richColors position="top-right" />

            <section className="relative border-b border-[color:var(--petrus-border)]">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
                    <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-6">/ Contato</p>
                    <MaskedReveal
                        tag="h1"
                        className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-neutral-900 max-w-5xl"
                        lines={["Vamos conversar", <span key="a">sobre <span className="text-[color:var(--petrus-yellow)]">sua operação</span>.</span>]}
                    />
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid gap-14 lg:grid-cols-12">
                <FadeUp className="lg:col-span-5 space-y-8">
                    <div>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-4">/ Canais diretos</p>
                        <ul className="space-y-5 mt-6 text-neutral-700">
                            <li className="flex items-start gap-4"><PhoneCall size={22} className="text-[color:var(--petrus-yellow)] mt-0.5" />{settings.telefone}</li>
                            <li className="flex items-start gap-4"><EnvelopeSimple size={22} className="text-[color:var(--petrus-yellow)] mt-0.5" />{settings.email}</li>
                            <li className="flex items-start gap-4"><MapPin size={22} className="text-[color:var(--petrus-yellow)] mt-0.5" />{settings.endereco}</li>
                        </ul>
                    </div>
                    <a href={buildWhatsappUrl(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-petrus w-fit">
                        <WhatsappLogo size={18} weight="fill" /> Falar no WhatsApp
                    </a>
                    {settings.map_embed_url ? (
                        <div className="border border-[color:var(--petrus-border-hi)] overflow-hidden aspect-video mt-6">
                            <iframe title="Mapa" src={settings.map_embed_url} className="w-full h-full grayscale" loading="lazy" />
                        </div>
                    ) : null}
                </FadeUp>

                <FadeUp className="lg:col-span-7" delay={0.1}>
                    <form onSubmit={submit} className="border border-[color:var(--petrus-border-hi)] p-8 md:p-12 space-y-6 bg-[color:var(--petrus-surface)]">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Field label="Nome" required>
                                <input type="text" required value={form.nome} onChange={upd("nome")} data-testid={TEST_IDS.formNome} className={inputCls} />
                            </Field>
                            <Field label="Empresa">
                                <input type="text" value={form.empresa} onChange={upd("empresa")} data-testid={TEST_IDS.formEmpresa} className={inputCls} />
                            </Field>
                            <Field label="E-mail" required>
                                <input type="email" required value={form.email} onChange={upd("email")} data-testid={TEST_IDS.formEmail} className={inputCls} />
                            </Field>
                            <Field label="Telefone / WhatsApp" required>
                                <input type="tel" required value={form.telefone} onChange={upd("telefone")} data-testid={TEST_IDS.formTelefone} className={inputCls} />
                            </Field>
                        </div>
                        <Field label="Serviço de interesse" required>
                            <select required value={form.servico} onChange={upd("servico")} data-testid={TEST_IDS.formServico} className={inputCls}>
                                {SERVICOS.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </Field>
                        <Field label="Mensagem" required>
                            <textarea rows={5} required value={form.mensagem} onChange={upd("mensagem")} data-testid={TEST_IDS.formMensagem} className={`${inputCls} resize-none`} />
                        </Field>
                        {error && <div className="text-red-600 text-sm font-mono-c" data-testid={TEST_IDS.formError}>{error}</div>}
                        {success && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-[color:var(--petrus-yellow)] font-mono-c text-sm" data-testid={TEST_IDS.formSuccess}>
                                <CheckCircle size={22} weight="fill" /> Contato enviado com sucesso. Retornaremos em breve.
                            </motion.div>
                        )}
                        <button type="submit" disabled={sending} data-testid={TEST_IDS.formSubmit} className="btn-petrus w-full sm:w-auto justify-center disabled:opacity-60">
                            {sending ? "Enviando..." : "Enviar solicitação"} <ArrowRight size={18} />
                        </button>
                    </form>
                </FadeUp>
            </section>
        </>
    );
}

const inputCls =
    "w-full bg-white border border-[color:var(--petrus-border-hi)] px-4 py-3 text-neutral-900 placeholder-neutral-500 outline-none focus:border-[color:var(--petrus-yellow)] transition-colors font-manrope";

function Field({ label, required, children }) {
    return (
        <label className="block">
            <span className="block text-xs font-mono-c uppercase tracking-[0.2em] text-neutral-600 mb-2">
                {label} {required && <span className="text-[color:var(--petrus-yellow)]">*</span>}
            </span>
            {children}
        </label>
    );
}
