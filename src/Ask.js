import React, { useState } from 'react';
import { search } from './search';
import { profile } from './content';

const SUGGESTIONS = [
  'What RAG work have you done?',
  'Where have you worked?',
  'Which projects use FastAPI?',
  'How do I contact you?',
];

export function revealOnPage(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  el.classList.remove('flash');
  void el.offsetWidth;
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 1800);
}

export default function Ask({ onBeforeReveal }) {
  const [query, setQuery] = useState('');
  const [asked, setAsked] = useState('');
  const [results, setResults] = useState(null);

  const run = q => {
    const text = q.trim();
    if (!text) return;
    setQuery(text);
    setAsked(text);
    setResults(search(text));
  };

  const show = id => {
    if (onBeforeReveal) onBeforeReveal();
    setTimeout(() => revealOnPage(id), 30);
  };

  const [top, ...rest] = results || [];

  return (
    <div className="ask">
      <form
        className="ask-form"
        onSubmit={e => { e.preventDefault(); run(query); }}
        role="search"
      >
        <label htmlFor="ask-input" className="ask-label">Ask a question about my work</label>
        <div className="ask-row">
          <input
            id="ask-input"
            className="ask-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="For example: which projects use LLMs?"
            autoComplete="off"
          />
          <button className="btn btn-primary" type="submit">Ask</button>
        </div>
      </form>

      <div className="ask-suggestions">
        {SUGGESTIONS.map(s => (
          <button key={s} type="button" className="chip" onClick={() => run(s)}>{s}</button>
        ))}
      </div>

      <div className="ask-answer" aria-live="polite">
        {results && results.length === 0 && (
          <p className="ask-empty">
            Nothing on this page answers "{asked}". Email me at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a> and I'll reply directly.
          </p>
        )}
        {top && (
          <>
            <p className="ask-source">From {top.section}</p>
            <h3 className="ask-title">{top.title}</h3>
            <p className="prose">{top.text}</p>
            <button type="button" className="text-btn" onClick={() => show(top.id)}>Show this on the page</button>
            {rest.length > 0 && (
              <div className="ask-more">
                <p className="ask-source">Also relevant</p>
                <ul>
                  {rest.map(r => (
                    <li key={r.title}>
                      <button type="button" className="text-btn" onClick={() => show(r.id)}>{r.title}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
      <p className="ask-note">
        Answers come from a small keyword-retrieval index of this page, built in your browser. Nothing you type is sent anywhere.
      </p>
    </div>
  );
}
