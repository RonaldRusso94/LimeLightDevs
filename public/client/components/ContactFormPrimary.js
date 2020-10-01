import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../api/index";

const ContactFormPrimary = () => {
  return (
    <div className="mt-16 flex flex-wrap-reverse items-center">
      <div className="w-full md:w-6/12 lg:w-7/12">
        {/* text-4xl font-bold text-left mx-3 md:mx-10 mb-10 */}
        <h2 className=" text-4xl font-bold mb-10 text-center">
          Let's talk business!
        </h2>
        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, "Must be 3 characters")
              .max(15, "Must be 15 characters or less")
              .required("Required"),

            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.string(),
            message: Yup.string()
              .min(10, "Must be 10 characters or more")
              .required("Required"),
          })}
          onSubmit={async (
            { name, email, phone, message },
            { setSubmitting, resetForm }
          ) => {
            try {
              const data = {
                to: "LimeLightDevs@gmail.com",
                from: "LimeLightDevs@gmail.com",
                subject: "LimeLightDevs Contact Form",
                html: `
                <p>${name}</p><br/>
                <p>${email}</p><br/>
                ${phone && `<p>phone: ${phone} </p><br/>`}
                <p>${message}</p><br/>`,
              };
              await api.post(`/email`, data);
              resetForm();

              setSubmitting(false);
            } catch (error) {
              console.log("error :>> ", error);
            }
          }}
        >
          <Form>
            <div className="flex flex-col justify-center items-center">
              <Field
                className="w-full border-b-2 py-1 px-2 my-2"
                name="name"
                placeholder="Name"
                type="text"
              />
              <ErrorMessage name="name">
                {(msg) => (
                  <div className="w-full text-center text-indigo-400">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Field
                className="w-full border-b-2 py-1 px-2 my-2"
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <div className="w-full text-center text-indigo-400">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Field
                className="w-full border-b-2 py-1 px-2 my-2"
                name="phone"
                placeholder="Phone Number"
                type="text"
              />
              <ErrorMessage name="phone">
                {(msg) => (
                  <div className="w-full text-center text-indigo-400">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Field
                component={"textarea"}
                className="w-full border-b-2 py-1 px-2 my-2"
                name="message"
                type="text"
                placeholder="Summary Of Your Site"
              />
              <ErrorMessage name="message">
                {(msg) => (
                  <div className="w-full text-center text-indigo-400">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <button
              className=" bg-indigo-600 text-white block w-full rounded py-1 mt-2"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <div className="w-full md:w-6/12 lg:w-5/12 flex flex-col items-center">
        <h2 className="text-4xl font-bold mt-5">Contact Us</h2>
        <p className="text-gray-800 text-xl mt-5">LimeLightDevs@gmail.com</p>
        <p className="text-blue-700 text-xl">+123 456 789</p>

        <img src="https://designdok.com/assets/images/animation_banner.gif" />
      </div>
    </div>
  );
};

export default ContactFormPrimary;
