import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
         <section id="header" className="d-flex align-items-center">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
               {props.message}
                    <strong className="navbar-brand"> Ayush Codes</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer website
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.link}
                      className="btn-get-started"
                      // style={{ borderRadius: "6px" }}
                    >
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-input">
                  <input
                  type="image"
                    src={props.imgsrc}
                    className="image-fluid web-img animated mb-5"
                    alt="Home image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
