import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@/App.css";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/AuthContext";
import { SettingsProvider } from "@/context/SettingsContext";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Categorias from "@/pages/Categorias";
import Seletivas from "@/pages/Seletivas";
import Contato from "@/pages/Contato";
import AdminLogin from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";

function App() {
    return (
        <SettingsProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/categorias" element={<Categorias />} />
                            <Route path="/seletivas" element={<Seletivas />} />
                            <Route path="/contato" element={<Contato />} />
                            <Route path="/admin/login" element={<AdminLogin />} />
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </SettingsProvider>
    );
}

export default App;
