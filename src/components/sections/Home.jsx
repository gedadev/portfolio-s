import "../../styles/home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  const redirectToGithub = () => {
    window.open("https://github.com/gedadev", "_blank");
  };

  const redirectToLinkedin = () => {
    window.open("https://www.linkedin.com/in/gedabg/", "_blank");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="home-section" id="home">
      <div className="presentation-container">
        <p className="presentation">Hi there, I&apos;m</p>
        <p className="presentation">Gedaias Jair</p>
        <p className="presentation">Frontend Web Developer</p>
      </div>
      <div className="channels">
        <ul>
          <li onClick={redirectToGithub}>
            <GitHubIcon />
          </li>
          <li onClick={redirectToLinkedin}>
            <LinkedInIcon />
          </li>
        </ul>
      </div>
      <button className="button" onClick={scrollToContact}>
        Email Me <EmailIcon />
      </button>
    </section>
  );
}
