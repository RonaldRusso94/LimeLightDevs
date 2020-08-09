import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = ({ fields }) => {
  //   const initVals = [];
  //   const initValsFunc = (arr) => {
  //     arr.map((obj) => {
  //       return initVals.push(obj);
  //     });
  //   };

  const arr = [];
  const initialValuesFunction = (arrOfObjs) => {
    arrOfObjs.map((obj) => {
      return arr.push({ [obj.name]: "" });
    });
  };

  console.log(arr);
  initialValuesFunction(fields);
  return (
    <Formik
      initialValues={
        //   fields.map((field) => {
        //     // return console.log(errMsg);
        //     console.log(obj);
        //     return obj.push({ [field.name]: "" });
        //   })
        arr
        //   { firstName: "", lastName: "", email: "", phoneNumber: "" }
      }
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "Must be 3 characters or more")
          .max(20, "Must be 20 characters or less")
          .required("Required"),

        lastName: Yup.string()
          .min(3, "Must be 3 characters or more")
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="">
          <div className="grid grid-cols-2 gap-4 my-4">
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="rounded py-1 px-2"
            />
            <ErrorMessage name="firstName" component="div" />

            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="rounded py-1 px-2"
            />
            <ErrorMessage name="lastName" component="div" />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="rounded py-1 px-2"
            />
            <ErrorMessage name="email" component="div" />

            <Field
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="rounded py-1 px-2"
            />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className=" bg-pink-500 block w-full rounded py-1"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
