import React, { useState } from 'react';

const projects = [
  {
    icon: '🩺',
    title: 'CGM Glucose Predictor',
    description: 'Predicts blood glucose 30 minutes ahead using 48 engineered features from CGM time-series data. Achieves MAE = 2.39 mg/dL and R² = 0.986 — clinically safe predictions.',
    tags: ['Time Series', 'Random Forest', 'Feature Engineering', 'Healthcare'],
    link: 'https://cgm-glucose-predictor.streamlit.app',
    github: 'https://github.com/ganeshvathyaram10/cgm-glucose-predictor',
    color: '#4c1d95',
    metric: 'R² = 0.986',
  },
  {
    icon: '📈',
    title: 'Stock Price Pipeline',
    description: 'Real-time ETL pipeline ingesting live stock prices from Alpha Vantage API, storing in SQLite, engineering 17 features, and predicting next-day price direction.',
    tags: ['ETL', 'SQLite', 'REST API', 'Random Forest', 'Finance'],
    link: 'https://cgm-glucose-predictor-ml.streamlit.app',
    github: 'https://github.com/ganeshvathyaram10/stock-pipeline',
    color: '#14532d',
    metric: 'Live pipeline',
  },
  {
    icon: '📄',
    title: 'Resume AI Analyzer',
    description: 'ATS optimization platform using NLP and LLMs to score resumes against job descriptions with semantic similarity matching and actionable feedback.',
    tags: ['NLP', 'LLMs', 'Prompt Engineering', 'Semantic Similarity'],
    link: 'https://resumeaianalyzer-vathy.netlify.app',
    github: 'https://github.com/ganeshvathyaram10',
    color: '#7c2d12',
    metric: 'LLM powered',
  },
  {
    icon: '🎙️',
    title: 'Meeting Assistant',
    description: 'AI-powered meeting summarizer that transcribes audio, extracts action items, and generates structured summaries using large language models and FastAPI.',
    tags: ['Speech-to-Text', 'LLMs', 'FastAPI', 'Summarization'],
    link: 'https://meeting-assistant1.netlify.app',
    github: 'https://github.com/ganeshvathyaram10',
    color: '#1e3a5f',
    metric: 'Real-time AI',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '80px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="section-label">Portfolio</div>
      <div className="section-heading">Projects</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
        gap: '20px',
      }}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: '#111118',
              border: `1px solid ${hovered === i ? '#7c3aed' : '#1a1a2e'}`,
              borderRadius: '16px',
              padding: '28px',
              transition: 'all 0.3s ease',
              transform: hovered === i ? 'translateY(-4px)' : 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: p.color,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                {p.icon}
              </div>
              <span style={{
                background: '#1a1a2e',
                color: '#a78bfa',
                fontSize: '11px',
                padding: '4px 12px',
                borderRadius: '20px',
                border: '1px solid #2d2d4e',
              }}>
                {p.metric}
              </span>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{p.title}</h3>
            <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.7, marginBottom: '20px' }}>{p.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  background: '#1a1a2e',
                  color: '#a78bfa',
                  fontSize: '11px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={p.link} target="_blank" rel="noreferrer" style={{
                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 500,
              }}>
                Live Demo
              </a>
              <a href={p.github} target="_blank" rel="noreferrer" style={{
                background: 'transparent',
                color: '#9ca3af',
                border: '1px solid #2d2d4e',
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '13px',
              }}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
