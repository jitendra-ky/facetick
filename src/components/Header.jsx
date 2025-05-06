import './Header.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSeedling, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap-icons/font/bootstrap-icons.css';

function Header({ scrollIntoView, onToggleDarkMode, isDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkModeIcon, setDarkModeIcon] = useState("sun"); // Initial icon based on light mode

    // Toggle function for the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Update icon based on the current dark mode state
    useEffect(() => {
        setDarkModeIcon(isDarkMode ? "sun" : "moon-stars");
    }, [isDarkMode]);

    const menuClassUp = menuOpen ? 'line one open' : 'line one';
    const menuClassDown = menuOpen ? 'line two open' : 'line two';
    const sidebarClass = menuOpen ? 'sidebar' : 'sidebar close';

    return (
        <header className="mycontainer">
            <div className="left">
                <div className="main-logo">
                    <FontAwesomeIcon icon={faSeedling} className="icon-style" />
                </div>
                <div className="branding">jitendra.me</div>
            </div>
            <div className="center">
                <div className="one" onClick={() => scrollIntoView('featured')}>featured</div>
                <div className="two" onClick={() => scrollIntoView('skills')}>skills</div>
                <div className="two" onClick={() => scrollIntoView('projects')}>projects</div>
            </div>
            <div className="right">
                {/* <div className="one icon"></div> */}
                <div className="two icon mode-change" onClick={onToggleDarkMode}>
                    <i className={`bi bi-${darkModeIcon} h1`}></i>
                </div>
                <div className="three nav-menu" onClick={toggleMenu}>
                    <div className={menuClassUp}></div>
                    <div className={menuClassDown}></div>
                </div>
                <div className={sidebarClass}>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/jitendra-kumar-6aba46210/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/jitendra-ky" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/Jiten_69854" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/jitendra_322003/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className="mycontainer">
                        <div className="one" onClick={() => scrollIntoView('featured')}>featured</div>
                        <div className="two" onClick={() => scrollIntoView('skills')}>skills</div>
                        <div className="two" onClick={() => scrollIntoView('projects')}>projects</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
