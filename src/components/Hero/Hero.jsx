// The facts answer a hiring manager's first questions: hours, start, languages.
const FACTS = [
  { term: 'Available', detail: 'Immediately, 20 hours a week during the semester' },
  { term: 'Based in', detail: 'Chemnitz, Germany' },
  { term: 'Studying', detail: 'MSc Web Engineering, TU Chemnitz (5th semester)' },
  { term: 'Languages', detail: 'English B2, German A2 (learning), Bengali native' },
  { term: 'Before that', detail: '2 years at Quantanite preparing datasets for AI training' },
];

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-end">
          <div className="col-lg-7 hero-reveal">
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              Open to Werkstudent and internship roles
            </p>

            <h1 className="hero-name">Md Al Walid</h1>

            <p className="hero-lede">
              Full-stack web developer. I build React and Node.js apps end to end, from the
              database schema to the deploy pipeline.
            </p>

            <p className="hero-de" lang="de">
              Werkstudent Full-Stack-Webentwicklung, ab sofort, 20 Std./Woche. Interviews gern auf
              Englisch.
            </p>

            <div className="hero-actions">
              <a href="#shop" className="btn-primary-solid">
                Read the shop case study
              </a>
              <a href="/Md_Al_Walid_CV.pdf" className="btn-quiet" target="_blank" rel="noreferrer">
                CV (PDF)
              </a>
              <a href="https://github.com/Alwalid-Akash" className="btn-quiet" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/md-alwalid" className="btn-quiet" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <dl className="facts">
              {FACTS.map((fact) => (
                <div className="fact" key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
