import React, { Component } from "react";
import Slider from "react-slick";

export class Carousel extends Component {
  render() {
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    // var settings = {
    //   // centerMode: true,
    //   dots: true,
    //   arrows: true,
    //   fade: true,
    //   variableWidth: true,
    //   // autoplay: true,
    //   // autoplaySpeed: 5000,
    // };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "slick-dots",
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            className="rounded w-full"
            src="http://placekitten.com/g/400/200"
          />
        </div>
        <div>
          <img
            className="rounded w-full"
            src="http://placekitten.com/g/400/200"
          />
        </div>
        <div>
          <img
            className="rounded w-full"
            src="http://placekitten.com/g/400/200"
          />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
