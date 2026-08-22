import Button from "../components/Button";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-title">
          <p>My Work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-content">
              <h3>Kenya Airlines Skyway</h3>

              <p>
                 A web application designed to provide a modern airline
      booking and travel experience.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Javascript</span>
                <span>CSS</span>
              </div>

              <div className="project-buttons">
                <Button 
               href="https://github.com/boiwovictorgit/Kenya-Airlines--Skyway"

                variant="primary">
                  GitHub
                </Button>

                <Button
                href="https://kenya-airlines-skyway.vercel.app/"

                 variant="secondary">
                  Live Demo
                </Button>
              </div>
            </div>
          </div>


          <div className="project-card">
            <div className="project-content">
              <h3>LINTONS-BEAUTY</h3>

              <p>
                A responsive personal portfolio website showcasing
                my skills, projects, experience and professional work.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <div className="project-buttons">
                <Button
                   href="https://github.com/boiwovictorgit/LINTONS-BEAUTY"
                    variant="primary"
                  >
                      GitHub
                </Button>

                <Button
                   href="https://boiwovictorgit.github.io/LINTONS-BEAUTY/"
                     variant="secondary"
                >
                Live Demo
               </Button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;