import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';

const portfolio = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/smileplease_project.png" alt="jitendra portfolio log" className="card_img" />
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className='tag'>React.JS</div>
                <h1>Portfolio</h1>
            </div>
            <p>My portfolio website showcases a diverse range of projects, highlighting my skills and dedication to crafting exceptional digital experiences.</p>
        </div>
        <div className="card-foot">
            <div className="btn">use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn"><FontAwesomeIcon icon={faPlay} /> video</div>
            <div className="btn">doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
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
            <div className="btn" onClick={() => window.location.href = "https://todo.smileplease.life"}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.location.href = "https://todo.smileplease.life"}><FontAwesomeIcon icon={faPlay} /> video</div>
            <div className="btn" onClick={() => window.location.href = "https://todo.smileplease.life"}>doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
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
            <div className="btn" onClick={() => window.location.href = "https://tictaktoe.smileplease.life"}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.location.href = "https://tictaktoe.smileplease.life"}><FontAwesomeIcon icon={faPlay} /> video</div>
            <div className="btn" onClick={() => window.location.href = "https://tictaktoe.smileplease.life"}>doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
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
            </div>
        </div>
    );
}

export default Projects;
