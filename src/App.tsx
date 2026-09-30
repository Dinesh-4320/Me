import './App.css'
import profileImage from './assets/dinesh.webp'
import amritaLogo from './assets/amrita.png'
import dboLogo from './assets/DBO.png'
import {
  profile, stats, experience, skills, projects, certifications,
  achievements, publication, education, openTo,
} from './data'
import BackgroundViz from './BackgroundViz'
import ClusterViz from './ClusterViz'
import { TechIcon } from './icons'
import { groupIcons, sectionIcons, ui } from './iconMaps'

const statIcons: Record<string, React.ReactNode> = {
  Briefcase: ui.Briefcase, Workflow: ui.Workflow, Gauge: ui.Gauge, Rocket: ui.Rocket,
}

const commands: Record<string, string> = {
  experience: 'kubectl get deployments',
  skills: 'helm list --all',
  projects: 'kubectl get pods -n projects',
  credentials: 'cat credentials.yaml',
  contact: 'curl -X POST /hire',
}

const nav = ['experience', 'skills', 'projects', 'credentials', 'contact']

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <p className="kicker"><span>$</span> {commands[id]}</p>
        <h2 className="section-title"><span className="title-icon">{sectionIcons[id]}</span>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <BackgroundViz />
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#top" className="brand">DK</a>
          <nav aria-label="Primary">
            {nav.map((n) => <a key={n} href={`#${n}`}>{sectionIcons[n]}<span>{n}</span></a>)}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="open-badge"><span className="dot" aria-hidden="true" />Running · Open to work · {openTo.join(' · ')}</p>
              <p className="eyebrow">{profile.role}</p>
              <h1>{profile.name}</h1>
              <p className="lead">{profile.summary}</p>
              <div className="actions">
                <a className="btn primary" href="#experience">{ui.Briefcase}View experience</a>
                <a className="btn" href={`mailto:${profile.email}`}>{ui.Mail}Get in touch</a>
              </div>
            </div>
            <img className="photo" src={profileImage} alt={profile.name} width={320} height={427} fetchPriority="high" />
          </div>
          <div className="container">
            <ClusterViz />
            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="stat-icon">{statIcons[s.icon]}</span>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section id="experience" title="Experience">
          <article className="card">
            <div className="term"><i /><i /><i /><span>deployment/digital-back-office</span></div>
            <header className="job-head">
              <img src={dboLogo} alt="" width={81} height={35} loading="lazy" />
              <div>
                <h3>{experience.title} · {experience.company}</h3>
                <p className="muted">{experience.period}</p>
              </div>
            </header>
            {experience.products.map((p) => (
              <div key={p.name} className="product">
                <h4>
                  Product · <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}<span aria-hidden="true"> ↗</span></a>
                </h4>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
            <div className="tags">{experience.tech.map((t) => <span key={t}><TechIcon name={t} />{t}</span>)}</div>
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
                <h3><span className="g-icon">{groupIcons[s.group]}</span>{s.group}</h3>
                <div className="tags">{s.items.map((i) => <span key={i}><TechIcon name={i} />{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid two">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <div className="term"><i /><i /><i /><span>{p.file}</span></div>
                <h3>{p.title}</h3>
                <p className="muted">{p.subtitle}</p>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                <div className="tags">{p.tags.map((t) => <span key={t}><TechIcon name={t} />{t}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="credentials" title="Credentials">
          <div className="grid two">
            <div>
              <h3 className="sub">{ui.Award}Certifications</h3>
              {certifications.map((c) => (
                <a key={c.name} className="card row link" href={c.url} target="_blank" rel="noopener noreferrer">
                  <span className="item-icon"><TechIcon name={c.icon} /></span>
                  <strong>{c.name}{c.note && <em className="badge">{c.note}</em>}</strong>
                  <span>{c.issuer}</span>
                  <span className="muted">{c.period}</span>
                  <span className="accent">View certificate →</span>
                </a>
              ))}
              <h3 className="sub">{ui.Trophy}Achievements</h3>
              {achievements.map((a) => (
                <div key={a.title} className="card row">
                  <span className="item-icon">{ui.Trophy}</span>
                  <strong>{a.title}</strong>
                  <span className="muted">{a.detail}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="sub">{ui.BookOpen}Publication</h3>
              <a className="card row link" href={publication.url} target="_blank" rel="noopener noreferrer">
                <span className="item-icon"><TechIcon name={publication.icon} /></span>
                <strong>{publication.title}</strong>
                <span className="muted">{publication.venue}</span>
                <span className="accent">Read paper →</span>
              </a>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Get in touch">
          <p className="lead">Open to full-time roles, contract engagements and freelance projects. Reach out and let's talk.</p>
          <div className="contact">
            <a className="btn primary" href={`mailto:${profile.email}`}>{ui.Mail}{profile.email}</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{ui.Linkedin}LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer"><TechIcon name="GitHub" />GitHub</a>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-in">
          <span><span className="dot" aria-hidden="true" /> All systems operational</span>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </footer>
    </>
  )
}
