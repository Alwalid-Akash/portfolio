import education from '../../data/education';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="eyebrow">05 — education</p>
        <h2 className="section-title">Academic background</h2>

        <div className="row g-4">
          {education.map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="edu-card">
                <div className="project-status">
                  <span className={`dot ${item.current ? 'dot-live' : 'dot-progress'}`} />
                  {item.current ? 'in progress' : 'completed'}
                </div>
                <h3 className="project-title h5">{item.degree}</h3>
                <div className="edu-school">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.school}
                    </a>
                  ) : (
                    item.school
                  )}
                </div>
                <div className="edu-meta">
                  {item.location} · {item.start} – {item.current ? 'current' : item.end}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
