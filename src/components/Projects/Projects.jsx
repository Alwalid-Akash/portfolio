import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">03 — projects</p>
        <h2 className="section-title">Things I've built</h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
