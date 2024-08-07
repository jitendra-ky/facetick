/*
this is from skill section 
*/


const my_skills = {
    "Hackerrank Python Basic":          "static/images/certificates/hackerrank_python_basic.png",
    // "Python Core Sololearn":            "static/images/certificates/python_core_sololearn.png",
    // "Python Intermediate Sololearn":    "static/images/certificates/python_intermediate_sololearn.png",
    "Data Structures Python Sololearn": "static/images/certificates/DS_python_sololearn.png",
    "SQL Hackerrank" : "static/images/certificates/sql_hackerrank.png",
    // "Python for Beginners Sololearn":   "static/images/certificates/python_for_beginners_sololearn.png",
    "Typing Speed":                     "static/images/certificates/typingSpeed.png",
    "HTML Sololearn":                   "static/images/certificates/html_sololearn.jpg",
    "CSS Hackerrank":                   "static/images/certificates/css_hackerrank.png",
    "JavaScript Sololearn": "static/images/certificates/js_sololearn.png",
};

const skillCard = (<>
    <div className="card">
        <img src="static/icons/sharktodo.png" alt="" className="card-img-top" />
        <div className="card-body">
            <h2 className="card-title">Python</h2>
            <div className="divider"></div>
            <ul>
                <li>🟠main programming lang.</li>
                <li>💡+5 star on hacker-rank</li>
            </ul>
        </div>
    </div>
</>)

// now here I will create one ore skill jsx section
// this time my skills like Python , forend-end developer, back-end developer, other skills appear in progress bar
const skillsection2 = (<>
    
</>)


const my_skills_jsx = (<>
    {Object.entries(my_skills).map(([key, value], index) => (
        <div key={index} className="certificate_img"><img src={value} alt={key} /></div>
))}
</>)


function Skill() {

    return (<>

        <section className="certificates">
            <h1>Skills</h1>
            <p>Programming for problem solving</p>
            <div className="divider"></div>
            <div className="certificates_container">
                {/* {my_skills_jsx} */}
                {skillCard}
                {skillCard}
                {skillCard}
            </div>
            <p>Font-end Development</p>
            <div className="divider"></div>
            <div className="certificates_container">
                {/* {my_skills_jsx} */}
                {skillCard}
                {skillCard}
                {skillCard}
            </div>
            <p>Back-end development</p>
            <div className="divider"></div>
            <div className="certificates_container">
                {/* {my_skills_jsx} */}
                {skillCard}
                {skillCard}
                {skillCard}
            </div>
            <p>Other skill for enhancing my projects</p>
            <div className="divider"></div>
            <div className="certificates_container">
                {/* {my_skills_jsx} */}
                {skillCard}
                {skillCard}
                {skillCard}
                {skillCard}
                {skillCard}
                {skillCard}
            </div>
        </section>
    </>)
}

export default Skill;