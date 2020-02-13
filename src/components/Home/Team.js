import React from "react";
// import avatar from "../../img/about.jpg";
import duoc from "../../img/teamate/duoc.jpg";
import huong from "../../img/teamate/huong.jpg";
import sang from "../../img/teamate/sang.jpg";

const Team = props => {
  return (
    <section className="block section" id="team">
      <h4 className="sub-title">In my</h4>
      <h3 className="title" data-aos="fade-right">
        TEAM
      </h3>
      <div className="flex team__cards">
        <div className="team__card" data-aos="fade-right">
          <div className="team__card__avatar">
            <img src={duoc} alt="Team mate 1" />
          </div>
          <div className="team__card__name">Duoc Dang</div>
          <div className="team__card__position">Frontend Developer</div>
          <div className="team__card__social">
            <ul className="list flex">
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-github-original"></i>
                </a>
              </li>
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-linkedin-original"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team__card" data-aos="fade-up">
          <div className="team__card__avatar">
            <img src={huong} alt="Team mate 1" />
          </div>
          <div className="team__card__name">Huong Nguyen</div>
          <div className="team__card__position">UX/UI Developer</div>
          <div className="team__card__social">
            <ul className="list flex">
              <li>
                <a href="https://vncoder.info">
                  <i className="lni-website"></i>
                </a>
              </li>
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-github-original"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team__card" data-aos="fade-left">
          <div className="team__card__avatar">
            <img src={sang} alt="Team mate 1" />
          </div>
          <div className="team__card__name">Sang Nguyen</div>
          <div className="team__card__position">Frontend Developer</div>
          <div className="team__card__social">
            <ul className="list flex">
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-github-original"></i>
                </a>
              </li>
              <li>
                <a href="https://orokucode.com">
                  <i className="lni-linkedin-original"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
