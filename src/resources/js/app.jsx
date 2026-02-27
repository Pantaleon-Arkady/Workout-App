import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap";
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import Posts from "./pages/Posts";

const el = document.getElementById("app");

if (el) {
    createRoot(el).render(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/post" element={<Posts />} />
                    <Route path="*" element={<h1>404 - Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}