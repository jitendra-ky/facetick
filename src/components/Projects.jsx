/*
this hold the project section 
 */

const projects = {
    SpyBat: {
        imgSrc: "static/images/bat.jpg",
        imgAlt: "boy studying",
        skill: "Python",
        description: "It will suck all of your passwords without even letting you know.",
        codeLink: "code/spy_bat.html"
    },
    RevisionPredictor: {
        imgSrc: "static/images/revision.jpg",
        imgAlt: "boy studying",
        skill: "Python",
        description: "Ohh! God what a masterpiece I create. Isn't this proof that I am smart? Ok! Ok! Ok! Back on topic. This application loses a big burden over my head about what I have to revise and when to keep my concept clear.",
        codeLink: "code/revision_predictor.html"
    },
    SmilePleaseLife: {
        imgSrc: "static/icons/smileplease_project.png",
        imgAlt: "boy studying",
        skill: "HTML CSS JS",
        description: "Embark on a visual journey through my diverse projects, where each pixel tells a story of passion and proficiency. Among them, find the heart of it all - my portfolio website. It's not just a project; it's a reflection of my dedication to crafting digital experiences.",
        codeLink: "You are on the same website"
    },
    SharkToDo: {
        imgSrc: "static/icons/sharktodo.svg",
        imgAlt: "boy studying",
        skill: "Full Stack Project",
        description: "Effortlessly manage tasks in your personal oasis. Join SmilePlease.Life for exclusive access to SharkToDo's secure, tailored task management.",
        codeLink: "sharktodo.html"
    }
};

const projects_jsx = (<>
    {Object.entries(projects).map(([key, value], index) => (
        <div className="card_container">
            <img src={value.imgSrc} alt={value.imgAlt} className="card_img" />
            <div className="card_body">
                <div className="card_body_top">
                    <h5>{ value.skill}</h5>
                    <h1>SpyBat</h1>
                </div>
                <p>{value.description}</p>
            </div>
            <div className="card_footer">
                <a href={value.codeLink}><i className="fa-solid fa-code"></i>code</a>
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