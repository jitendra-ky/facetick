import './Projects.css';

const projects = {
    SmilePleaseLife: {
        imgSrc: "static/icons/smileplease_project.png",
        imgAlt: "jitendra protfolio log",
        skill: "React.JS",
        description: "My portfolio website showcases a diverse range of projects, highlighting my skills and dedication to crafting exceptional digital experiences."
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

        <div className="card_container">
            <div className="card-head">
                <img src={value.imgSrc} alt={value.imgAlt} className="card_img" />
            </div>
            <div className="card_body">
                <div className="card_body_top">
                    <div className='tag'>{value.skill}</div>
                    <div>{key}</div>
                </div>
                <p>{value.description}</p>
            </div>
            <div className="card-foot">
                <div className="btn" onClick={() => window.location.href = value.codeLink}>use</div>
                <div className="btn" onClick={() => window.location.href = value.codeLink}>video</div>
                <div className="btn" onClick={() => window.location.href = value.codeLink}>doc</div>
            </div>
        </div>
    ))}
</>)


function Projects() {

    return (<>

        <section className="projects container">
            <h1>projects</h1>
            <div className="projects-body">
                {projects_jsx}
            </div>
        </section>
    </>)
}

export default Projects;