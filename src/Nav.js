import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px clamp(20px, 5vw, 40px)',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #1a1a2e' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="gradient-text" style={{ fontSize: '20px', fontWeight: 700 }}>GV</div>
      <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
        {links.map(item => (
          <a key={item} href={'#' + item.toLowerCase()}
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.color = '#f0f0f5'}
            onMouseLeave={e => e.target.style.color = '#9ca3af'}
          >{item}</a>
        ))}
      </div>
    </nav>
  );
}

