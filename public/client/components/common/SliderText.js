import React from "react";


const SliderImage = (props) => {
  return (
  <div className={props.className}>
    <h1 className="slider-center">{props.text || "No Text Given"}</h1>
  </div>
);
}


export default SliderImage;
