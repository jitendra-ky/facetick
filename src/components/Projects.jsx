/*
this hold the project section 
 */

const projects = {
    /*
    SpyBat: {
        imgSrc: "static/icons/bat.jpg",
        imgAlt: "boy studying",
        skill: "Python",
        description: "It will suck all of your passwords without even letting you know.",
        codeLink: "code/spy_bat.html"
    },
    RevisionPredictor: {
        imgSrc: "static/icons/revision.jpg",
        imgAlt: "boy studying",
        skill: "Python",
        description: "Ohh! God what a masterpiece I create. Isn't this proof that I am smart? Ok! Ok! Ok! Back on topic. This application loses a big burden over my head about what I have to revise and when to keep my concept clear.",
        codeLink: "code/revision_predictor.html"
    },
    */
    SmilePleaseLife: {
        imgSrc: "static/icons/smileplease_project.png",
        imgAlt: "boy studying",
        skill: "React.JS",
        description: "My portfolio website showcases a diverse range of projects, highlighting my skills and dedication to crafting exceptional digital experiences."
    },
    SharkToDo: {
        imgSrc: "static/icons/sharktodo.png",
        imgAlt: "boy studying",
        skill: "React.JS + Django.PY",
        description: "SharkToDo is a React-based to-do list application designed to help you effortlessly manage your tasks.",
        codeLink: "https://todo.smileplease.life"
    },
    TicTakToe: {
        imgSrc: "static/icons/tictaktoe.png",
        imgAlt: "boy studying",
        skill: "React.JS",
        description: "A simple Tic-Tak-Toe game with some interesting features.",
        codeLink: "https://tictaktoe.smileplease.life"
    }
};


const projects_jsx = (<>
    {Object.entries(projects).map(([key, value], index) => (
        <div className="card_container">
            <img src={value.imgSrc} alt={value.imgAlt} className="card_img" />
            <div className="card_body">
                <div className="card_body_top">
                    <h5>{ value.skill}</h5>
                    <h1>{key}</h1>
                </div>
                <p>{value.description}</p>
            </div>
            <div className="card_footer">
                <a href={value.codeLink}><i className="fa-solid fa-code"></i>ckeck it:)</a>
            </div>
        </div>
    ))}
</>)

console.log(projects);


function Projects() {

    return (<>

        <section className="projects_container">
            <h1>projects</h1>
            <p>that's how I spend my leisure time to carve out something that help me and improve my skill:) </p>
            <div className="projects">
                {projects_jsx}
            </div>
        </section>
    </>)
}

export default Projects;