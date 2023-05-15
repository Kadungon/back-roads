import Wrapper from "./footer.styles";
import { FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper className="section">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link scroll-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link scroll-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link scroll-link">
            services
          </a>
        </li>
        <li>
          <a href="#feature" className="footer-link scroll-link">
            feature
          </a>
        </li>
        <li>
          <a href="#gallery" className="footer-link scroll-link">
            gallery
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.squarespace.com/"
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <FaSquarespace />
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; kadu limited {new Date().getFullYear()}
      </p>
    </Wrapper>
  );
};

export default Footer;
