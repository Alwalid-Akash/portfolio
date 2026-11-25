// Grouped by how confident you are, strongest first.
// `level` controls the style: 'daily' (filled), 'shipped' (outlined), 'learning' (dashed).

const skillGroups = [
  {
    label: 'Use every day',
    level: 'daily',
    items: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'HTML and CSS', 'Bootstrap', 'Git and GitHub'],
  },
  {
    label: 'Have shipped projects with',
    level: 'shipped',
    items: [
      'PostgreSQL',
      'pgvector',
      'MongoDB',
      'REST APIs',
      'Swagger / OpenAPI',
      'JWT auth',
      'Zod',
      'Docker',
      'GitHub Actions',
      'Gemini API (tools, embeddings)',
      'Vercel and Render',
    ],
  },
  {
    label: 'Learning now',
    level: 'learning',
    items: ['TypeScript', 'Frontend testing', 'German (A2)'],
  },
];

export const skillsNote = 'Also: Python, C and C++ basics from university.';

export default skillGroups;
