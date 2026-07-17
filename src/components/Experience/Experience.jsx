import experience from '../../data/experience';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow">04 — experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <div className="row">
          {experience.map((item) => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="experience-card">
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <span className="period">{item.period}</span>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;