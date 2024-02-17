import "../../styles/projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My recent Projects</h2>
      <div className="projects-container"></div>
      <button className="button">
        Check my Github profile <GitHubIcon />
      </button>
    </section>
  );
}
