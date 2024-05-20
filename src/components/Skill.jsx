/*
this is from skill section 
*/

function Skill() {

    return (<>

        <section className="certificates">
            <h1>Skills</h1>
            <p>Some of my certificates in programming and and web development </p>
            <div className="certificates_container">
                <div className="certificate_img"><img src="static/images/hackerrank_python_basic.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/python_core_sololearn.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/python_intermediate_sololearn.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/DS_python_sololearn.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/python_for_beginners_sololearn.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/typingSpeed.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/html_sololearn.jpg" alt=""/></div>
                <div className="certificate_img"><img src="static/images/css_hackerrank.png" alt=""/></div>
                <div className="certificate_img"><img src="static/images/js_sololearn.png" alt=""/></div>
            </div>
            <div className="view_certificate" id="view_certificate" onclick="close_view_certificate()">
                <div>
                    <div className="certificate_header" id="certificate_header">
                        <div className="chtitle" id="chtitle">title</div>
                        <div className="chclose" id="chclose" onclick="close_view_certificate()"><i
                            className="fa-solid fa-x"></i></div>
                    </div>
                    <div className="certificate_main">
                        <img src="" alt="certificate" id="certificate_main_img"/>
                    </div>
                    <div className="certificate_footer">footer</div>
                </div>
            </div>
        </section>
    </>)
}

export default Skill;