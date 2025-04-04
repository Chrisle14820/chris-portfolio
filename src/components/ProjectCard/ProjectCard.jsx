import "./ProjectCard.css";
import { VscRepo } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { CgEye, CgGitFork } from "react-icons/cg";
import Tag from "../Tag";

function ProjectCard() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Chrisle14820/repos?sort=updated"
        );

        const data = await response.json();

        // format data from Repository object
        const formatData = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.url,
          desc: repo.description,
          fork_count: repo.forks_count,
          watch_count: repo.watchers_count,
          languages: repo.language,
        }));
        setRepoData(formatData); // bind formatted data to repoData useState
      } catch (e) {
        console.log("Error in fetchData", e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {repoData.map((repo) => {
        return (
          <div className="project-card-container">
            <div className="project-group">
              <div className="project-title">
                <VscRepo />
                <a href={repo.url}>{repo.name}</a>
              </div>
              <div className="project-body">
                <p>{repo.desc}</p>
              </div>
            </div>
            <div className="project-footer">
              <div className="project-lang">
                <Tag name={repo.languages} />
              </div>
              <div className="project-info">
                <span className="fork-count">
                  <CgGitFork size={16} />
                  <p>{repo.fork_count}</p>
                </span>
                <span className="watch-count">
                  <CgEye size={16} />
                  <p>{repo.watch_count}</p>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
