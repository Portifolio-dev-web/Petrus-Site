import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/AuthContext";
import { SettingsProvider } from "@/context/SettingsContext";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Servicos from "@/pages/Servicos";
import Contato from "@/pages/Contato";
import NRLanding from "@/pages/NRLanding";
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
                            <Route path="/servicos" element={<Servicos />} />
                            <Route path="/contato" element={<Contato />} />
                            <Route path="/treinamento-nr-05" element={<NRLanding slug="nr-05" />} />
                            <Route path="/treinamento-nr-12" element={<NRLanding slug="nr-12" />} />
                            <Route path="/treinamento-nr-33" element={<NRLanding slug="nr-33" />} />
                            <Route path="/treinamento-nr-35" element={<NRLanding slug="nr-35" />} />
                            <Route path="/admin/login" element={<AdminLogin />} />
                            <Route path="/admin" element={<AdminDashboard />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </SettingsProvider>
    );
}

export default App;
