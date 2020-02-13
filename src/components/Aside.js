import React from "react";

class Aside extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <aside
        className={`sidebar ${isOpen ? "sidebar--show" : "sidebar--hidden"}`}
      >
        <div className="sidebar__logo">
          <div className="sidebar__logo__brand">Oroku</div>
          <div className="sidebar__logo__slogan">Thanh Tam</div>
        </div>

        <div className="sidebar__navigation">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="sidebar__social">
          <ul>
            <li>
              <a href="https://fb.me/thanhtammap">
                <i className="lni-facebook-filled"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/map.v2t/">
                <i className="lni-instagram-filled"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/thanhtamv2t">
                <i className="lni-github-original"></i>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="lni-linkedin-original"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__footer">
          &copy; 2019 by <a href="https://orokucode.com">OrokuCode</a>
        </div>
      </aside>
    );
  }
}

export default Aside;
