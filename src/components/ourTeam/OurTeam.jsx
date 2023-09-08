import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section className="section-team relative">
      {/* <h1 className="ourteam">Our Team</h1> */}
      <div className="heading-team  text-highlight text-extrabold text-7xl">
        Our Team
      </div>
      <div className="team">
        <div class="profile-card">
          <div className="img">
            <img src="./Images/anushka.jpg" alt="" />
          </div>
          <div className="caption">
            <h3>Anushka Bishnoi</h3>
            <p>Full Stack Developer</p>
            <p>Learning Cyber Security</p>
            <div className="social-links">
              <a
                href="https://github.com/anushkabishnoi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaGithub />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/pragya-shah-abb843221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaLinkedin />
                </span>
              </a>

              <a
                href="https://twitter.com/PRAGYASHAH09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaTwitter />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="profile-card">
          <div className="img">
            <img src="./Images/pragya.jpeg" alt="" />
          </div>
          <div className="caption">
            <h3>Pragya Shah</h3>
            <p>Full Stack Developer</p>
            <p>DevOps Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/Pragyashah09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaGithub />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/pragya-shah-abb843221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaLinkedin />
                </span>
              </a>

              <a
                href="https://twitter.com/PRAGYASHAH09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaTwitter />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
