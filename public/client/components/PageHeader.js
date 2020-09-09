import React from "react";

const PageHeader = ({ title, subtitle, className }) => {
  return (
    <div className={className || "container sm:m-3 sm:p-4"}>
      <h1 className="text-6xl">{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
