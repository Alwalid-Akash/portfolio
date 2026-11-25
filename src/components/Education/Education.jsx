import education from '../../data/education';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Education</h2>
        </div>

        <ol className="timeline">
          {education.map((item) => (
            <li className="timeline-entry" key={item.id}>
              <p className="timeline-dates">{item.period}</p>
              <div>
                <h3 className="timeline-title">{item.degree}</h3>
                <p className="timeline-location">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.school}
                  </a>
                  , {item.location}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Education;
