function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8">
            <p className="hero-kicker">// junior web developer, open to work</p>

            <h1 className="mb-4">
              I build clean, <span className="accent">functional</span> interfaces
              for the web.
            </h1>

            <p className="hero-lede mb-4">
              Focused on React and modern JavaScript. I like turning rough ideas
              into fast, accessible products — and I'm looking for my first
              working-student, part-time, or full-time role to keep doing that.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="btn btn-signature">
                View projects
              </a>
              <a href="#contact" className="btn btn-outline-signature">
                Get in touch
              </a>
            </div>

            <div className="row hero-stats g-4">
              <div className="col-4 col-sm-3">
                <strong>3+</strong>
                projects shipped
              </div>
              <div className="col-4 col-sm-3">
                <strong>6mo</strong>
                building in React
              </div>
              <div className="col-4 col-sm-3">
                <strong>100%</strong>
                open to feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;