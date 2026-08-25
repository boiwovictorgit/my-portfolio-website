function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-title">
          <p>Get To Know More</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>I'm a Software Engineer</h3>

            <p>
              I am a passionate software developer focused on building
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas into functional digital products
              using technologies such as React, JavaScript, Python and Flask.
            </p>

            <p>
              I am continuously learning new technologies and improving
              my skills in both frontend and backend development.
            </p>
          </div>

          <div className="about-info">
            <div className="info-box">
              <h4>Frontend</h4>
              <p>React, JavaScript, HTML, CSS</p>
            </div>

            <div className="info-box">
              <h4>Backend</h4>
              <p>Python, </p>
            </div>

            <div className="info-box">
              <h4>Development</h4>
              <p>Git, GitHub, Responsive Design</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;