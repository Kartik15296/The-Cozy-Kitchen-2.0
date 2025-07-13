import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container mt-5">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top bg-dark text-white rounded-3 px-4">

                <div className="d-flex align-items-center">
                    <Link to="/" className="me-3">
                        <img src='/assets/Logo.png' alt="Logo" width="60" height="50" className="img-fluid" />
                    </Link>
                    <span>© 2024 <i>The Cozy Kitchen</i>, Inc</span>
                </div>

                {/* Right Side - Navigation Links (Shifted to right) */}
                <ul className="nav justify-content-end">
                    <li className="nav-item"><Link to="/" className="nav-link px-3 text-white">Home</Link></li>
                    <li className="nav-item"><Link to="/features" className="nav-link px-3 text-white">Features</Link></li>
                    <li className="nav-item"><Link to="/pricing" className="nav-link px-3 text-white">Pricing</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link px-3 text-white">About</Link></li>
                </ul>

            </footer>
        </div>
    )
}
