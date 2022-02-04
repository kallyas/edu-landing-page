import React from "react";

const Programs = () => {
  return (
    <div className="container-fluid program-content text-center">
      <h3 className="heading">BY ZURI Team</h3>
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
                src="https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/left_bvmv7q.png"
              />
              <div className="zed-content">
                <img alt="" src="./img/zuri-training-img.svg" />
                <p>
                  We understand a complete beginner cannot become a professional after a few weeks,
                  the aim here is to get you familiar enough with each the tools such that you’ll be
                  able to continue learning on your own with minimal support.
                </p>
                <h3>
                  <a href="https://training.zuri.team/">I want to be trained &gt;</a>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="program-card text-left mx-auto m-4 m-lg-0">
              <img alt="" src="./img/zuri-internship-img.svg" />
              <p>
                We place you in a work simulation. We give you tasks every week, the tasks ranges
                from easy to hard as you progress from stage to stage, making it to the final stage
                means you are ready for actual work.{" "}
              </p>
              <h3>
                <a href="https://internship.zuri.team/">I want to join the internship &gt;</a>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 program-card-zed">
            <div className="program-card text-left mx-auto m-4 m-lg-0">
              <img
                alt=""
                className="card-bg-svg-2 d-none d-xl-block"
                src="https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/right_yz6hn3.png"
              />
              <div className="zed">
                <img alt="" src="./img/zuri-talent-img.svg" />
                <p>
                  Keeping pace with projects and being on the look out for the extremely talented
                  individuals has become ever more challenging. Here is where Zuri Team comes into
                  play to bring the best suited talent for your company
                </p>
                <h3>
                  <a href="https://talent.zuri.team/">I am looking for talent &gt;</a>
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
