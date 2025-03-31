import "./Projects.css";
import Card from "../components/Card";
import Tag from "../components/Tag";
import RowCard from "../components/RowCard/RowCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Projects() {
  return (
    <>
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
                      enhancing the user experience resulting in over 20 million
                      interactions per month and driving over $1 billion in
                      sales.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
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
                      enhancing the user experience resulting in over 20 million
                      interactions per month and driving over $1 billion in
                      sales.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
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
                      enhancing the user experience resulting in over 20 million
                      interactions per month and driving over $1 billion in
                      sales.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented monitoring and logging solutions using
                      Dynatrace and Mezmo, reducing downtime and improving error
                      detection to enhance system reliability.
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
    </>
  );
}

export default Projects;
