import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImageSlider from "./ImageSlider";

export default function ProjectCard({ project }) {
  const redirectToGithub = () => {
    window.open(project.repo, "_blank");
  };

  const redirectToWebsite = () => {
    window.open(project.url, "_blank");
  };

  const handleHover = (e) => {
    const card = e.target;
    if (card.className === "project-card") {
      const cardWidth = Math.round(card.getBoundingClientRect().width);
      const cardHeight = Math.round(card.getBoundingClientRect().height);
      const x = e.clientX - card.getBoundingClientRect().left;
      const y = e.clientY - card.getBoundingClientRect().top;

      if (x > cardWidth / 2 && y > cardHeight / 2) {
        card.style.transform = "rotateX(-1deg) rotateY(0.5deg)";
      }
      if (x < cardWidth / 2 && y > cardHeight / 2) {
        card.style.transform = "rotateX(-1deg) rotateY(-0.5deg)";
      }
      if (x > cardWidth / 2 && y < cardHeight / 2) {
        card.style.transform = "rotateX(1deg) rotateY(0.5deg)";
      }
      if (x < cardWidth / 2 && y < cardHeight / 2) {
        card.style.transform = "rotateX(1deg) rotateY(-0.5deg)";
      }
    }
  };

  return (
    <div className="project-card" onMouseOver={handleHover}>
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
      <ImageSlider images={project.preview} />
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};
