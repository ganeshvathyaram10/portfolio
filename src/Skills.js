import React, { useState } from 'react';

const skillCategories = [
  {
    title: 'AI Engineering',
    color: '#7c3aed',
    skills: ['RAG Pipelines', 'Hybrid Search & Reranking', 'LLM Evaluation (faithfulness, relevance)', 'Prompt Engineering', 'NLP'],
  },
  {
    title: 'Data Engineering',
    color: '#db2777',
    skills: ['ETL Pipelines', 'Apache Spark', 'Apache Airflow', 'SQL', 'Data Warehousing'],
  },
  {
    title: 'Machine Learning',
    color: '#f59e0b',
    skills: ['Scikit-learn', 'TensorFlow', 'Time Series', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'Cloud & MLOps',
    color: '#10b981',
    skills: ['AWS (S3, Lambda, EC2)', 'Docker', 'CI/CD Pipelines', 'MLflow', 'Git & GitHub'],
  },
  {
    title: 'Programming',
    color: '#3b82f6',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'PySpark'],
  },
  {
    title: 'Deployment & APIs',
    color: '#ec4899',
    skills: ['Streamlit', 'FastAPI', 'REST APIs', 'Netlify', 'Workflow Automation'],
  },
];

const allTools = [
  'Python', 'SQL', 'Pandas', 'NumPy', 'PySpark',
  'Scikit-learn', 'TensorFlow', 'NLP', 'LLMs', 'RAG',
  'Hugging Face', 'LangChain', 'ChromaDB', 'Vector Search',
  'Apache Spark', 'Airflow', 'ETL', 'Docker', 'MLflow',
  'AWS S3', 'AWS Lambda', 'EC2', 'FastAPI', 'Streamlit',
  'Tableau', 'Power BI', 'Git', 'CI/CD', 'Prompt Engineering',
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{ padding: '80px clamp(20px, 5vw, 40px)', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="section-label">Expertise</div>
      <div className="section-heading">Skills</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '16px',
        marginBottom: '48px',
      }}>
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: '#111118',
              border: `1px solid ${hovered === i ? cat.color : '#1a1a2e'}`,
              borderRadius: '16px',
              padding: '24px',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: cat.color,
              }} />
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#f0f0f5' }}>{cat.title}</h4>
            </div>
            {cat.skills.map(skill => (
              <div key={skill} style={{
                fontSize: '13px',
                color: '#9ca3af',
                padding: '6px 0',
                borderBottom: '1px solid #1a1a2e',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ color: cat.color, fontSize: '10px' }}>▸</span>
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        background: '#111118',
        border: '1px solid #1a1a2e',
        borderRadius: '16px',
        padding: '32px',
      }}>
        <h4 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '.1em' }}>
          Tools & Technologies
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {allTools.map((tool, i) => (
            <span key={tool} style={{
              background: '#1a1a2e',
              color: i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#ec4899' : '#f59e0b',
              fontSize: '12px',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid #2d2d4e',
            }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
