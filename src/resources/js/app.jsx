import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container mt-5">
            <h1 className="text-primary">React is working</h1>
        </div>
    );
}

const el = document.getElementById("app");

if (el) {
    createRoot(el).render(<App />);
}
