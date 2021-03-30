import React from "react";

export default function Feature() {
  return (
    <section className="ui-section-feature">
      <div className="ui-layout-container">
        <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-3">
          <div className="ui-component-card ui-component-card--feature">
            <img
              src="https://res.cloudinary.com/uisual/image/upload/assets/graphics/notification.png"
              alt="#"
              loading="lazy"
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">OUR LISTINGS</h4>
              <p>
                Our collection of quality farm stays, country stays and home
                stays throughout New Zealand.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <img
              src="https://res.cloudinary.com/uisual/image/upload/assets/graphics/notification.png"
              alt="#"
              loading="lazy"
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">
                TYPES OF STAY
              </h4>
              <p>
                Types of accommodation available, Farm stays, country home
                stays, city home stays.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <img
              src="https://res.cloudinary.com/uisual/image/upload/assets/graphics/notification.png"
              alt="#"
              loading="lazy"
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">CONTACT US</h4>
              <p>
                Please view our contact details, or fill out the online contact
                form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
