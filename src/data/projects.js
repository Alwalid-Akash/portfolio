// Projects, most important first.
//
// featured: true  -> full case study (screenshot + sections)
// featured: false -> short row under "Smaller projects"
//
// Rule: every claim here must be something a reviewer can verify in the repo
// today, and it must match the CV word for word on numbers.
// Planned work goes under "Limits and next steps", never in the summary.
import shop from '../assets/images/shop-admin.png';
import traffic from '../assets/images/traffic-explorer.png';
import notes from '../assets/images/notes-app.png';
import trading from '../assets/images/trading-dashboard.png';

const projects = [
  {
    id: 'shop',
    featured: true,
    title: 'Online shop with an AI shopping assistant',
    summary:
      'A full-stack store with customer and admin roles. Its chat assistant finds products and shop policies by meaning (RAG with pgvector) and always shows prices and stock straight from the database.',
    highlights: [
      { value: '26', label: 'REST endpoints' },
      { value: '7', label: 'PostgreSQL tables' },
      { value: '61', label: 'backend tests' },
      { value: '4', label: 'read-only AI tools' },
    ],
    image: shop,
    // TODO: replace with a screenshot of the chat assistant answering a question
    // with product cards, then update this alt text.
    imageAlt: 'Admin dashboard of the online shop with order and revenue statistics',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'pgvector', 'Gemini API', 'Zod', 'Docker', 'GitHub Actions'],
    liveLink: 'https://ecommers-website-delta.vercel.app/',
    githubLink: 'https://github.com/Alwalid-Akash/ecommers_website',
    sections: [
      {
        heading: 'What I built',
        items: [
          'Customer flow (cart, checkout, order history) and an admin dashboard for products, categories and orders.',
          'A Gemini assistant with four read-only tools, including `search_products` and `search_store_info` for shipping, returns and payment questions.',
          'RAG: products and shop info pages are embedded with Gemini and searched by cosine similarity in pgvector (HNSW index).',
        ],
      },
      {
        heading: 'Decisions',
        items: [
          'The model never writes SQL. It can only call fixed tools, and Zod validates every argument.',
          'Price and stock are left out of the embeddings because they change on every checkout. The cards read them live from the database.',
          'Each text is fingerprinted with SHA-256, so only new or changed products are sent to Gemini again.',
          'If embeddings fail, search falls back to Postgres full-text search, so the shop keeps working.',
        ],
      },
      {
        heading: 'Testing and delivery',
        items: [
          'Checkout runs in one SQL transaction that checks stock, creates the order and rolls back if any item is short.',
          '61 backend tests with Node’s test runner and a fake database, covering forged tokens, roles, checkout rollback, rate limits and RAG.',
          'GitHub Actions runs tests, lint and build on every push. Deploy happens only after they pass.',
        ],
      },
      {
        heading: 'Limits and next steps',
        tone: 'caution',
        items: [
          'Tokens are stored in localStorage. Next: move them to httpOnly cookies.',
          'The rate limiter is in memory, so more than one server would need Redis.',
          'No frontend tests yet, and no way yet to measure answer quality. Next: a small eval set of real customer questions.',
          'The schema uses plain SQL files instead of versioned migrations.',
        ],
      },
    ],
  },
  {
    id: 'traffic',
    featured: true,
    title: 'German traffic accident data hub',
    summary:
      'An ETL pipeline, REST API and dashboard that bring 1.1 million accident records from three official German open-data sources into one PostgreSQL database.',
    highlights: [
      { value: '1.1M', label: 'accident records, 2016–2021' },
      { value: '11,375', label: 'regions linked' },
      { value: '15', label: 'source files, 3 providers' },
      { value: '14', label: 'documented endpoints' },
    ],
    image: traffic,
    imageAlt: 'Query page of the traffic data hub with a question builder and the answer 1396',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Swagger / OpenAPI', 'Docker', 'GitHub Actions'],
    liveLink: 'https://german-traffic-data.vercel.app/',
    githubLink: 'https://github.com/Alwalid-Akash/German_traffic_data',
    sections: [
      {
        heading: 'The problem',
        items: [
          'Accident data is spread over Unfallatlas, the Destatis municipality directory (GV-ISys) and Regionalstatistik, in CSV, ZIP and XLSX with different region codes.',
          'I wanted one database where you can compare regions and trust where every number came from.',
        ],
      },
      {
        heading: 'What I built',
        items: [
          'A Node.js pipeline with separate extract, parse, transform and load stages.',
          'Accidents linked to 11,375 states, districts and municipalities, plus 8 regional indicators such as population and vehicle stock.',
          '14 REST endpoints documented with Swagger, and a React dashboard on top.',
        ],
      },
      {
        heading: 'Decisions',
        items: [
          'Every import run and source file is stored with its URL and SHA-256 checksum, so each load can be traced.',
          'The UI says that counts are accident events, not injured people, and shows sources and licences on every page.',
          'GitHub Actions builds both Docker images on every pull request and deploys only after that passes.',
        ],
      },
      {
        heading: 'Limits and next steps',
        tone: 'caution',
        items: [
          'Running the import twice can create duplicates. Next: make it idempotent with stable keys and `ON CONFLICT`.',
          'Maintenance routes are not protected yet, and the CI only syntax-checks the backend. Next: API tests.',
        ],
      },
    ],
  },
  {
    id: 'notes',
    featured: false,
    title: 'Notes app with AI writing help',
    summary:
      'Private notes with a 9-endpoint Express API. Gemini can fix grammar, rewrite, change tone or summarise, and the user accepts or discards each suggestion before it is saved.',
    learned:
      'Password reset tokens are stored only as SHA-256 hashes and expire after 15 minutes. Deploying the frontend, API and database separately taught me CORS and environment config.',
    image: notes,
    imageAlt: 'Notes app with the add-note form and a saved note',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'Gemini API', 'Docker'],
    liveLink: 'https://note-clener.vercel.app',
    githubLink: 'https://github.com/Alwalid-Akash/note_clener',
  },
  {
    id: 'trading',
    featured: false,
    title: 'Trading dashboard (Zerodha clone)',
    summary:
      'A learning project that recreates a broker platform in three parts: a landing site, a trading dashboard and an Express API. Users see a watchlist, holdings and positions, and place buy and sell orders stored in MongoDB Atlas.',
    image: trading,
    imageAlt: 'Landing page and dashboard of the trading platform clone',
    stack: ['React', 'Express', 'MongoDB Atlas', 'REST API'],
    liveLink: 'https://zerodha-website-ecru.vercel.app',
    githubLink: 'https://github.com/Alwalid-Akash/ZERODHA_WEBSITE',
  },
];

export default projects;
