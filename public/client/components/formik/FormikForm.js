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

  if (typeof onSubmit !== "function") {
    onSubmit = (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    };
  }
  // debugger;
  // const formsFields = fields.map(
  //   (
  //     {
  //       name,
  //       type,
  //       placeholder,
  //       errorMessageComponent,
  //       fieldClass,
  //       sectionClass,
  //     },
  //     index
  //   ) => {
  //     return (
  //       <div className={sectionClass || ""}>
  //         <Field
  //           type={type}
  //           name={name}
  //           placeholder={placeholder || ""}
  //           className={fieldClass || "rounded py-1 px-2"}
  //           key={index}
  //         />
  //         <ErrorMessage name={name} />
  //       </div>
  //     );
  //   }
  // );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={formClass || "flex flex-col my-4"}>
            {fields.map(
              ({
                name,
                type,
                placeholder,
                classname,
                sectionClass,
                fieldClass,
              }) => {
                return (
                  <div
                    key={name}
                    className={
                      sectionClass ||
                      "flex flex-col justify-center items-center"
                    }
                  >
                    <Field
                      type={type}
                      name={name}
                      placeholder={placeholder || ""}
                      className={fieldClass || "w-10/12 rounded my-2 py-1 px-2"}
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
