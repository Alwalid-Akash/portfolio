// import profileImage from "../assets/profile.jpg"; // Change to your image path

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Section */}
          <div className="col-lg-7">
            <p className="hero-kicker">// junior web developer, open to work</p>

            <h1 className="mb-4">
              I build clean, <span className="accent">functional</span> interfaces
              for the web.
            </h1>

            <p className="hero-lede mb-4">
              Focused on React and modern JavaScript. I like turning rough ideas
              into fast, accessible products—and I'm looking for my first
              working-student, part-time, or full-time role to keep doing that.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="btn btn-signature">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-signature">
                Get In Touch
              </a>
            </div>

            <div className="row hero-stats g-4">
              <div className="col-4">
                {/* <strong>2+</strong>
                <p>Projects Live</p> */}
              </div>

              <div className="col-4">
                {/* <strong>6mo</strong>
                <p>Building with React</p> */}
              </div>

              <div className="col-4">
                {/* <strong>100%</strong>
                <p>Open to Feedback</p> */}
              </div>
            </div>
          </div>

          {/* Right Section
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <img
              src={profileImage}
              alt="Md Al Walid"
              className="img-fluid hero-image"
            />
          </div> */}

        </div>
      </div>
    </header>
  );
}

export default Hero;