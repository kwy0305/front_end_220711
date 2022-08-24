import "./contact.css";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.github.com/kwy0305"
          className="contact github"
          target={"blank"}
        >
          <AiFillGithub className="icon" />
          <h2>
            Github <span>바로가기</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
