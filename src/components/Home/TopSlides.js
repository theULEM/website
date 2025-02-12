import React, {Component} from "react";
import msimbo from "../../img/MSIMBOFlyer.png";
import digiul from "../../img/DigiUL.jpg";
import ulemBuilding from "../../img/ulemBuilding.JPG";
import empowermentBreakfast from "../../img/women-empowerment-breakfast-2024.jpg";
// import marathonBanner from "../../img/ULEM-MarathonBanner2022.jpg";
// import banner100 from "../../img/Banner100.png";
// import jobBanner from "../../img/jobBanner.png";
// import breakfast from "../../img/BreakfastMay2022.png";
// import logoBanner from "../../img/sponser_banner.jpg";

import $ from "jquery";
import "popper.js";
import "bootstrap";
import TopSlide from "./TopSlide";

export default class TopSlides extends Component {
    componentDidMount() {
        $(".top-carousel").carousel({
            interval: 2400,
        });
    }

    render() {
        return (
            <div
                id="carouselExampleControls"
                className="carousel slide top-carousel mb-3"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"/>
                    <li data-target="#carouselExampleControls" data-slide-to="1"/>
                    <li data-target="#carouselExampleControls" data-slide-to="2"/>
                    {/*<li data-target="#carouselExampleControls" data-slide-to="3" />*/}
                    {/* <li data-target="#carouselExampleControls" data-slide-to="4" /> */}
                    {/* <li data-target="#carouselExampleControls" data-slide-to="5" /> */}
                    {/* <li data-target="#carouselExampleControls" data-slide-to="6" /> */}
                </ol>
                <div className="carousel-inner">
                    <TopSlide
                      img={empowermentBreakfast}
                      href="https://eventnoire.com/events/ulem-web"
                      active="active"
                      h1=""
                      h3=""
                      x="center"
                      y="top"
                    />
                    <TopSlide
                      img={ulemBuilding}
                      to="/about"
                      // active="active"
                      h1=" Empowering Communities. Changing Lives."
                      h3="From Experiment To Experience To Exposure"
                      x="center"
                      y="top"
                    />


                    {/* <TopSlide
            img={banner100}
            to="/centennialIntro"
            x="center"
            y="center"
          /> */}
                    {/* <TopSlide img={logoBanner} to="/sponsor" x="center" y="center" /> */}
                    {/*<TopSlide img={digiul} to="/program" active={'active'} x="center" y="top"*/}
                    {/*          h1=" Empowering Communities. Changing Lives."*/}
                    {/*          h3="From Experiment To Experience To Exposure"/>*/}
                    <TopSlide img={msimbo} to="/program" x="center" y="top"/>
                    {/* <TopSlide img={marathonBanner} to="/marathon" x="center" y="center" /> */}
                    {/* <TopSlide
            img={jobBanner}
            href="https://www.jobcase.com/ulem"
            x="center"
            y="bottom"
          /> */}
                    {/* <TopSlide
            img={breakfast}
            active="active"
            href="https://e.givesmart.com/events/pR3/"
            x="center"
            y="center"
          /> */}
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
