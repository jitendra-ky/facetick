import './Skill.css'

function Skill() {

    const skillSets = [
        {
            skill: 'Fullstack development (web)',
            skill_list: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Python', 'Django', 'Django REST Framework', 'MySQL', 'SQLite', 'RDBMS'],
            key_points: (
                <ul>
                    <li>Proficient in both frontend and backend technologies, including HTML, CSS, JavaScript, React.js, Python, Django, and Django REST Framework.</li>
                    <li>Developed and maintained multiple full-stack web applications, ensuring seamless integration between frontend and backend components.</li>
                    <li>Implemented responsive design principles to enhance user experience across various devices.</li>
                    <li>Designed and managed relational databases with MySQL and SQLite.</li>
                    <li>Optimized database queries and indexing to improve performance and scalability.</li>
                    <li>Ensured data integrity and security through effective RDBMS management practices.</li>
                </ul>
            )
        },
        {
            skill: 'Data Structures & Algorithms',
            skill_list: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Hash Tables', 'Sorting', 'Searching', 'Dynamic Programming', 'Recursion', 'Problem Solving'],
            key_points: (
                <ul>
                    <li>Strong understanding of core data structures such as arrays, linked lists, stacks, queues, trees, and graphs.</li>
                    <li>Experienced in implementing and optimizing sorting and searching algorithms.</li>
                    <li>Proficient in solving algorithmic problems using recursion and dynamic programming techniques.</li>
                    <li>Regularly practice and participate in coding challenges to enhance problem-solving skills.</li>
                    <li>Ability to analyze time and space complexity for efficient code design.</li>
                    <li> <a href='https://leetcode.com/u/jitendra-ky/'>LeetCode<sup>↗</sup></a></li>
                </ul>
            )
        },
        {
            skill: "Other Tools & Technologies",
            skill_list: [
                'Git', 'GitHub', 'Docker', 'Linux', 'Agile Methodologies',
                'REST API', 'Microsoft Azure', 'CI/CD Pipelines',
                'GitHub Actions', 'Firebase', 'GitHub Copilot'
            ],
            key_points: (
                <ul>
                    <li>Git & GitHub: Learned for managing codebases and enabling collaborative development in team projects.</li>
                    <li>Docker: To containerize apps for consistent development-to-deployment workflows.</li>
                    <li>Linux: For developing and deploying apps in a fast, secure, and resource-efficient environment.</li>
                    <li>Agile Methodologies: To follow iterative development and improve project delivery through sprints.</li>
                    <li>REST API: Learned to build and consume APIs for seamless frontend-backend integration.</li>
                    <li>Microsoft Azure: For deploying, scaling, and managing apps in the cloud efficiently.</li>
                    <li>CI/CD Pipelines: To automate testing and deployment, ensuring faster and safer releases.</li>
                    <li>GitHub Actions: To automate workflows like linting, testing, and deploying directly from GitHub.</li>
                    <li>Firebase: Used for real-time database, authentication, and hosting in full-stack projects.</li>
                    <li>GitHub Copilot: For speeding up development and reducing boilerplate with AI-powered code suggestions.</li>
                </ul>
            )
        }
];


    const skillItems = skillSets.map((skillSet, index) => (
        <div className="skill-item-parent glass">
            <div key={index} className="skill-item">
                <div className="skill-card-title">{skillSet.skill}</div>
                <div className="skill-card-body">
                    <ul>
                        {skillSet.skill_list.map((skill, index2) => (
                            <li key={index2} className='tag'>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="divider"></div>
            <div className="skill-detail">
                {skillSet.key_points}
            </div>
        </div>
    ));

    const output = (
        <div className="mycontainer skill-section">
            <div className="title">Skills</div>
            <div className="skill-body">
                {skillItems}
            </div>
        </div>
    );

    return output;

}

export default Skill;