import React from "react";

export default function Pricing() {
  return (
    <section className="ui-section-pricing" id="our-survices">
      <div className="ui-layout-container">
        <h2>Our Services</h2>
         
           <div className="ui-section-pricing__layout ui-layout-grid ui-layout-grid-3">
          <div className="ui-component-card ui-component-card--pricing">
            <span>
              <strong>Basic</strong>
            </span>

            <div className="ui-component-card--pricing-price">
              <span className="ui-component-card--pricing-amount ui-component-card--pricing-amount-1"></span>
              <span>/</span>
              <span>month</span>
            </div>
            <span>
              <small>Perfect for early-stage startups.</small>
            </span>

            <ul className="ui-component-list ui-component-list--pricing ui-layout-grid">
              <li className="ui-component-list--item ui-component-list--item-check">
                1 domain name.
              </li>
              <li className="ui-component-list--item ui-component-list--item-check">
                HTML components.
              </li>
              <li className="ui-component-list--item ui-component-list--item-cross">
                Priority support.
              </li>
            </ul>

            <a
              href="#"
              className="ui-component-button ui-component-button-big ui-component-button-secondary"
              role="link"
              aria-label="#"
            >
              Get Started
            </a>
          </div>
          <div className="ui-component-card ui-component-card--pricing">
            <span>
              <strong>Standard</strong>
            </span>

            <div className="ui-component-card--pricing-price">
              <span className="ui-component-card--pricing-amount ui-component-card--pricing-amount-2"></span>
              <span>/</span>
              <span>month</span>
            </div>
            <span>
              <small>Perfect for early-stage startups.</small>
            </span>

            <ul className="ui-component-list ui-component-list--pricing ui-layout-grid">
              <li className="ui-component-list--item ui-component-list--item-check">
                1 domain name.
              </li>
              <li className="ui-component-list--item ui-component-list--item-check">
                HTML components.
              </li>
              <li className="ui-component-list--item ui-component-list--item-check">
                Priority support.
              </li>
            </ul>

            <a
              href="#"
              className="ui-component-button ui-component-button-big ui-component-button-primary"
              role="link"
              aria-label="#"
            >
              Get Started
            </a>
          </div>
          <div className="ui-component-card ui-component-card--pricing">
            <span>
              <strong>Special</strong>
            </span>

            <div className="ui-component-card--pricing-price">
              <span className="ui-component-card--pricing-amount ui-component-card--pricing-amount-3"></span>
              <span>/</span>
              <span>month</span>
            </div>
            <span>
              <small>Perfect for early-stage startups.</small>
            </span>

            <ul className="ui-component-list ui-component-list--pricing ui-layout-grid">
              <li className="ui-component-list--item ui-component-list--item-check">
                1 domain name.
              </li>
              <li className="ui-component-list--item ui-component-list--item-check">
                HTML components.
              </li>
              <li className="ui-component-list--item ui-component-list--item-check">
                Priority support.
              </li>
            </ul>

            <a
              href="#"
              className="ui-component-button ui-component-button-big ui-component-button-secondary"
              role="link"
              aria-label="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
