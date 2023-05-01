import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import img from "../assets/imgs/png/img3.png";
import img2 from "../assets/imgs/png/img2.png";
import img3 from "../assets/imgs/png/img.png";
import img4 from "../assets/imgs/png/img4.png";

function Started() {
  const [activeTab, setActiveTab] = useState("tow");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className=" py-5   ">
        <div className=" bg_color py-5 h_1  ">
          <div className="container  ">
            {" "}
            <div className=" text-center pb-4">
              {" "}
              <p className=" ff_Seoge fw-bold fs_3x2l text-white">
                How to get started?
              </p>
            </div>{" "}
            <div class="content-placeholder">
              <div className="row align-items-center line position-relative ">
                <div className="col-lg-6">
                  <Accordion defaultActiveKey={["1"]}>
                    <Accordion.Item
                      eventKey="0"
                      className={activeTab === "one" ? "Active " : "my-4"}
                      onClick={() => handleTabClick("one")}
                    >
                      <Accordion.Header>
                        <p className=" mb-0 fs_20 ff_Grandstander text-white fw_500">
                          Provide your information
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" mb-0  fs_16 ff_Grandstander text-white fw-regular">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className={activeTab === "tow" ? " Active" : "my-4 "}
                      onClick={() => handleTabClick("tow")}
                    >
                      <Accordion.Header>
                        <p className=" mb-0 fs_20 ff_Grandstander text-white fw_500">
                          Select your location
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" mb-0  fs_16 ff_Grandstander text-white fw-regular">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className={activeTab === "three" ? " Active" : "my-4 "}
                      onClick={() => handleTabClick("three")}
                      y
                      eventKey="2"
                    >
                      <Accordion.Header>
                        <p className=" mb-0 fs_20 ff_Grandstander text-white fw_500">
                          Purchase your subscription
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" mb-0  fs_16 ff_Grandstander text-white fw-regular">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className={activeTab === "four" ? " Active" : "my-4 "}
                      onClick={() => handleTabClick("four")}
                      y
                      eventKey="3"
                    >
                      <Accordion.Header>
                        <p className=" mb-0 fs_20 ff_Grandstander text-white fw_500">
                          Access your dashboard
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" mb-0  fs_16 ff_Grandstander text-white fw-regular">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  {activeTab === "one" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={img}
                        alt="img"
                      />
                    </span>
                  )}
                  {activeTab === "tow" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={img2}
                        alt="img"
                      />
                    </span>
                  )}
                  {activeTab === "three" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={img3}
                        alt="img"
                      />
                    </span>
                  )}
                  {activeTab === "four" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={img4}
                        alt="img"
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Started;
