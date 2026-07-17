# Your Name — Portfolio

A single-page developer portfolio built with **React + Vite + Bootstrap (Sass)**,
ready to deploy on **GitHub Pages**.

## What's inside

- Hero, About, Skills, Projects, Contact, Footer — all as separate components
- Project data lives in one file (`src/data/projects.js`) — add a project by
  adding an object, no JSX editing required
- Bootstrap customized via Sass variables (`src/styles/custom.scss`) so it
  doesn't look like a default Bootstrap template
- Responsive, keyboard-accessible, respects reduced-motion preference

## Folder structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          <- add your resume here (see public/README-resume.txt)
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/
│   │   ├── projects.js     <- edit this to add/change your projects
│   │   └── skills.js       <- edit this to change your skill list
│   ├── styles/
│   │   └── custom.scss     <- design tokens + Bootstrap overrides
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Customize before you deploy

1. **Your info**: edit the text in `Hero.jsx`, `About.jsx`, and the
   `CONTACT_LINKS` array in `Contact.jsx`.
2. **Your projects**: edit `src/data/projects.js`. Each object needs a
   title, description, image URL (or import a local image from
   `src/assets/images`), tags, status (`live` or `progress`), and links.
3. **Your skills**: edit `src/data/skills.js`.
4. **Your resume**: drop a `resume.pdf` into `public/`.
5. **Colors/fonts** (optional): tweak the variables at the top of
   `src/styles/custom.scss`.

## Deploying to GitHub Pages

1. Push this project to a new GitHub repository.
2. In `vite.config.js`, set `base` to match your repo name exactly:
   ```js
   base: '/your-repo-name/',
   ```
3. In `package.json`, update `homepage` with your GitHub username and repo name.
4. Run:
   ```bash
   npm run deploy
   ```
   This builds the project and pushes the `dist` folder to a `gh-pages` branch.
5. In your GitHub repo: **Settings -> Pages -> Source -> Deploy from a branch**,
   pick the `gh-pages` branch, `/ (root)` folder.
6. Your site goes live at:
   `https://your-github-username.github.io/your-repo-name/`

It can take a minute or two to appear the first time.

## Built with

- React (https://react.dev/)
- Vite (https://vitejs.dev/)
- Bootstrap 5 (https://getbootstrap.com/) via Sass, customized
- gh-pages (https://www.npmjs.com/package/gh-pages) for deployment
# Portfolio
