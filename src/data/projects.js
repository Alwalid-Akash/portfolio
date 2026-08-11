// Add/edit your projects here. Each object maps directly to a project card.
// status: "live" (deployed, has a demo link) or "progress" (still building)
import HomeHero from "../assets/images/homeHero.png";
import img from "../assets/images/img.png";
const projects = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A full-stack German traffic accident analytics system to integrate official Unfallatlas, GV-ISys, and Regionalatlas data into a queryable web API and frontend.',
    image: img,
    tags: ['React', 'Node.js/Express', 'PostgreSQL', 'Bootstrap'],
    status: 'live',
    liveLink: 'https://german-traffic-data.vercel.app/',
    githubLink: 'https://github.com/Alwalid-Akash/German_traffic_data',
  },
  {
    id: 2,
    title: 'Notes App — Full-Stack CRUD & Authentication',
    description:
      'A full-stack notes management application with JWT authentication, protected REST APIs, user-specific CRUD operations, and a responsive React interface.',
    image: 'https://placehold.co/640x400/1F2432/9CA0AC?text=Project+Three',
    tags: ['React', 'Vite', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Axios'],
    status: 'progress',
    liveLink: 'https://your-vercel-app.vercel.app',
    githubLink: 'https://github.com/Alwalid-Akash/note_clener',
  },
  {
    id: 3,
    title: 'Project Two',
    description:
      'Designed and developed a responsive Zerodha clone with a modern React frontend, trading dashboard, and secure backend APIs.',
    image: HomeHero,
    tags: ['React ', 'REST_API', 'BOOTSTRAP', 'NODE.JS/EXPRESS.JS', 'MONGODB_ATLAS'],
    status: 'live',
    liveLink: "https://zerodha-website-ecru.vercel.app",
    githubLink: "https://github.com/Alwalid-Akash/ZERODHA_WEBSITE",
  },

];

export default projects;
