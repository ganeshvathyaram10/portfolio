import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ganesh.vathyaram06@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '80px clamp(20px, 5vw, 40px)', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="section-label">Get in Touch</div>
      <div className="section-heading">Contact</div>

      <div style={{
        background: '#111118', border: '1px solid #1a1a2e',
        borderRadius: '24px', padding: 'clamp(40px, 8vw, 64px) clamp(20px, 5vw, 48px)', textAlign: 'center',
      }}>
        <div className="gradient-text" style={{ fontSize: 'clamp(32px, 7vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>
          Let's build something
        </div>
        <p style={{ fontSize: '16px', color: '#9ca3af', maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.8 }}>
          I'm actively looking for AI and Data Engineer roles. If you have an exciting problem to solve, let's talk.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <button onClick={copyEmail} style={{
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
            color: '#fff', border: 'none', padding: '14px 32px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
          }}>
            {copied ? 'Email copied!' : 'Copy Email'}
          </button>
          <a href="https://www.linkedin.com/in/ganeshvathyaram/" target="_blank" rel="noreferrer" style={{
            color: '#f0f0f5', border: '1px solid #2d2d4e', padding: '14px 32px',
            borderRadius: '8px', fontSize: '14px', textDecoration: 'none',
          }}>LinkedIn</a>
          <a href="https://github.com/ganeshvathyaram10" target="_blank" rel="noreferrer" style={{
            color: '#f0f0f5', border: '1px solid #2d2d4e', padding: '14px 32px',
            borderRadius: '8px', fontSize: '14px', textDecoration: 'none',
          }}>GitHub</a>
        </div>

        <div style={{
          display: 'flex', gap: '32px', justifyContent: 'center',
          flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid #1a1a2e',
        }}>
          {[
            { label: 'Email', value: 'ganesh.vathyaram06@gmail.com' },
            { label: 'Phone', value: '+1 (667) 481-9025' },
            { label: 'Location', value: 'Maryland · open to relocation' },
            { label: 'Status', value: 'Actively looking' },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontSize: '14px', color: '#f0f0f5' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px', color: '#374151', fontSize: '13px' }}>
        Built with React · Deployed on Netlify · Ganesh Vathyaram 2026
      </div>
    </section>
  );
}

