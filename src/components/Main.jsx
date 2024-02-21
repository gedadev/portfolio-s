import Home from "./sections/Home";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Main() {
  const redirectToGithub = () => {
    window.open("https://github.com/gedadev", "_blank");
  };

  const redirectToLinkedin = () => {
    window.open("https://www.linkedin.com/in/gedabg/", "_blank");
  };

  return (
    <main>
      <Home
        redirectToGithub={redirectToGithub}
        redirectToLinkedin={redirectToLinkedin}
      />
      <Projects redirectToGithub={redirectToGithub} />
      <About />
      <Contact redirectToLinkedin={redirectToLinkedin} />
    </main>
  );
}
