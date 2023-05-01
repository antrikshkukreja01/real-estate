import React from "react";
import shadow from "../assets/imgs/png/shadow.png";
import logo from "../assets/imgs/png/footer_logo.png";
import up_arrow from "../assets/imgs/png/up_arrow.png";

function Footer() {
  return (
    <>
      <footer className=" overflow-hidden   ">
        <div className=" bg_color  py-5">
          <div className="container  ">
            <div className="row pt-4 pb-5  line position-relative ">
              <div className=" shadow_position">
                <img className=" shadow_ani" src={shadow} alt=" shadow" />
              </div>
              <div className="col-md-8">
                <div className="row ">
                  <div className="col-md-7">
                    <div className="input_style">
                      <input
                        className="input opicity_1 ff_Segoe w-100 text-white fw-semibold fs_xl"
                        placeholder="Name"
                        type="search"
                        required
                      />
                    </div>
                    <div className="input_style my-2">
                      <input
                        className="input opicity_1 ff_Segoe w-100 text-white fw-semibold fs_xl "
                        placeholder="Email"
                        type="search"
                        required
                      />
                    </div>

                    <div className=" d-flex gap-3 align-items-center">
                      <a
                        href="#"
                        className=" ff_Segoe d-flex gap-1 fw-semibold fs_xl text-white text-decoration-none btns_footer"
                      >
                        <span className=" ball"></span>
                        Financial Services
                      </a>
                      <a
                        href="#"
                        className=" ff_Segoe fw-semibold d-flex gap-1 fs_xl text-white text-decoration-none btns_footer"
                      >
                        <span className=" ball"></span>
                        Real Estate
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5  ">
                    <div className="input_style">
                      <textarea
                        className="input opicity_1 ff_Segoe h_100 w-100 text-white fw-semibold fs_xl"
                        placeholder="Message.."
                        type="search"
                        required
                      />
                    </div>

                    <a
                      className=" fw-semibold ff_Segoe fs_xl d-flex justify-content-center mt-2 submit_btn w-100 d-inline-block text-white text-decoration-none "
                      href="#"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-4 py-md-0 pm-4 ps-md-5">
                <p className=" ff_Segoe fw-semibold text-white fs_4xl">
                  Contact us
                </p>
                <p className=" ff_Segoe opicity_1 text-white fw-normal mx_258 fs_xl">
                  Our Predictive Analytics utilize a combination of event-driven
                  data, historical data.
                </p>
              </div>
            </div>
            <div className="row  py-5">
              <div className="col-md-8 mt-2">
                <div className="row align-items-start  justify-content-between">
                  <div className=" col-md-5 mb-3">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>

                    <a
                      className=" d-block  fs_xl fw-semibold text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      info@catalyzeai.com
                    </a>
                    <a
                      className=" fs_xl fw-semibold text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      (941) 867-1761
                    </a>
                  </div>{" "}
                  <div className=" col-6 col-md-4">
                    <p className=" ff_segoe fw-semibold mb-0 fs_xl text-white">
                      Financial Services
                    </p>

                    <a
                      className=" fs_xl fw-normal footer_hover mt-3  d-inline-block  position-relative mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Pricing
                    </a>
                    <br />
                    <a
                      className=" fs_xl fw-normal footer_hover mt-1 d-inline-block  position-relative  mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Blog
                    </a>
                  </div>{" "}
                  <div className=" col-6 col-md-3">
                    <p className=" ff_segoe fw-semibold mb-0 fs_xl text-white">
                      Real Estate
                    </p>

                    <a
                      className=" fs_xl fw-normal footer_hover mt-3  d-inline-block  position-relative mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Pricing
                    </a>
                    <br />
                    <a
                      className=" fs_xl fw-normal footer_hover mt-1 d-inline-block  position-relative  mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Blog
                    </a>
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5 mt-md-1">
                <div className=" d-flex align-items-center justify-content-between">
                  <a
                    className=" z_1 text-decoration-none ff_Segoe fs_xl fw-semibold text-white"
                    href="#"
                  >
                    LinkedIn
                  </a>
                  <a className=" z_1" href="#">
                    <img src={up_arrow} alt="up_arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-between flex-column gap-2 flex-sm-row align-items-center">
              <p className=" ff_Segoe fw-normal fs_lg text-white opicity_1 mb-0">
                All rights reserved.©20022 Catalyze AI
              </p>
              <a
                href="#"
                className="  border_bottom text-decoration-none  ff_Segoe fw-normal fs_lg text-white opicity_1"
              >
                Do not sell my data
              </a>
              <div className=" d-flex align-items-center gap-4  gap-md-2">
                <a
                  className=" border_bottom text-decoration-none ff_Segoe fw-normal fs_lg text-white opicity_1"
                  href="#"
                >
                  Terms & Conditions
                </a>
                <a
                  className=" ff_Segoe  border_bottom text-decoration-none  fw-normal fs_lg text-white opicity_1"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
