import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const ContactFormPrimary = () => {
  return (
    <div className="mt-16 flex flex-wrap-reverse items-center">
      <div className="md:w-6/12 w-full">
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
      <div className="md:w-6/12 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mt-5">Contact Us</h2>
        <p className="text-gray-800 text-xl mt-5">order@designdok.com</p>
        <p className="text-blue-700 text-xl">+123 456 789</p>

        <img src="https://designdok.com/assets/images/animation_banner.gif" />
      </div>
    </div>
  );
};

export default ContactFormPrimary;
