import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

// Custom hook for fetching GitHub repositories with topic (with localStorage cache)
const useGitHubProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const CACHE_KEY = 'github-projects-jitendraky-tech';
    const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

    useEffect(() => {
        const fetchGitHubProjects = async () => {
            setLoading(true);
            
            // Check for cached data first
            try {
                const cachedData = localStorage.getItem(CACHE_KEY);
                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    const now = new Date().getTime();
                    
                    // If cache is still valid, use cached data
                    if (now - timestamp < CACHE_DURATION) {
                        console.log('Using cached GitHub projects data');
                        setProjects(data);
                        setLoading(false);
                        return;
                    } else {
                        console.log('Cache expired, fetching fresh data');
                    }
                }
            } catch (cacheError) {
                console.log('Cache read error, fetching fresh data:', cacheError);
            }

            // Fetch fresh data from GitHub API
            try {
                console.log('Fetching projects from GitHub API...');
                const response = await fetch(
                    'https://api.github.com/search/repositories?q=user:jitendra-ky+topic:jitendraky-tech&sort=updated&order=desc'
                );
                if (response.ok) {
                    const apiData = await response.json();
                    const projects = apiData.items || [];
                    
                    // Cache the fresh data
                    const cacheData = {
                        data: projects,
                        timestamp: new Date().getTime()
                    };
                    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
                    console.log('Projects cached successfully');
                    
                    setProjects(projects);
                } else {
                    throw new Error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubProjects();
    }, []);

    return { projects, loading, error };
};

// Dynamic GitHub Project Card component
const DynamicProjectCard = ({ repo }) => {
    // Get icon from static folder or use default
    const getProjectIcon = (repoName) => {
        // Map specific repositories to their icons
        const iconMap = {
            'dragonfly': 'static/icons/dragonfly-icon-200.png',
            'ats-optimized-resume': 'static/icons/careercraft.png',
            'sharktodo': 'static/icons/sharktodo2.png',
            'facetick': 'static/icons/portfolio_website.png'
        };
        return iconMap[repoName] || 'static/icons/portfolio_website.png'; // Default icon
    };

    // Generate badges for dynamic projects
    const generateBadges = (repo) => (
        <>
            <img alt="Static Badge" src={`https://img.shields.io/badge/type-${repo.private ? 'private' : 'public'}-${repo.private ? 'red' : 'blue'}?style=plastic`} />
            <img alt="Static Badge" src={`https://img.shields.io/github/stars/${repo.full_name}?style=plastic`} />
            <img alt="Static Badge" src={`https://img.shields.io/github/forks/${repo.full_name}?style=plastic`} />
            <img alt="Static Badge" src={`https://img.shields.io/github/issues/${repo.full_name}?style=plastic`} />
            <img alt="Static Badge" src={`https://img.shields.io/github/last-commit/${repo.full_name}?style=plastic`} />
            {repo.language && (
                <img alt="Static Badge" src={`https://img.shields.io/badge/language-${repo.language.toLowerCase()}-orange?style=plastic`} />
            )}
            <img alt="Static Badge" src={`https://img.shields.io/badge/status-active-green?style=plastic`} />
        </>
    );

    // Generate buttons for dynamic projects
    const generateButtons = (repo) => (
        <>
            {repo.homepage && (
                <div className="btn" onClick={() => window.open(repo.homepage)}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> use<sup>↗</sup>
                </div>
            )}
            <div className="btn" onClick={() => window.open(repo.html_url)}>
                <FontAwesomeIcon icon={faGithub} /> repo<sup>↗</sup>
            </div>
        </>
    );

    return (
        <div className="card_container glass">
            <div className="card-head">
                <img src={getProjectIcon(repo.name)} alt={`${repo.name} logo`} className="card_img" />
                <div className="title">
                    <h1>{repo.name}</h1>
                    <p>{repo.description ? repo.description.substring(0, 40) + '...' : 'GitHub Repository'}</p>
                </div>
            </div>
            <div className="card-body">
                <div className="card-body-top">
                    {generateBadges(repo)}
                </div>
                <p>{repo.description || 'No description available for this repository.'}</p>
            </div>
            <div className="card-foot">
                {generateButtons(repo)}
            </div>
        </div>
    );
};

function Projects() {
    const { projects, loading, error } = useGitHubProjects();

    if (loading) {
        return (
            <div className="projects-section mycontainer">
                <div className='title'>projects</div>
                <div className="projects-body">
                    <div className="card_container glass">
                        <div className="card-body">
                            <p>Loading projects from GitHub...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="projects-section mycontainer">
                <div className='title'>projects</div>
                <div className="projects-body">
                    <div className="card_container glass">
                        <div className="card-body">
                            <p>Error loading projects: {error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="projects-section mycontainer">
            <div className='title'>projects</div>
            <div className="projects-body">
                {projects.map((repo) => (
                    <DynamicProjectCard key={repo.id} repo={repo} />
                ))}
                {projects.length === 0 && (
                    <div className="card_container glass">
                        <div className="card-body">
                            <p>No projects found with topic "jitendraky-tech"</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
