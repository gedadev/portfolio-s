import technologies from "../../utils/techStack";
import "../../styles/about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-info">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a full-stack web developer, I build modern and user-friendly
            applications. I specialize in React for the frontend and Node.js for
            backend services, creating complete web applications. I'm always
            learning and looking to collaborate helping clients turn their ideas
            into great digital experiences.
          </p>
          <div className="technologies-container">
            <h3>Technologies I use:</h3>
            <ul>
              {technologies.map((element) => (
                <li key={element.id} className="tech-item">
                  <img src={element.icon} alt={element.name} />
                  <p>{element.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-img">
          <img
            src="https://i.ibb.co/vz7Df8V/about-image.png"
            alt="Picture of me"
          />
        </div>
      </div>
    </section>
  );
}
