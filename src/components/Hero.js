import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  const borderStyle = {
    border: "10px solid #cdcdcd",
    borderRadius: "5%",
  };
  return (
    <>
      <section className="ui-section-hero bg-image">
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
            </div>
            {/* <!-- IMAGE --> */}
            <StaticImage
              src="../images/hero_image.png"
              loading="lazy"
              alt="#"
              style={borderStyle}
              className="ui-image-half-right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
