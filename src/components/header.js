// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white text-center py-3">
            <h1>My App</h1>
            <nav>
                <Link to="/" className="text-white mx-2">Home</Link>
                <Link to="/about" className="text-white mx-2">About</Link> {/* Add About link */}
            </nav>
        </header>
    );
};

export default Header;

