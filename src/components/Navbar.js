import React from 'react'
import Logo from './Logo'


const Navbar = () => {
    return (
        <div className="navContainer">
            <Logo />
            <nav className="nav">
            <i class="fab fa-twitter icons"></i>
            <i class="fab fa-facebook icons"></i>
            <i class="fas fa-globe"></i>
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
