import './Skill.css'

function Skill() {

    const skillSets = [
        {
            skill: 'Frontend Development',
            skill_list: ['HTML', 'CSS', 'JavaScript', 'React'],
            key_points: (
                <ul>
                    <li>Certified <a href="">Frontend Developer</a> by HackerRank.</li>
                    <li>Certified in <a href="">HTML</a>, <a href="">CSS</a>, <a href="">JavaScript</a>, and <a href="">React.js</a>.</li>
                    <li>Developed projects such as SharToDo, DarkCloud, and TicTacToe.</li>
                </ul>
            )
        },
        {
            skill: 'Backend Development',
            skill_list: ['Python', 'Django', 'Django REST Framework'],
            key_points: (
                <ul>
                    <li>Developed and optimized RESTful APIs using Django REST Framework for scalable web applications.</li>
                    <li>Integrated third-party services and APIs into backend systems, enhancing functionality and efficiency.</li>
                    <li>Implemented secure authentication and authorization mechanisms with Django, ensuring data privacy and user access control.</li>
                </ul>
            )
        },
        {
            skill: 'Database Management',
            skill_list: ['MySQL', 'SQLite', 'RDBMS'],
            key_points: (
                <ul>
                    <li>Designed and managed relational databases with MySQL and SQLite.</li>
                    <li>Optimized database queries and indexing to improve performance and scalability.</li>
                    <li>Ensured data integrity and security through effective RDBMS management practices.</li>
                </ul>
            )
        },
        {
            skill: 'Data Science',
            skill_list: ['NumPy', 'Pandas', 'Matplotlib'],
            key_points: (
                <ul>
                    <li>Analyzed large datasets using NumPy and Pandas for data manipulation and processing.</li>
                    <li>Visualized data trends and patterns with Matplotlib for insightful presentations.</li>
                    <li>Developed machine learning models to predict outcomes based on data analysis.</li>
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
        <div className="container skill-section">
            <div className="title">Skills</div>
            <div className="skill-body">
                {skillItems}
            </div>
        </div>
    );

    return output;

}

export default Skill;