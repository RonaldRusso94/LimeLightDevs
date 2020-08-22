import ProjectCarousal from "../components/ProjectCarousal";
import Layout from "../components/layout/Layout";
import React, { Component } from "react";
import ImageContainer from "../components/ImageContainer";
import ContactFormPrimary from "../components/ContactFormPrimary";

const services = (props) => {
  // TODO REPLACE WITH API CALL
  const images = [
    {
      type: "image",
      value: "https://via.placeholder.com/100x100",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x101",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x102",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x103",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x104",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x105",
    },
  ];
  const text = [
    {
      type: "text",
      value: "1",
    },
    {
      type: "text",
      value: "2",
    },
    {
      type: "text",
      value: "3",
    },
    {
      type: "text",
      value: "4",
    },
    {
      type: "text",
      value: "5",
    },
    {
      type: "text",
      value: "6",
    },
  ];
  return (
    <Layout>
      <div className="mx-1 md:mx-8 bg-green-400 px-8 py-4 md:px-12 md:py-8">
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
        <div className="block mb-16">
          <ProjectCarousal slideValues={images} numberPerSlide="5" />
        </div>
        <div className="px-16 py-8">
          <div className="mb-8">
            <ImageContainer
              content={
                <div className="px-8 mb-8">
                  <h1 className="text-4xl mb-6">Web</h1>
                  <div className="w-3/4">
                    <p className="text-lg">
                      All the way from a simple static website to a functional
                      web application with lots of features along with the
                      modern trends and requirements.
                    </p>
                  </div>
                  <ul className="ml-6 my-8 text-lg list-disc">
                    <li>Static Web Pages</li>
                    <li>E-Commerce Web Application</li>
                    <li>Social Media Web Application</li>
                  </ul>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
                  >
                    See projects
                  </a>
                </div>
              }
              className="sm:flex-row-reverse flex-col"
              // title={"Web"}
              // description={
              //   "All the way from a simple static website to a functional web application with lots of features along with the modern trends and requirements."
              // }
              img={
                "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
              }
            />
          </div>
          <div>
            <ImageContainer
              className="sm:flex-row flex-col"
              content={
                <div className="px-4 md:px-8 mb-8 md:mb-0">
                  <h1 className="text-2xl md:text-4xl mb-2 md:mb-6">
                    Mobile apps
                  </h1>
                  <div className="w-3/4">
                    <p className="text-lg">
                      All the way from a simple mobile apps to a functional
                      mobile application with lots of features along with the
                      modern trends and requirements of the market.
                    </p>
                  </div>
                  <ul className="ml-6 my-8 text-lg list-disc">
                    <li>Simple Mobile Apps</li>
                    <li>E-Commerce Mobile Applications</li>
                    <li>Social Media Application</li>
                  </ul>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
                  >
                    See projects
                  </a>
                </div>
              }
              // title={"Mobile Apps"}
              // description={"Building a powerful mobile app "}
              img={
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ContactFormPrimary />
        </div>
        {/* <ProjectCarousal slideValues={images} numberPerSlide="5" />
        <ProjectCarousal slideValues={text} numberPerSlide="5" /> */}
        {/* <ImageContainer
          className="mt-16"
          title={"Website"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis enim molestias non quo excepturi."
          }
          img={"http://placekitten.com/g/400/200"}
        />
  
        */}
      </div>
    </Layout>
  );
};

export default services;
