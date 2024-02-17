import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <nav className="nav-menu">
        <ul>
          <li className="nav-item">Projects</li>
          <li className="nav-item">About Me</li>
          <li className="nav-item home">
            <img
              src="https://i.imgur.com/ZR4x75R.png"
              alt="alien-greeting"
              className="home-img"
            />
            Home
          </li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">My CV</li>
        </ul>
      </nav>
    </header>
  );
}
