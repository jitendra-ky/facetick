import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


function Featured() {

    const output = (
        <div className="container featured">
            <div className="frontend glass">
                <div className="img-area"><img src="frontend.jpeg" alt="Frontend-certificate" /></div>
                <div className="txt-area">
                    <h1>Certified Frontend Developer</h1>
                    <div className="tag-area">
                        <div className="tag">HTML</div>
                        <div className="tag">CSS</div>
                        <div className="tag">JS</div>
                        <div className="tag">React</div>
                    </div>
                    <ul>
                        <li>Built 5 Advanced Frontend Projects </li>
                        <li>Completed 2 In-Depth Frontend Courses</li>
                        <li>Achieved Official Certification</li>
                    </ul>
                    <div className="foot">
                        <a href="https://www.hackerrank.com/certificates/945259957510" target="_blank" rel="noopener noreferrer" className="btn">Verify <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </div>
                </div>
            </div>
        </div>
    )

    return output;
}

export default Featured;