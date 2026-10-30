
import React, { useEffect, useState } from 'react';

const roles = [
  'AI Engineer',
  'Data Engineer',
  'ML Engineer',
  'LLM Developer',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
    }}>
      <div style={{
        display: 'inline-block',
        background: '#1a1a2e',
        border: '1px solid #2d2d4e',
        color: '#a78bfa',
        fontSize: '12px',
        padding: '6px 16px',
        borderRadius: '20px',
        marginBottom: '24px',
      }}>
        Open to AI & Data Engineer roles
      </div>

      <h1 style={{ fontSize: 'clamp(36px, 8vw, 56px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '16px' }}>
        Hi, I'm{' '}
        <span className="gradient-text">Ganesh Vathyaram</span>
      </h1>

      <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 400, color: '#9ca3af', marginBottom: '24px', minHeight: '40px' }}>
        <span className="gradient-text" style={{ fontWeight: 600 }}>{displayed}</span>
        <span style={{ borderRight: '2px solid #a78bfa', marginLeft: '2px', animation: 'blink 1s infinite' }} />
      </h2>

      <p style={{
        fontSize: '17px',
        color: '#9ca3af',
        maxWidth: '580px',
        lineHeight: 1.8,
        marginBottom: '40px',
      }}>
        I build intelligent systems — from LLM-powered applications and
        retrieval systems with measurable evaluation to real-time data
        pipelines and predictive ML models.
        Turning raw data into decisions that matter.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" style={{
          background: 'linear-gradient(135deg, #7c3aed, #db2777)',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
        }}>
          View Projects
        </a>
        <a href="mailto:vathyaramganesh@gmail.com" style={{
          background: 'transparent',
          color: '#f0f0f5',
          border: '1px solid #2d2d4e',
          padding: '14px 32px',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
        }}>
          Get in Touch
        </a>
      </div>

      <div style={{
        display: 'flex',
        gap: '48px',
        marginTop: '80px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {[
          { num: '5', label: 'Projects shipped' },
          { num: '0.986', label: 'Best model R²' },
          { num: '25K+', label: 'Data points processed' },
          { num: '3', label: 'Live demos' },
        ].map(({ num, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div className="gradient-text" style={{ fontSize: '32px', fontWeight: 700 }}>{num}</div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
