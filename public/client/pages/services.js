import ProjectCarousal from "../components/ProjectCarousal";
import Layout from "../components/layout/Layout";
import React, { Component } from "react";
import ImageGrid from "../components/ImageGrid";
import ContactFormPrimary from "../components/ContactFormPrimary";
import ServicesInfo from "../components/ServicesInfo";
import ServicesHeader from "../components/ServicesHeader";


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
        <ServicesHeader />
        <ProjectCarousal slideValues={images} numberPerSlide="5" className="block mb-16" />
            <ImageGrid
              className="sm:flex-row-reverse flex-col py-8 mb-8"
              content={
                <ServicesInfo
                  title={`Web Applications`}
                  description={`
                All the way from a simple static website to a functional
                web application with lots of features along with the
                modern trends and requirements.
                  `}
                  features={[
                    "Static Web Pages",
                    "E-Commerce Web Applications",
                    "Social Media Web Applications",
                  ]}
                  button={`See Projects`}
                />
              }
              img={
                "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
              }
            />
            <ImageGrid
              className="sm:flex-row flex-col"
              content={
                <ServicesInfo
                  title={`Mobile apps`}
                  className="sm:flex-row-reverse flex-col py-8 mb-8"
                  description={`
                    All the way from a simple mobile apps to a functional
                    mobile application with lots of features along with the
                    modern trends and requirements of the market. 
                    `}
                  features={[
                    "Simple Mobile Apps",
                    "E-Commerce Mobile Applications",
                    "Social Media Application",
                  ]}
                  button={`See Projects`}
                />
              }
              img={
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
        <ContactFormPrimary />
    </Layout>
  );
};

export default services;
