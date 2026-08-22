function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-title">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>

          <p className="contact-description">
            Have a project, opportunity, or idea you'd like to discuss?
            Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-item">
              <h3>Email</h3>
              <p>your-email@example.com</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>+254 XXX XXX XXX</p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Kenya</p>
            </div>

          </div>


          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>


            <button type="submit" className="contact-button">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;