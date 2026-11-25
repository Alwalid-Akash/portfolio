import BrowserFrame from '../shared/BrowserFrame';
import ProjectLinks from './ProjectLinks';

// Card for smaller projects.
function ProjectCard({ project }) {
  const { title, summary, learned, image, imageAlt, stack, liveLink } = project;

  return (
    <article className="project-card">
      <BrowserFrame src={image} alt={imageAlt} url={liveLink} size="small" />
      <div className="project-card-body">
        <h4>{title}</h4>
        <p>{summary}</p>
        {learned && <p className="project-card-note">{learned}</p>}
        <ul className="stack-list" aria-label="Tech stack">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default ProjectCard;
