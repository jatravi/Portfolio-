import "../styles/Contact.css";

function Contact() {
  return (
    <div id="Contact">
      <h1 className="contact-title">Let's Connect 😊</h1>

      <div className="social-box">
        <a href="#">
          <i className="bx  bx-phone" target="_blank"></i> +91 7836 0818 79
        </a>
        <a href="https://www.linkedin.com/in/ravi-jaat/" target="_blank">
          <i className="bx  bxl-linkedin"></i> Ravi-jaat
        </a>
        <a href="mailto:choudhary.ravi.takhar@gmail.com" target="_blank">
          <i className="bx  bxl-gmail"></i> Choudhary.ravi.takhar@gmail.com
        </a>
        <div className="social-icons">
          <a href="https://github.com/jatravi">
            <i className="bx  bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/_ravi_choudharyy/" target="_blank">
            <i className="bx  bxl-instagram"></i>
          </a>
          <a
            href="https://x.com/_jaat_ravi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://youtube.com/u/jat_ravi/" target="_blank">
            <i className="bx  bxl-youtube"></i>
          </a>
        </div>
      </div>

      <div className="contact-box">
        <p>
          Wheater you're looking to build a new website, improve your existing
          platform, or bring a unique idea to life, I'm here to help.
        </p>
        <p>Full Name</p>
        <input type="text" placeholder="Enter your name" />
        <p>Email Address</p>
        <input type="text" placeholder="Enter Your Mail Address" />
        <p>Your Message</p>
        <input type="text" placeholder="Enter Your Message" />
        <button>
          <i className="bxr  bx-send-alt"></i> Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
