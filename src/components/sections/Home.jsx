import "../../styles/home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <section className="home-section">
      <div className="presentation-container">
        <p className="presentation">Hi there, I&apos;m</p>
        <p className="presentation">Gedaias Jair</p>
        <p className="presentation">Frontend Web Developer</p>
      </div>
      <div className="channels">
        <ul>
          <li>
            <a href="">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
      <button className="button">
        Email Me <EmailIcon />
      </button>
    </section>
  );
}
