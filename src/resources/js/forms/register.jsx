import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        passwrod: ""
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        if (res.ok) {
            navigate("/home");
        } else {
            const data = await res.json();
            console.err(data);
            alert("Failed to register");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">

            <h4 className="fw-bold">Register</h4>

            <div className="border mb-2 mt-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Username:</label>
                <input
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Create a username..." />
            </div>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Enter your email..." />
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Create a password..." />
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Register
            </button>

        </form>
    );
}

export default RegisterForm;