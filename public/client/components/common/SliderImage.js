import React from "react";

const SliderImage = (props) => {
  return (
    <div className={props.className}>
      <img
        src={props.image}
        alt={props.alt !== undefined ? props.alt : "Image Not Found"}
        className={
          props.imageClassName !== undefined
            ? props.imageClassName
            : "slider-center"
        }
      />
    </div>
  );
};

export default SliderImage;
