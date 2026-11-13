import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/AboutMe';
import TechnicalSkills from './components/TechnicalSkills';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App(){
  return(
    <>
    <Navbar />
    <Hero />
    <About />
    <TechnicalSkills />
    <Project />
    <Experience />
    <Contact />
    </>
  );
}

export default App;