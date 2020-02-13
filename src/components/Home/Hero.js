import React from "react";
import avatar from "../../img/top-avatar.jpg";

const Hero = () => {
  return (
    <section className="block block--full hero-section" id="home">
      <div className="hero-section__view" data-aos="fade-up">
        <div className="hero-section__view__avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="hero-section__view__name">Thanh Tam</div>
        <div className="hero-section__view__position">I'm A Developer</div>
      </div>
      <div className="hero-section__scrollDown">
        <a href="#about">
          <i className="lni-angle-double-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
