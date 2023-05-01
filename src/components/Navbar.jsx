import React, { useState } from "react";
import logo from "../assets/imgs/png/logo.png";
import finance from "../assets/imgs/png/financial.png";
import real from "../assets/imgs/png/real_estate.png";
import logout from "../assets/imgs/png/log_out.png";
import cancle from "../assets/imgs/png/cancle.png";

function Nav() {
  const [name, setname] = useState(false);
  if (name) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section>
        <div className=" mx_2 bg-white rounded-3 p_1">
          <div className=" container ">
            {/* nav bar */}
            <nav>
              <article>
                <div className="d-flex align-items-center justify-content-between  d-lg-flex d-none w-100">
                  <article className=" d-flex align-items-center gap-3 gap-lg-4 zn_1 gap-xl-5">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                  </article>
                  <article className=" d-flex gap-4 align-items-center">
                    <a
                      className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                      href="#Home"
                    >
                      <img className=" mb-1 me-2" src={finance} alt="finance" />
                      Financial Services
                    </a>
                    <a
                      className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                      href="#Home"
                    >
                      <img className=" mb-1 me-2" src={real} alt="real" />
                      Real Estate
                    </a>
                  </article>
                  <article className=" d-flex align-items-center gap-4">
                    <a
                      className=" hover text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                      href="#"
                    >
                      Sign up
                    </a>
                    <a
                      className=" btn_1 text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                      href="#"
                    >
                      Log in
                      <span>
                        {" "}
                        <svg
                          className=" ms-3 hover transition"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.325 13.275C6.14167 13.0583 6.05 12.8127 6.05 12.538C6.05 12.2633 6.14167 12.034 6.325 11.85L8.175 10H1C0.71667 10 0.479003 9.904 0.287003 9.712C0.0950034 9.52 -0.000663206 9.28267 3.46021e-06 9C3.46021e-06 8.71667 0.0960036 8.479 0.288004 8.287C0.480004 8.095 0.717337 7.99934 1 8H8.175L6.325 6.15C6.125 5.95 6.025 5.71234 6.025 5.437C6.025 5.16167 6.125 4.92434 6.325 4.725C6.50834 4.525 6.73767 4.425 7.013 4.425C7.28834 4.425 7.51734 4.51667 7.7 4.7L11.3 8.3C11.4 8.4 11.471 8.50834 11.513 8.625C11.555 8.74167 11.5757 8.86667 11.575 9C11.575 9.13334 11.5543 9.25834 11.513 9.375C11.4717 9.49167 11.4007 9.6 11.3 9.7L7.7 13.3C7.5 13.5 7.26667 13.5917 7 13.575C6.73334 13.5583 6.50834 13.4583 6.325 13.275ZM10 18C9.71667 18 9.47934 17.9043 9.288 17.713C9.09667 17.5217 9.00067 17.284 9 17C9 16.7167 9.096 16.479 9.288 16.287C9.48 16.095 9.71734 15.9993 10 16H16V2H10C9.71667 2 9.479 1.904 9.287 1.712C9.095 1.52 8.99934 1.28267 9 1C9 0.71667 9.096 0.479003 9.288 0.287003C9.48 0.0950034 9.71734 -0.000663206 10 3.46021e-06H16C16.55 3.46021e-06 17.021 0.196004 17.413 0.588004C17.805 0.980003 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H10Z"
                            fill="#1AD079"
                          />
                        </svg>
                      </span>
                    </a>
                  </article>
                </div>
                <article className="d-flex justify-content-between w-100  ">
                  <a
                    className="text-decoration-none  d-lg-none d-flex mt-2 align-items-center  "
                    href="#"
                  >
                    <article className=" zn_1 d-flex align-items-center ">
                      <a href="#">
                        <img src={logo} alt="logo" />
                      </a>
                    </article>
                  </a>
                  <a
                    href="#"
                    className="d-lg-none d-flex mt-1 justify-content-end zn_3    align-items-center  d-inline-block  ms-2  ps-3 "
                    onClick={() => setname(true)}
                  >
                    <label className="navBtn position-relative" htmlFor="line">
                      <input type="checkbox" id="line" className="menubar" />
                      <span className="span1 rounded-3"></span>
                      <span className="span2 rounded-3"></span>
                      <span className="span3 rounded-3"></span>
                    </label>
                  </a>
                </article>
                <div className={`${name ? "box_my" : " box_hide  "}`}>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="text-decoration-none pos_logo d-flex align-items-center  "
                      href="#"
                    >
                      <article className=" zn_1 d-flex mt-2 align-items-center ">
                        <a href="#">
                          <img src={logo} alt="logo" />
                        </a>
                      </article>
                    </a>
                    <a
                      href="#"
                      className="d-lg-none zn d-flex  justify-content-center hoverhn pos_cross  align-items-center  d-inline-block   "
                      onClick={() => setname(false)}
                    >
                      <img className=" w_50" src={cancle} alt="cancle" />
                    </a>
                  </div>

                  <div className="d-flex align-items-center justify-content-between flex-column gap-4  d-lg-none">
                    <article className=" d-flex gap-4 flex-column justify-content-center align-items-center ">
                      <a
                        className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                        href="#Home"
                      >
                        <img
                          className=" mb-1 me-2"
                          src={finance}
                          alt="finance"
                        />
                        Financial Services
                      </a>
                      <a
                        className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                        href="#Home"
                      >
                        <img className=" mb-1 me-2" src={real} alt="real" />
                        Real Estate
                      </a>
                    </article>
                    <article className=" d-flex align-items-center justify-content-center flex-column gap-4">
                      <a
                        className=" hover text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                        href="#"
                      >
                        Sign up
                      </a>
                      <a
                        className=" btn_1 text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                        href="#"
                      >
                        Log in
                        <span>
                          {" "}
                          <svg
                            className=" ms-3 hover transition "
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.325 13.275C6.14167 13.0583 6.05 12.8127 6.05 12.538C6.05 12.2633 6.14167 12.034 6.325 11.85L8.175 10H1C0.71667 10 0.479003 9.904 0.287003 9.712C0.0950034 9.52 -0.000663206 9.28267 3.46021e-06 9C3.46021e-06 8.71667 0.0960036 8.479 0.288004 8.287C0.480004 8.095 0.717337 7.99934 1 8H8.175L6.325 6.15C6.125 5.95 6.025 5.71234 6.025 5.437C6.025 5.16167 6.125 4.92434 6.325 4.725C6.50834 4.525 6.73767 4.425 7.013 4.425C7.28834 4.425 7.51734 4.51667 7.7 4.7L11.3 8.3C11.4 8.4 11.471 8.50834 11.513 8.625C11.555 8.74167 11.5757 8.86667 11.575 9C11.575 9.13334 11.5543 9.25834 11.513 9.375C11.4717 9.49167 11.4007 9.6 11.3 9.7L7.7 13.3C7.5 13.5 7.26667 13.5917 7 13.575C6.73334 13.5583 6.50834 13.4583 6.325 13.275ZM10 18C9.71667 18 9.47934 17.9043 9.288 17.713C9.09667 17.5217 9.00067 17.284 9 17C9 16.7167 9.096 16.479 9.288 16.287C9.48 16.095 9.71734 15.9993 10 16H16V2H10C9.71667 2 9.479 1.904 9.287 1.712C9.095 1.52 8.99934 1.28267 9 1C9 0.71667 9.096 0.479003 9.288 0.287003C9.48 0.0950034 9.71734 -0.000663206 10 3.46021e-06H16C16.55 3.46021e-06 17.021 0.196004 17.413 0.588004C17.805 0.980003 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H10Z"
                              fill="#1AD079"
                            />
                          </svg>
                        </span>
                      </a>
                    </article>
                  </div>
                </div>
              </article>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
