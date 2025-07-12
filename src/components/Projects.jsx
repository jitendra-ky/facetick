import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import fallbackProjects from '../data/fallbackProjects.json';

// Custom hook for fetching GitHub repositories with topic (with localStorage cache + fallbacks)
const useGitHubProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const CACHE_KEY = 'github-projects-jitendraky-tech';
    const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

    useEffect(() => {
        const fetchGitHubProjects = async () => {
            setLoading(true);
            
            // Check for cached data first
            let cachedData = null;
            let isCacheValid = false;
            
            try {
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { data, timestamp } = JSON.parse(cached);
                    const now = new Date().getTime();
                    cachedData = data;
                    isCacheValid = (now - timestamp < CACHE_DURATION);
                    
                    // If cache is still valid, use cached data
                    if (isCacheValid) {
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
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
            } catch (apiError) {
                console.error('GitHub API request failed:', apiError);
                
                // Fallback 1: Use stale cache if available (no matter how old)
                if (cachedData && cachedData.length > 0) {
                    console.log('API failed, using stale cached data as fallback');
                    setProjects(cachedData);
                } 
                // Fallback 2: Use dummy data from JSON file as last resort
                else {
                    console.log('API failed and no cache available, using fallback data from JSON file');
                    console.log('Fallback projects:', fallbackProjects);
                    console.log('Number of fallback projects:', fallbackProjects.length);
                    setProjects(fallbackProjects);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubProjects();
    }, []);

    return { projects, loading };
};

// Dynamic GitHub Project Card component
const DynamicProjectCard = ({ repo }) => {
    // Get primary icon URL from repository
    const getProjectIcon = (repo) => {
        // Always try repository icon first for all repos
        return `https://raw.githubusercontent.com/${repo.full_name}/main/.github/portfolio-icon-200.png`;
    };

    // Get repository-specific fallback icon
    const getRepositoryFallbackIcon = (repoName) => {
        const repoFallbacks = {
            'dragonfly': 'static/icons/dragonfly-icon-200.png',
            'ats-optimized-resume': 'static/icons/careercraft.png',
            'sharktodo': 'static/icons/sharktodo2.png',
            'facetick': 'static/icons/portfolio_website.png'
        };
        return repoFallbacks[repoName];
    };

    const handleIconError = (e) => {
        // First try repository-specific fallback
        const repoFallback = getRepositoryFallbackIcon(repo.name);
        if (repoFallback && e.target.src !== repoFallback) {
            e.target.src = repoFallback;
            return;
        }
        
        // If repository fallback also fails, use general fallback
        if (e.target.src !== 'static/icons/portfolio_website.png') {
            e.target.src = 'static/icons/portfolio_website.png';
        }
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
                <img 
                    src={getProjectIcon(repo)} 
                    alt={`${repo.name} logo`} 
                    className="card_img"
                    onError={handleIconError}
                />
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
    const { projects, loading } = useGitHubProjects();

    // Debug logging
    console.log('Projects component render:', { projects, loading, projectsLength: projects.length });

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
