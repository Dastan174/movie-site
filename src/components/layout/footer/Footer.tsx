import "./Footer.scss";
import { RiDiscordLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="links">
            <a href="#">Terms Of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">FQA</a>
          </div>

          <p className="info">
            EcoMovie - website about movies and TV shows. Here you can find
            information about films, actors and more.
          </p>

          <div className="FooterIcons">
            <div className="icons">
              <RiDiscordLine />
            </div>
            <div className="icons">
              <FaInstagram />
            </div>
            <div className="icons">
              <FaVk />
            </div>
            <div className="icons">
              <CiLinkedin />
            </div>
            <div className="icons">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
