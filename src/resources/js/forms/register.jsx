import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function validateForm() {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Username is required.";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        if (res.ok) {
            navigate("/", { state: { registered: true } });
        } else {
            const data = await res.json();
            console.error(data);
            alert("Failed to register");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">
            <h4 className="fw-bold">Register</h4>

            <div className="border mb-2 mt-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Username:</label>
                <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your username..."
                />
                {errors.name && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.name}</div>}
            </div>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Email:</label>
                <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                />
                {errors.email && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.email}</div>}
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Password:</label>
                <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password..."
                />
                {errors.password && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.password}</div>}
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Register
            </button>
        </form>
    );
}

export default RegisterForm;
