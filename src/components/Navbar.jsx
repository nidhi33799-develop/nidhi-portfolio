import './Navbar.css';
import {useState} from 'react';

function Navbar(){
    const [isOpen,setIsOpen] = useState(false);
    return(
        <nav>
            <div className="nav-header">
                <h2 id="navbar_heading">Nidhi Gautam</h2>
                <button className="hamburger" onClick={()=>setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="navigation-menu">
                    ☰
                </button>

            </div>
            
            <div
                id="navigation-menu"
                className={isOpen ? "nav-links open" : "nav-links"}
            >
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
        </nav>

    );
}
export default Navbar;