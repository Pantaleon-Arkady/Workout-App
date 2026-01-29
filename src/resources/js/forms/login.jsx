import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        namemail: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        });

        if (res.ok) {
            navigate("/home");
        } else {
            const data = await res.json();
            console.error(data);
            alert("Failed to login");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">

            <h4 className="fw-bold">Log In</h4>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Username or Email:</label>
                <input
                    name="namemail"
                    value={loginData.namemail}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Enter your username or email..." />
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Password:</label>
                <input
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Enter your password..." />
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Log in
            </button>

        </form>
    );
}

export default LoginForm;