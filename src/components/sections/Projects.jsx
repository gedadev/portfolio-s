import "../../styles/projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectCard from "../ProjectCard";
import projectsDetails from "../../utils/projectsDetails";
import PropTypes from "prop-types";

export default function Projects({ redirectToGithub }) {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My recent Projects</h2>
      <div className="projects-container">
        {projectsDetails.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <button className="button" onClick={redirectToGithub}>
        Check my Github profile <GitHubIcon />
      </button>
    </section>
  );
}

Projects.propTypes = {
  redirectToGithub: PropTypes.func,
};
