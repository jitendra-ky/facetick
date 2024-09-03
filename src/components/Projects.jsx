import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const portfolio = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/portfolio_website.png" alt="jitendra portfolio log" className="card_img" />
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className='tag'>React.JS</div>
                <h1>Portfolio</h1>
            </div>
            <p>My portfolio website showcases a diverse range of projects, highlighting my skills and dedication to crafting exceptional digital experiences. <br /> <br />you are on same website</p>
        </div>
        <div className="card-foot">
            <div className="btn" style={{visibility : "hidden"}}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.open("https://youtu.be/pmuAUmOw2MU?si=voQrA3wZoS0KQp2P")}><FontAwesomeIcon icon={faPlay} /> video</div>
            <div className="btn" style={{ visibility: "hidden" }}>doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
        </div>
    </div>
);

const sharktodo = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/sharktodo.png" alt="sharktodo logo" className="card_img" />
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className='tag'>React.JS + Django.PY</div>
                <h1>SharkToDo</h1>
            </div>
            <p>SharkToDo is a React-based to-do list application designed to help you effortlessly manage your tasks.</p>
        </div>
        <div className="card-foot">
            <div className="btn" onClick={() => window.open("https://todo.smileplease.life")}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.open("https://youtu.be/rb3MPeSYs4Q?si=0V2sHXaV9bezVHyp")}><FontAwesomeIcon icon={faPlay} /> video</div>
            <div className="btn" onClick={() => window.open("https://jitendra-ky.notion.site/SharkToDo-66ff51e3c830493b9a7bceadc788d1c0")}>doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
        </div>
    </div>
);

const tictaktoe = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/tictaktoe.png" alt="tic-tak-toe logo" className="card_img" />
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className='tag'>React.JS</div>
                <h1>TicTakToe</h1>
            </div>
            <p>A simple Tic-Tak-Toe game with some interesting features.</p>
        </div>
        <div className="card-foot">
            <div className="btn" onClick={() => window.open("https://tictaktoe.smileplease.life")}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.open("https://youtu.be/69ikkkNZd9Y?si=z7rzu7fIS3QgC_5f")}><FontAwesomeIcon icon={faPlay} /> video</div>
            <div className="btn" onClick={() => window.open()} style={{ visibility: "hidden" }}>doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
        </div>
    </div>
);

const careerCraftCard = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/careercraft.png" alt="CareerCraft logo" className="card_img" />
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className='tag'>Streamlit | Python</div>
                <div className='tag'>Open-Source</div>
                <h1>CareerCraft</h1>
            </div>
            <p>CareerCraft is a Streamlit-based application that leverages Google Gemini to optimize your resume for ATS and job applications.</p>
        </div>
        <div className="card-foot">
            <div className="btn" onClick={() => window.open("https://career-craft.azurewebsites.net/")}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.open("https://github.com/zsquare12/ats-optimized-resume")}>repo <FontAwesomeIcon icon={faGithub} /></div>
            <div className="btn" onClick={() => window.open("https://youtu.be/-C5RDNQNT1c?si=bFBaWwzr0Be7fCnd")}><FontAwesomeIcon icon={faPlay} /> video</div>
        </div>
    </div>
);

function Projects() {
    return (
        <div className="projects-section container">
            <div className='title'>projects</div>
            <div className="projects-body">
                {portfolio}
                {sharktodo}
                {tictaktoe}
                {careerCraftCard}
            </div>
        </div>
    );
}

export default Projects;
