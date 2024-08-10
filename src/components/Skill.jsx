import './Skill.css'

function Skill() {

    const skillSets = [
        { skill: 'Frontend Development', level: 'Expert' },
        { skill: 'Backend Development', level: 'Intermediate' },
        { skill: 'Database Management', level: 'Advanced' },
        // Add more skill sets as needed
    ];

    const skillItems = skillSets.map((skillSet, index) => (
        <div key={index} className="skill-item glass">
            <div className="skill-name">{skillSet.skill}</div>
            <div className="skill-level">{skillSet.level}</div>
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