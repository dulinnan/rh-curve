import React from "react";

export default function Close() {
  return (
    <section className="ui-section-close">
      <div className="ui-layout-container">
        <div className="ui-section-close__layout ui-layout-flex">
          <div>
            <h2>Ready to start?</h2>
            <p className="ui-text-intro">
              Lorem ipsum dolor sit amet consectetur.
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
  );
}
