import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';


const projects = {
    Portfolio: {
        imgSrc: "static/icons/smileplease_project.png",
        imgAlt: "jitendra portfolio log",
        skill: "React.JS",
        description: "My portfolio website showcases a diverse range of projects,highlighting my skills and dedication to crafting exceptional digital experiences."
    },
    SharkToDo: {
        imgSrc: "static/icons/sharktodo.png",
        imgAlt: "sharktodo logo",
        skill: "React.JS + Django.PY",
        description: "SharkToDo is a React-based to-do list application designed to help you effortlessly manage your tasks.",
        codeLink: "https://todo.smileplease.life"
    },
    TicTakToe: {
        imgSrc: "static/icons/tictaktoe.png",
        imgAlt: "tic-tak-toe logo",
        skill: "React.JS",
        description: "A simple Tic-Tak-Toe game with some interesting features.",
        codeLink: "https://tictaktoe.smileplease.life"
    }
};


const projects_jsx = (<>
    {Object.entries(projects).map(([key, value], index) => (
        // this card_container will rediret to url value.codeLink on click

        <div className="card_container glass">
            <div className="card-head">
                <img src={value.imgSrc} alt={value.imgAlt} className="card_img" />
            </div>
            <div className="card-body">
                <div className="card-body-top">
                    <div className='tag'>{value.skill}</div>
                    <h1>{key}</h1>
                </div>
                <p>{value.description}</p>
            </div>
            <div className="card-foot">
                <div className="btn" onClick={() => window.location.href = value.codeLink}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
                <div className="btn" onClick={() => window.location.href = value.codeLink}><FontAwesomeIcon icon={faPlay} /> video</div>
                <div className="btn" onClick={() => window.location.href = value.codeLink}>doc <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            </div>
        </div>
    ))}
</>)


function Projects() {

    return (<>

        <div className="projects-section container">
            <div className='title'>projects</div>
            <div className="projects-body">
                {projects_jsx}
            </div>
        </div>
    </>)
}

export default Projects;