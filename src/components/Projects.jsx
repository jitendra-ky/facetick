import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

// Custom hook for fetching GitHub repository data
const useGitHubRepo = (repoUrl, fallbackDescription) => {
    const [description, setDescription] = useState(fallbackDescription);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!repoUrl) return;

        const fetchRepoDescription = async () => {
            setLoading(true);
            try {
                // Extract owner/repo from GitHub URL
                const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
                if (match) {
                    const [, owner, repo] = match;
                    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
                    if (response.ok) {
                        const data = await response.json();
                        if (data.description) {
                            setDescription(data.description);
                        }
                    }
                }
            } catch (error) {
                console.log('Failed to fetch repo description:', error);
                // Keep the fallback description if fetch fails
            } finally {
                setLoading(false);
            }
        };

        fetchRepoDescription();
    }, [repoUrl, fallbackDescription]);

    return { description, loading };
};

// Reusable ProjectCard component
const ProjectCard = ({ 
    icon, 
    title, 
    badges, 
    fallbackDescription, 
    githubUrl, 
    buttons,
    useGitHubDescription = false 
}) => {
    const { description, loading } = useGitHubRepo(
        useGitHubDescription ? githubUrl : null, 
        fallbackDescription
    );

    return (
        <div className="card_container glass">
            <div className="card-head">
                <img src={icon} alt={`${title} logo`} className="card_img" />
                <div className="title">
                    {/* split title by : */}
                    <h1>{title.split(":")[0]}</h1>
                    <p>{title.split(":")[1]}</p>
                </div>
            </div>
            <div className="card-body">
                {badges && (
                    <div className="card-body-top">
                        {badges}
                    </div>
                )}
                <p>{loading ? "Loading description..." : description}</p>
            </div>
            <div className="card-foot">
                {buttons}
            </div>
        </div>
    );
};

const DragonflyCard = () => {
    const badges = (
        <>
            <img alt="Static Badge" src="https://img.shields.io/badge/type-webapp-blue?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/stars/jitendra-ky/dragonfly?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/forks/jitendra-ky/dragonfly?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/issues/jitendra-ky/dragonfly?style=plastic" />
            {/* <img alt="Static Badge" src="https://img.shields.io/github/issues-pr/jitendra-ky/dragonfly?style=plastic" /> */}
            {/* <img alt="Static Badge" src="https://img.shields.io/github/languages/top/jitendra-ky/dragonfly?style=plastic" /> */}
            <img alt="Static Badge" src="https://img.shields.io/github/created-at/jitendra-ky/dragonfly?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/last-commit/jitendra-ky/dragonfly?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/contributors/jitendra-ky/dragonfly?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/badge/status-active-green?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/badge/tech-django%20tornado%20js-blue?style=plastic" />
        </>
    );

    const buttons = (
        <div className="btn" onClick={() => window.open("https://github.com/jitendra-ky/dragonfly")}>
            <FontAwesomeIcon icon={faGithub} /> repo<sup>↗</sup>
        </div>
    );

    return (
        <ProjectCard
            icon="static/icons/dragonfly-icon-200.png"
            title="Dragonfly: the Chatting app."
            badges={badges}
            fallbackDescription="In this project Dragonfly, I am developing a fully functional open-source chatting application using industry best practices"
            githubUrl="https://github.com/jitendra-ky/dragonfly"
            buttons={buttons}
            useGitHubDescription={true}
        />
    );
};

const portfolio = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/portfolio_website.png" alt="jitendra portfolio log" className="card_img" />
                <div className="title">
                    <h1>Portfolio</h1>
                    <p>The Portfolio website.</p>
                </div>
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className="tag">Frontend web-development</div>
                <div className='tag tag-primary'>React.JS | html+CSS</div>
                <div className="tag tag-info">😀 You are on same website</div>
            </div>
            <p>My portfolio website showcases a diverse range of projects, highlighting my skills and dedication to crafting exceptional digital experiences.</p>
        </div>
        <div className="card-foot">
            <div className="btn" style={{visibility : "hidden"}}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            <div className="btn" onClick={() => window.open("https://youtu.be/pmuAUmOw2MU?si=voQrA3wZoS0KQp2P")}><FontAwesomeIcon icon={faPlay} /> video<sup>↗</sup></div>
            <div className="btn" style={{ visibility: "hidden" }}><FontAwesomeIcon icon={faExternalLinkAlt} /> doc <sup>↗</sup></div>
        </div>
    </div>
);

const sharktodo = (
    <div className="card_container glass">
        <div className="card-head">
            <img src="static/icons/sharktodo2.png" alt="sharktodo logo" className="card_img" />
            <div className="title">
                <h1>SharkToDo</h1>
                <p>The To-Do list app.</p>
            </div>
        </div>
        <div className="card-body">
            <div className="card-body-top">
                <div className="tag">full-stack web development</div>
                <div className='tag tag-primary'>python | django | JS | React</div>
                <div className='tag tag-danger'>No longer maintained</div>
            </div>
            <p>SharkToDo is a React-based to-do list application designed to help you effortlessly manage your tasks.</p>
        </div>
        <div className="card-foot">
            {/* <div className="btn" onClick={() => window.open("https://todo.jitendra.me")}>use <FontAwesomeIcon icon={faExternalLinkAlt} /></div> */}
            <div className="btn" onClick={() => window.open("https://youtu.be/rb3MPeSYs4Q?si=0V2sHXaV9bezVHyp")}><FontAwesomeIcon icon={faPlay} /> video<sup>↗</sup></div>
            <div className="btn" onClick={() => window.open("https://jitendra-ky.notion.site/SharkToDo-66ff51e3c830493b9a7bceadc788d1c0")}><FontAwesomeIcon icon={faExternalLinkAlt} /> doc<sup>↗</sup></div>
        </div>
    </div>
);

const CareerCraftCard = () => {
    const badges = (
        <>
            <img alt="Static Badge" src="https://img.shields.io/badge/type-webapp-blue?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/stars/jitendra-ky/ats-optimized-resume?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/forks/jitendra-ky/ats-optimized-resume?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/issues/jitendra-ky/ats-optimized-resume?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/created-at/jitendra-ky/ats-optimized-resume?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/last-commit/jitendra-ky/ats-optimized-resume?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/github/contributors/jitendra-ky/ats-optimized-resume?style=plastic" />
            <img alt="Static Badge" src="https://img.shields.io/badge/status-active-green?style=plastic" />
        </>
    );

    const buttons = (
        <>
            <div className="btn" onClick={() => window.open("https://career-craft.azurewebsites.net/")}> <FontAwesomeIcon icon={faExternalLinkAlt} /> use<sup>↗</sup></div>
            <div className="btn" onClick={() => window.open("https://github.com/jitendra-ky/ats-optimized-resume")}> <FontAwesomeIcon icon={faGithub} /> repo<sup>↗</sup></div>
            <div className="btn" onClick={() => window.open("https://youtu.be/-C5RDNQNT1c?si=bFBaWwzr0Be7fCnd")}><FontAwesomeIcon icon={faPlay} /> video<sup>↗</sup></div>
        </>
    );

    return (
        <ProjectCard
            icon="static/icons/careercraft.png"
            title="CareerCraft:The ATS Optimized Resume Builder."
            badges={badges}
            fallbackDescription="CareerCraft is a Streamlit-based application that leverages Google Gemini to optimize your resume for ATS and job applications."
            githubUrl="https://github.com/jitendra-ky/ats-optimized-resume"
            buttons={buttons}
            useGitHubDescription={true}
        />
    );
};

function Projects() {
    return (
        <div className="projects-section mycontainer">
            <div className='title'>projects</div>
            <div className="projects-body">
                <DragonflyCard />
                {portfolio}
                <CareerCraftCard />
                {sharktodo}
            </div>
        </div>
    );
}

export default Projects;
