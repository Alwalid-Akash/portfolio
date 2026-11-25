import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Now from './components/Now/Now';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Now />
        <Skills />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
