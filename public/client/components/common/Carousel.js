import React from "react";
import Slider from "react-slick";
import  SliderImage from "./SliderImage"

const Carousel = (props) => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const {images} = props
  const slides = images.map((image, index) => {
    return(
      <SliderImage image={image} key={index}/>
    )
  })
    return (
    <Slider {...settings} className="slider">
      {slides}
    </Slider>
  );
}
 

export default Carousel;
