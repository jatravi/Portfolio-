import "../styles/Contact.css";

function Contact() {
  return (
    <div id="Contact">
      <h1 className="contact-title">Let’s Connect 😊</h1>

      <div className="social-box">
        <a href="tel:+917836081879">
          <i className="bx bx-phone"></i> +91 7836 0818 79
        </a>
        <a
          href="https://www.linkedin.com/in/ravi-jaat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i> Ravi Jaat
        </a>
        <a
          href="mailto:choudhary.ravi.takhar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-gmail"></i> choudhary.ravi.takhar@gmail.com
        </a>

        <div className="social-icons">
          <a
            href="https://github.com/jatravi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/_ravi_choudharyy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://x.com/_jaat_ravi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://youtube.com/u/jat_ravi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
      </div>

      <div className="contact-box">
        <p>
          Whether you're planning a new website, enhancing an existing one, or
          bringing a unique idea to life — I'm here to help. Let’s make
          something great together!
        </p>

        <p>Full Name</p>
        <input type="text" placeholder="Enter your name" />

        <p>Email Address</p>
        <input type="email" placeholder="Enter your email" />

        <p>Your Message</p>
        <textarea placeholder="Write your message here..."></textarea>

        <button>
          <i className="bx bx-send"></i> Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
