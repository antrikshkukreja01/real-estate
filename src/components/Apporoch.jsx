import React, { useState } from "react";
import graph1 from "../assets/imgs/png/graph.png";
import graph2 from "../assets/imgs/png/graph2.png";
import graph3 from "../assets/imgs/png/graph3.png";
import graph4 from "../assets/imgs/png/graph4.png";

function Autoplay() {
  const [activeTab, setActiveTab] = useState("big");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className=" our mx-3 py-4 py-md-5">
        <div>
          {" "}
          <div className="row">
            <div className="col-lg-7 pe-lg-2 px-md-0">
              <div className="box_approch d-flex flex-column justify-content-between">
                <div className="row pb-3">
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "big"
                          ? "  py-2 mb-1 px-3 d-flex flex-column align-items-center activetab align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("big")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 15px",
                        }}
                        className="text-white "
                      >
                        <svg
                          width="5"
                          height="10"
                          viewBox="0 0 5 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.455078 0.416748V2.25008H2.28841V9.58341H4.12174V0.416748H0.455078Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white">
                        Big <span className="d-sm-block">Data</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "event"
                          ? "  py-2 mb-1 px-3 d-flex flex-column align-items-center activetab align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("event")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="#141F45"
                          />
                          <path
                            d="M8.25037 6.41675V8.25008H11.917V10.0834H10.0837C9.59747 10.0834 9.13115 10.2766 8.78734 10.6204C8.44352 10.9642 8.25037 11.4305 8.25037 11.9167V15.5834H13.7504V13.7501H10.0837V11.9167H11.917C12.4033 11.9167 12.8696 11.7236 13.2134 11.3798C13.5572 11.036 13.7504 10.5696 13.7504 10.0834V8.25008C13.7504 7.76385 13.5572 7.29754 13.2134 6.95372C12.8696 6.6099 12.4033 6.41675 11.917 6.41675H8.25037Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white">
                        Event- <span className="d-sm-block">Driven</span>
                      </h3>
                    </div>
                  </div>{" "}
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "artificial"
                          ? "  py-2 mb-1 px-3 d-flex flex-column align-items-center activetab align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("artificial")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="#141F45"
                          />
                          <path
                            d="M13.7507 13.7501V12.3751C13.7507 12.0104 13.6059 11.6607 13.348 11.4028C13.0901 11.1449 12.7404 11.0001 12.3757 11.0001C12.7404 11.0001 13.0901 10.8552 13.348 10.5974C13.6059 10.3395 13.7507 9.98975 13.7507 9.62508V8.25008C13.7507 7.76385 13.5576 7.29754 13.2138 6.95372C12.8699 6.6099 12.4036 6.41675 11.9174 6.41675H8.25073V8.25008H11.9174V10.0834H10.0841V11.9167H11.9174V13.7501H8.25073V15.5834H11.9174C12.4036 15.5834 12.8699 15.3903 13.2138 15.0464C13.5576 14.7026 13.7507 14.2363 13.7507 13.7501Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white text-center text-sm-start">
                        Artificial{" "}
                        <span className="d-sm-block">Intelligence</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "predictive"
                          ? "  py-2 mb-1 px-3 d-flex flex-column align-items-center activetab align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("predictive")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="#141F45"
                          />
                          <path
                            d="M8.24988 6.41675V11.9167H11.9165V15.5834H13.7499V6.41675H11.9165V10.0834H10.0832V6.41675H8.24988Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white text-center text-sm-start">
                        Predictive{" "}
                        <span className="d-sm-block"> Analytics</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {activeTab === "big" && (
                  <div
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" row align-items-center mt-md-5 mt-4 pt-lg-4"
                  >
                    <div className="col-lg-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={graph1}
                          alt="graph-img"
                        />
                      </div>
                    </div>
                    <div className=" p-4 col-lg-6">
                      <div className=" ps-lg-5">
                        <h2 className=" ff_Seoge fw-semibold fs_lg text-white mb-0 ps-lg-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-lg-3 mt-2 pt-1 ps-lg-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xlg-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xlg-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "event" && (
                  <div
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" row align-items-center mt-md-5 mt-4 pt-lg-4"
                  >
                    <div className="col-lg-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={graph2}
                          alt="graph-img"
                        />
                      </div>
                    </div>
                    <div className=" p-4 col-lg-6">
                      <div className=" ps-lg-5">
                        <h2 className=" ff_Seoge fw-semibold fs_lg text-white mb-0 ps-lg-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-lg-3 mt-2 pt-1 ps-lg-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xlg-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xlg-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "artificial" && (
                  <div
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" row align-items-center mt-md-5 mt-4 pt-lg-4"
                  >
                    <div className="col-lg-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={graph3}
                          alt="graph-img"
                        />
                      </div>
                    </div>
                    <div className=" p-4 col-lg-6">
                      <div className=" ps-lg-5">
                        <h2 className=" ff_Seoge fw-semibold fs_lg text-white mb-0 ps-lg-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-lg-3 mt-2 pt-1 ps-lg-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xlg-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xlg-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "predictive" && (
                  <div
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" row align-items-center mt-md-5 mt-4 pt-lg-4"
                  >
                    <div className="col-lg-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={graph4}
                          alt="graph-img"
                        />
                      </div>
                    </div>
                    <div className=" p-4 col-lg-6">
                      <div className=" ps-lg-5">
                        <h2 className=" ff_Seoge fw-semibold fs_lg text-white mb-0 ps-lg-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-lg-3 mt-2 pt-1 ps-lg-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xlg-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xlg-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5 px-0 ps-lg-2 mt-4 mt-lg-0">
              <div className="approch_box d-flex flex-column justify-content-between">
                <h2 className="ff_Seoge fw-semibold fs_4x2l text-white mb-0">
                  Our <span className="d-block"> approach</span>
                </h2>
                <div className="mt-5 mt-md-0">
                  {" "}
                  <h2 className=" ff_Seoge fw-normal fs_4x2l text-white mb-0">
                    200kProperties
                  </h2>
                  <p className=" ff_Seoge fw-normal fs_md text-white opacity_07 mb-0 mt-3">
                    of wealth will be transitioned in{" "}
                    <span className="d-lg-block"> the next 25 years.</span>
                  </p>
                  <span style={{}} className="mt-3 d-inline-block sign_up_btn">
                    <a
                      className="text-white fw-normal fs_md text-center"
                      href="#"
                    >
                      Sign up
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Autoplay;
