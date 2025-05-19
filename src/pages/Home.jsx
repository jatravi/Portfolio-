import "../styles/Home.css";
import thinkingBubble from "../assets/thinking-bubble.png";
import "boxicons/css/boxicons.min.css";

function Home() {
  return (
    <div id="home">
      <div className="info">
        <div className="info-title">
          <i className="bx bxl-sketch"> Front-End Developer Portfolio</i>
        </div>

        <h1>
          Delivering <span className="gradient">Exceptional</span> Project
          <span className="gradient"> Experiences</span>
        </h1>

        <p>
          I'm a front-end developer with hands-on experience in web, mobile, and
          software development. Explore my portfolio to see how I bring ideas to
          life through clean code, engaging UIs, and user-centric design.
        </p>

        <button>
          <i className="bx bxs-send"> Contact Me</i>
        </button>
      </div>

      <div className="info-box">
        <img src={thinkingBubble} alt="Thinking Bubble" />
      </div>

      <div className="scroll-down">
       
      </div>
    </div>
  );
}

export default Home;
