import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/ui/mainPage/mainPage";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/reset.css'
import { About } from "./components/ui/about/about";
import { Career } from "./components/ui/career/career";
import { Cookies } from "./components/ui/cookies/cookies";
import { Privacy } from "./components/ui/privacy/privacy";
import { Terms } from "./components/ui/terms/terms";

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </HashRouter>
    )
}