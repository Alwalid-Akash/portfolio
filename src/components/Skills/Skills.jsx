import skillGroups from '../../data/skills';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">02 — skills</p>
        <h2 className="section-title">What I work with</h2>

        <div className="row flex-nowrap">
          {skillGroups.map((group) => (
            <div className="col skill-group" key={group.label}>
              <div className="skill-group-label">{group.label}</div>

              <div>
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;