/*
ya this is the banner 
*/

const banner_info = {
};

function Banner() {

    return (<>
        <section className="banner"></section>
        <div className="banner_img">
            <img src="static/images/jiten.png" alt="" />
        </div>
        <div className="banner_texts">
            <div className="banner_text1">Hello, I'm</div>
            <div className="banner_text2">Jitendra K. Y.</div>
            <div className="banner_text3">studying at <b>IET Lucknow (CSE AI)</b></div>
            <div className="banner_text4">a passionate coding enthusiast on an exciting journey of learning and
                self-discovery. With an insatiable love
                for unraveling the intricacies of programming, not just mastering the art of coding but also
                unlocking a myriad
                of skills along the way.</div>
            <ul className="account_icons">

                <li><a href="https://github.com/zsquare12" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/jitendra_322003/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a></li>
                <li><a href="https://twitter.com/Jiten_69854" target="_blank"><i className="fa-brands fa-square-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/jitendra-kumar-6aba46210/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>

        </div>

    </>)
}

export default Banner;