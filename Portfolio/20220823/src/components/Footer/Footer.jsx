import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        {" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.github.com/kwy0305">
          <TiSocialGithub className="social" />
        </a>
      </div>
      <span>&copy; 2022.08.23 Made by kwy0305. All rights reserved.</span>
    </div>
  );
}
export default Footer;
