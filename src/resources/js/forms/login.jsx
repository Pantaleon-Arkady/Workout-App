import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
    const [namemail, setNameMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");

    const { login } = useAuth();

    function validateForm() {
        const newErrors = {};

        if (!namemail.trim()) {
            newErrors.namemail = "This field is required.";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required.";
        }

        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setServerError("");
        setErrors({});

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        await fetch("http://localhost:8000/sanctum/csrf-cookie", {
            credentials: "include"
        });

        const res = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ namemail, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            if (data.field) {
                setErrors({ [data.field]: data.message });
            } else {
                setServerError(data.message || "Login failed");
            }
            return;
        }
        

        login(data.user);
        navigate("/home");
    };


    return (
        <form onSubmit={handleSubmit} className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">

            <h4 className="fw-bold">Log In</h4>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Username or Email:</label>
                <input
                    type="text"
                    className={`form-control ${errors.namemail ? "is-invalid" : ""}`}
                    value={namemail}
                    onChange={(e) => setNameMail(e.target.value)}
                    placeholder="Enter your username or email"
                />
                {errors.namemail && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.namemail}</div>}
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
                Log in
            </button>

            {serverError && (
                <div className="text-light bg-danger rounded py-1 px-3 mt-1">
                    {serverError}
                </div>
            )}
        </form>
    );
}

export default LoginForm;