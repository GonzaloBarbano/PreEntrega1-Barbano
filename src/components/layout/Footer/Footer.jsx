import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <h5 color="white">Redes</h5>
      <div>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x iconRedes" />
        </a>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} className="fa-2x iconRedes" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
