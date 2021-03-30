import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Feature() {
  return (
    <section className="ui-section-feature" id="about-us">
      <div className="ui-layout-container">
        <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-3">
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage src="../images/farm_stay.png" alt="farm stay" />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Farm Stays</h4>
              <p>
                Our collection of quality farm stays, country stays and home
                stays throughout New Zealand.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage src="../images/home_stay.png" alt="home stay" />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Home Stays</h4>
              <p>
                Types of accommodation available, Farm stays, country home
                stays, city home stays.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage src="../images/home_hosted_dinners.png" alt="home hosted dinners"/>
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">
                Home Hosted Dinners
              </h4>
              <p>
                Please view our contact details, or fill out the online contact
                form. Home Hosted Dinners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
