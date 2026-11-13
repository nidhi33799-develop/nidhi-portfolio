import './TechnicalSkills.css';
import 'devicon/devicon.min.css';
import { FaDatabase, FaServer } from 'react-icons/fa';
import python_image from '../assets/python-logo-only.png';



function TechnicalSkills(){
    return(
        <section className="technical-skills-section" id="skills">
            <div className="technical-skills-intro">
                 <h2>Technical Skills</h2>
            </div>
            <div className="skills-grid">
                <div className="skill-card">
                    <h4>Languages</h4>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={python_image} alt="Python" className="skill-icon"/>
                            <span>Python</span>
                        </div>
                        {/* JavaScript */}
                        <div className="skill-item">
                            <i className="devicon-javascript-plain colored skill-icon"></i>
                            <span>JavaScript</span>
                        </div>
                        {/* SQL */}
                        <div className="skill-item">
                            <FaDatabase className="skill-icon sql" />
                            <span>SQL</span>
                        </div>
                    </div>
                

                </div>

                {/* Backend Skills */}
                <div className="skill-card">
                    <h4>Backend</h4>

                    <div className="skill-items">

                        {/* FastAPI */}
                        <div className="skill-item">
                            <i className="devicon-fastapi-plain colored skill-icon"></i>
                            <span>FastAPI</span>
                        </div>

                        {/* Django */}
                        <div className="skill-item">
                            <i className="devicon-django-plain colored skill-icon"></i>
                            <span>Django</span>
                        </div>

                        {/* REST API */}
                        <div className="skill-item">
                            <FaServer className="skill-icon rest-api" />
                            <span>REST API</span>
                        </div>

                    </div>
                </div>

                {/* Frontend Skills */}
                <div className="skill-card">
                    <h4>Frontend</h4>
                    <div className="skill-items">

                        <div className="skill-item">
                            <i className="devicon-react-plain colored skill-icon"></i>
                            <span>React</span>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-html5-plain colored skill-icon"></i>
                            <span>HTML</span>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-css3-plain colored skill-icon"></i>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>

                {/* Databases Skills */}
                <div className="skill-card">
                    <h4>Databases</h4>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i className="devicon-postgresql-plain colored skill-icon"></i>
                            <span>PostgreSQL</span>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-oracle-plain colored skill-icon"></i>
                            <span>Oracle</span>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-mysql-plain colored skill-icon"></i>
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="skill-card">
                    <h4>Cloud & DevOps</h4>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i className="devicon-amazonwebservices-plain-wordmark colored skill-icon"></i>
                            <span>AWS</span>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-docker-plain colored skill-icon"></i>
                            <span>Docker</span>
                        </div>
                        <div className="skill-item">
                            <i className='devicon-git-plain colored skill-icon'></i>
                            <span>Git</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )

}

export default TechnicalSkills;