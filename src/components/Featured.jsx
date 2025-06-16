import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const react_certificate = (
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
);

const zulip_contribution = (
    <div className="frontend glass">
        <div className="img-area"><img src="zulip-icon-svgrepo-com.svg" alt="zulip icon" /></div>
        <div className="txt-area">
            <h1>Open-Source Contribution in @Zulip</h1>
            <div className="tag-area">
                <div className="tag">python</div>
                <div className="tag">Django</div>
                <div className="tag">JavaScript (vanilla)</div>
            </div>
            <ul>
                <li>Successfully Merged 4 Pull Requests that closed 4 issues.</li>
                <li>Enhanced UI: Improved the message feed UI.</li>
                <li>Optimized User Group Management: Resolved issues related to user group settings.</li>
            </ul>
            <div className="foot">
                <a href="https://github.com/zulip/zulip/pulls?q=is%3Apr+author%3Ajitendra-ky+is%3Aclosed" target="_blank" rel="noopener noreferrer" className="btn">View PRs <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </div>
        </div>
    </div>
);

function Featured() {

    const output = (
        <div className="mycontainer featured">
            {zulip_contribution}
        </div>
    )

    return output;
}

export default Featured;