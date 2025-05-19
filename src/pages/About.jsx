import "../styles/About.css";
import babyboy from "../assets/baby-boy.png";
import hacker from "../assets/hacker.png";
import geography from "../assets/geography.png";
import passion from "../assets/passion.png";
function About() {
  return (
    <div id="About">
      <h1 className="about-title">Hi, There 👋</h1>
      <div className="about-card">
        <div className="card">
          <h1>Hey, I'm Ravi Choudhary</h1>
          <p>
            I'm a passionate developer with over 2 years of experience in
            building full-stack applications. I specialize in crafting
            responsive web and mobile interfaces that deliver seamless user
            experiences. Whether it's the frontend finesse or backend logic — I
            enjoy bringing ideas to life through code.
          </p>
          <img src={babyboy} alt="img" />
        </div>

        <div className="card">
          <h1>Tech Stacks I Work With</h1>
          <p>
            From Flutter and React to Node.js and Firebase, I work with a wide
            range of tools and technologies. My stack includes JavaScript, Dart,
            Python, and various APIs — enabling me to develop dynamic apps that
            are both scalable and efficient.
          </p>
          <img src={hacker} alt="img" />
        </div>

        <div className="card">
          <h1>Adaptable & Easy to Work With</h1>
          <p>
            I value clear communication and collaboration. No matter the time
            zone or location, I make it a priority to stay in sync with my team
            and clients. I believe great products come from great teamwork — and
            I’m always up for it!
          </p>
          <img src={geography} alt="img" />
          <button>
            <i className="bx bx-paper-plane"></i> Contact Me
          </button>
        </div>

        <div className="card">
          <h1>What Drives Me</h1>
          <p>
            Coding, for me, is more than just solving problems — it’s about
            constant growth and creativity. Whether I’m building a game, a
            productivity tool, or an AI chatbot, I’m always curious to explore
            new technologies and deliver something meaningful.
          </p>
          <img src={passion} alt="img" />
        </div>
      </div>
    </div>
  );
}
export default About;
