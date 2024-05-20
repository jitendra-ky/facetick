//this is the header
//header contain things like navbar.

function Navbar() {
    return (<>
        <div className="navbar_container">
            <ul className="nav_left">
                <li className="branding"><a href="index.html">
                    <img src="static/images/jiten.png" alt="" className="logo" />
                    <p>SmilePlease.Life</p>
                </a>
                </li>
            </ul>
            <ul className="nav_right">

            </ul>
        </div>
    </>)
}

function Header() {
    return (<>
        <Navbar />
    </>)
}

export default Header;