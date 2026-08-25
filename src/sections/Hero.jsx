import Profile from "./Profile";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Victor Boiwo</h1>

        <h2>Software Engineer & Creative Designer</h2>

        <p className="hero-description">
          I build modern, responsive web applications and
          digital experiences that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <Profile />
    </section>
  );
}

export default Hero;