import { Mail } from 'lucide-react';
import { profileLinks } from '../data/profile';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Kruti Jasani</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About &amp; Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact Me</a>
      </div>
      <div className="nav-actions">
        <a href="#contact" className="nav-contact-btn">Say Hello</a>
        <div className="nav-socials">
          <a href={profileLinks.email} aria-label="Email">
            <Mail size={19} strokeWidth={2.1} />
          </a>
          <a href={profileLinks.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.71.5.09.68-.22.68-.49v-1.87c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a href={profileLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.98H3.86V20h3.08V8.98ZM7.22 5.57C7.21 4.65 6.53 4 5.44 4 4.36 4 3.65 4.65 3.65 5.57c0 .9.69 1.58 1.75 1.58h.02c1.11 0 1.8-.68 1.8-1.58ZM20.35 13.68c0-3.38-1.8-4.95-4.19-4.95-1.93 0-2.8 1.07-3.28 1.82V8.98H9.8c.04 1.03 0 11.02 0 11.02h3.08v-6.15c0-.33.02-.66.12-.89.26-.66.85-1.34 1.85-1.34 1.3 0 1.82 1 1.82 2.47V20h3.08l.6-6.32Z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
