import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImageSlider from "./ImageSlider";
import StarsIcon from "@mui/icons-material/Stars";

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
        <div className="project-header">
          <h3>{project.title}</h3>
          <span>{project.emoji}</span>
        </div>
        <div className="project-details">
          <span>Technologies: {project.technologies}</span>
          <p>{project.description}</p>
          <ul>
            <p>Key Functionalities:</p>
            {project.keyPoints.map((point) => (
              <li key={point}>
                <StarsIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>
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
