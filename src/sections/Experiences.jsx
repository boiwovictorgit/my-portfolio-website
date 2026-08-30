import "./Experiences.css";
function Experiences() {
  return (
    <section id="experiences" className="experiences">
      <div className="experiences-container">

        <div className="experiences-title">
          <p>My Journey</p>
          <h2>Experiences</h2>
        </div>

        <div className="experiences-content">

          <div className="experiences-card">
            <div className="experiences-date">
              2026 - Present
            </div>

            <div className="experiences-info">
              <h3> Software Developer</h3>

              <h4> Web Development</h4>

              <p>
                I develop modern and responsive web applications using
                frontend and backend technologies. I focus on creating
                user-friendly applications and solving real-world problems
                through software.
              </p>

              <div className="experiences-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>Flask</span>
              </div>
            </div>
          </div>


          <div className="experiences-card">
            <div className="experiences-date">
              2026 
            </div>

            <div className="experience-info">
              <h3>Software Development Training</h3>

              <h4>Web Development</h4>

              <p>
                Built web applications while developing practical skills
                in frontend development, backend development, APIs,
                version control and responsive design.
              </p>

              <div className="experience-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experiences;