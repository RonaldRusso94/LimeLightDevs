import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const FormikForm = ({
  fields,
  onSubmit,
  formClass,
  buttonClass,
  sectionClass,
  fieldClass,
}) => {
  const initialValues = fields.reduce((initialFieldValues, field) => {
    initialFieldValues[field.name] = field.initialValue || "";
    return initialFieldValues;
  }, {});

  const validationSchema = fields
    .filter((field) => typeof field.validationFunction !== "undefined")
    .reduce((validationFunctions, field) => {
      validationFunctions[field.name] = field.validationFunction || "";
      return validationFunctions;
    }, {});

  const formClassFunction = fields.reduce((initialFieldValues, field) => {
    initialFieldValues[field.name] = field.initialValue || "";
    return initialFieldValues;
  }, {});

  if (typeof onSubmit !== "function") {
    onSubmit = (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    };
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={`flex flex-col ${formClass}`}>
            {fields.map(
              ({ name, type, placeholder, sectionClass, fieldClass }) => {
                return (
                  <div
                    key={name}
                    className={`flex flex-col justify-center items-center ${sectionClass}`}
                  >
                    <Field
                      type={type}
                      name={name}
                      placeholder={placeholder || ""}
                      className={`w-10/12 rounded my-2 py-1 px-2 ${fieldClass}`}
                    />
                    <ErrorMessage name={name} />
                  </div>
                );
              }
            )}
          </div>
          <button type="submit" disabled={isSubmitting} className={buttonClass}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

FormikForm.propTypes = {
  fields: PropTypes.array,
  classname: PropTypes.string,
  formClass: PropTypes.string,
  sectionClass: PropTypes.string,
  fieldClass: PropTypes.string,
  buttonClass: PropTypes.string,
};

FormikForm.defaultProps = {
  classname: "",
  formClass: "",
  sectionClass: "",
  fieldClass: "",
  buttonClass: "bg-pink-500 block w-full rounded py-1",
};

export default FormikForm;
