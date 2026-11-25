import skillGroups, { skillsNote } from '../../data/skills';

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
          <p>Grouped by how much I have actually used them.</p>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-md-4" key={group.label}>
              <div className={`skill-group level-${group.level}`}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {skillsNote && <p className="skills-note">{skillsNote}</p>}
      </div>
    </section>
  );
}

export default Skills;
