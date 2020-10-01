import FormikForm from "./formik/FormikForm";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import api from "../api/index";

const ContactFormSeconday = () => {
  return (
    <div className="bg-purple-600 p-4 my-8 sm:flex xl:mx-32 rounded">
      <div className=" flex flex-col justify-center items-center sm:w-1/2 sm:px-4 my-4">
        <img
          src="https://media.discordapp.net/attachments/758743606898327574/759171363738615818/undraw_message_sent_1030.png?width=886&height=544"
          alt=""
        />
        <p className="text-xs sm:text-base text-center sm:mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, iste!
        </p>
      </div>

      <div className="sm:w-1/2 sm:px-4">
        <h2 className=" text-2xl text-center my-2">
          Lets Do Great Things Together
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          reprehenderit quaerat accusantium distinctio. In voluptatem commodi
          aliquam harum voluptatum possimus?
        </p>

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
            console.log("test :>> ", "test");
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
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center">
                <Field
                  className="w-10/12 rounded my-2 py-1 px-2"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
                <ErrorMessage name="name" />
              </div>

              <div className="flex flex-col justify-center items-center">
                <Field
                  className="w-10/12 rounded my-2 py-1 px-2"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <Field
                  className="w-10/12 rounded my-2 py-1 px-2"
                  name="phone"
                  placeholder="Phone Number"
                  type="text"
                />
                <ErrorMessage name="phone" />
              </div>

              <div className="flex flex-col justify-center items-center">
                <Field
                  component={"textarea"}
                  className="w-10/12 rounded my-2 py-1 px-2"
                  name="message"
                  type="text"
                  placeholder="Summary Of Your Site"
                />
                <ErrorMessage name="message" />
              </div>

              <button
                className="bg-pink-500 block w-full rounded py-1"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactFormSeconday;
