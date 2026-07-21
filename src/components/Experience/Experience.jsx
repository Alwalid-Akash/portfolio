import experience from '../../data/experience';

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">04 — experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-entry" key={job.id}>
              <div className="timeline-marker">
                <span className={`dot ${job.current ? 'dot-live' : 'dot-progress'}`} />
              </div>
              <div className="timeline-content">
                <div className="timeline-dates">
                  {job.start} – {job.current ? 'current' : job.end}
                </div>
                <h3 className="timeline-title h5">
                  {job.role} <span className="timeline-at">@ {job.company}</span>
                </h3>
                <div className="timeline-location">{job.location}</div>
                {job.points && job.points.length > 0 && (
                  <ul className="timeline-points">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
