import React from "react";

export default function Hero() {
  return (
    <>
      <section className="ui-section-hero">
        <div className="ui-layout-container">
          <div className="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
            {/* <!-- COPYWRITING --> */}
            <div>
              <h1>Kia Ora</h1>
              <h3>Hello and welcome to Aotearoa New Zealand</h3>
              <p className="ui-text-intro">
                Rural Holidays NZ Ltd is a New Zealand leading ON-LINE provider
                of pre-booked quality hosted farm stay, country home stay,
                vacation, holiday accommodation with an extensive network of
                farm stays, and country home stays throughout New Zealand.
              </p>
              {/* <!-- CTA --> */}
              <div className="ui-component-cta ui-layout-flex">
                <a
                  href="#"
                  role="link"
                  aria-label="#"
                  className="ui-component-button ui-component-button-normal ui-component-button-primary"
                >
                  Get Started for Free
                </a>
                <p className="ui-text-note">
                  <small>30 days free trial.</small>
                </p>
              </div>
            </div>
            {/* <!-- IMAGE --> */}
            <img
              src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
              loading="lazy"
              alt="#"
              className="ui-image-half-right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
