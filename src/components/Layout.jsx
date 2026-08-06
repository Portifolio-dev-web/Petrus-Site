import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import TrackingScripts from "@/components/TrackingScripts";

export default function Layout() {
    return (
        <SmoothScroll>
            <div className="App grain min-h-screen flex flex-col">
                <TrackingScripts />
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
                <WhatsAppFab />
            </div>
        </SmoothScroll>
    );
}
