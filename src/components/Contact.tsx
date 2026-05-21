import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';
import './Contact.css';

function GitHubMark() {
  return (
    <svg className="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.71.5.09.68-.22.68-.49v-1.87c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg className="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.98H3.86V20h3.08V8.98ZM7.22 5.57C7.21 4.65 6.53 4 5.44 4 4.36 4 3.65 4.65 3.65 5.57c0 .9.69 1.58 1.75 1.58h.02c1.11 0 1.8-.68 1.8-1.58ZM20.35 13.68c0-3.38-1.8-4.95-4.19-4.95-1.93 0-2.8 1.07-3.28 1.82V8.98H9.8c.04 1.03 0 11.02 0 11.02h3.08v-6.15c0-.33.02-.66.12-.89.26-.66.85-1.34 1.85-1.34 1.3 0 1.82 1 1.82 2.47V20h3.08l.6-6.32Z" />
    </svg>
  );
}

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    tone: 'success' | 'error';
    text: string;
  } | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/krutijasani5325@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message: ${formData.subject}`,
          _replyto: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now.');
      }

      setFormData(initialFormData);
      setSubmitMessage({
        tone: 'success',
        text: 'Your message has been sent successfully to Kruti Jasani!',
      });
    } catch (error) {
      setSubmitMessage({
        tone: 'error',
        text: error instanceof Error ? error.message : 'Unable to send your message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h2>Let's Build Something Together.</h2>
          <p>
            Open to full-stack development opportunities where clean APIs, scalable
            systems, and production-ready web experiences matter.
          </p>
        </header>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className="form-row">
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label>
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving Message...' : 'Send Message'}
              <Send size={20} strokeWidth={2.2} />
            </button>

            {submitMessage ? (
              <p className={`form-status form-status-${submitMessage.tone}`} role="status">
                {submitMessage.text}
              </p>
            ) : null}
          </form>

          <aside className="contact-side">
            <div className="direct-card">
              <h3>Direct Connect</h3>
              <div className="direct-list">
                <a href={profileLinks.email}>
                  <span className="direct-icon direct-icon-warm">
                    <Mail size={25} strokeWidth={2.2} />
                  </span>
                  <span>
                    <small>Email</small>
                    {profile.email}
                  </span>
                </a>
                <a href={profileLinks.github} target="_blank" rel="noreferrer">
                  <span className="direct-icon">
                    <GitHubMark />
                  </span>
                  <span>
                    <small>GitHub</small>
                    {profile.githubLabel}
                  </span>
                </a>
                <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                  <span className="direct-icon">
                    <LinkedInMark />
                  </span>
                  <span>
                    <small>LinkedIn</small>
                    {profile.linkedinLabel}
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="site-footer">
        <strong>Kruti Jasani</strong>
        <span>2026 Full Stack Developer. Built with React and clean frontend craft.</span>
        <nav aria-label="Footer links">
          <a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profileLinks.email}>Email</a>
        </nav>
      </footer>
    </section>
  );
}
