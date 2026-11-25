# Md Al Walid · Portfolio

Personal portfolio site, built with React, Vite and Bootstrap (Sass). Deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build into dist/
npm run lint
```

## Where the content lives

All text is in `src/data/`, so updating the site rarely means touching JSX.

| File | What it controls |
| --- | --- |
| `projects.js` | Case studies (`featured: true`) and smaller projects |
| `now.js` | "What I'm working on now". Update this every month or two |
| `skills.js` | Skills, grouped by confidence |
| `experience.js` | Work history |
| `education.js` | Degrees |

The CV is `public/Md_Al_Walid_CV.pdf`.

### Adding a case study

Add an object to `projects.js` with `featured: true` and a `sections` array.
Each section has a `heading` and a list of `items`. Give the
"Limits and next steps" section `tone: 'caution'` to highlight it.
Wrap code names in backticks (`` `search_products` ``) to render them as code.

Rule of thumb: only describe features that exist in the repo today.
Planned work goes under "Limits and next steps".

## Design

- Light theme by default, dark theme follows the visitor's system setting.
- Colors and spacing are CSS custom properties at the top of `src/styles/custom.scss`.
- Fonts: Bricolage Grotesque (headings), Public Sans (body), IBM Plex Mono (inline code).
- Keyboard accessible: skip link, visible focus, reduced motion respected.

## Structure

```
src/
├── components/
│   ├── Navbar, Hero, Now, Skills, About, Experience, Education, Contact, Footer
│   ├── Projects/   Projects.jsx, CaseStudy.jsx, ProjectCard.jsx, ProjectLinks.jsx
│   └── shared/     RichText.jsx
├── data/           content (see above)
├── styles/         custom.scss
├── App.jsx
└── main.jsx
```
