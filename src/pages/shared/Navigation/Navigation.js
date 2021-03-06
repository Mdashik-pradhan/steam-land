import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';
import brandIcon from '../../../images/brand-icon.png';

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light navigation-bar">
            <div className="container-fluid">
                <Link className="navbar-brand navBrand">
                    <div className="d-flex align-items-center mb-2">
                            <img className="brand-icon" src={brandIcon} alt="" />
                            <h1>Steam Land</h1>
                    </div>
                </Link>
                <button className="navbar-toggler text-light brand-text-color-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-light fs-5"><i className="fas fa-bars"></i></span>
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
                        {!user?.email && <Link className="nav-link nav-link-custom login-button" to="/login">Login <i class="fas fa-sign-in-alt"></i></Link>}
                    </li>
                    {user?.email && <Link className="nav-link nav-link-custom" to="/dashboard">Dashboard</Link>}
                    <li className="nav-item">
                        <Link className="nav-link nav-link-custom">{user.displayName}</Link>
                    </li>
                    {user?.email && <Link className="nav-link nav-link-custom log-out-button" onClick={logout}><i class="fas fa-sign-out-alt"></i>Log Out</Link>}
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;