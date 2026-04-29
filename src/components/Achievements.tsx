import { Award, CheckCircle2, GraduationCap, Handshake, Trophy, UsersRound } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    icon: Award,
    title: 'NPTEL Certified',
    description: 'Programming in Java.',
  },
  {
    icon: GraduationCap,
    title: 'Delta Program',
    description: 'Full Stack Web Development, Apna College: MERN stack, REST APIs, and deployment.',
  },
];

const activities = [
  'Built production-ready full-stack applications with end-to-end ownership.',
  'Designed scalable backend architectures and documented REST API endpoints.',
  'Implemented real-time workflows, authentication, dashboards, and deployment flows.',
];

const extra = [
  'Problem-Solving',
  'Self-Driven',
  'Project Ownership',
  'Attention to Detail',
  'Adaptability',
  'Team Collaboration',
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <header className="achievements-heading">
          <h2>Achievements</h2>
          <p>Certifications, project focus, and professional strengths from my resume.</p>
        </header>

        <div className="achievements-grid">
          <div className="achievement-card achievement-card-feature">
            <Trophy size={44} strokeWidth={2.1} />
            <h3>Certifications</h3>
            <div className="certificate-list">
              {achievements.map(({ icon: Icon, title, description }) => (
                <article key={title}>
                  <span>
                    <Icon size={24} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="achievement-card">
            <Handshake size={40} strokeWidth={2.1} />
            <h3>Development Focus</h3>
            <ul>
              {activities.map((activity) => (
                <li key={activity}>
                  <CheckCircle2 size={18} strokeWidth={2.3} />
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <div className="achievement-card">
            <UsersRound size={40} strokeWidth={2.1} />
            <h3>Soft Skills</h3>
            <ul>
              {extra.map((activity) => (
                <li key={activity}>
                  <CheckCircle2 size={18} strokeWidth={2.3} />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
