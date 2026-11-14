import './Hero.css';
import nidhi_image from '../assets/nidhi_image.jpg';
function Hero(){
    return(
        <section className="hero-section" id="hero">
             {/* Left Container */}
            <div className="hero-intro">
                <p className="hero-greeting">Hello, I am</p>
                <h1 className="hero-name">Nidhi Gautam</h1>
                <h2 className="hero-designation">Software Engineer | Backend & Full Stack developer

                </h2>
                <p className="hero-description">
                   I build scalable backend and full stack applications, REST APIs, automation solutions and AI powered applications.
                   Experienced in Python, FastAPI, Django, React and cloud technologies, with a focus on building reliable and maintainable software.
                </p>
            </div>
              {/* Middle Container */}
            <div className="hero-image">
                <div className="profile-placeholder">
                    <img src={nidhi_image} alt="Nidhi Gautam"/>
                </div>
            </div>

             {/* Right Container */}
            <div className="hero-content">
                <h3>My Details</h3>

                <p>Location: India</p>
                <p>Email: neha.gautam869@gmail.com</p>

                <a href="https://www.linkedin.com/in/nidhi-gautam/">
                    LinkedIn
                </a>

                <a href="https://github.com/nidhi33799-develop">
                    GitHub
                </a>
            </div>

        </section>
        
    );
}

export default Hero;