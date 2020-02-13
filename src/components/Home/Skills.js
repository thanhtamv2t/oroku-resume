import React from "react";
import Progress from "../Common/Progress";

const Skills = () => {
  return (
    <section className="block block--grey section" id="skills">
      <h4 className="sub-title">Abilities</h4>
      <h3 className="title" data-aos="fade-right">
        My skills
      </h3>
      <div className="flex skills">
        <div className="skills_tech text-grey" data-aos="fade-right">
          <ul className="list">
            <li>
              <b>Javascript</b>
              <br />
              [Nodejs, Reactjs, Angularjs]
              <Progress percent={70} />
            </li>
            <li>
              <b>PHP</b>
              <br />
              [CI, Laravel]
              <Progress percent={50} />
            </li>
            <li>
              <b>SQL</b>
              <br />
              [MySQL, MSSQL, SQLite]
              <Progress percent={50} />
            </li>
            <li>
              <b>NoSQL</b>
              <br />
              [MongoDB]
              <Progress percent={40} />
            </li>
            <li>
              <b>HTML/CSS</b>
              <br />
              [SCSS, Gulp, UI Framework]
              <Progress percent={75} />
            </li>
          </ul>
        </div>
        <div className="skills_soft text-grey" data-aos="fade-left">
          <ul className="list">
            <li>
              <b>Linux</b>
              <br />
              System experience
              <Progress percent={50} />
            </li>
            <li>
              <b>SVN/Git</b>
              <br />
              [Bitbucket, Gitlab, ...]
              <Progress percent={75} />
            </li>
            <li>
              <b>English</b>
              <Progress percent={55} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
