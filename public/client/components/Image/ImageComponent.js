import React from "react";
import PropTypes from "prop-types";

const ImageComponent = ({ src, alt }) => {
  const classes = ["flex-1"];
  return <img className={classes.join(" ")} src={src} alt={alt} />;
};

ImageComponent.displayName = "Image.Component";
ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default ImageComponent;
