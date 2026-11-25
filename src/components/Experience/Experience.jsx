import experience from '../../data/experience';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-entry" key={job.id}>
              <p className="timeline-dates">
                {job.start} – {job.end}
              </p>
              <div>
                <h3 className="timeline-title">
                  {job.role}, <span>{job.company}</span>
                </h3>
                <p className="timeline-location">{job.location}</p>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
