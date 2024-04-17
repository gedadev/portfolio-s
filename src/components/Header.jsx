import { useEffect, useState } from "react";
import "../styles/header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Header() {
  const [shrinkNavbar, setShrinkNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [langSelectorActive, setLangSelectorActive] = useState(false);
  const links = {
    homeImage:
      "https://i.ibb.co/XyHZyRm/4723548-astronaut-astronomy-cosmonaut-galaxy-science-icon.png",
    enCV: "https://drive.google.com/file/d/12QY6ERKRjfxbj34D4KUggSN0aj3gkHHS/",
    esCV: "https://drive.google.com/file/d/1ixsxGBngVX6-pmgnw-BZT19MU6CQma3y/",
  };

  useEffect(() => {
    handleView();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleView);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleView);
    };
  }, []);

  const handleScroll = () => {
    window.scrollY > window.innerHeight * 0.9
      ? setShrinkNavbar(true)
      : setShrinkNavbar(false);

    const sections = ["projects", "about", "contact"];

    const sectionOffsets = sections.map((section) => ({
      name: section,
      offsetTop: document.getElementById(section).offsetTop,
    }));

    for (const section of sectionOffsets) {
      if (window.scrollY > section.offsetTop - 200) {
        setActiveSection(section.name);
      }
    }

    if (window.scrollY < window.innerHeight - 200) {
      setActiveSection("");
    }
  };

  const handleView = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  const handleRedirect = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    isMobile && id != "home" ? handleMenuActivation() : null;
  };

  const goToCV = (url) => {
    window.open(url, "_blank");
    isMobile ? handleMenuActivation() : null;
  };

  const handleMenuActivation = () => {
    setMenuIsActive(!menuIsActive);
    langSelectorActive ? handleCVLanguage() : null;
  };

  const handleCVLanguage = () => {
    setLangSelectorActive(!langSelectorActive);
  };

  return (
    <header>
      {isMobile ? (
        <div className="mobile-menu">
          <span className="home-link" onClick={() => handleRedirect("home")}>
            <img
              src={links.homeImage}
              alt="astronaut-greeting"
              className="home-img"
            />
          </span>
          <div
            className={`ham-menu ${menuIsActive ? "active" : ""}`}
            onClick={handleMenuActivation}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <nav className={`mobile-nav ${menuIsActive ? "active" : ""}`}>
            <ul
              className={`mobile-navbar ${langSelectorActive ? "active" : ""}`}
            >
              <li
                className="nav-item"
                onClick={() => handleRedirect("projects")}
              >
                Projects
              </li>
              <li className="nav-item" onClick={() => handleRedirect("about")}>
                About Me
              </li>
              <li
                className="nav-item"
                onClick={() => handleRedirect("contact")}
              >
                Contact
              </li>
              <li className="nav-item cv-item" onClick={handleCVLanguage}>
                My CV <KeyboardArrowRightIcon />
              </li>
            </ul>
            <ul
              className={`mobile-lang-nav ${
                langSelectorActive ? "active" : ""
              }`}
            >
              <li
                className="lang-option mobile"
                onClick={() => goToCV(links.enCV)}
              >
                🇺🇸 English
              </li>
              <li
                className="lang-option mobile"
                onClick={() => goToCV(links.esCV)}
              >
                🇲🇽 Español
              </li>
            </ul>
          </nav>
        </div>
      ) : (
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
              className={`nav-item ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => handleRedirect("about")}
            >
              About Me
            </li>
            <li
              className="nav-item home"
              onClick={() => handleRedirect("home")}
            >
              <img
                src={links.homeImage}
                alt="astronaut-greeting"
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
                    onClick={() => goToCV(links.enCV)}
                  >
                    🇺🇸 English
                  </li>
                  <li
                    className="lang-option"
                    onClick={() => goToCV(links.esCV)}
                  >
                    🇲🇽 Español
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
