import React from "react";
import earth from "../assets/imgs/png/earth.png";
import leads from "../assets/imgs/png/your_leads.png";

function Market() {
  return (
    <>
      <section className=" py-5">
        <div className=" container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6 mt-4">
              <p className=" mb-0 fs_4x5l ff_Segoe fw-semibold  text-black">
                Your Target Market
              </p>
              <article className=" d-flex gap-2 align-items-center my-2">
                <img className=" h_2 w_1" src={earth} alt="earth" />
                <p className=" fs_md mb-0 ff_Segoe fw-normal text-black">
                  Nationwide coverage
                </p>
              </article>
              <p className=" mx_388 fs_md ff_Segoe fw-normal text-black">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <a
                className=" fw-semibold ff_Segoe fs_xl mt-2 get_btn d-inline-block  text-white text-decoration-none"
                href="#"
              >
                Get started
              </a>
            </div>
            <div className="col-md-6">
              <img className=" w-100" src={leads} alt="leads" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
