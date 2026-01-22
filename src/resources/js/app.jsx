import { createRoot } from "react-dom/client";
import "./bootstrap";
import Landing from "./pages/Landing";

const el = document.getElementById("app");

if (el) {
    createRoot(el).render(<Landing />);
}
