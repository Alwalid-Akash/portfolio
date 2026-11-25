function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2>About</h2>
          </div>
          <div className="col-lg-7 about-body">
            <p>
              Before my master’s I spent two years at Quantanite making datasets for AI training
              accurate and consistent. That job taught me to care about edge cases, to ask
              clients what they actually need, and to fix the process instead of the same
              mistake twice.
            </p>
            <p>
              Now I study Web Engineering at TU Chemnitz and build full-stack projects on the
              side. I like the parts of a project that are easy to skip: tests, error messages,
              rate limits and a README that tells you how to run it.
            </p>
            <p>
              I’m looking for a team where I can ship real features, get code reviews and learn
              from people who have done this longer than I have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
