import React from "react";
import logo_rural_holidays from "../images/logo_rural_holidays.png";

export default function Header() {
  const headerStyle = {
    paddingTop: "0 !important",
  };
  return (
    <>
      <header role="banner" className="ui-section-header" style={headerStyle}>
        <div className="ui-layout-container">
          <div className="ui-section-header__layout ui-layout-flex">
            {/* <!-- LOGO --> */}
            <a
              href="/"
              role="link"
              aria-label="#"
              className="ui-section-header--logo"
            >
              <img src={logo_rural_holidays}></img>
            </a>
            {/* <!-- HAMBURGER --> */}
            <input type="checkbox" id="ui-section-header--menu-id" />
            <label
              for="ui-section-header--menu-id"
              className="ui-section-header--menu-icon"
            ></label>
            {/* <!-- MENU --> */}
            <nav
              role="navigation"
              className="ui-section-header--nav ui-layout-flex"
            >
              <a
                href="#"
                role="link"
                aria-label="#"
                className="ui-section-header--nav-link"
              >
                Features
              </a>
              <a
                href="#"
                role="link"
                aria-label="#"
                className="ui-section-header--nav-link"
              >
                Pricing
              </a>
              <a
                href="#"
                role="link"
                aria-label="#"
                className="ui-section-header--nav-link"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
