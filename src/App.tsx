import './App.css'
import profileImage from './assets/dinesh.webp'
import amritaLogo from './assets/amrita.png'
import dboLogo from './assets/DBO.png'
import {
  profile, stats, experience, skills, projects, certifications,
  achievements, publication, education,
} from './data'

const nav = ['experience', 'skills', 'projects', 'credentials', 'contact']

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#top" className="brand">DK</a>
          <nav aria-label="Primary">
            {nav.map((n) => <a key={n} href={`#${n}`}>{n}</a>)}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">{profile.role}</p>
              <h1>{profile.name}</h1>
              <p className="lead">{profile.summary}</p>
              <div className="actions">
                <a className="btn primary" href="#experience">View experience</a>
                <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
              </div>
            </div>
            <img className="photo" src={profileImage} alt={profile.name} width={320} height={427} fetchPriority="high" />
          </div>
          <div className="container">
            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section id="experience" title="Experience">
          <article className="card">
            <header className="job-head">
              <img src={dboLogo} alt="" width={81} height={35} loading="lazy" />
              <div>
                <h3>{experience.title} · {experience.company}</h3>
                <p className="muted">{experience.period}</p>
              </div>
            </header>
            {experience.products.map((p) => (
              <div key={p.name} className="product">
                <h4>Product · {p.name}</h4>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
            <div className="tags">{experience.tech.map((t) => <span key={t}>{t}</span>)}</div>
          </article>
          <article className="card edu">
            <img src={amritaLogo} alt="" width={64} height={64} loading="lazy" />
            <div>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <p className="muted">{education.period}</p>
            </div>
          </article>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid skills">
            {skills.map((s) => (
              <div key={s.group} className="card">
                <h3>{s.group}</h3>
                <div className="tags">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid two">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                <p className="muted">{p.subtitle}</p>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="credentials" title="Credentials">
          <div className="grid two">
            <div>
              <h3 className="sub">Certifications</h3>
              {certifications.map((c) => (
                <a key={c.name} className="card row link" href={c.url} target="_blank" rel="noopener noreferrer">
                  <strong>{c.name}{c.note && <em className="badge">{c.note}</em>}</strong>
                  <span>{c.issuer}</span>
                  <span className="muted">{c.period}</span>
                  <span className="accent">View certificate →</span>
                </a>
              ))}
              <h3 className="sub">Achievements</h3>
              {achievements.map((a) => (
                <div key={a.title} className="card row">
                  <strong>{a.title}</strong>
                  <span className="muted">{a.detail}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="sub">Publication</h3>
              <a className="card row link" href={publication.url} target="_blank" rel="noopener noreferrer">
                <strong>{publication.title}</strong>
                <span className="muted">{publication.venue}</span>
                <span className="accent">Read paper →</span>
              </a>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Get in touch">
          <div className="contact">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  )
}
