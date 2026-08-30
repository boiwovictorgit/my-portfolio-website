function Resume() {
  return (
    <section id="resume" className="resume">

      <h2>Resume</h2>

      <p>
        Download my CV to learn more about my skills, education,
        projects, and experience.
      </p>

      <div className="resume-buttons">

        <a
          href="/Victor-Boiwo-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View CV
        </a>

        <a
          href="/Victor-Boiwo-CV.pdf"
          download="Victor-Boiwo-CV.pdf"
          className="resume-btn"
        >
          Download CV
        </a>

      </div>

    </section>
  );
}

export default Resume;