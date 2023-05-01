import React from "react";
import house from "../assets/imgs/png/house_img.png";
import pentagon1 from "../assets/imgs/png/dark_pentagon.png";
import pentagon2 from "../assets/imgs/png/light_pentagon.png";
import box_triangle from "../assets/imgs/png/triangle_box.png";
import play_btn from "../assets/imgs/png/play_btn.png";

function Deals() {
  return (
    <>
      <section className=" bg_Lightwhite2  py-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <img className=" w-100" src={house} alt="house" />
            </div>
            <div className="col-lg-2 col-sm-6 d-lg-none">
              <div className="h-100 d-flex flex-column justify-content-between py-4 mt-sm-4 mt-lg-0 ps-sm-5 ps-lg-0">
                <h2 className=" fw-semibold fs_4x5l text_dark_black mb-0">
                  Close More Deals
                </h2>
                <a
                  className="d-flex align-items-center mt-2 mt-sm-0 book_btn px-2 py-2 d-inline-block"
                  href="#"
                >
                  <a
                    className=" fw-semibold fs_md text_green text_hover d-inline-block"
                    href="#"
                  >
                    Book a demo{" "}
                  </a>
                  <a className="   ms-3" href="#">
                    <img className=" w_24" src={play_btn} alt="play_btn" />
                  </a>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-10 ">
              <div className=" pe-xl-5 mt-sm-4 mt-lg-0">
                <p className=" fw-normal fs_md ff_Seoge text_black mb-0">
                  Leverage big data and artificial intelligence to identify your
                  next Client
                </p>
                <p className=" fw-normal ff_Seoge fs_md text-black opicity_1  mb-0 mt-4 pb-2">
                  Compliment your current business development with
                  Unconstrained predictive analytics.
                </p>
                <div className="bg-white rounded-2 py-3 px-4 mt-sm-5 mt-3 position-relative">
                  <img
                    className=" box_triangle triangle_box"
                    src={box_triangle}
                    alt="box_triangle"
                  />
                  <div className="d-flex align-items-center">
                    <img src={pentagon1} alt="pentagon1" />
                    <p className=" mb-0 fw-normal fs_md text-black opicity_1 ms-3 ps-1">
                      Unconstrained
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={pentagon2} alt="pentagon2" />
                    <p className=" mb-0 fw-normal fs_md text-black opicity_1 ms-3 ps-1">
                      Constrained
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 d-none d-lg-block">
              <div className="h-100 d-flex flex-column justify-content-between py-4 mt-sm-4 mt-lg-0">
                <h2 className=" fw-semibold fs_4x5l text_dark_black mb-0">
                  Close More Deals
                </h2>

                <a
                  className="d-flex align-items-center mt-2 mt-sm-0 book_text_hover px-2 py-2"
                  href="#"
                >
                  <a
                    className=" fw-semibold fs_md text_green text_hover"
                    href="#"
                  >
                    Book a demo{" "}
                  </a>
                  <a className=" ms-3" href="#">
                    <img className="  w_24" src={play_btn} alt="play_btn" />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
