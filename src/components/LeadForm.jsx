import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { api, formatApiErrorDetail } from "@/lib/api";
import { TEST_IDS } from "@/lib/testIds";
import { trackConversion } from "@/components/TrackingScripts";

/**
 * Formulário único para Contato e Seletivas → POST /leads (campos do backend:
 * nome, empresa, email, telefone, servico, mensagem, origem).
 * `secondLabel` reaproveita a coluna `empresa` (ex.: "Equipe / Empresa" ou "Idade").
 */
export default function LeadForm({
    origem,
    subjects,
    subjectLabel = "Assunto",
    secondLabel = "Equipe / Empresa",
    secondRequired = false,
    secondType = "text",
    messagePlaceholder = "",
    submitLabel = "Enviar",
}) {
    const empty = { nome: "", empresa: "", email: "", telefone: "", servico: subjects[0], mensagem: "" };
    const [form, setForm] = useState(empty);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        setSending(true);
        try {
            await api.post("/leads", { ...form, empresa: String(form.empresa), origem });
            setSuccess(true);
            setForm(empty);
            toast.success("Recebemos sua mensagem! Retornaremos em breve. 🦁");
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
        <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <Field label="Nome" required>
                    <input type="text" required autoComplete="name" value={form.nome} onChange={upd("nome")} data-testid={TEST_IDS.formNome} className={inputCls} />
                </Field>
                <Field label={secondLabel} required={secondRequired}>
                    <input type={secondType} required={secondRequired} min={secondType === "number" ? 5 : undefined} max={secondType === "number" ? 99 : undefined} value={form.empresa} onChange={upd("empresa")} data-testid={TEST_IDS.formEmpresa} className={inputCls} />
                </Field>
                <Field label="E-mail" required>
                    <input type="email" required autoComplete="email" value={form.email} onChange={upd("email")} data-testid={TEST_IDS.formEmail} className={inputCls} />
                </Field>
                <Field label="Telefone / WhatsApp" required>
                    <input type="tel" required autoComplete="tel" value={form.telefone} onChange={upd("telefone")} data-testid={TEST_IDS.formTelefone} className={inputCls} />
                </Field>
            </div>
            <Field label={subjectLabel} required>
                <select required value={form.servico} onChange={upd("servico")} data-testid={TEST_IDS.formServico} className={inputCls}>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
            </Field>
            <Field label="Mensagem" required>
                <textarea rows={5} required placeholder={messagePlaceholder} value={form.mensagem} onChange={upd("mensagem")} data-testid={TEST_IDS.formMensagem} className={`${inputCls} resize-none`} />
            </Field>
            {error && <div role="alert" className="text-red-400 text-sm" data-testid={TEST_IDS.formError}>{error}</div>}
            {success && (
                <motion.div role="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-uni-blue text-sm font-bold" data-testid={TEST_IDS.formSuccess}>
                    <CheckCircle2 size={22} /> Enviado com sucesso! Em breve a família Uni entra em contato.
                </motion.div>
            )}
            <button type="submit" disabled={sending} data-testid={TEST_IDS.formSubmit} className="btn-uni w-full sm:w-auto justify-center disabled:opacity-60">
                {sending ? "Enviando..." : submitLabel} <ArrowRight size={18} />
            </button>
        </form>
    );
}

const inputCls =
    "w-full rounded-lg bg-uni-bg/70 border border-white/10 px-4 py-3 text-uni-silver placeholder-slate-500 outline-none focus:border-uni-orange focus:ring-2 focus:ring-uni-orange/30 transition";

function Field({ label, required, children }) {
    return (
        <label className="block">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-uni-muted mb-2">
                {label} {required && <span className="text-uni-orange">*</span>}
            </span>
            {children}
        </label>
    );
}
