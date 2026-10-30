import React, { useState } from 'react';
import './App.css';
import { profile, experience, featuredProject, projects, skills, education } from './content';

function initials(name) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2);
}

function Portrait() {
  const [failed, setFailed] = useState(false);
  if (!profile.photo || failed) {
    return <div className="portrait portrait-fallback" aria-hidden="true">{initials(profile.name)}</div>;
  }
  return (
    <img
      className="portrait"
      src={profile.photo}
      alt={`Portrait of ${profile.name}`}
      onError={() => setFailed(true)}
    />
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function ExtLink({ href, children, className }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="mark" href="#top">{profile.name}</a>
          <nav aria-label="Sections" className="topnav">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main" className="wrap">
        <div id="top" className="hero">
          <div className="hero-text">
            <h1 className="name">{profile.name}</h1>
            <p className="role">{profile.title}, based in {profile.location}</p>
            <p className="summary">{profile.summary}</p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
              <ExtLink className="btn" href={profile.linkedin}>LinkedIn</ExtLink>
              <ExtLink className="btn" href={profile.github}>GitHub</ExtLink>
              {profile.resume && <a className="btn" href={profile.resume} download>Download resume</a>}
            </div>
          </div>
          <Portrait />
        </div>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map(job => (
              <li key={job.company} className="job">
                <div className="job-dates">{job.dates}</div>
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">{job.company}, {job.location}</p>
                  {job.highlights.length > 0 && (
                    <ul className="job-highlights">
                      {job.highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <article className="featured">
            <h3 className="featured-title">{featuredProject.title}</h3>
            <p className="prose">{featuredProject.description}</p>
            <table className="results">
              <caption>{featuredProject.evalNote}</caption>
              <tbody>
                {featuredProject.results.map(r => (
                  <tr key={r.metric}>
                    <th scope="row">{r.metric}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="stack">{featuredProject.stack.join(', ')}</p>
            <div className="links">
              <ExtLink href={featuredProject.github}>View code on GitHub</ExtLink>
            </div>
          </article>

          <ul className="project-list">
            {projects.map(p => (
              <li key={p.title} className="project">
                <h3 className="project-title">{p.title}</h3>
                <p className="prose">{p.description}</p>
                {p.result && <p className="project-result">{p.result}</p>}
                <p className="stack">{p.stack.join(', ')}</p>
                <div className="links">
                  {p.demo && <ExtLink href={p.demo}>Live demo</ExtLink>}
                  <ExtLink href={p.github}>Code</ExtLink>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills">
            {skills.map(s => (
              <div key={s.group}>
                <h3 className="skill-group">{s.group}</h3>
                <ul className="skill-items">
                  {s.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="edu">
            {education.map(e => (
              <li key={e.degree}>
                <h3 className="job-role">{e.degree}</h3>
                <p className="job-company">{e.school}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-lead">
            I'm open to AI and machine learning engineering roles. The quickest way to reach me is email.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <dl className="contact-list">
            <div><dt>Phone</dt><dd><a href={profile.phoneHref}>{profile.phone}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><ExtLink href={profile.linkedin}>linkedin.com/in/ganeshvathyaram</ExtLink></dd></div>
            <div><dt>GitHub</dt><dd><ExtLink href={profile.github}>github.com/ganeshvathyaram10</ExtLink></dd></div>
            <div><dt>Location</dt><dd>{profile.location}, open to relocation</dd></div>
          </dl>
        </Section>
      </main>

      <footer className="wrap footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
