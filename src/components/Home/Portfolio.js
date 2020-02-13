import React from "react";
import { connect } from "react-redux";
import { fetchPorfolio } from "../../modules/portfolio";

class Portfolio extends React.Component {
  async componentDidMount() {
    const { fetchPorfolio } = this.props;
    const response = await fetchPorfolio();
    if (!response.status) {
      console.log(response.message);
    }
  }

  renderPortfolio = () => {
    const { items } = this.props;

    return items.map(item => {
      return (
        <div className="portfolio-item" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div className="information">
            <div className="title">{item.title}</div>
            <a href={item.url} className="visit">
              Visit
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section className="block block--grey section" id="portfolio">
        <h4 className="sub-title">Portfolio</h4>
        <h3 className="title" data-aos="fade-right">
          Creative works
        </h3>
        <div className="portfolio flex" data-aos="fade-up">
          {this.renderPortfolio()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ ...state.portfolio });

export default connect(mapStateToProps, {
  fetchPorfolio
})(Portfolio);
