import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
const ContactForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),

        password: Yup.string()
          .min(5, "Must be 5 characters or more")
          .max(20, "Must be 20 characters or less")
          .required("Required"),
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
              name="phone"
              placeholder="Phone Number"
              className="rounded py-1 px-2"
            />
            <ErrorMessage name="phone" component="div" />
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

export default ContactForm;
