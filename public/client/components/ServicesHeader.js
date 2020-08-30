import React from "react";

const ServicesHeader = ({}) => {
    return (<>
        <div className="block mb-4">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Services</h1>
            <hr className="opacity-50 w-1/2" />
          </div>
        </div>
        <div className="block">
          <div className="inline-block w-3/4 md:w-1/2">
            <p>
              Limelight is capable of visualizing even the craziest ideas and
              converting them into amazing elegant websites, amazing
              experiences, and catchy designs
            </p>
          </div>
        </div>
        <div className="my-12">
          <ul>
            <li>Web Icon (Logo)</li>
            <li>Mobile Apps (Logo)</li>
          </ul>
        </div>
        <div className="block">
          <div className="inline-block">
            <h1 className="text-3xl lg:text-4xl mb-2 font-bold">
              Our customers love their apps!
            </h1>
          </div>
        </div>
        <div className="block mb-4 md:mb-8">
          <p className="inline-block w-3/4 md:w-1/2">
            Check our portfolio to find cool designs that we've made with past
            customers
          </p>
        </div>
    </>)
}

export default ServicesHeader
