/*
ya this is the banner 
*/

const banner_text = {
    'banner_text1': "Hello, I'm",
    'banner_text2': "Jitendra K. Y.",
    'banner_text3': <>studying at <b>IET Lucknow (CSE AI)</b></>,
    'banner_text4': "a passionate coding enthusiast on an exciting journey of learning and self-discovery. With an insatiable love for unraveling the intricacies of programming mastering the art of coding but also unlocking a myriad of skills along the way.",
};
const banner_text_jsx = <>
    {Object.entries(banner_text).map(([key, value], index) => (
        <div key={index} className={key}>{value}</div>
    ))}
</>


const account_link = {
    'github':       "https://github.com/zsquare12                           | fa-brands fa-github".split('|'),
    'instagram':    "https://www.instagram.com/jitendra_322003/             | fa-brands fa-square-instagram".split('|'),
    'twitter':      "https://twitter.com/Jiten_69854                        | fa-brands fa-square-twitter".split('|'),
    'linkedin':     "https://www.linkedin.com/in/jitendra-kumar-6aba46210/  | fa-brands fa-linkedin".split('|'),
}

const account_link_jsx = (<>
    {Object.entries(account_link).map(([key, value], index) => (
        <li><a href={value[0].trim()} target="_blank"><i className={value[1].trim()}></i></a></li>
    ))}
</>)

const my_img = "static/images/jiten.png"

function Banner() {

    return (<>
        <section className="banner2">
            <div className="banner2_img">
                <img src={my_img} alt="" />
            </div>
            <div className="banner_texts">
                {banner_text_jsx}
                <ul className="account_icons">
                    {account_link_jsx}
                </ul>

            </div>
        </section>
    </>)
}

export default Banner;