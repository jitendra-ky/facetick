import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


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
                        <li>Developed 5 frontend projects</li>
                        <li>Completed 3 frontend courses</li>
                        <li>Received a certificate</li>
                    </ul>
                    <div className="foot">
                        <div className="btn"><FontAwesomeIcon icon={faCheck}/> Verify</div>
                    </div>
                </div>
            </div>
        </div>
    )

    return output;
}

export default Featured;