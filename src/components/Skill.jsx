import './Skill.css'

function Skill() {

    const skillSets = [
        { skill: 'Frontend Development', skill_list: ['HTML', 'CSS', 'JavaScript', 'React'] },
        { skill: 'Backend Development', skill_list: ['Python', 'Django', 'Django REST Framework'] },
        { skill: 'Database Management', skill_list: ['MySQL', 'SQLite', 'RDMS'] },
        // Add more skill sets as needed
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
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, omnis!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius.</li>
                </ul>
            </div>
        </div>
    ));

    const output = (
        <div className="container skill-section">
            <div className="skill-title">Skills</div>
            <div className="skill-body">
                {skillItems}
            </div>
        </div>
    );

    return output;

}

export default Skill;