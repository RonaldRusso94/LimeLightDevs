import React from "react";
import PropTypes from "prop-types";

const ImageSection = ({ children, className }) => {
  const classes = ["flex-1"];

  if (className) {
    classes.push(className);
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

ImageSection.displayName = "Image.Section";
ImageSection.propTypes = {
  className: PropTypes.string,
};
export default ImageSection;
