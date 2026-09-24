// Add/edit your projects here. Each object maps directly to a project card.
// status: "live" (deployed, has a demo link) or "progress" (still building)
import HomeHero from "../assets/images/homeHero.png";
import img from "../assets/images/img.png";
import note from "../assets/images/note.png";
import ecommerce from "../assets/images/ecommerce.png";
const projects = [

  {
    id: 4,
    title: 'Full-Stack E-Commerce Platform',
    description:
      'A production-oriented full-stack e-commerce application built to demonstrate end-to-end web application development, from relational database design and REST API development to frontend integration, authentication, containerization, and CI/CD automation.The platform supports two primary roles: customers and administrators.',
    image: ecommerce,
    tags: ['React ', 'REST_API', 'BOOTSTRAP', 'NODE.JS/EXPRESS.JS', 'PostgreSQL', 'JWT', 'bcrypt', 'Axios', 'Docker', 'GitHub Actions'],
    status: 'live',
    liveLink: "https://ecommers-website-delta.vercel.app/",
    githubLink: "https://github.com/Alwalid-Akash/ecommers_website",
  },
  {
    id: 3,
    title: 'Notes App — Full-Stack CRUD & Authentication',
    description:
      'A full-stack Notes Management application featuring JWT authentication, protected REST APIs, user-specific CRUD operations, password reset functionality, note search, and a responsive React interface built with Bootstrap.',
    image: note,
    tags: ['React', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    status: 'live',
    liveLink: 'https://note-clener.vercel.app',
    githubLink: 'https://github.com/Alwalid-Akash/note_clener',
  },
  {
    id: 2,
    title: 'German Traffic Accident Analytics Platform',
    description:
      'A reproducible full-stack analytics system that integrates official German open-data sources. The project extracts, transforms, normalizes, and loads heterogeneous datasets into a structured PostgreSQL database, then exposes accident statistics, regional comparisons, metadata, and cross-source analytical queries through a REST API and React frontend.',
    image: img,
    tags: ['React', 'Node.js/Express.js', 'PostgreSQL', 'Bootstrap', 'Swagger/OpenAPI', 'REST API', 'Render', 'Vercel'],
    status: 'live',
    liveLink: 'https://german-traffic-data.vercel.app/',
    githubLink: 'https://github.com/Alwalid-Akash/German_traffic_data',
  },

  {
    id: 1,
    title: ' Zerodha Clone – Trading Dashboard',
    description:
      'A full‑stack web application that replicates the core features of the Zerodha trading platform. Users can view live watchlists, track holdings and positions, place buy/sell orders, manage funds, and visualize portfolio performance – all connected to a live backend with MongoDB Atlas.',
    image: HomeHero,
    tags: ['React ', 'REST_API', 'BOOTSTRAP', 'NODE.JS/EXPRESS.JS', 'MONGODB_ATLAS'],
    status: 'live',
    liveLink: "https://zerodha-website-ecru.vercel.app",
    githubLink: "https://github.com/Alwalid-Akash/ZERODHA_WEBSITE",
  },

  {
    id: 0,
    title: 'Project Count',
    description:
      'Still shipping this one — describe the current milestone and what is left.',
    image: 'https://placehold.co/640x400/1F2432/9CA0AC?text=Project+Count',
    tags: ['React', 'Vite', 'Bootstrap'],
    status: 'progress',
    liveLink: '#',
    githubLink: '#',
  },
];



export default projects;
