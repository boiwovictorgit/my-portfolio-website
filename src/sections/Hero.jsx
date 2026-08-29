import "./Hero.css";
import Profile from "./Profile";
import heroBackground from "../assets/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Left arrow */}
      <button
        className="hero-arrow hero-arrow-left"
        aria-label="Previous"
      >
        &#10094;
      </button>

      {/* Right arrow */}
      <button
        className="hero-arrow hero-arrow-right"
        aria-label="Next"
      >
        &#10095;
      </button>

      {/* Hero text */}
      <div className="hero-content">
        <p className="hero-greeting">
          Hi, I'm
        </p>

        <h1>
          Victor Boiwo
        </h1>

        <h2>
          Software Engineer & Creative Designer
        </h2>

        <p className="hero-description">
          I build modern, responsive web applications and
          digital experiences that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn primary-btn"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile */}
      <Profile />

      {/* Scroll down */}
      <div className="hero-scroll">
        <div className="scroll-mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;