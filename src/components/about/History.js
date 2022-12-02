import React, { Component } from "react";
import $ from "jquery";

import HistorySlide from "./HistorySlide";

import slide2 from "../../img/Slide2.jpg";
import slide3 from "../../img/Slide3.jpg";
import slide4 from "../../img/Slide4.jpg";
import slide5 from "../../img/Slide5.jpg";
import slide6 from "../../img/Slide6.jpg";
import slide7 from "../../img/Slide7.jpg";
import slide8 from "../../img/Slide8.jpg";
import slide9 from "../../img/Slide9.jpg";
import slide10 from "../../img/Slide10.jpg";
import slide11 from "../../img/Slide11.jpg";
import slide12 from "../../img/Slide12.jpg";
import slide13 from "../../img/Slide13.jpg";
import slide14 from "../../img/Slide14.jpg";

export default class History extends Component {

    componentDidMount() {
        $(".top-carousel").carousel({
            interval: 2400,
        });
    }

  render() {
    return (
      <div className="container">

        <div
            id="carouselExampleControls"
            className="carousel slide top-carousel mb-3"
            data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleControls" data-slide-to="1" />
            <li data-target="#carouselExampleControls" data-slide-to="2" />
            <li data-target="#carouselExampleControls" data-slide-to="3" />
            <li data-target="#carouselExampleControls" data-slide-to="4" />
            <li data-target="#carouselExampleControls" data-slide-to="5" />
            <li data-target="#carouselExampleControls" data-slide-to="6" />
            <li data-target="#carouselExampleControls" data-slide-to="7" />
            <li data-target="#carouselExampleControls" data-slide-to="8" />
            <li data-target="#carouselExampleControls" data-slide-to="9" />
            <li data-target="#carouselExampleControls" data-slide-to="10" />
            <li data-target="#carouselExampleControls" data-slide-to="11" />
            <li data-target="#carouselExampleControls" data-slide-to="12" />
          </ol>

          <div className="carousel-inner">
            <HistorySlide img={slide2} to="#" active="active" x="center" y="top" />
            <HistorySlide img={slide3} to="#" x="center" y="top" />
            <HistorySlide img={slide4} to="#" x="center" y="top" />
            <HistorySlide img={slide5} to="#" x="center" y="top" />
            <HistorySlide img={slide6} to="#" x="center" y="top" />
            <HistorySlide img={slide7} to="#" x="center" y="top" />
            <HistorySlide img={slide8} to="#" x="center" y="top" />
            <HistorySlide img={slide9} to="#" x="center" y="top" />
            <HistorySlide img={slide10} to="#" x="center" y="top" />
            <HistorySlide img={slide11} to="#" x="center" y="top" />
            <HistorySlide img={slide12} to="#" x="center" y="top" />
            <HistorySlide img={slide13} to="#" x="center" y="top" />
            <HistorySlide img={slide14} to="#" x="center" y="top" />
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        
      </div>
    );
  }
}