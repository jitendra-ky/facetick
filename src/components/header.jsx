//this is the header
//header contain things like navbar.

function Navbar() {
    return (<>
        <div className="navbar">
            <div className="navleft">
                <ul>
                    <li>link1</li>
                </ul>
            </div>
            <div className="navright">
                <ul>
                    <li>link1</li>
                </ul>
            </div>
        </div>
    </>)
}

function Header() {
    return (<>
        <div className="header">
            <Navbar />
        </div>
    </>)
}

export default Header;