import React, { useState } from 'react';
import '../css/SignUp.css';
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [Credentials, setCredentials] = useState({ name: "", email: "", location: "", Password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: Credentials.name, email: Credentials.email, location: Credentials.location, Password: Credentials.Password })
        })

        const fetch_response = await response.json()
        if (fetch_response.data == true) {
            console.log("user created sucessfully");
            navigate("/")
        }
        else {
            console.log(fetch_response);
            setCredentials({ name: "", email: "", location: "", Password: "" });
            alert(fetch_response.msg)
        }
    }
    const handleChange = (event) => {
        setCredentials({ ...Credentials, [event.target.name]: event.target.value });
    }
    return (
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Create Account</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" value={Credentials.name} onChange={handleChange} />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" value={Credentials.email} onChange={handleChange} />
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter your address" name="location" value={Credentials.location} onChange={handleChange} />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter a secure password" name="Password" value={Credentials.Password} onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/login" className="btn btn-danger">
                            Already a user?
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    );
}
