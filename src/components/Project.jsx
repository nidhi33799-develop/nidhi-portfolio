import './Project.css';
import GST_Automation from '../assets/GST_Automation.png';
import VeggieCart from '../assets/VeggieCart.png';
import TNFO from '../assets/TNFO.png';
import RAG_Project from '../assets/RAG_Project.png';
import Video_Icon_Dectection from '../assets/Video_Icon_Detection.png';
import Lakshya_Remedies from '../assets/Lakshya_Remedies.png';
import Global_Credence from '../assets/Global_Credence.png';
import Cisco_Network from '../assets/Cisco_Network.png';
import Django_Migration from '../assets/Django_Migration.png';



function Project(){
    return(
        <section className="project-section" id="projects">
            <div className="project-intro">
                <h2>Featured Projects</h2>
            </div>

            <div className="featured-projects">
                {/* GST Automation */}
                <div className="projects-details">
                    <div className="project-image">
                        <img src={GST_Automation} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>GST Automation Platform</h3>
                        <p>A centralized platform for CA firms to automate GST return preparation, invoice reconciliation, and ITC validation, simplifying multi-client management and improving compliance accuracy.</p>
                            <div className="project-tech">
                                <div className="tech">Python</div>
                                <div className="tech">FastAPI</div>
                                <div className="tech">SQLAlchemy</div>
                                <div className="tech">PostgreSQL</div>
                                <div className="tech">React</div>
                                <div className="tech">Docker</div>
                            </div>
                    </div>
                </div>

                {/* Veggie Cart */}
                   <div className="projects-details">
                    <div className="project-image">
                        <img src={VeggieCart} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>Ecommerce Application</h3>
                        <p>
                            A web-based e-commerce platform that allows users to browse products,
                            explore categories, manage shopping carts, and place orders through
                            an intuitive shopping experience.
                            </p>
                        <div className="project-tech">
                            <div className="tech">Python</div>
                            <div className="tech">Django</div>
                            <div className="tech">React</div>
                            <div className="tech">Oracle DB</div>
                            <div className="tech">REST APIs</div>
                            <div className="tech">JavaScript</div>
                        </div>
                    </div>
                </div>

                {/* RG Poject */}
                   <div className="projects-details">
                    <div className="project-image">
                        <img src={RAG_Project} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>RAG based HR Document Assistant</h3>
                        <p>
                            An AI-powered HR assistant that uses Retrieval-Augmented Generation (RAG)
                            to retrieve information from HR documents and provide context-aware
                            answers to employee queries about company policies, leave, and benefits.
                            </p>
                        <div className="project-tech">
                            <div className="tech">Python</div>
                            <div className="tech">LangChain</div>
                            <div className="tech">Hugging Face</div>
                            <div className="tech">Sentence Transformers</div>
                            <div className="tech">ChromaDB</div>
                            <div className="tech">OpenAI GPT</div>
                        </div>
                    </div>
                </div>

                {/* TNFO */}
                   <div className="projects-details">
                    <div className="project-image">
                        <img src={TNFO} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>TELUS – TNFO Network Provisioning & Orchestration</h3>
                        <p>
                            Contributed to a network provisioning platform that automates RAN
                            provisioning workflows by integrating Biosphere, NetBox, and RabbitMQ
                            for request processing, inventory retrieval, and service orchestration.
                        </p>
                       <div className="project-tech">
                            <div className="tech">Python</div>
                            <div className="tech">REST APIs</div>
                            <div className="tech">RabbitMQ</div>
                            <div className="tech">NetBox</div>
                            <div className="tech">Microservices</div>
                            <div className="tech">Docker</div>
                            <div className="tech">GitLab</div>
                        </div>
                    </div>
                    </div>
                    {/* Cisco */}
                   <div className="projects-details">
                    <div className="project-image">
                        <img src={Cisco_Network} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>Cisco – Network Provisioning Automation Testing</h3>
                        <p>
                            Developed automated testing workflows using Robot Framework to validate
                            network provisioning processes, verify resource availability through
                            NetBox, and analyze test results to improve provisioning reliability.
                        </p>
                        <div className="project-tech">
                            <div className="tech">Python</div>
                            <div className="tech">Robot Framework</div>
                            <div className="tech">REST APIs</div>
                            <div className="tech">NetBox</div>
                            <div className="tech">Network Automation</div>
                            <div className="tech">GitLab</div>
                        </div>
                    </div>
                </div>

                {/* Global credence */}
                   <div className="projects-details">
                    <div className="project-image">
                        <img src={Global_Credence} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>Global Credence – Education Management Platform</h3>
                        <p>
                            A Django-based education management platform designed to streamline
                            institutional operations, including student records, attendance tracking,
                            grading, class scheduling, and communication.
                        </p>
                        <div className="project-tech">
                            <div className="tech">Python</div>
                            <div className="tech">Django</div>
                            <div className="tech">Django ORM</div>
                            <div className="tech">PostgreSQL</div>
                            <div className="tech">JavaScript</div>
                            <div className="tech">jQuery</div>
                            <div className="tech">Bootstrap</div>
                        </div>
                    </div>
                </div>

                {/* Lakshya Remedies */}
                   <div className="projects-details">
                    <div className="project-image">
                        <img src={Lakshya_Remedies} alt="GST Automation" className="project-image"/>
                    </div>
                    <div className="project-description">
                        <h3>Lakshya Remedies – Healthcare Management Application</h3>
                        <p>
                            A web-based healthcare management application that simplifies patient
                            appointment scheduling and medicine inventory management through
                            integrated frontend and backend workflows.
                        </p>
                        <div className="project-tech">
                            <div className="tech">Python</div>
                            <div className="tech">Django</div>
                            <div className="tech">Django REST Framework</div>
                            <div className="tech">React</div>
                            <div className="tech">JavaScript</div>
                            <div className="tech">PostgreSQL</div>
                        </div>
                    </div>
                </div>

                {/* Video Icon */}
                   <div className="projects-details">
                        <div className="project-image">
                            <img src={Video_Icon_Dectection} alt="GST Automation" className="project-image"/>
                        </div>
                        <div className="project-description">
                            <h3>Video Icon Detection</h3>
                            <p>
                                A Python-based video processing solution that uses OpenCV and image
                                detection techniques to identify and classify icons frame by frame,
                                distinguishing between favorite and non-favorite categories.
                            </p>
                            <div className="project-tech">
                                <div className="tech">Python</div>
                                <div className="tech">OpenCV</div>
                                <div className="tech">TensorFlow</div>
                                <div className="tech">Image Processing</div>
                                <div className="tech">Video Processing</div>
                            </div>
                        </div>
                    </div>

                    {/* Django Data Import/Export */}
                    <div className="projects-details">
                        <div className="project-image">
                            <img
                                src={Django_Migration}
                                alt="Django Data Import Export Framework"
                                className="project-img"
                            />
                        </div>

                        <div className="project-description">
                            <h3>Django Data Import/Export & Migration Framework</h3>

                            <p>
                                A Django-based framework designed to simplify data import,
                                export, and migration across applications and database models.
                                It supports dynamic model and field mapping, bulk data
                                processing, validation, and error handling to ensure reliable
                                data transformation across changing application schemas.
                            </p>

                            <div className="project-tech">
                                <div className="tech">Python</div>
                                <div className="tech">Django</div>
                                <div className="tech">Django ORM</div>
                                <div className="tech">Django Admin</div>
                                <div className="tech">django-import-export</div>
                                <div className="tech">Pandas</div>
                                <div className="tech">CSV/Excel</div>
                            </div>
                        </div>
                    </div>

                </div>
            
        </section>

    );

}

export default Project;