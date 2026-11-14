import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact(){
    return(
        <section className="contact-section" id="contact">
            <div className="contact-intro">
                <h2>Get In Touch</h2>
                 <p>
                    Feel free to reach out for opportunities, collaborations, 
                    or just a friendly hello!
                </p>
            </div>
            <div className="professional-info">
                <div className="contact-card">
                     <FaEnvelope className="contact-icon email-icon" />
                     <div className="contact-details">
                        <h4>Email</h4>
                        <a href="mailto:neha.gautam869@gmail.com">
                            neha.gautam869@gmail.com
                        </a>
                     </div>
                </div>
                <div className="contact-card">
                    <FaLinkedin className="contact-icon linkedin-icon" />
                    <div className="contact-details">
                        <h4>LinkedIn</h4>
                        <a 
                            href="https://www.linkedin.com/in/nidhi-gautam/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.linkedin.com/in/nidhi-gautam/
                        </a>
                    </div>
                </div>
                <div className="contact-card">
                    <FaGithub className="contact-icon github-icon" />
                    <div className="contact-details">
                        <h4>GitHub</h4>
                        <a 
                            href="https://github.com/nidhi33799-develop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/nidhi33799-develop
                        </a>
                    </div>
                </div>
                
            </div>
        </section>

    );
}

export default Contact;