import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap";
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";  // ← add this import

const el = document.getElementById("app");

if (el) {
    createRoot(el).render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />     {/* ← add this line */}
                {/* Optional: catch-all for 404 */}
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}