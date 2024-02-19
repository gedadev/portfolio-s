import { useEffect, useState } from "react";
import "../styles/header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const handleRedirect = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const goToCV = (url) => {
    window.open(url, "_blank");
  };

  return (
    <header>
      <nav className={`nav-menu ${shrinkNavbar ? "shrink" : ""}`}>
        <ul>
          <li
            className={`nav-item ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleRedirect("projects")}
          >
            Projects
          </li>
          <li
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleRedirect("about")}
          >
            About Me
          </li>
          <li className="nav-item home" onClick={() => handleRedirect("home")}>
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
            onClick={() => handleRedirect("contact")}
          >
            Contact
          </li>
          <li className="nav-item cv-item">
            My CV <ExpandMoreIcon />
            <div className="cv-lang">
              <ul>
                <li
                  className="lang-option"
                  onClick={() =>
                    goToCV(
                      "https://drive.google.com/file/d/1r7TfEenzDz0Hv7UbYdxYNJGKU73Wo5pP/view?usp=sharing"
                    )
                  }
                >
                  🇺🇸 English
                </li>
                <li
                  className="lang-option"
                  onClick={() =>
                    goToCV(
                      "https://drive.google.com/file/d/1Cggp-gEBZD7py5wzUdUL-XaSCZ9YkfJ3/view?usp=sharing"
                    )
                  }
                >
                  🇲🇽 Español
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
