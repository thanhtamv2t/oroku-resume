import React from "react";
import avatar from "../../img/profile.jpg";
const About = () => {
  return (
    <section className="block section" id="about">
      <h4 className="sub-title">Something</h4>
      <h3 className="title" data-aos="fade-right">
        About me
      </h3>
      <div className="flex about-me">
        <div className="about-me__photo" data-aos="fade-right">
          <img src={avatar} alt="About me" />
        </div>
        <div className="about-me__content" data-aos="fade-left">
          <h4 className="sub-title">About me</h4>
          <h3 className="title">I'm Thanh Tam & Developer</h3>
          <p className="text-grey">
            I'm a passionate developer with approximately 1.5 year Experiences.
            I have a good research skill & always willing to learn for work.
          </p>
          <div className="about-me__content__information text-grey">
            <ul>
              <li>
                <b>Birthday:</b> 10 November 1995
              </li>
              <li>
                <b>Degree:</b> Software Engineer
              </li>
              <li>
                <b>Website:</b> www.orokucode.com
              </li>
              <li>
                <b>Mail:</b> thanhtam.v2t@gmail.com
              </li>
              <li>
                <b>Phone:</b> +84 898-517-665
              </li>
              <li>
                <b>Git:</b> /thanhtamv2t
              </li>
            </ul>
          </div>
          <div className="about-me__controls">
            <a href="#contact" className="btn">
              Hire me
            </a>
            &nbsp;
            <a
              href="https://i.topcv.vn/vanthanhtam?ref=2156617"
              className="btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
