import './Header.css';

function Header() {
    const output = (
        <header className="container">
            <div className="left">
                <div className="main-logo"></div>
                <div className="branding">jitendra.me</div>
            </div>
            <div className="center">
                <div className="one">one</div>
                <div className="two">two</div>
                <div className="three">three</div>
            </div>
            <div className="right">
                <div className="one icon"></div>
                <div className="two icon"></div>
                <div className="three icon"></div>
            </div>
        </header>
    );
    return output;
}


export default Header;
