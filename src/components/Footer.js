import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../style/style.css";
import { useStaticQuery, graphql } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "files" }
          extension: { eq: "pdf" }
        }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  const currentYear = new Date().getFullYear();
  const spaceBetweenRowWrapStyle = {
    justifyContent: "space-between !important",
    flexFlow: "row wrap !important",
  };
  const spaceBetweenColumnWrapStyle = {
    justifyContent: "space-between !important",
    flexFlow: "column wrap !important",
    alignItems: "start !important",
  };
  return (
    <footer role="contentinfo" className="ui-section-footer">
      <div className="ui-layout-container">
        <div
          className="ui-section-footer__layout ui-layout-flex"
          style={spaceBetweenColumnWrapStyle}
        >
          <p
            className="ui-section-footer--copyright ui-text-note"
            style={{ marginBottom: ".8rem", fontWeight: "bold" }}
          >
            Terms of Service
          </p>

          {data.allFile.edges.map((file, index) => {
            return (
              <p
                key={`pdf-${index}`}
                className="ui-section-footer--copyright ui-text-note"
              >
                <small>
                  <a href={file.node.publicURL} download style={{fontWeight: "bold"}}>
                    {file.node.name}
                  </a>
                </small>
              </p>
            );
          })}
        </div>
      </div>
      <br />
      <div className="ui-layout-container">
        <div
          className="ui-section-footer__layout ui-layout-flex"
          style={spaceBetweenRowWrapStyle}
        >
          {/* <!-- COPYRIGHT --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>
              All rights reserved &copy; Rural Holidays NZ Ltd {currentYear}
            </small>
          </p>

          {/* <!-- MENU --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>
              Proudly hosted by{" "}
              <a href="https://www.codos.co.nz/" role="link" aria-label="#">
                <StaticImage src="../images/logo_codos.png" width={70} />
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
