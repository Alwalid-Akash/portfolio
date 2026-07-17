function ProjectCard({ project }) {
  const { title, description, image, tags, status, liveLink, githubLink } =
    project;

  return (
    <div className="project-card">
      <div className="project-media">
        <img src={image} alt={`${title} preview`} loading="lazy" />
      </div>
      <div className="project-body">
        <div className="project-status">
          <span
            className={`dot ${status === 'live' ? 'dot-live' : 'dot-progress'}`}
          />
          {status === 'live' ? 'deployed' : 'in progress'}
        </div>

        <h3 className="project-title h5">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-signature btn-sm"
          >
            Live demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-signature btn-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
