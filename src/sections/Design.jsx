function Design() {
  return (
    <section id="design" className="design">
      <div className="design-container">

        <div className="design-title">
          <p>Creative Work</p>
          <h2>Design Portfolio</h2>

          <p className="design-description">
            A collection of my creative design work, including posters,
            digital graphics and visual content.
          </p>
        </div>

        <div className="design-grid">

          <div className="design-card">
            <div className="design-image">
              <div className="design-placeholder">
                Poster Design
              </div>
            </div>

            <div className="design-content">
              <h3>Professional Poster</h3>
              <p>
                A professional promotional poster created for a
                software engineering audience.
              </p>
            </div>
          </div>


          <div className="design-card">
            <div className="design-image">
              <div className="design-placeholder">
                UI Design
              </div>
            </div>

            <div className="design-content">
              <h3>Web UI Design</h3>
              <p>
                A modern user interface design focused on clean
                layouts and user experience.
              </p>
            </div>
          </div>


          <div className="design-card">
            <div className="design-image">
              <div className="design-placeholder">
                Social Media
              </div>
            </div>

            <div className="design-content">
              <h3>Social Media Graphic</h3>
              <p>
                Creative digital graphics designed for social media
                and online communication.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Design;