// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Ganesh Vathyaram',
  title: 'AI/ML Engineer',
  location: 'California',
  summary:
    'AI/ML engineer with 4+ years of experience building generative AI, agentic AI, RAG, machine learning, and MLOps systems for supply chain and fintech. I have built multi-agent systems, a supply chain digital twin, fraud detection models, and real-time ML pipelines.',
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
    location: 'New York',
    dates: 'Apr 2025 – Present',
    highlights: [
      'Embedded with supply chain and logistics leaders at a Fortune 100 home-improvement retailer to build a supply chain digital twin on Palantir Foundry and AIP, turning 35+ planner workflows into KPI-driven delivery milestones.',
      'Built PySpark and SQL pipelines integrating SAP ERP, WMS, TMS, and Snowflake through Data Connection, REST APIs, and Apache Kafka, processing 70M+ records daily across 1,500+ locations.',
      'Designed an ontology of 60+ object, link, and action types and wrote TypeScript functions to automate replenishment decisions, reducing manual planner adjustments by 45%.',
      'Developed multi-agent LLM workflows in AIP Agent Studio and LangGraph on Claude, using MCP tool calling and RAG with hybrid search and NeMo Retriever reranking, reaching 91% accuracy on LLM-as-judge evaluations against a golden dataset.',
      'Integrated NVIDIA cuOpt route optimization with XGBoost forecasting, improving forecast MAPE to 15% and truckload utilization by 8%.',
      'Shipped Workshop and OSDK (React) apps with human-in-the-loop approvals, NeMo Guardrails for PII redaction, and LangSmith tracing, deployed through Apollo CI/CD to 300+ planners in 8 weeks and cutting stockout response time to 6 hours.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Razorpay',
    location: 'India',
    dates: 'Aug 2021 – Jul 2024',
    highlights: [
      'Built a production fraud detection system with PySpark, XGBoost, LightGBM, and SHAP, engineering 150+ behavioral features across 90M+ monthly transactions, achieving 94% precision and preventing 1.2M in annual fraud losses.',
      'Developed real-time feature engineering and ML pipelines with Airflow, AWS EMR, Kafka, and Feast, using SMOTE and threshold optimization to improve fraud recall by 18% at under 1% fraud prevalence.',
      'Fine-tuned DistilBERT with Hugging Face Transformers on payment descriptions and merchant metadata, reaching 89% accuracy and reducing manual review volume by 37% through champion/challenger deployment.',
      'Served real-time inference with FastAPI, Docker, Amazon EKS, Kubernetes HPA, Redis, and SageMaker, holding 50 ms p95 latency at peak load with Prometheus and Grafana monitoring.',
      'Implemented model monitoring, drift detection, and automated rollback with MLflow, Evidently, KS-test, and PSI, reducing degradation detection time by 40%.',
      'Automated MLOps and CI/CD with Terraform and the MLflow Model Registry, shortening release cycles from weeks to 2 days.',
    ],
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
  { group: 'Generative AI and NLP', items: ['Multi-agent systems', 'LangGraph', 'RAG and vector embeddings', 'MCP tool calling', 'LLM evaluation (LLM-as-judge)', 'NeMo Retriever and Guardrails', 'LangSmith', 'Fine-tuning', 'Hugging Face Transformers'] },
  { group: 'Machine learning', items: ['XGBoost', 'LightGBM', 'SHAP and explainable AI', 'Forecasting', 'Imbalanced learning (SMOTE)', 'Threshold optimization', 'Feature engineering'] },
  { group: 'Palantir platform', items: ['Foundry', 'AIP and AIP Agent Studio', 'Ontology modeling', 'Pipeline Builder', 'Workshop', 'OSDK (React)', 'Apollo'] },
  { group: 'Data engineering', items: ['PySpark', 'cuDF', 'Apache Kafka', 'Apache Airflow', 'Feast feature store', 'Snowflake', 'SAP ERP, WMS, TMS integration'] },
  { group: 'MLOps and infrastructure', items: ['MLflow', 'FastAPI', 'Docker', 'Kubernetes', 'Redis', 'Terraform', 'CI/CD', 'Drift detection (Evidently, PSI)', 'Prometheus and Grafana'] },
  { group: 'Cloud, optimization, languages', items: ['AWS (SageMaker, EKS, EMR, S3)', 'NVIDIA cuOpt', 'Python', 'SQL', 'TypeScript'] },
];

export const education = [
  { degree: "Master's in Data Science", school: 'University of Maryland, College Park' },
  { degree: "Bachelor's in Computer Science", school: 'Sree Vidyanikethan Engineering College' },
];
