import './Header.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSeedling, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Header({ scrollIntoView, onToggleDarkMode, isDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkModeIcon, setDarkModeIcon] = useState(faSun); // Initial icon based on light mode

    // Toggle function for the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Update icon based on the current dark mode state
    useEffect(() => {
        setDarkModeIcon(isDarkMode ? faSun : faMoon);
    }, [isDarkMode]);

    const menuClassUp = menuOpen ? 'line one open' : 'line one';
    const menuClassDown = menuOpen ? 'line two open' : 'line two';
    const sidebarClass = menuOpen ? 'sidebar' : 'sidebar close';

    return (
        <header className="container">
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
                    <FontAwesomeIcon icon={darkModeIcon} className="icon-style" />
                </div>
                <div className="three nav-menu" onClick={toggleMenu}>
                    <div className={menuClassUp}></div>
                    <div className={menuClassDown}></div>
                </div>
                <div className={sidebarClass}>
                    <div className="container">
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
