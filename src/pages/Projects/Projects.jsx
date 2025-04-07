import "./Projects.css";
import Card from "../../components/Card";
import Tag from "../../components/Tag";
import RowCard from "../../components/RowCard/RowCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
  return (
    <>
      <div className="projects-section">
        <Card header="Projects" addButton={true}>
          <div className="project-card-wrapper">
            <ProjectCard />
          </div>
        </Card>
        <Card header="Experience">
          <div className="exp">
            <RowCard>
              <div className="title-container">
                <h4>American Airlines | Associate Software Developer</h4>
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
                      Built automated test suites with Jest and Cypress,
                      increasing test coverage, reducing bugs, and accelerating
                      development cycles.
                    </p>
                  </li>
                  <li>
                    <p>
                      Established a versioning process for the Homepage Single
                      Page Application (SPA) using GitHub Actions CI/CD
                      pipeline, facilitating seamless releases with consistent
                      versioning across deployments.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="lang-tags">
                <Tag name="JavaScript" />
                <Tag name="TypeScript" />
                <Tag name="HTML" />
                <Tag name="CSS" />
                <Tag name="Angular" />
                <Tag name="LitElement" />
                <Tag name="Cypress" />
                <Tag name="Java" />
              </div>
            </RowCard>
            <RowCard>
              <div className="title-container">
                <h4>American Airlines | JavaScript Developer</h4>
                <p>May 2022 - Nov 2022</p>
              </div>
              <div className="exp-desc">
                <ul>
                  <li>
                    <p>
                      Optimized user experiences through data-driven A/B testing
                      with Adobe Experience Manager, increasing conversion rates
                      using actionable insights.
                    </p>
                  </li>
                  <li>
                    <p>
                      Analyzed A/B test results to identify user behavior
                      patterns, leading to performance improvements and
                      measurable business growth.
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed and launched three high-impact Citi credit card
                      ad banners on AA.com, boosting engagement and
                      click-through rates.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated with designers and stakeholders to align ad
                      creatives with brand identity and marketing goals,
                      ensuring a cohesive user experience.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="lang-tags">
                <Tag name="JavaScript" />
                <Tag name="HTML" />
                <Tag name="CSS" />
                <Tag name="A/B Testing" />
                <Tag name="Adobe Experience" />
              </div>
            </RowCard>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Projects;
