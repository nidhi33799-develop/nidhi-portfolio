import { FaCode, FaLaptopCode,FaLayerGroup,FaBrain } from 'react-icons/fa';
import './AboutMe.css';
function AboutMe(){

    return(
        <section className="about-section" id="about">
            <div className="about-intro">
                <h2 >About Me</h2>
                <p >
                I am a Python Full Stack Developer passionate about building scalable, reliable, and user-friendly applications. I have experience developing backend services, REST APIs, and microservices using Python, FastAPI, and Django, along with creating interactive frontend applications using React and TypeScript. I enjoy solving complex technical challenges, designing efficient solutions, and writing clean, maintainable code. I am also continuously exploring cloud technologies and AI-driven solutions to expand my skills and build better software.
                    
                </p>

            </div>

            <div className="about-highlights">
            <div className="about-card">
                <FaCode className="about-card-icon" />
                <h3>Clean Code</h3>
                <p>
                I write clean, maintainable, and efficient code
                that follows best practices and design patterns.
                </p>
            </div>

            <div className="about-card">
                <FaLaptopCode className="about-card-icon" />
                <h3>Problem Solving</h3>
                <p>
                I enjoy solving complex technical challenges
                and finding effective solutions to real-world problems.
                </p>
            </div>

            <div className="about-card">
                <FaLayerGroup className="about-card-icon" />
                <h3>Scalable Solutions</h3>
                <p>
                I build scalable backend services and APIs
                designed for performance, reliability, and growth.
                </p>
            </div>

            <div className="about-card">
                <FaBrain className="about-card-icon" />
                <h3>Continuous Learning</h3>
                <p>
                I continuously explore new technologies,
                cloud platforms, and AI-driven solutions.
                </p>
            </div>

            </div>

            
        </section>

    );
}
export default AboutMe;