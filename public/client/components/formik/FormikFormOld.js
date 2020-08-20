import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { validationFunction, initialValuesFunction } from "./FormFormFunctions";

const FormikForm = ({ fields }) => {
  let initialValuesObj = {};
  // initialValuesObj = {[obj.name]: "", ...}
  initialValuesFunction(initialValuesObj, fields);

  let validationArr = [];
  // Defining [{name: "", rules:[{}], yupType: ""}, ...]
  validationFunction(validationArr, fields);

  const validationObject = {};
  // Sets [item.name]: Yup[item.yupType]
  validationArr.forEach((item) => {
    validationObject[item.name] = Yup[item.yupType];
  });

  const validationRule = (arrOfObjs) => {
    arrOfObjs.map((obj) => {
      obj.rules.map((rule) => {
        // validationObject[rule.ruleType];
        console.log("rule :>> ", rule);
      });
    });
  };

  validationRule(fields);
  console.log("validationArr :>> ", validationArr);
  console.log("validationObject :>> ", validationObject);
  return (
    <Formik
      initialValues={
        // initialValuesObj
        { firstName: "", lastName: "", email: "", phoneNumber: "" }
      }
      validationSchema={
        Yup.object(validationObject || {})

        // Yup.object({
        //   firstName: Yup.string()
        //     .min(3, "Must be 3 characters or more")
        //     .max(20, "Must be 20 characters or less")
        //     .required("Required"),

        //   lastName: Yup.string()
        //     .min(3, "Must be 3 characters or more")
        //     .max(20, "Must be 20 characters or less")
        //     .required("Required"),
        //   email: Yup.string()
        //     .email("Invalid email address")
        //     .required("Required"),
        // })
      }
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
            <div className=" flex flex-col">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="rounded py-1 px-2"
              />
              <ErrorMessage name="firstName" />
            </div>

            <div className=" flex flex-col">
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="rounded py-1 px-2"
              />
              <ErrorMessage name="lastName" component="div" />
            </div>

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
