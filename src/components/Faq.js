import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Faq() {
  return (
    <section className="ui-section-faq">
      <div className="ui-layout-container">
        <div className="ui-section-faq__layout ui-layout-grid ui-layout-grid-2">
          <div>
            <h4 className="ui-component-list--item ui-section-faq--question">
              Overnight Farm & Country Stays
            </h4>
            <p className="ui-section-faq--answer">
              Stay in a private home, with guest only facilities separate from
              the hosts. Our network extends from the top of the North Island to
              the lower South Island and various locations in between, contact
              us for list of locations. Ideal for independent travelers and
              small custom tour groups.
            </p>
          </div>
          <div style={{alignSelf: "start !important;"}}>
            <h4 className="ui-component-list--item ui-section-faq--question">
              Technical Farm Visits
            </h4>
            <p className="ui-section-faq--answer">
              Available at selected host properties nationwide, ideal for tour
              groups, with morning or afternoon tea, or a catered lunch option.
            </p>
          </div>
          <div>
            <h4 className="ui-component-list--item ui-section-faq--question">
              Day Visits
            </h4>
            <p className="ui-section-faq--answer">
              Offers a snap shot of life in a Kiwi home, tailor-made and
              designed to suit individual visitors to include morning or
              afternoon tea, or lunch and farm activities.
            </p>
          </div>
          <div>
            <h4 className="ui-component-list--item ui-section-faq--question">
              Home Hosted Evening Dinners
            </h4>
            <p className="ui-section-faq--answer">
              This program operates primarily for tour groups (both series and
              one-off groups) in the garden city of Christchurch, with limited
              options in Rotorua and Queenstown.
            </p>
          </div>
        </div>

        <p className="ui-section-faq--note">
          <StaticImage src="../images/tm.png" />
          <br />
          Still have questions?{" "}
          <a href="#" role="link" aria-label="#">
            Contact us
          </a>
          .<br />
        </p>
      </div>
    </section>
  );
}
