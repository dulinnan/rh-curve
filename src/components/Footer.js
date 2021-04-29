import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../style/style.css";
import { Link } from "gatsby";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const spaceBetweenStyle = {
    justifyContent: "space-between !important",
    flexFlow: "row wrap !important",
  };
  return (
    <footer role="contentinfo" className="ui-section-footer">
      <div className="ui-layout-container">
        <div
          className="ui-section-footer__layout ui-layout-flex"
          style={spaceBetweenStyle}
        >
          {/* <!-- COPYRIGHT --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>
              All rights reserved &copy; Rural Holidays NZ Ltd 2004 -{" "}
              {currentYear}
            </small>
          </p>
          <p className="ui-section-footer--copyright ui-text-note">
            <Link to="/terms-of-service">
              <small>Terms of Service</small>
            </Link>
          </p>
          {/* <!-- MENU --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>
              Proudly hosted by{" "}
              <a href="https://www.codos.co.nz/" role="link" aria-label="#">
                <StaticImage src="../images/logo_codos.png" width={70} />
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
