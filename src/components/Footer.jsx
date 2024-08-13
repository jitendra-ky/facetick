import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="container">
            <div className="footer-top">
                <div className="footer-section">
                    <h4>Contact Me</h4>
                    <p><FontAwesomeIcon icon={faEnvelope} /> jk69854@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +91 XXXXX XXXXX</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/jitendra-kumar-6aba46210/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/zsquare12" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/Jiten_69854" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/jitendra_322003/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="https://darkcloud.jitendra.me/">DarkCloud</a></li>
                        <li><a href="https://todo.smileplease.life/">SharkToDo</a></li>
                        <li><a href="https://tictaktoe.smileplease.life/">TicTakToe</a></li>
                        <li><a href="https://smileplease.life/" target="_blank" rel="noopener noreferrer">smileplease.life</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© jitendra.me 2024. All Rights Reserved.</p>
                <p><a href="privacy-policy.html">Privacy Policy</a> | <a href="terms-of-service.html">Terms of Service</a></p>
            </div>
        </div>
    );
}

export default Footer;
