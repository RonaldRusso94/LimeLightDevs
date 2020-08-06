import {useRef} from "react";
import React from "react";
import Slider from "react-slick";
import  SliderImage from "./SliderImage"

const Carousel = ({imagesPerSlide, images}) => {
  const slidesToShow = parseInt(`${imagesPerSlide}`, 10) || 1;
  const slidesToShow1280 = imagesPerSlide < 4 ? imagesPerSlide : 4
  const slidesToShow1024 = parseInt(`${imagesPerSlide}`, 10) || 1;
  const slidesToShow600 = parseInt(`${imagesPerSlide}`, 10) || 1;
  const slidesToShow480 = parseInt(`${imagesPerSlide}`, 10) || 1;


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
          slidesToShow: Math.min(4, slidesToShow)
        }
      },
      {
        breakpoint: 1024,
        settings: {
          ...baseSettings,
          slidesToShow: Math.min(3, slidesToShow)
        }
      },
      {
        breakpoint: 600,
        settings: {
          ...baseSettings,
          slidesToShow: Math.min(2, slidesToShow)
        }
      },
      {
        breakpoint: 480,
        settings: {
          ...baseSettings,
          dots: false,
          slidesToShow: Math.min(1, slidesToShow)
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
