import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light navigation-bar">
            <div className="container-fluid">
                <Link className="navbar-brand navBrand">Steam Land</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link nav-link-custom active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link nav-link-custom" to="/product">Explore</Link>
                    </li>
                    <li className="nav-item">
                        {!user?.email && <Link className="nav-link nav-link-custom" to="/login">Log In</Link>}
                    </li>
                    {user?.email && <Link className="nav-link nav-link-custom" to="/dashboard">Dashboard</Link>}
                    <li className="nav-item">
                        <Link className="nav-link nav-link-custom">{user.displayName}</Link>
                    </li>
                    {user?.email && <Link className="nav-link nav-link-custom" onClick={logout}>Log Out</Link>}
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;