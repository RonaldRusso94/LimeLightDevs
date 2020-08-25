import React from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import SliderImage from "./common/SliderImage";

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <SliderImage
            imageClassName="rounded w-full"
            image={slide.src}
            alt={slide.alt}
          />
        </div>
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Carousel;
