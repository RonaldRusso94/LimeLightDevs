import PackageDeal from "./PackageDeal";
import { useState, useEffect } from "react";
import Button from "./common/Button";

import api from "../api/index";

const Packages = () => {
  const [buttonToggle, setButtonToggle] = useState("ecommerce-packages");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await api.get(`/${buttonToggle}`);
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
    // eslint-disable-next-line
  }, [buttonToggle]);

  return (
    <div className="bg-gray-200 my-8 p-4">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">My Packages</h1>
        <p className="lg:w-10/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, porro
          exercitationem consequuntur velit quo nihil maxime, incidunt quibusdam
          libero quae sit? Nisi repudiandae dolor consectetur quisquam eaque
          harum excepturi expedita.
        </p>
      </div>

      {/* Buttons - Basic Packages / Ecommerce Packages */}
      <div className="flex flex-wrap justify-center">
        <Button
          onClick={() => {
            setButtonToggle("basic-packages");
          }}
          className={`m-1 p-2 rounded border-2 ${
            buttonToggle === "basic-packages" ? "bg-blue-500 text-white" : ""
          }`}
        >
          Basic Packages
        </Button>

        <Button
          onClick={() => {
            setButtonToggle("ecommerce-packages");
          }}
          className={`m-1 p-2 rounded border-2 ${
            buttonToggle === "ecommerce-packages"
              ? "bg-blue-500 text-white"
              : ""
          }`}
        >
          Ecommerce Packages
        </Button>
      </div>

      {/* Packages */}
      <div className="flex flex-wrap justify-center">
        {/* <div className="py-4 px-0 sm:px-4">
          {items.map((item) => {
            return <PackageDeal item={item} />;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Packages;
