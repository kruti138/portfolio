import heroAvatar from '../assets/image.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-shape" aria-hidden="true"></div>
      <svg
        className="hero-line-art"
        viewBox="0 0 1365 690"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M760 82L912 232L1188 232L1365 58" />
        <path d="M846 690L1035 502L1365 502" />
        <path d="M1365 650L1205 490L1365 330" />
        <path d="M1015 690C1008 602 1040 520 1110 462C1178 406 1275 386 1365 414" />
        <path d="M315 690C345 640 425 648 456 690" />
      </svg>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Kruti Jasani</h1>
          <p className="hero-role">&mdash; Full Stack Developer</p>
          <p className="hero-desc">
            I build and ship production-ready web applications with scalable
            backend architectures, REST APIs, real-time systems, and clean
            end-to-end ownership across the MERN stack and Next.js.
          </p>
          <div className="hero-buttons">
            <a href="/Kruti_Jasani_FullStack_resume.pdf" className="btn-primary" download>Download Resume</a>
            <a href="#projects" className="btn-secondary">View Project</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-pillar" aria-hidden="true"></div>
          <div className="hero-avatar-ring">
            <div className="hero-avatar-inner">
              <img src={heroAvatar} alt="Illustrated avatar of Kruti Jasani" className="hero-avatar-illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
