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
            <Seo title="Painel · Univôlei Sumaré" description="Acesso restrito." />
            <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
                <form onSubmit={submit} className="w-full max-w-md border border-white/10 p-10 bg-uni-card space-y-6">
                    <div>
                        <p className="text-xs font-mono-c uppercase tracking-[0.25em] text-uni-orange mb-3">/ Painel</p>
                        <h1 className="font-display uppercase text-3xl text-uni-silver">Área administrativa</h1>
                    </div>
                    <label className="block">
                        <span className="block text-xs font-mono-c uppercase tracking-[0.2em] text-uni-muted mb-2">E-mail</span>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} data-testid={TEST_IDS.adminEmail}
                            className="w-full bg-uni-bg border border-white/10 px-4 py-3 text-uni-silver outline-none focus:border-uni-orange" />
                    </label>
                    <label className="block">
                        <span className="block text-xs font-mono-c uppercase tracking-[0.2em] text-uni-muted mb-2">Senha</span>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} data-testid={TEST_IDS.adminPassword}
                            className="w-full bg-uni-bg border border-white/10 px-4 py-3 text-uni-silver outline-none focus:border-uni-orange" />
                    </label>
                    {err && <div className="text-red-400 text-sm" data-testid={TEST_IDS.adminLoginError}>{err}</div>}
                    <button type="submit" disabled={busy} data-testid={TEST_IDS.adminLoginSubmit} className="btn-uni w-full justify-center disabled:opacity-60">
                        {busy ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </section>
        </>
    );
}
