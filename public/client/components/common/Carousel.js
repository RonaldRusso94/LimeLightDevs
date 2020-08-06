import {useRef} from "react";
import React from "react";
import Slider from "react-slick";
import  SliderImage from "./SliderImage"

const Carousel = ({imagesPerSlide, images}) => {
  const slidesToShow = parseInt(`${imagesPerSlide}`, 10) || 1;
  const baseSettings = {
    className:"slider p-4",
    dots: true,
    dotsClass: "pt-2 slick-dots",
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  }
  const settings = {
    ...baseSettings,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          ...baseSettings,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          ...baseSettings,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          ...baseSettings,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          ...baseSettings,
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  };
  const slides = images.map((image, index) => {
    return(
      <SliderImage image={image} key={index}/>
    )
  })
    return (
    <Slider {...settings}>
      {slides}
    </Slider>
  );
}
 

export default Carousel;
