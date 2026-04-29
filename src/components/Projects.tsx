import { ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Cravinoz',
    subtitle: 'Full-Stack Food Ordering Application',
    description: 'Production-ready food ordering platform built with Next.js, TypeScript, Node.js, Express, and MongoDB, with real-time order tracking, JWT roles, SMTP verification, and a live admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    title: 'MockMate',
    subtitle: 'AI-Powered Interview Platform',
    description: 'AI-powered full-stack interview platform with dynamic question generation, automated response evaluation, real-time WebSockets, role-based access control, and proctoring features.',
    tags: ['AI APIs', 'REST APIs', 'MongoDB', 'WebSockets', 'RBAC', 'Computer Vision'],
  },
  {
    title: 'NearNow',
    subtitle: 'Location-Based E-commerce Platform',
    description: 'MERN e-commerce platform connecting users with nearby shops and products using Geolocation, Google Maps, MongoDB geospatial filters, vendor dashboards, Redux state, and responsive React UI.',
    tags: ['MERN', 'Geolocation API', 'Google Maps API', 'Redux', 'JWT', 'Responsive UI'],
  },
];

function GitHubMark() {
  return (
    <svg className="github-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.71.5.09.68-.22.68-.49v-1.87c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-soft-block" aria-hidden="true"></div>
      <div className="projects-bg-circle" aria-hidden="true"></div>

      <div className="projects-container">
        <h2 className="projects-title">Things I've Built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="#" className="project-link project-link-dark">
                  <GitHubMark />
                  GitHub
                </a>
                <a href="#" className="project-link project-link-live">
                  <ExternalLink size={21} strokeWidth={2.2} />
                  Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
