import './Header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSeedling } from '@fortawesome/free-solid-svg-icons';


function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    // here is the toggle function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const menuClassUp = menuOpen ? 'line one open' : 'line one';
    const menuClassDown = menuOpen ? 'line two open' : 'line two';
    const sidebarClass = menuOpen ? 'sidebar' : 'sidebar close';


    const output = (
        <header className="container">
            <div className="left">
                <div className="main-logo"><FontAwesomeIcon icon={faSeedling} className="icon-style" /></div>
                <div className="branding">jitendra.me</div>
            </div>
            <div className="center">
                <div className="one" onClick={() => props.scrollIntoView('sample')}>one</div>
                <div className="two">two</div>
                <div className="three">three</div>
            </div>
            <div className="right">
                {/* <div className="one icon"></div>
                <div className="two icon"></div> */}
                <div className="three nav-menu" onClick={toggleMenu}>
                    <div className={menuClassUp}></div>
                    <div className={menuClassDown}></div>
                </div>
                <div className={sidebarClass}>
                    <div className="container"></div>
                </div>
            </div>
        </header>
    );
    return output;
}


export default Header;
