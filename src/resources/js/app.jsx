import { createRoot } from "react-dom/client";
import "./bootstrap";
import LandingPage from "./pages/Landing";

const el = document.getElementById("app");

if (el) {
    createRoot(el).render(<LandingPage />);
}
