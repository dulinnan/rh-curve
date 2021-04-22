import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Feature() {
  return (
    <section className="ui-section-feature" id="about-us">
      <div className="ui-layout-container">
        <h2>About Us</h2>
        <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-3">
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage src="../images/farm_stay.png" alt="farm stay" />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">
                Overnight Farm & Country Stays
              </h4>
              <p>
                Stay in the farmers home, based on a dinner, bed and breakfast
                basis, including a guided tour of the farm property.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage src="../images/home_stay.png" alt="home stay" />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">
                Technical Farm Visits
              </h4>
              <p>
                When time is short, visits of one hour’s duration that can be
                arranged with optional catering options.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage
              src="../images/home_hosted_dinners.png"
              alt="home hosted dinners"
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Day Visits</h4>
              <p>Enjoy meeting with a Kiwi family in their home.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ui-layout-container">
        <div className="ui-component-card ui-component-card--feature">
          <StaticImage src="../images/home_stay.png" alt="home stay" />
          <div className="ui-component-card--feature-content">
            <h4 className="ui-component-card--feature-title">
              Home Hosted Evening Dinners
            </h4>
            <p>
              Experience an evening of complete hospitality in a Kiwi home,
              enjoy a delicious 3 course meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
