import React from 'react';

const roles = [
  {
    company: 'Palantir Technologies',
    title: 'Forward Deployed AI Engineer',
    dates: 'October 2025 – Present',
    location: 'California',
    color: '#7c3aed',
  },
  {
    company: 'Razorpay',
    title: 'Machine Learning Engineer',
    dates: 'August 2021 – July 2024',
    location: 'India',
    color: '#db2777',
  },
];

const education = [
  { degree: "Master's in Data Science", school: 'University of Maryland, College Park' },
  { degree: "Bachelor's in Computer Science", school: 'Sree Vidyanikethan Engineering College' },
];

const card = {
  background: '#111118',
  border: '1px solid #1a1a2e',
  borderRadius: '16px',
  padding: '24px 28px',
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px clamp(20px, 5vw, 40px)', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="section-label">Career</div>
      <div className="section-heading">Experience</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '56px' }}>
        {roles.map(r => (
          <div key={r.company} style={{ ...card, borderLeft: `3px solid ${r.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{r.title}</h3>
                <div style={{ fontSize: '15px', color: '#a78bfa', marginTop: '4px' }}>{r.company}</div>
              </div>
              <div className="role-meta" style={{ fontSize: '13px', color: '#9ca3af' }}>
                <div>{r.dates}</div>
                <div style={{ color: '#6b7280', marginTop: '4px' }}>{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-label">Academic</div>
      <div className="section-heading" style={{ fontSize: '24px', marginBottom: '24px' }}>Education</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '16px',
      }}>
        {education.map(e => (
          <div key={e.degree} style={card}>
            <h3 style={{ fontSize: '16px', fontWeight: 600 }}>{e.degree}</h3>
            <div style={{ fontSize: '14px', color: '#9ca3af', marginTop: '6px' }}>{e.school}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
