// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Ganesh Vathyaram',
  title: 'AI/ML Engineer',
  location: 'Maryland',
  summary:
    'I build machine learning and LLM systems that hold up in production: retrieval pipelines with cited answers, measurable evaluation, and models deployed behind clean APIs.',
  email: 'ganesh.vathyaram06@gmail.com',
  phone: '+1 (667) 481-9025',
  phoneHref: 'tel:+16674819025',
  linkedin: 'https://www.linkedin.com/in/ganeshvathyaram/',
  github: 'https://github.com/ganeshvathyaram10',
  // Add your photo as public/profile.jpg. Until then, initials are shown.
  photo: '/profile.jpg',
  // Add your resume as public/resume.pdf and set this to '/resume.pdf' to show a download button.
  resume: null,
};

export const experience = [
  {
    role: 'Forward Deployed AI Engineer',
    company: 'Palantir Technologies',
    location: 'California',
    dates: 'Oct 2025 – Present',
    highlights: [],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Razorpay',
    location: 'India',
    dates: 'Aug 2021 – Jul 2024',
    highlights: [],
  },
];

export const featuredProject = {
  title: 'Enterprise Document RAG Assistant',
  description:
    'Answers questions over internal documents with citations to the source passage. Retrieval combines dense and BM25 search, fuses them with reciprocal rank fusion, and reranks with a cross-encoder. When the evidence is weak, the assistant declines to answer instead of guessing.',
  stack: ['Python', 'Hugging Face', 'LangChain', 'ChromaDB', 'FastAPI', 'Docker'],
  github: 'https://github.com/ganeshvathyaram10/enterprise-rag-assistant',
  evalNote: 'Measured on a 19-question evaluation set (16 answerable, 3 unanswerable).',
  results: [
    { metric: 'Answer correctness', value: '15 of 16' },
    { metric: 'Correct refusals on unanswerable questions', value: '3 of 3' },
    { metric: 'Faithfulness to retrieved context', value: '0.87' },
    { metric: 'Latency, p95', value: '1.7 s' },
  ],
};

export const projects = [
  {
    title: 'CGM Glucose Predictor',
    description:
      'Forecasts blood glucose 30 minutes ahead from continuous glucose monitor data, using 48 engineered time-series features.',
    result: 'MAE 2.39 mg/dL, R² 0.986',
    stack: ['Python', 'scikit-learn', 'Time series'],
    demo: 'https://cgm-glucose-predictor.streamlit.app',
    github: 'https://github.com/ganeshvathyaram10/cgm-glucose-predictor',
  },
  {
    title: 'Resume AI Analyzer',
    description:
      'Scores a resume against a job description using semantic similarity and an LLM, then suggests specific improvements.',
    result: null,
    stack: ['NLP', 'LLMs', 'Prompt engineering'],
    demo: 'https://resumeaianalyzer-vathy.netlify.app',
    github: 'https://github.com/ganeshvathyaram10/resume-ai-analyzer',
  },
  {
    title: 'Meeting Assistant',
    description:
      'Transcribes meeting audio, then produces a structured summary and a list of action items through a FastAPI service.',
    result: null,
    stack: ['Speech-to-text', 'LLMs', 'FastAPI'],
    demo: 'https://meeting-assistant1.netlify.app',
    github: 'https://github.com/ganeshvathyaram10/meeting-assistant',
  },
  {
    title: 'Stock Price Pipeline',
    description:
      'ETL pipeline that pulls daily prices from the Alpha Vantage API into SQLite, builds 17 features, and predicts next-day direction.',
    result: null,
    stack: ['Python', 'SQLite', 'REST APIs', 'scikit-learn'],
    demo: null,
    github: 'https://github.com/ganeshvathyaram10/stock-pipeline',
  },
];

export const skills = [
  { group: 'AI and LLMs', items: ['Retrieval-augmented generation', 'Hybrid search and reranking', 'LLM evaluation', 'Prompt engineering', 'NLP', 'Hugging Face', 'LangChain'] },
  { group: 'Machine learning', items: ['scikit-learn', 'TensorFlow', 'Time-series forecasting', 'Feature engineering', 'Model evaluation'] },
  { group: 'Data engineering', items: ['ETL pipelines', 'Apache Spark', 'PySpark', 'Airflow', 'SQL', 'ChromaDB'] },
  { group: 'Deployment and cloud', items: ['FastAPI', 'Docker', 'AWS (S3, Lambda, EC2)', 'MLflow', 'CI/CD', 'Streamlit'] },
  { group: 'Languages and tools', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Git', 'Tableau', 'Power BI'] },
];

export const education = [
  { degree: "Master's in Data Science", school: 'University of Maryland, College Park' },
  { degree: "Bachelor's in Computer Science", school: 'Sree Vidyanikethan Engineering College' },
];
