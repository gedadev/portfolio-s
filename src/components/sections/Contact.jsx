import "../../styles/contact.css";
import SendIcon from "@mui/icons-material/Send";
import CreateIcon from "@mui/icons-material/Create";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";

export default function Contact({ redirectToLinkedin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Ready to collaborate?</h2>
      <p>
        You can reach me by email, or leave a message on{" "}
        <span className="linkedin-link" onClick={redirectToLinkedin}>
          LinkedIn <OpenInNewIcon />
        </span>
      </p>
      <form action="" className="contact-form">
        <div className="input-container">
          <label htmlFor="name">Your name: (*)</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            id="name"
            autoComplete="off"
            onChange={handleValues}
            value={formData.name}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Your email: (*)</label>
          <input
            type="email"
            name="email"
            placeholder="jdoe@domain.com"
            id="email"
            autoComplete="off"
            onChange={handleValues}
            value={formData.email}
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Your message: (*)</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Start typing..."
            onChange={handleValues}
            value={formData.message}
          ></textarea>
        </div>
      </form>
      <div className="contact-buttons">
        <button className="button send-button">
          Send <SendIcon />
        </button>
        <button className="button compose-button">
          Compose in your app <CreateIcon />
        </button>
        <button className="button copy-button">
          Copy email to clipboard <ContentCopyIcon />
        </button>
      </div>
    </section>
  );
}

Contact.propTypes = {
  redirectToLinkedin: PropTypes.func,
};
