import "./App.css";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";
import Card from "./components/Card";
import Tag from "./components/Tag";
import Timeline from "./components/Timeline";
import RowCard from "./components/RowCard/RowCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="about-section">
          <div className="profile">
            <div className="profile-pic">
              <img src="../src/assets/profile-pic.jpg" alt="Profile picture" />
            </div>
            <div className="name">Chris Le</div>
            <div className="job-title">
              Frontend Developer | JavaScript Developer | Project Engineer
            </div>
          </div>
          <div className="info">
            <div className="location">
              <CiLocationOn size={24} />
              <span>Dallas, TX</span>
            </div>
            <div className="email">
              <CiMail size={24} />
              <a href="mailto:ChristopherAnhDLe@gmail.com">
                ChristopherAnhDLe@gmail.com
              </a>
            </div>
            <div className="phone">
              <CiPhone size={24} />
              <a href="tel:972-804-2797">(972) 804-2797</a>
            </div>
            <div className="social-icons">
              <a href="http://www.linkedin.com/in/christopherle2">
                <FaLinkedin size={24} />
              </a>
              <a href="http://www.linkedin.com/in/christopherle2">
                <FaGithub size={24} />
              </a>
              <a href="https://cdlephotos.com/">
                <FaBlog size={24} />
              </a>
            </div>
          </div>
          <Card header="Tech Stack">
            <div className="tag-container">
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
              <Tag name="JavaScript" />
            </div>
          </Card>
          <Card header="Experience History">
            <Timeline
              title="Nov 2022 - Present"
              subTitle="Associate Software Developer"
              content="American Airlines"
            ></Timeline>
            <Timeline
              title="May 2022 - Nov 2022"
              subTitle="JavaScript Developer"
              content="Brooksource - Contracter @American Airlines"
            ></Timeline>
            <Timeline
              title="Jan 2021 - Dec 2021"
              subTitle="Project Engineer"
              content="Wipro"
            ></Timeline>
          </Card>
          <Card header="Education">
            <Timeline
              title="2016 - 2020"
              subTitle="BS in Information Systems"
              content="University of Texas at Arlington"
            ></Timeline>
            <Timeline
              title="2016 - 2020"
              subTitle="BS in Information Systems"
              content="University of Texas at Arlington"
            ></Timeline>
          </Card>
        </div>
        <div className="projects-section">
          <Card header="Projects" addButton={true}>
            <div className="project-card-wrapper">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </Card>
          <Card header="Experience">
            <div className="exp">
              <RowCard>
                <div className="title-container">
                  <h5>American Airlines</h5>
                  <p>Nov 2022 - Present</p>
                </div>
                <div className="exp-desc">
                  <ul>
                    <li>
                      <p>
                        Developed framework-agnostic web components for AA.com,
                        enhancing the user experience resulting in over 20
                        million interactions per month and driving over $1
                        billion in sales.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="lang-tags">
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                </div>
              </RowCard>
              <RowCard>
                <div className="title-container">
                  <h5>American Airlines</h5>
                  <p>Nov 2022 - Present</p>
                </div>
                <div className="exp-desc">
                  <ul>
                    <li>
                      <p>
                        Developed framework-agnostic web components for AA.com,
                        enhancing the user experience resulting in over 20
                        million interactions per month and driving over $1
                        billion in sales.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="lang-tags">
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                </div>
              </RowCard>
              <RowCard>
                <div className="title-container">
                  <h5>American Airlines</h5>
                  <p>Nov 2022 - Present</p>
                </div>
                <div className="exp-desc">
                  <ul>
                    <li>
                      <p>
                        Developed framework-agnostic web components for AA.com,
                        enhancing the user experience resulting in over 20
                        million interactions per month and driving over $1
                        billion in sales.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented monitoring and logging solutions using
                        Dynatrace and Mezmo, reducing downtime and improving
                        error detection to enhance system reliability.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="lang-tags">
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                  <Tag name="JavaScript" />
                </div>
              </RowCard>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
