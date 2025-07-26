import React, { useState } from "react";
import "../css/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    // runs on form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch("http://localhost:5000/api/loginUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials)
            });

            const response_data = await resp.json();
            if (resp.ok && response_data.data) {
                console.log("✓ logged in");
                navigate("/");
            } else {
                setCredentials({ email: "", password: "" });
                alert(response_data.errors);
            }
        } catch (err) {
            console.error(err);
            alert("Server unreachable. Try again later.");
        }
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Log In
                    </button>

                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/createUser" className="btn btn-danger">
                            New here? Create account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
