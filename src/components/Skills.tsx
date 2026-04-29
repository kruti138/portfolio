import { Code2 } from 'lucide-react';
import './Skills.css';

const skills = [
  { name: 'JavaScript / TypeScript', tone: 'wide', style: { top: '3%', left: '20%', rotate: '-4deg' } },
  { name: 'React.js + Next.js', tone: 'sand', style: { top: '2%', right: '7%', rotate: '4deg' } },
  { name: 'Node.js + Express.js', tone: 'coral', style: { top: '25%', right: '3%', rotate: '-5deg' } },
  { name: 'REST APIs + JWT', tone: 'cream', style: { top: '28%', left: '13%', rotate: '3deg' } },
  { name: 'WebSockets', tone: 'peach', style: { top: '47%', left: '7%', rotate: '0deg' } },
  { name: 'MongoDB / Atlas', tone: 'silver', style: { top: '45%', right: '0%', rotate: '-5deg' } },
  { name: 'PostgreSQL / SQL', tone: 'silver', style: { top: '66%', left: '10%', rotate: '-6deg' } },
  { name: 'Docker + Cloudinary', tone: 'sand', style: { top: '67%', left: '42%', rotate: '4deg' } },
  { name: 'Vercel / Netlify / Render', tone: 'wide', style: { top: '84%', right: '0%', rotate: '3deg' } },
  { name: 'Python', tone: 'peach', style: { top: '66%', right: '6%', rotate: '-6deg' } },
  { name: 'Java + C++', tone: 'coral', icon: Code2, style: { bottom: '0%', left: '7%', rotate: '-4deg' } },
  { name: 'Git, GitHub, Postman, VS Code', tone: 'wide', style: { bottom: '-7%', right: '4%', rotate: '2deg' } },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="summary-column">
          <article className="summary-card">
            <h2>Professional Summary</h2>
            <p>
              Full Stack Developer who builds and ships real, production-ready web
              applications. Skilled in scalable backend architectures, REST APIs,
              real-time systems, and MERN stack development with Next.js.
            </p>
          </article>

          <article className="summary-card summary-card-small">
            <h2>Education</h2>
            <p>
              B.E. in Information Technology, LDRP. CGPA: 6.54. July 2023 -
              Present.
            </p>
            <p>HSC, Dream International School. Percentage: 61.11%.</p>
          </article>
        </div>

        <div className="skill-board" aria-label="Technical skills">
          <svg className="skill-arrow skill-arrow-one" viewBox="0 0 190 95" aria-hidden="true">
            <path d="M9 82C32 28 86 10 151 31" />
            <path d="M130 6L158 32L121 43" />
          </svg>
          <svg className="skill-arrow skill-arrow-two" viewBox="0 0 140 120" aria-hidden="true">
            <path d="M18 10C96 28 127 63 101 108" />
            <path d="M85 96L103 112L117 89" />
          </svg>
          <svg className="skill-arrow skill-arrow-three" viewBox="0 0 120 96" aria-hidden="true">
            <path d="M99 9C94 56 57 76 16 66" />
            <path d="M28 49L10 66L34 82" />
          </svg>
          <span className="skill-star skill-star-one" aria-hidden="true">*</span>
          <span className="skill-star skill-star-two" aria-hidden="true">*</span>

          {skills.map(({ name, tone, icon: Icon, style }) => (
            <span className={`skill-note skill-note-${tone}`} style={style} key={name}>
              {Icon && <Icon size={28} strokeWidth={2.5} />}
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
