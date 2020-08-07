import React from "react";


const SliderImage = (props) => {
  return (
  <div className={props.className}>
    <img src={props.image} alt="http://placekitten.com/g/400/200" />
  </div>
);
}


export default SliderImage;
