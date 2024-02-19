import "../../styles/contact.css";
import SendIcon from "@mui/icons-material/Send";
import CreateIcon from "@mui/icons-material/Create";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Ready to collaborate?</h2>
      <p>
        You can reach me by email, or leave a message on{" "}
        <a
          href="https://www.linkedin.com/in/gedabg/"
          target="_blank"
          rel="noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
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
            required
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
            required
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
