import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceAndValues from './components/ExperienceAndValues';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <ExperienceAndValues />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
