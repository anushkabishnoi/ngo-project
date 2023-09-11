import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section className="section-team">
      <div className="heading-team">Our Team</div>
      <div className="team">
        <div className="profile-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="img">
                <img src="./Images/anushka.jpg" alt="" />
              </div>
            </div>
            <div className="card-back">
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
          </div>
        </div>

        <div className="profile-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="img">
                <img src="./Images/pragya.jpeg" alt="" />
              </div>
            </div>
            <div className="card-back">
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
        </div>
        
      </div>
      <div className="guidename">
          <h1><span className="mentor">Mentor  - </span>  Dr. Kamlesh Lakhwani Sir</h1>
        </div>
    </section>
  );
};

export default OurTeam;
