import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { SignOut, Trash, PencilSimple, Plus, FloppyDisk } from "@phosphor-icons/react";
import { useAuth } from "@/context/AuthContext";
import { useSettings } from "@/context/SettingsContext";
import { api, formatApiErrorDetail } from "@/lib/api";
import { TEST_IDS } from "@/lib/testIds";
import Seo from "@/components/Seo";

const TABS = [
    { id: "leads", label: "Leads", testId: TEST_IDS.adminTabLeads },
    { id: "testimonials", label: "Depoimentos", testId: TEST_IDS.adminTabTestimonials },
    { id: "settings", label: "Configurações", testId: TEST_IDS.adminTabSettings },
];

export default function AdminDashboard() {
    const { user, loading, logout } = useAuth();
    const nav = useNavigate();
    const [tab, setTab] = useState("leads");

    useEffect(() => {
        if (!loading && (!user || user.role !== "admin")) nav("/admin/login", { replace: true });
    }, [user, loading, nav]);

    if (loading || !user) return <div className="min-h-[60vh] grid place-items-center text-neutral-600 font-mono-c uppercase tracking-[0.2em] text-xs">carregando...</div>;

    return (
        <>
            <Seo title="Painel · PETRUS" description="Painel administrativo" />
            <Toaster theme="dark" richColors position="top-right" />
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16">
                <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
                    <div>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-2">/ Painel administrativo</p>
                        <h1 className="font-display uppercase text-3xl md:text-4xl text-neutral-900">Olá, {user.name}</h1>
                    </div>
                    <button onClick={async () => { await logout(); nav("/admin/login"); }} data-testid={TEST_IDS.adminLogout} className="btn-ghost">
                        <SignOut size={18} /> Sair
                    </button>
                </header>

                <div className="border-b border-[color:var(--petrus-border-hi)] flex gap-8 mb-10">
                    {TABS.map((t) => (
                        <button key={t.id} onClick={() => setTab(t.id)} data-testid={t.testId}
                            className={`pb-3 text-xs font-mono-c uppercase tracking-[0.22em] border-b-2 -mb-px transition-colors ${tab === t.id ? "text-[color:var(--petrus-yellow)] border-[color:var(--petrus-yellow)]" : "text-neutral-500 border-transparent hover:text-neutral-900"}`}>
                            {t.label}
                        </button>
                    ))}
                </div>

                {tab === "leads" && <LeadsTab />}
                {tab === "testimonials" && <TestimonialsTab />}
                {tab === "settings" && <SettingsTab />}
            </section>
        </>
    );
}

function LeadsTab() {
    const [leads, setLeads] = useState([]);
    const load = async () => {
        try { const r = await api.get("/admin/leads"); setLeads(r.data); } catch (e) { toast.error(formatApiErrorDetail(e.response?.data?.detail)); }
    };
    useEffect(() => { load(); }, []);

    const del = async (id) => {
        if (!window.confirm("Excluir lead?")) return;
        try { await api.delete(`/admin/leads/${id}`); toast.success("Lead removido"); load(); } catch (e) { toast.error(formatApiErrorDetail(e.response?.data?.detail)); }
    };
    const setStatus = async (id, status) => {
        try { await api.patch(`/admin/leads/${id}`, { status }); load(); } catch (e) { toast.error(formatApiErrorDetail(e.response?.data?.detail)); }
    };

    return (
        <div className="overflow-x-auto border border-[color:var(--petrus-border)]">
            <table className="w-full text-sm">
                <thead className="bg-[color:var(--petrus-surface)] text-neutral-600 uppercase font-mono-c text-xs tracking-[0.15em]">
                    <tr>
                        <th className="text-left px-4 py-3">Data</th>
                        <th className="text-left px-4 py-3">Nome</th>
                        <th className="text-left px-4 py-3">Contato</th>
                        <th className="text-left px-4 py-3">Serviço</th>
                        <th className="text-left px-4 py-3">Mensagem</th>
                        <th className="text-left px-4 py-3">Status</th>
                        <th className="text-right px-4 py-3">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.length === 0 && <tr><td colSpan={7} className="px-4 py-10 text-center text-neutral-500">Nenhum lead recebido ainda.</td></tr>}
                    {leads.map((l) => (
                        <tr key={l.id} data-testid={TEST_IDS.adminLeadRow} className="border-t border-[color:var(--petrus-border)] hover:bg-[color:var(--petrus-surface)]">
                            <td className="px-4 py-3 text-neutral-600 whitespace-nowrap">{new Date(l.created_at).toLocaleString("pt-BR")}</td>
                            <td className="px-4 py-3 text-neutral-900">{l.nome}<div className="text-neutral-500 text-xs">{l.empresa}</div></td>
                            <td className="px-4 py-3 text-neutral-700">{l.telefone}<div className="text-neutral-500 text-xs">{l.email}</div></td>
                            <td className="px-4 py-3 text-neutral-800">{l.servico}</td>
                            <td className="px-4 py-3 text-neutral-600 max-w-xs truncate" title={l.mensagem}>{l.mensagem}</td>
                            <td className="px-4 py-3">
                                <select value={l.status} onChange={(e) => setStatus(l.id, e.target.value)} className="bg-white border border-[color:var(--petrus-border-hi)] px-2 py-1 text-xs font-mono-c uppercase text-neutral-900">
                                    <option value="novo">Novo</option>
                                    <option value="em_contato">Em contato</option>
                                    <option value="convertido">Convertido</option>
                                    <option value="descartado">Descartado</option>
                                </select>
                            </td>
                            <td className="px-4 py-3 text-right">
                                <button onClick={() => del(l.id)} aria-label="Excluir" className="text-neutral-500 hover:text-red-600"><Trash size={18} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const EMPTY_T = { nome: "", cargo: "", empresa: "", texto: "", published: true };

function TestimonialsTab() {
    const [items, setItems] = useState([]);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(EMPTY_T);

    const load = async () => { try { const r = await api.get("/admin/testimonials"); setItems(r.data); } catch (e) { toast.error(formatApiErrorDetail(e.response?.data?.detail)); } };
    useEffect(() => { load(); }, []);

    const startNew = () => { setEditing("new"); setForm(EMPTY_T); };
    const startEdit = (t) => { setEditing(t.id); setForm({ nome: t.nome, cargo: t.cargo, empresa: t.empresa, texto: t.texto, published: t.published }); };
    const cancel = () => { setEditing(null); setForm(EMPTY_T); };

    const save = async (e) => {
        e.preventDefault();
        try {
            if (editing === "new") await api.post("/admin/testimonials", form);
            else await api.put(`/admin/testimonials/${editing}`, form);
            toast.success("Depoimento salvo");
            cancel();
            load();
        } catch (err) { toast.error(formatApiErrorDetail(err.response?.data?.detail)); }
    };

    const del = async (id) => { if (!window.confirm("Excluir?")) return; try { await api.delete(`/admin/testimonials/${id}`); toast.success("Removido"); load(); } catch (e) { toast.error(formatApiErrorDetail(e.response?.data?.detail)); } };

    return (
        <div className="space-y-8">
            <div className="flex justify-end">
                <button onClick={startNew} className="btn-petrus"><Plus size={16} /> Novo depoimento</button>
            </div>

            {editing && (
                <form onSubmit={save} className="border border-[color:var(--petrus-border-hi)] p-6 grid gap-4 md:grid-cols-2 bg-[color:var(--petrus-surface)]">
                    <input required placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className={inputA} />
                    <input required placeholder="Cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} className={inputA} />
                    <input required placeholder="Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className={inputA} />
                    <label className="flex items-center gap-2 text-neutral-700 text-sm">
                        <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} /> Publicado no site
                    </label>
                    <textarea required rows={4} placeholder="Depoimento" value={form.texto} onChange={(e) => setForm({ ...form, texto: e.target.value })} className={`${inputA} md:col-span-2`} />
                    <div className="md:col-span-2 flex gap-3">
                        <button type="submit" className="btn-petrus"><FloppyDisk size={16} /> Salvar</button>
                        <button type="button" onClick={cancel} className="btn-ghost">Cancelar</button>
                    </div>
                </form>
            )}

            <div className="grid md:grid-cols-2 gap-4">
                {items.map((t) => (
                    <div key={t.id} className="border border-[color:var(--petrus-border)] p-6">
                        <p className="text-neutral-900">“{t.texto}”</p>
                        <div className="mt-4 pt-4 border-t border-[color:var(--petrus-border)] flex items-center justify-between">
                            <div>
                                <div className="font-display uppercase text-neutral-900 text-sm">{t.nome}</div>
                                <div className="text-xs text-neutral-500 font-mono-c uppercase tracking-[0.2em] mt-1">{t.cargo} · {t.empresa}</div>
                                {!t.published && <div className="text-red-600 text-xs mt-2 font-mono-c uppercase">Oculto</div>}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => startEdit(t)} className="text-neutral-600 hover:text-neutral-900"><PencilSimple size={18} /></button>
                                <button onClick={() => del(t.id)} className="text-neutral-500 hover:text-red-600"><Trash size={18} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SettingsTab() {
    const { refresh } = useSettings();
    const [form, setForm] = useState(null);
    const [busy, setBusy] = useState(false);

    useEffect(() => { api.get("/admin/settings").then((r) => setForm(r.data)).catch((e) => toast.error(formatApiErrorDetail(e.response?.data?.detail))); }, []);

    if (!form) return <div className="text-neutral-500 font-mono-c uppercase text-xs">carregando...</div>;

    const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const save = async (e) => {
        e.preventDefault();
        setBusy(true);
        try { await api.put("/admin/settings", form); toast.success("Configurações salvas"); refresh(); } catch (err) { toast.error(formatApiErrorDetail(err.response?.data?.detail)); } finally { setBusy(false); }
    };

    const FIELDS = [
        ["whatsapp", "WhatsApp (somente números com DDI)"],
        ["telefone", "Telefone exibido"],
        ["email", "E-mail"],
        ["endereco", "Endereço"],
        ["instagram", "URL Instagram"],
        ["linkedin", "URL LinkedIn"],
        ["ga4_id", "Google Analytics 4 ID (G-XXXXXX)"],
        ["gads_id", "Google Ads ID (AW-XXXXXX)"],
        ["gads_conversion_label", "Google Ads Conversion Label"],
        ["meta_pixel_id", "Meta Pixel ID"],
        ["map_embed_url", "URL de embed do Google Maps"],
    ];

    return (
        <form onSubmit={save} className="grid gap-4 md:grid-cols-2 border border-[color:var(--petrus-border-hi)] p-6 bg-[color:var(--petrus-surface)]" data-testid={TEST_IDS.adminSettingsForm}>
            {FIELDS.map(([k, label]) => (
                <label key={k} className="block">
                    <span className="block text-xs font-mono-c uppercase tracking-[0.2em] text-neutral-600 mb-2">{label}</span>
                    <input value={form[k] || ""} onChange={upd(k)} className={inputA} />
                </label>
            ))}
            <div className="md:col-span-2">
                <button type="submit" disabled={busy} data-testid={TEST_IDS.adminSettingsSave} className="btn-petrus disabled:opacity-60"><FloppyDisk size={16} /> {busy ? "Salvando..." : "Salvar configurações"}</button>
            </div>
        </form>
    );
}

const inputA = "bg-white border border-[color:var(--petrus-border-hi)] px-3 py-2 text-neutral-900 outline-none focus:border-[color:var(--petrus-yellow)]";
