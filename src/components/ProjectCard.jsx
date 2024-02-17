import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard({ project }) {
  const redirectToGithub = () => {
    window.open(project.repo, "_blank");
  };

  const redirectToWebsite = () => {
    window.open(project.url, "_blank");
  };

  return (
    <div className="project-card">
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-technologies">
          Technologies: {project.technologies}
        </p>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <button onClick={redirectToGithub} className="project-button">
            Code <GitHubIcon />{" "}
          </button>
          <button onClick={redirectToWebsite} className="project-button">
            Website <OpenInNewIcon />{" "}
          </button>
        </div>
      </div>
      <div className="project-img">
        <img src={project.preview} alt="" />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};
