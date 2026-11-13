
import './Experience.css';

function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-intro">
                <h2>Work Experience</h2>
            </div>

            <div className="experience-timeline">

                {/* Capgemini */}
                <div className="company-experience">
                    <div className="timeline-marker"></div>

                    <div className="company-details">
                        <h3>Capgemini</h3>
                        <p>2025 - Present</p>

                        <div className="job-role">
                            <h4>Software Engineer Consultant</h4>
                            <ul>
                                <li>Developed and maintained scalable backend services using Python, FastAPI, and Django.</li>
                                <li>Contributed to network automation projects, including Cisco, and supported end-to-end workflow development.</li>
                                <li>Built reusable internal tools and automation solutions to streamline operations and improve efficiency.</li>
                                <li>Collaborated with cross-functional teams to deliver, test, and deploy reliable software solutions.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Infosys */}
                <div className="company-experience">
                    <div className="timeline-marker"></div>

                    <div className="company-details">
                        <h3>Infosys Limited</h3>
                        <p>September 2021 - July 2025</p>

                        <div className="job-role">
                            <h4>Technology Analyst</h4>
                            <ul>
                                <li>Analyzed business and system requirements and designed Python-based solutions for automation and backend workflows.</li>
                                <li>Designed and developed REST APIs and service integrations for communication between enterprise applications.</li>
                                <li>Reviewed existing codebases and implemented enhancements to improve maintainability, performance, and reliability.</li>
                                <li>Performed code reviews and collaborated with cross-functional teams to deliver application enhancements.</li>
                            </ul>
                        </div>

                        <div className="job-role">
                            <h4>Senior System Engineer</h4>
                            <ul>
                                <li>Developed Python scripts for automation, data processing, and validation workflows.</li>
                                <li>Used Pandas and NumPy for data transformation, processing, and analysis.</li>
                                <li>Developed and consumed REST APIs for integration with internal and external systems.</li>
                                <li>Debugged application issues, analyzed logs, and implemented fixes to improve reliability.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* TrueBlue */}
                <div className="company-experience">
                    <div className="timeline-marker"></div>

                    <div className="company-details">
                        <h3>TrueBlue AppWerks Pvt. Ltd.</h3>
                        <p>April 2018 - August 2021</p>

                        <div className="job-role">
                            <h4>Full Stack Web Developer (Jan 2020 - Aug 2021)</h4>
                            <ul>
                                <li>Developed and maintained full-stack web applications using Python, Django, REST APIs, JavaScript, HTML, CSS, and Bootstrap.</li>
                                <li>Designed and developed backend modules, database-driven features, and REST API integrations.</li>
                                <li>Developed responsive frontend components and integrated them with backend services.</li>
                                <li>Led development activities, coordinated task assignments, reviewed code, and supported project delivery.</li>
                            </ul>
                        </div>

                        <div className="job-role">
                            <h4>Senior Web Developer (Apr 2019 - Jan 2020)</h4>
                            <ul>
                                <li>Analyzed client requirements and translated business needs into technical solutions.</li>
                                <li>Developed and enhanced dynamic web applications, backend functionality, and database integrations.</li>
                                <li>Coordinated development tasks and supported junior team members.</li>
                            </ul>
                        </div>

                        <div className="job-role">
                            <h4>Web Developer (Apr 2018 - Mar 2019)</h4>
                            <ul>
                                <li>Developed and maintained responsive websites and web application modules.</li>
                                <li>Implemented frontend functionality using HTML, CSS, JavaScript, and Bootstrap.</li>
                                <li>Integrated application components with backend services and databases.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;
