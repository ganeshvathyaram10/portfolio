// Small in-browser retrieval over the site's own content (BM25 + light query expansion).
import { profile, experience, featuredProject, projects, skills, education } from './content';

export const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const STOP = new Set('a an the and or of to in on for with is are was were be by at as from what which who whom how does do did has have he his him i me my about any this that it its can tell show list where when there you your done work use used using any some'.split(' '));

const SYNONYMS = {
  rag: ['retrieval', 'citations', 'reranks'],
  retrieval: ['rag'],
  llm: ['llms', 'language', 'rag'],
  ai: ['llms', 'machine', 'learning'],
  ml: ['machine', 'learning'],
  work: ['engineer', 'experience'],
  worked: ['engineer', 'experience'],
  job: ['engineer', 'experience'],
  jobs: ['engineer', 'experience'],
  company: ['experience'],
  companies: ['experience'],
  experience: ['engineer'],
  contact: ['email', 'phone'],
  reach: ['email', 'phone'],
  hire: ['email', 'open', 'roles'],
  study: ['degree', 'master', 'bachelor'],
  studied: ['degree', 'master', 'bachelor'],
  education: ['degree', 'master', 'bachelor'],
  degree: ['master', 'bachelor'],
  school: ['university', 'college'],
  cloud: ['aws'],
  deploy: ['docker', 'fastapi', 'aws'],
  deployment: ['docker', 'fastapi', 'aws'],
  skills: ['skill'],
  live: ['located', 'location'],
  located: ['location', 'maryland'],
  based: ['location', 'maryland'],
  forecasting: ['forecasts', 'time-series'],
  results: ['correctness', 'faithfulness', 'latency', 'mae'],
  metrics: ['correctness', 'faithfulness', 'latency', 'mae'],
};

function tokens(text) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9.+-]+/)
    .map(t => t.replace(/^[.-]+|[.-]+$/g, ''))
    .filter(t => t && !STOP.has(t))
    .map(t => (t.length > 4 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t));
}

function buildDocs() {
  const docs = [];
  docs.push({
    id: 'top',
    section: 'About',
    title: `${profile.name}, ${profile.title}`,
    text: `${profile.summary} Based in ${profile.location}.`,
  });
  docs.push({
    id: 'experience',
    section: 'Experience',
    title: 'Work experience',
    text: experience.map(j => `${j.role} at ${j.company}, ${j.location} (${j.dates})`).join('. ') + '.',
    kw: 'work worked experience experience job jobs employer companies company career engineer',
  });
  experience.forEach(j =>
    docs.push({
      id: `job-${slug(j.company)}`,
      section: 'Experience',
      title: `${j.role} at ${j.company}`,
      text: `${j.role}, ${j.company}, ${j.location}, ${j.dates}. ${j.highlights.join(' ')}`.trim(),
      kw: 'work experience job'
    })
  );
  docs.push({
    id: `project-${slug(featuredProject.title)}`,
    section: 'Projects',
    title: featuredProject.title,
    text: `${featuredProject.description} Results: ${featuredProject.results.map(r => `${r.metric} ${r.value}`).join('; ')}. Built with ${featuredProject.stack.join(', ')}.`,
    kw: 'rag rag llm project retrieval-augmented generation'
  });
  projects.forEach(p =>
    docs.push({
      id: `project-${slug(p.title)}`,
      section: 'Projects',
      title: p.title,
      text: `${p.description}${p.result ? ` Result: ${p.result}.` : ''} Built with ${p.stack.join(', ')}.`,
      kw: 'project'
    })
  );
  skills.forEach(s =>
    docs.push({
      id: 'skills',
      section: 'Skills',
      title: `Skills: ${s.group}`,
      text: `${s.items.join(', ')}.`,
      kw: 'skill'
    })
  );
  docs.push({
    id: 'education',
    section: 'Education',
    title: 'Education',
    text: education.map(e => `${e.degree}, ${e.school}`).join('. ') + '.',
    kw: 'degree education'
  });
  docs.push({
    id: 'contact',
    section: 'Contact',
    title: 'Contact',
    text: `Email ${profile.email}. Phone ${profile.phone}. LinkedIn and GitHub linked below. Location ${profile.location}, open to relocation and to AI and machine learning engineering roles.`,
  });
  return docs.map(d => ({ ...d, toks: tokens(`${d.title} ${d.text} ${d.kw || ''}`) }));
}

const DOCS = buildDocs();
const N = DOCS.length;
const AVGDL = DOCS.reduce((s, d) => s + d.toks.length, 0) / N;
const DF = {};
DOCS.forEach(d => new Set(d.toks).forEach(t => { DF[t] = (DF[t] || 0) + 1; }));

export function search(query, k = 3) {
  const base = tokens(query);
  const weights = {};
  base.forEach(t => {
    weights[t] = Math.max(weights[t] || 0, 1);
    (SYNONYMS[t] || []).forEach(s => tokens(s).forEach(x => { weights[x] = Math.max(weights[x] || 0, 0.6); }));
  });
  const k1 = 1.4, b = 0.75;
  const scored = DOCS.map((d, idx) => {
    const tf = {};
    d.toks.forEach(t => { tf[t] = (tf[t] || 0) + 1; });
    let score = 0;
    Object.entries(weights).forEach(([t, w]) => {
      if (!tf[t]) return;
      const idf = Math.log(1 + (N - DF[t] + 0.5) / (DF[t] + 0.5));
      score += w * idf * (tf[t] * (k1 + 1)) / (tf[t] + k1 * (1 - b + b * d.toks.length / AVGDL));
    });
    if (score > 0) score += 0.001 * (N - idx); // tie-break: earlier (more recent) items first
    return { ...d, score };
  })
    .filter(d => d.score > 0)
    .sort((a, b2) => b2.score - a.score);

  const seen = new Set();
  const out = [];
  for (const d of scored) {
    if (seen.has(d.title)) continue;
    seen.add(d.title);
    if (out.length && d.score < scored[0].score * 0.35) break;
    out.push(d);
    if (out.length === k) break;
  }
  return out;
}
