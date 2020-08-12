import React from "react";
import PropTypes from "prop-types";

const ImageContainer = (props) => {
  let baseClass = ["flex", "w-full", "justify-center"];
  let flexClasses = ["flex", "flex-col md:flex-row"];

  if (props.reverse) {
    flexClasses = ["flex", "flex-col-reverse", "md:flex-row-reverse"];
  }

  const classes = baseClass.concat(flexClasses);

  if (props.className) {
    classes.push(props.className);
  }

  return <div className={classes.join(" ")}>{props.children}</div>;
};

ImageContainer.displayName = "Image.Container";
ImageContainer.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
};

export default ImageContainer;
