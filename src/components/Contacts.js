 

import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FaGoogleDrive } from "react-icons/fa";
import { MdPlusOne } from "react-icons/md";

import { FadeTransform } from "react-animation-components";

function Contacts(props) {
  return (
    <div className="footer">
      <div className="container">
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.1) translateY(-50%)",
          }}
        >
          <div className="row justify-content-center mr-1 ml-1">
            <div
              className="col-7 offset-1 col-sm-5 col-center "
              style={{
                display: "flex",
                justifyContent: "center",
                width: "75%",
              }}
            >
              <h1>
                <span
                  style={{
                    color: "white",
                    fontFamily: "Lato",
                    fontStyle: "italic",
                    fontSize: "2.6rem",
                    
                  }}
                >
                  Contact <span style={{ color: "yellow" }}>Me?</span>
                </span>
              </h1>
            </div>

            <div
              className="col-7 offset-1 col-sm-5 col-center "
              style={{
                background: "#3d3b3b27",
                display: "inline-block",
                justifyContent: "center",
                width: "79%",
                color: "white",
                fontFamily: "Lato",
              }}
            >
              <div className="col-sm-3">
                <h3 style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
                  {" "}
                  Since you are in this section now, I believe you went through
                  the other sections.
                </h3>
              </div>
              <div className="row col-center ">
                <h3 style={{ color: "yellow" }}>
                  {" "}
                  Here's my resume :{" "}
                  <a
                    style={{ color: "yellow", textDecoration: "none" }}
                    href="https://drive.google.com/file/d/1Mo8CAWd2Ln6awelRHSbEoUbDB74OMGvG/view?usp=sharing"
                  >
                    {" "}
                    <FaGoogleDrive
                      style={{ color: "aquamarine", cursor: "pointer" }}
                    />
                  </a>
                </h3>
              </div>
              <div
                className="row col-center col-sm-4"
                style={{ marginBottom: "1rem" }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontStyle: "italic",
                    fontFamily: "lato",
                    color: "aquamarine",
                  }}
                >
                  CONNECT @
                  <MdPlusOne
                    style={{ height: "2rem", width: "1rem", color: "yellow" }}
                  />
                </p>
              </div>
              <div
                className="col-12 col-center col-sm-4 align-item-center"
                style={{ marginBottom: "1rem" }}
              >
                <span style={{ padding: "4px" }}>
                  <SocialIcon url="https://www.linkedin.com/in/trishna-k-565216b6/" />
                </span>
                <span style={{ padding: "4px" }}>
                  <SocialIcon url="https://github.com/trishnakalita660" />
                </span>
                <span style={{ padding: "4px" }}>
                  <SocialIcon url="https://www.instagram.com/trishna__01/" />
                </span>
                <span style={{ padding: "4px" }}>
                  <SocialIcon url="https://www.facebook.com/trishna.kalita.184007/" />
                </span>
                <span style={{ padding: "4px" }}>
                  <SocialIcon url="https://twitter.com/TrishnaKalita9" />
                </span>
              </div>
            </div>
          </div>
        </FadeTransform>
      </div>
    </div>
  );
}
export default Contacts;
