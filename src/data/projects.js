// Add/edit your projects here. Each object maps directly to a project card.
// status: "live" (deployed, has a demo link) or "progress" (still building)

const projects = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A short, specific line on the problem this solves and who it is for — not just the tech you used.',
    image: 'https://placehold.co/640x400/1F2432/9CA0AC?text=Project+One',
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'live',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'What it does, one decision you made and why, and one thing you learned building it.',
    image: 'https://placehold.co/640x400/1F2432/9CA0AC?text=Project+Two',
    tags: ['JavaScript', 'API', 'CSS'],
    status: 'live',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'Still shipping this one — describe the current milestone and what is left.',
    image: 'https://placehold.co/640x400/1F2432/9CA0AC?text=Project+Three',
    tags: ['React', 'Vite', 'Bootstrap'],
    status: 'progress',
    liveLink: '#',
    githubLink: '#',
  },
];

export default projects;
