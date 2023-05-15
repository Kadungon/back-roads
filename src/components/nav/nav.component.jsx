import { useState } from "react";
import Wrapper from "./nav.styles";
import logo from "../../static/images/logo.svg";
import { FaBars, FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper toggle={toggle}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className="nav-link scroll-link"
              onClick={() => setToggle(!toggle)}
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link scroll-link"
              onClick={() => setToggle(!toggle)}
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="nav-link scroll-link"
              onClick={() => setToggle(!toggle)}
            >
              services
            </a>
          </li>
          <li>
            <a
              href="#feature"
              className="nav-link scroll-link"
              onClick={() => setToggle(!toggle)}
            >
              feature
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="nav-link scroll-link"
              onClick={() => setToggle(!toggle)}
            >
              gallery
            </a>
          </li>
        </ul>
        <ul className="nav-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="nav-icon"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.squarespace.com/"
              target="_blank"
              className="nav-icon"
              rel="noreferrer"
            >
              <FaSquarespace />
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default NavBar;
