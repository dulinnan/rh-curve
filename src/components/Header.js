import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo_rural_holidays from "../images/logo_rural_holidays.png";

export default function Header() {
  const headerStyle = {
    paddingTop: "0 !important"
  };
  const flexFlowStyle = {
    flexFlow: "column wrap !important"}
  const cursorStyle ={
    cursor: "pointer !important"
  }
  return (
    <>
      <header role="banner" className="ui-section-header" style={headerStyle}>
        <div className="ui-layout-container">
          <div className="ui-section-header__layout ui-layout-flex" style={flexFlowStyle}>
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
              <a role="link" onClick={() => scrollTo('#about-us')} className="ui-section-header--nav-link" style={cursorStyle}>About Us</a>
              <a role="link" onClick={() => scrollTo('#our-survices')} className="ui-section-header--nav-link" style={cursorStyle}>Our Services</a>
              <a role="link" onClick={() => scrollTo('#contact')} className="ui-section-header--nav-link" style={cursorStyle}>Contact</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
