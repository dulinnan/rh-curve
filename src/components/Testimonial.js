import React from "react";


export default function Testimonial() {
  return (
    <section className="ui-section-testimonial">
      <div className="ui-layout-container">
        <div className="ui-layout-column-4 ui-layout-column-center">
          <img
            src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg"
            alt="#"
            className="ui-section-testimonial--avatar"
          />
          <p className="ui-section-testimonial--quote ui-text-intro">
            &ldquo;At Rural Holidays we look forward to making your New Zealand farm stay holiday or vacation, a special experience with memories that will last a life time.&rdquo;
          </p>
          <p className="ui-section-testimonial--author">
            <strong>Mark</strong>
            <br />
            <small className="ui-text-note">Rural Holidays</small>
          </p>
        </div>
      </div>
    </section>
  );
}
