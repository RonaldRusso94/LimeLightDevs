import React from "react";


const SliderImage = (props) => {
  return (
  <div className={props.className}>
    <img src={props.image} alt="Image Not Found" />
  </div>
);
}


export default SliderImage;
