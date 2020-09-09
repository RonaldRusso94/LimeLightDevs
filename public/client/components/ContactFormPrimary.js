import React from "react";
import {Formik, Field, Form} from "formik";
import Input from "../components/common/Input";
const ContactFormPrimary = ({className}) => {
  return (
    <div className={className || "grid sm:grid-cols-2 sm:grid-row-1 grid-cols-1 grid-row-2 w-full sm:py-8 sm:my-8"}>
      <div className="w-full bg-white card">
        <h2 className="text-4xl font-bold text-left mt-5 mx-3 md:mx-10 mb-10">
          Let's talk business!
        </h2>
        <Formik
          initalValues={{
            name: "",
            email: "",
            phone: "",
            project: "",
          }}
          onSubmit={(values) => alert(JSON.stringify(values))}
        >
          {(props) => (
            <Form className="">
              <Field name="name" component={Input} placeholder="Full name" />
              <Field name="email" component={Input} placeholder="Email id" />
              <Field
                name="phone-number"
                component={Input}
                placeholder="Ph. no."
              />
              <Field
                name="project-details"
                component={Input}
                placeholder="Project Details"
              />
              <Field
                name="streetname"
                component={Input}
                placeholder="streetname"
              />
              <button
                type="submit"
                className="bg-indigo-700 mx-10 my-3 py-1 px-6 text-white rounded-sm"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="mt-10 w-full bg-white sm:m-0">
        <h2 className="text-4xl font-bold mt-5">Contacts</h2>
        <p className="text-gray-800 text-xl mt-5">order@designdok.com</p>
        <p className="text-blue-700 text-xl">+123 456 789</p>
        <img src="https://designdok.com/assets/images/animation_banner.gif" />
      </div>
    </div>
  );
};

export default ContactFormPrimary;
