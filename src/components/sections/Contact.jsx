import "../../styles/contact.css";
import SendIcon from "@mui/icons-material/Send";
import CreateIcon from "@mui/icons-material/Create";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";

export default function Contact({ redirectToLinkedin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const isEmpty = (value) => value.trim() === "";

    if (
      !isEmpty(formData.name) &&
      !isEmpty(formData.email) &&
      !isEmpty(formData.message) &&
      emailIsValid(formData.email)
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const handleValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateOnInput(e);
  };

  const validateOnInput = (e) => {
    const { name, value } = e.target;
    const errors = {};

    if (!value.trim()) {
      errors[name] = "This field is required";
    } else if (name === "email" && !emailIsValid(value)) {
      errors.email = "Enter a valid email address";
    }
    setErrorMessage(errors);
  };

  const validateOnSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      console.log("Message sent");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrorMessage({});
    }
  };

  const emailIsValid = (email) => {
    const pattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/;
    return pattern.test(email);
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
      <form
        action=""
        className="contact-form"
        onSubmit={validateOnSubmit}
        id="contact-form"
        noValidate
      >
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
            required
          />
          {errorMessage.name ? (
            <span className="error-msg">{errorMessage.name}</span>
          ) : null}
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
            required
          />
          {errorMessage.email ? (
            <span className="error-msg">{errorMessage.email}</span>
          ) : null}
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
            required
          ></textarea>
          {errorMessage.message ? (
            <span className="error-msg">{errorMessage.message}</span>
          ) : null}
        </div>
      </form>
      <div className="contact-buttons">
        <button
          className="button send-button"
          type="submit"
          form="contact-form"
          disabled={buttonDisabled}
        >
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
