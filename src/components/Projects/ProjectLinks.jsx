function ProjectLinks({ project }) {
  const { title, liveLink, githubLink } = project;

  return (
    <div className="project-links">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noreferrer" className="btn-primary-solid btn-small">
          Read the code<span className="visually-hidden"> for {title}</span>
        </a>
      )}
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noreferrer" className="btn-quiet btn-small">
          Open live demo<span className="visually-hidden"> of {title}</span>
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
