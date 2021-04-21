import React from "react";

export default function Close() {
  return (
    <>
      <section className="ui-section-close" id="contact">
        <div className="ui-layout-container">
          <div className="ui-section-close__layout ui-layout-flex">
            <div>
              <h2>Contact Us</h2>
              <p className="ui-text-intro">
                Pre booking is essential for all services listed. We prefer as
                much notice in advance (minimum 21 days) to arrange and pre book
                our hosts. Our central reservation office is based in
                Christchurch.
              </p>
            </div>

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
        </div>
      </section>
    </>
  );
}
