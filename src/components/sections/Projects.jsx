import "../../styles/projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectCard from "../ProjectCard";
import projectsDetails from "../../utils/projectsDetails";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My recent Projects</h2>
      <div className="projects-container">
        {projectsDetails.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <button className="button">
        Check my Github profile <GitHubIcon />
      </button>
    </section>
  );
}
