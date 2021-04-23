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
              <form
                method="POST"
                action="https://formspree.io/contact@codos.co.nz"
                className="ui-component-form"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="ui-component-input ui-component-input-medium"
                    placeholder={"Name"}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="ui-component-input ui-component-input-medium"
                    name="email"
                    id="email"
                    placeholder={"Email"}
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="ui-component-input ui-component-input-medium"
                    name="message"
                    id="message"
                    required
                    placeholder={"Your Message"}
                    style={{
                      minHeight: "5rem",
                      resize: "none",
                    }}
                  ></textarea>
                </div>
                <div>
                  <button
                    className="ui-component-button ui-component-button-normal ui-component-button-primary"
                    type="submit"
                    value="send"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
