import React, { Component } from "react";
import centennial from "../img/logo.PNG";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Card from "./layout/Card";
import Youtube from "./layout/Youtube";
export default class Home extends Component {
  componentDidMount() {
    window.$(".carousel").carousel({
      interval: 1800
    });
  }

  slide1 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923553_Join%20Week%202019-5.jpg")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };

  slide2 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923693_ULEM%202019%20Annual%20Meeting.png")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };

  slide3 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923608_Taking%20It%20To%20The%20Streets%202019.jpeg")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="full-width">
            <Link to="/centennial">
              <img
                src={centennial}
                alt="centennial"
                className="img-fluid cursor center"
              />
            </Link>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                Upcoming Events
                <i className="fas fa-calendar-alt float-right" />
              </h3>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel">
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active crop"
                    style={this.slide1}
                  />
                  <div className="carousel-item crop" style={this.slide2} />
                  <div className="carousel-item crop" style={this.slide3} />
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <br />
              <Link
                className="btn btn-block btn-lg btn-outline-danger link"
                to="/events">
                Event Calendar
              </Link>
            </div>
            <div className="col-md-4 col-11">
              <a
                href="https://twitter.com/theULEM"
                className="link"
                rel="noopener noreferrer"
                target="_blank">
                <h3 className="btn-outline-danger rounded p-2 nav-link-white">
                  Recent Tweets
                  <i className="fab fa-twitter float-right" />
                </h3>
              </a>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="theULEM"
                noHeader
                noFooter
                options={{ height: 500 }}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="fixed-bg">
          <br />
          <div className="container">
            <div className="card-deck">
              <Card
                title="Train for Employment"
                text="Need job skills? Interested in learning a new skill? Let us help you!"
                link="/program"
                icon="fas fa-graduation-cap fa-2x "
              />
              <Card
                title="Sponsors"
                text="They can never be thanked enough!"
                link="/sponsor"
                icon="fas fa-money-bill fa-2x"
              />
              <Card
                title="Our Impact"
                text="ULEM strives to empower communities and change lives every day."
                link="/impact"
                icon="fas fa-thumbs-up fa-2x"
              />
            </div>
            <br />
            <div className="card-deck">
              <Card
                title="Our Auxiliaries"
                text="Interested in directly making an impact at the Urban League?"
                link="/auxiliaries"
                icon="fas fa-building fa-2x"
              />
              <Card
                title="Become a Member"
                text="Interested in joining the Urban League of Eastern Massachusetts?"
                link="/member"
                icon="fas fa-users fa-2x"
              />
              <Card
                title="Stay in Touch"
                text="Socialize and stay updated on what we are doing through social media!"
                link="/contact"
                icon="fas fa-envelope fa-2x"
              />
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                News
                <i className="far fa-newspaper float-right" />
              </h3>
              <small className="float-right mb-1">Feb. 7, 2019</small>
              <img
                className="img-fluid"
                src="http://www.ypnulem.org/uploads/I%20AM%20Empowered%20Scholarship.png"
                alt="news"
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                repellendus adipisci amet expedita temporibus libero pariatur
                totam error impedit. Quod cum totam ut reiciendis velit sapiente
                expedita blanditiis fugiat ducimus.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                ULEM Youtube
                <i className="fab fa-youtube fa-lg float-right" />
              </h3>
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
