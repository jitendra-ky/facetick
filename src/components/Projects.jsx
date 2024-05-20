/*
this hold the project section 
 */

function Projects() {

    return (<>

        <section className="projects_container">
            <h1>projects</h1>
            <p>that's how I spend my leisure time to carve out something that help me and improve my skill:) </p>
            <div className="projects">
                <div className="card_container">
                    <img src="static/images/bat.jpg" alt="boy studing" className="card_img"/>
                        <div className="card_body">
                            <div className="card_body_top">
                                <h5>Python</h5>
                                <h1>SpyBat</h1>
                            </div>
                            <p>It will suck all of your passwords without even letting you know.</p>
                        </div>
                        <div className="card_footer">
                            <a href="code/spy_bat.html"><i className="fa-solid fa-code"></i>code</a>
                        </div>
                </div>
                <div className="card_container">
                    <img src="static/images/revision.jpg" alt="boy studing" className="card_img"/>
                        <div className="card_body">
                            <div className="card_body_top">
                                <h5>Python</h5>
                                <h1>RevisionPredictor</h1>
                            </div>
                            <p>Ohh! God what a masterpiece I create. Isn't this proof that I am smart? Ok! Ok! Ok! Back on
                                topic. This application
                                loses a big burden over my head about what I have to revise and when to keep my concept
                                clear.</p>
                        </div>
                        <div className="card_footer">
                            <a href="code/revision_predictor.html"><i className="fa-solid fa-code"></i>code</a>
                        </div>
                </div>
                <div className="card_container">
                    <img src="static/icons/smileplease_project.png" alt="boy studing" className="card_img"/>
                        <div className="card_body">
                            <div className="card_body_top">
                                <h5>HTML CSS JS</h5>
                                <h1>SmilePlease.Life</h1>
                            </div>
                            <p>Embark on a visual journey through my diverse projects, where each pixel tells a story of
                                passion and proficiency. Among
                                them, find the heart of it all - my portfolio website. It's not just a project; it's a
                                reflection of my dedication to
                                crafting digital experiences.</p>
                        </div>
                        <div className="card_footer">
                            <h3>you are on same website</h3>
                        </div>
                </div>
                <div className="card_container">
                    <img src="static/icons/sharktodo.svg" alt="boy studing" className="card_img"/>
                        <div className="card_body">
                            <div className="card_body_top">
                                <h5>Full Stack Project</h5>
                                <h1>SharkToDo</h1>
                            </div>
                            <p>Effortlessly manage tasks in your personal oasis. Join SmilePlease.Life for exclusive access
                                to SharkToDo's secure,
                                tailored task management.</p>
                        </div>
                        <div className="card_footer">
                            <a href="sharktodo.html">check it:)</a>
                        </div>
                </div>

            </div>

        </section>
    </>)
}

export default Projects;