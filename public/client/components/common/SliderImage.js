import React from "react";

const SliderImage = (props) => {
  return (
    <div className={props.className}>
      <img
        src={props.image}
        alt="Image Not Found"
        className={props.rounded ? "rounded w-full" : "slider-center"}
      />
    </div>
  );
};

export default SliderImage;
