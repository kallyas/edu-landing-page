/* eslint-disable */
import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="center-image">
        <img alt="" className="logo-img" src="https://res.cloudinary.com/kallyasmedia/image/upload/v1644844809/image_rdghq6.png" />
      </div>

      <div className="hero">
        <h2>Learn, Live, Lead.</h2>
        <p>
          Unlock your Brilliance with our hands-on <a href="https://enrollment-v3.vercel.app/">beginner</a>{" "}
          and <a href="https://outbox.co.ug/">expert training</a>. Outbox Edu Team has been
          immensely successful in creating a global network of a highly adept intelligent workforce
          that can help your company achieve their mission-critical 
          <a href="https://outbox.co.ug/"> projects and goals</a>
        </p>
        <div className="btn-div">
          <a href="https://enrollment-v3.vercel.app/">
            <button className=" my-btn btn-red">I'm new to the Industry</button>
          </a>
          <br className="d-block d-md-none" />
          <a href="https://outbox.co.ug/">
            <button className=" my-btn btn-red-outline">I need industry experience</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
