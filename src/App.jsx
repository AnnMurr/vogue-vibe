import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/ui/mainPage/mainPage";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/reset.css'

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </HashRouter>
    )
}