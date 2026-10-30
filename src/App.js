import React from 'react';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <div style={{ borderTop: '1px solid #1a1a2e' }}>
        <Experience />
      </div>
      <div style={{ borderTop: '1px solid #1a1a2e' }}>
        <Projects />
      </div>
      <div style={{ borderTop: '1px solid #1a1a2e' }}>
        <Skills />
      </div>
      <div style={{ borderTop: '1px solid #1a1a2e' }}>
        <Contact />
      </div>
    </div>
  );
}
