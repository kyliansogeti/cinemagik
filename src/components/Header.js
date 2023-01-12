import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import filmLogo from '../assets/film.svg';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src={filmLogo} alt="Cinemagik logo" className="logo-icon" />
                    <h1 className="logo-txt">Cinemagik</h1>
                </Link>
            </div>
        </header>
    );
}

export default Header;