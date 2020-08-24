import React from "react";
import PropTypes from "prop-types";

const ServicesInfo = ({ title, description, features, button }) => {
  return (
    <div className="px-8 mb-8">
      <h1 className="text-4xl mb-6">{title}</h1>
      <div className="w-3/4">
        <p className="text-lg">{description}</p>
      </div>
      <ul className="ml-6 my-8 text-lg list-disc">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a
        href="#"
        className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
      >
        {button}
      </a>
    </div>
  );
};

ServicesInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  button: PropTypes.string,
};

export default ServicesInfo;
