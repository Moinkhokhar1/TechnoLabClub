import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faDiscord, faTwitter, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="footer-content">

          {/* LEFT */}
          <div className="footer-left">
            <div className="social-icons">
              <a href="https://chat.whatsapp.com/BTEKfdWBjFxEiIsFDBhyJI" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/technolabclub/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com/company/techno-lab-offical/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <p>Copyright © 2026 TechnoLab Club. All rights reserved</p>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <img src="images/logo.png" alt="Technolab" />
            <span className="x-symbol">×</span>
            <img src="images/techez.png" alt="Techiez" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;