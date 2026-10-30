# Ganesh Vathyaram — Portfolio

Personal portfolio site: https://ganeshvathyaram.netlify.app

Built with React (Create React App) and deployed on Netlify.

## Updating content

All text lives in `src/content.js`: profile, experience, projects, skills and education.
Add job highlights to each role's `highlights` array.

- Photo: `public/profile.jpg`
- Resume download: add `public/resume.pdf` and set `resume: '/resume.pdf'` in `src/content.js`

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in build/
```
