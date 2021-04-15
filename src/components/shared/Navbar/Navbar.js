import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active" >
                            <Link className="nav-link fw-bold me-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold me-5 " to="/#">Navbar 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold me-5" to="/#">Navbar 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold me-5" to="/#">Navbar 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold me-5" to="/#">Navbar 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold me-5" to="/#">Navbar 4</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;