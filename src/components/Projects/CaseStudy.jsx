import BrowserFrame from '../shared/BrowserFrame';
import RichText from '../shared/RichText';
import ProjectLinks from './ProjectLinks';

function CaseStudy({ project }) {
  const { id, title, summary, highlights, image, imageAlt, stack, sections, liveLink } = project;

  return (
    <article id={id} className="case-study" aria-labelledby={`${id}-title`}>
      <div className="case-top">
        <div className="case-intro">
          <h3 id={`${id}-title`} className="case-title">
            {title}
          </h3>
          <p className="case-summary">{summary}</p>

          <ul className="stack-list" aria-label="Tech stack">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <ProjectLinks project={project} />
        </div>

        <div className="case-media">
          <BrowserFrame src={image} alt={imageAlt} url={liveLink} />
        </div>
      </div>

      {highlights && (
        <dl className="metrics">
          {highlights.map((item) => (
            <div className="metric" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="case-sections">
        {sections.map((section) => (
          <div
            className={`case-section ${section.tone === 'caution' ? 'is-caution' : ''}`}
            key={section.heading}
          >
            <h4>{section.heading}</h4>
            <ul>
              {section.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export default CaseStudy;
