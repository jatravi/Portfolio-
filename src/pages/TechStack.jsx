import "../styles/TechStack.css";
import "../styles/Home.css";
import brain from "../assets/brain.png";

function TechStack() {
  return (
    <div id="TechStack">
      <h1 className="skill-title">My Tech Stack 💪</h1>

      <div className="skills-box">
        <img src={brain} alt="Brain" />

        <div className="designer">
          <h1 className="gradient">
            Designer <i className="bx bx-laptop"></i>
          </h1>
          <p>
            I craft intuitive and aesthetically pleasing user interfaces with a
            focus on accessibility, responsiveness, and modern design trends.
            From mobile app mockups to full-scale web layouts, I bring
            creativity and structure together to deliver engaging user
            experiences.
          </p>
        </div>

        <div className="coder">
          <h1 className="gradient">
            Coder <i className="bx bx-code-alt"></i>
          </h1>
          <p>
            As a passionate developer, I love turning ideas into clean,
            functional code. I specialize in building interactive front-ends
            using Flutter, React, and JavaScript, and have hands-on experience
            with backend logic, APIs, and full-stack development for real-world
            applications.
          </p>
        </div>

        <div
          className="slider"
          data-reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 13,
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <i className="bx bxl-html5"></i>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <i className="bx bxl-nodejs"></i>
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <i className="bx bx-data"></i>
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <i className="bx bxl-javascript"></i>
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <i className="bx bxl-css3"></i>
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <i className="bx bxl-flutter"></i>
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <i className="bx bxl-python"></i>
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <i className="bx bx-terminal"></i>
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <i className="bx bxl-react"></i>
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <i className="bx bxl-c-plus-plus"></i>
            </div>
            <div className="item" style={{ "--position": 11 }}>
              <i className="bx bxl-visual-studio"></i>
            </div>
            <div className="item" style={{ "--position": 12 }}>
              <i className="bx bxl-git"></i>
            </div>
            <div className="item" style={{ "--position": 13 }}>
              <i className="bx bxl-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
