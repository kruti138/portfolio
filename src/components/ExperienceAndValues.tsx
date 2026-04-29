import { Heart, Search, Timer, UserRound, type LucideIcon } from 'lucide-react';
import './ExperienceAndValues.css';

const experiences = [
  {
    date: "MAY '25 - JUNE '25",
    title: 'Python Intern - Oasis Infobyte',
    tags: ['Python', 'File I/O', 'Data Structures', 'OOP', 'Reusable Modules'],
    points: [
      'Developed modular Python scripts to automate structured data processing using core data structures.',
      'Built reusable Python modules for datasets using file I/O, lists, and dictionaries.',
      'Wrote well-documented, production-style Python code applying OOP principles and best practices.',
    ],
  },
];

const values: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}> = [
  {
    icon: UserRound,
    title: 'Ownership',
    description: 'I like taking projects from architecture and APIs through deployment.',
    accent: true,
  },
  {
    icon: Timer,
    title: 'Performance',
    description: 'I care about responsive flows, real-time updates, and fast discovery.',
  },
  {
    icon: Search,
    title: 'Problem Solving',
    description: 'Clean code, practical tradeoffs, and careful debugging are how I move.',
  },
];

const stats = [
  { value: '6.54', label: 'CGPA' },
  { value: '3', label: 'Projects' },
  { value: '1', label: 'Internship' },
];

function WaveLines({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 260 220" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <path
          key={index}
          d={`M${8 + index * 10} 5C${20 + index * 10} 72 ${75 + index * 8} 65 ${102 + index * 6} 116C132 174 201 144 252 214`}
        />
      ))}
    </svg>
  );
}

export default function ExperienceAndValues() {
  return (
    <section id="about" className="about-section">
      <WaveLines className="about-wave about-wave-top" />
      <WaveLines className="about-wave about-wave-bottom" />

      <div className="about-container">
        <header className="section-heading">
          <h2>About Me</h2>
          <p>
            Full Stack Developer passionate about solving real problems through clean
            code, scalable REST APIs, real-time systems, and performance-driven development.
          </p>
        </header>

        <div className="about-grid">
          <section id="experience" className="experience-column" aria-labelledby="experience-title">
            <h3 id="experience-title">Experience</h3>
            <div className="timeline-list">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.title}>
                  <div className="timeline-marker" aria-hidden="true">
                    <span></span>
                    {index !== experiences.length - 1 && <i></i>}
                  </div>
                  <div className="experience-card">
                    <p>{experience.date}</p>
                    <h4>{experience.title}</h4>
                    <div className="experience-tags">
                      {experience.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <ul className="experience-points">
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="values-column" aria-labelledby="values-title">
            <h3 id="values-title">What I Value</h3>
            <div className="values-list">
              {values.map(({ icon: Icon, title, description, accent }) => (
                <article className="value-item" key={title}>
                  <div className="value-icon">
                    <Icon size={48} strokeWidth={2.1} />
                    {accent && <Heart className="value-heart" size={21} strokeWidth={2.2} />}
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="stats-row" aria-label="Portfolio stats">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
