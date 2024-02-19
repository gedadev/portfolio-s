import { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [shrinkNavbar, setShrinkNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > window.innerHeight * 0.9
        ? setShrinkNavbar(true)
        : setShrinkNavbar(false);

      const sections = ["projects", "about", "contact"];

      const sectionOffsets = sections.map((section) => ({
        name: section,
        offsetTop: document.getElementById(section).offsetTop,
        offsetBottom:
          document.getElementById(section).offsetTop +
          document.getElementById(section).offsetHeight,
      }));

      for (const section of sectionOffsets) {
        console.log(window.scrollY, section.offsetTop - 100);
        if (window.scrollY > section.offsetTop - 200) {
          setActiveSection(section.name);
        }
      }

      if (window.scrollY < window.innerHeight - 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`nav-menu ${shrinkNavbar ? "shrink" : ""}`}>
        <ul>
          <li
            className={`nav-item ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            Projects
          </li>
          <li
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          >
            About Me
          </li>
          <li className="nav-item home">
            <img
              src="https://i.imgur.com/Qbk1CWd.png"
              alt="alien-greeting"
              className="home-img"
            />
            Home
          </li>
          <li
            className={`nav-item ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            Contact
          </li>
          <li className="nav-item">My CV</li>
        </ul>
      </nav>
    </header>
  );
}
