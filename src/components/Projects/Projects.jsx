import projects from '../../data/projects';
import CaseStudy from './CaseStudy';
import ProjectCard from './ProjectCard';

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const smaller = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>
            Each project shows what I built, the decisions behind it, and what I would still
            fix. All the code is public.
          </p>
        </div>

        <div className="case-list">
          {featured.map((project) => (
            <CaseStudy project={project} key={project.id} />
          ))}
        </div>

        {smaller.length > 0 && (
          <div className="smaller-projects">
            <h3 className="subhead">Smaller projects</h3>
            <div className="project-grid">
              {smaller.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
