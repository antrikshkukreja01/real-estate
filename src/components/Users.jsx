import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../assets/imgs/png/prev_arrow.png";
import NextArrow from "../assets/imgs/png/next_arrow.png";
import { slidedata } from "../components/Mydata.js";
function Users() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const SliderControls = useRef();
  return (
    <>
      <section className=" py-sm-5 slider  position-relative">
        <div className=" position-absolute greenshadow "></div>
        <div className=" position-absolute blueshadow "></div>
        <div className="py-5">
          <div className="container position-relative zn_1 ">
            <div className="d-flex justify-content-between align-items-center pb-5">
              <img
                className=" w_50_1 pointer"
                onClick={() => SliderControls.current.slickPrev()}
                src={PrevArrow}
                alt="prev"
              />
              <p className=" ff_Seoge fs_4x5l fw-semibold text-black mb-0 text-center ">
                See what our users say{" "}
              </p>
              <img
                className=" w_50_1 pointer"
                onClick={() => SliderControls.current.slickNext()}
                src={NextArrow}
                alt="next"
              />
            </div>
            <Slider ref={SliderControls} {...settings}>
              {slidedata.map((data) => {
                return (
                  <div className="p-1">
                    <div className="py-5 px-4 bg-white rounded-3">
                      <div className="d-flex align-items-center gap-3 pb-5 px-2">
                        <div className="circle d-flex justify-content-center align-items-center">
                          <h5 className="p-3  ff_Seoge fs_md fw-semibold  mb-0">
                            {data.Slidertext1}
                          </h5>
                        </div>
                        <div>
                          <h2 className=" ff_Seoge fs_xl fw-semibold mb-0 text_black">
                            {data.Slidertext2}
                          </h2>
                          <h3 className=" ff_Seoge fw-normal fs_xsm text_black">
                            {data.Slidertext3}
                          </h3>
                        </div>
                      </div>
                      <p className=" ff_Seoge fs_md fw-normal text_black px-2">
                        {data.Slidertext4}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Users;
