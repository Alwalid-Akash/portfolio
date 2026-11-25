import now from '../../data/now';

function Now() {
  if (now.length === 0) return null;

  return (
    <section id="now" className="section">
      <div className="container">
        <div className="section-head">
          <h2>What I’m working on now</h2>
        </div>

        <div className="row g-4">
          {now.map((item) => (
            <div className="col-lg-8" key={item.id}>
              <div className="now-item">
                <h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p>{item.text}</p>
                {item.role && <p className="now-role">{item.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Now;
