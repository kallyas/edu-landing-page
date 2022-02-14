/* eslint-disable */
import React from "react";

const Programs = () => {
  return (
    <div className="container-fluid program-content text-center">
      <h3 className="heading">BY EDU Team</h3>
      <p className="slogan">
        We cater for every level of <br /> expertise and needs in the industry.
      </p>

      <div className="container-fluid my-container">
        <div className="row">
          <div className="col-lg-4 program-card-zed text-center">
            <div className="program-card text-left mx-auto m-4 m-lg-0">
              <img
                alt=""
                className="card-bg-svg-1 d-none d-xl-block"
                src="https://res.cloudinary.com/kallyasmedia/image/upload/v1644844714/left_bvmv7q_fsst6w.png"
              />
              <div className="zed-content">
                <p>
                  We understand a complete beginner cannot become a professional after a few weeks,
                  the aim here is to get you familiar enough with each the tools such that you’ll be
                  able to continue learning on your own with minimal support.
                </p>
                <h3>
                  <a href="#">I want to be trained &gt;</a>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="program-card text-left mx-auto m-4 m-lg-0">
              <p>
                We place you in a work simulation. We give you tasks every week, the tasks ranges
                from easy to hard as you progress from stage to stage, making it to the final stage
                means you are ready for actual work.
              </p>
              <h3>
                <a href="#">I want to join the internship &gt;</a>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 program-card-zed">
            <div className="program-card text-left mx-auto m-4 m-lg-0">
              <img
                alt=""
                className="card-bg-svg-2 d-none d-xl-block"
                src="https://res.cloudinary.com/kallyasmedia/image/upload/v1644844578/edu_bg_zmdfbf.png"
              />
              <div className="zed">
                <p>
                  Keeping pace with projects and being on the look out for the extremely talented
                  individuals has become ever more challenging. Here is where OutboxEdu Team comes into
                  play to bring the best suited talent for your company
                </p>
                <h3>
                  <a href="#">I am looking for talent &gt;</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
