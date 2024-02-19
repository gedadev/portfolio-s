import technologies from "../../utils/techStack";
import "../../styles/about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-info">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            As a software engineer, I find web development to be an excellent
            field where I can apply my skills in building software. Motivated by
            a lifelong learning philosophy, I enjoy transforming ideas into
            code.
          </p>
          <div className="technologies-container">
            <h3>Web technologies I&apos;m familiar with:</h3>
            <ul>
              {technologies.map((element) => (
                <li key={element.name} className="tech-item">
                  <img src={element.icon} alt={element.name} />
                  <p>{element.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-img">
          <img src="https://i.imgur.com/vQAHiFX.png" alt="Picture of me" />
        </div>
      </div>
    </section>
  );
}
