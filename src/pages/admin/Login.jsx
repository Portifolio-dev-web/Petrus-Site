import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { formatApiErrorDetail } from "@/lib/api";
import { TEST_IDS } from "@/lib/testIds";
import Seo from "@/components/Seo";

export default function AdminLogin() {
    const { login, user } = useAuth();
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        if (user && user.role === "admin") nav("/admin", { replace: true });
    }, [user, nav]);

    const submit = async (e) => {
        e.preventDefault();
        setErr("");
        setBusy(true);
        try {
            const u = await login(email.trim().toLowerCase(), password);
            if (u.role !== "admin") throw new Error("Acesso restrito");
            nav("/admin", { replace: true });
        } catch (e2) {
            setErr(formatApiErrorDetail(e2.response?.data?.detail) || e2.message);
        } finally {
            setBusy(false);
        }
    };

    return (
        <>
            <Seo title="Área Administrativa · PETRUS" description="Acesso restrito." />
            <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
                <form onSubmit={submit} className="w-full max-w-md border border-[color:var(--petrus-border-hi)] p-10 bg-[color:var(--petrus-surface)] space-y-6">
                    <div>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-[color:var(--petrus-yellow)] mb-3">/ Painel</p>
                        <h1 className="font-display uppercase text-3xl text-neutral-900">Área administrativa</h1>
                    </div>
                    <label className="block">
                        <span className="block text-xs font-mono-c uppercase tracking-[0.2em] text-neutral-600 mb-2">E-mail</span>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} data-testid={TEST_IDS.adminEmail}
                            className="w-full bg-white border border-[color:var(--petrus-border-hi)] px-4 py-3 text-neutral-900 outline-none focus:border-[color:var(--petrus-yellow)]" />
                    </label>
                    <label className="block">
                        <span className="block text-xs font-mono-c uppercase tracking-[0.2em] text-neutral-600 mb-2">Senha</span>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} data-testid={TEST_IDS.adminPassword}
                            className="w-full bg-white border border-[color:var(--petrus-border-hi)] px-4 py-3 text-neutral-900 outline-none focus:border-[color:var(--petrus-yellow)]" />
                    </label>
                    {err && <div className="text-red-600 text-sm" data-testid={TEST_IDS.adminLoginError}>{err}</div>}
                    <button type="submit" disabled={busy} data-testid={TEST_IDS.adminLoginSubmit} className="btn-petrus w-full justify-center disabled:opacity-60">
                        {busy ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </section>
        </>
    );
}
