import { useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import SliderImage from "./common/SliderImage";
import SliderText from "./common/SliderText";
const ProjectCarousal = ({ numberPerSlide, slideValues }) => {
  if (slideValues === undefined || slideValues.length === 0) {
    console.warn("The slides prop is left undefined, please provide slides");
    slideValues = [
      {
        type: "image",
        value: "https://via.placeholder.com/450/?text=No+Images+Provided",
      },
    ];
  }
  const slidesToShow = parseInt(`${numberPerSlide}`, 10) || 1;

  const baseSettings = {
    className: "slider p-8",
    dots: true,
    draggable: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  const settings = {
    ...baseSettings,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          ...baseSettings,
          slidesToShow: Math.min(4, slidesToShow),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          ...baseSettings,
          slidesToShow: Math.min(3, slidesToShow),
        },
      },
      {
        breakpoint: 600,
        settings: {
          ...baseSettings,
          slidesToShow: Math.min(2, slidesToShow),
        },
      },
      {
        // MOBILE VIEW DOTS?
        breakpoint: 480,
        settings: {
          ...baseSettings,
          dots: false,
          slidesToShow: Math.min(1, slidesToShow),
        },
      },
    ],
  };
  const slides = slideValues.map((slide, index) => {
    if (slide.type === "image") {
      return (
        <SliderImage
          image={slide.value}
          key={index}
          className="p-2 slider-image"
        />
      );
    } else {
      return (
        <SliderText
          text={slide.value}
          key={index}
          className="p-2 slider-text"
        />
      );
    }
  });
  return <Slider {...settings}>{slides}</Slider>;
};

export default ProjectCarousal;
