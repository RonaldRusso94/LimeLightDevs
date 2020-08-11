import FormikForm from "./formik/FormikFormTyler";
import * as Yup from "yup";

const ContactFormSeconday = () => {
  return (
    <div className="bg-purple-600 py-4 flex">
      <div className="w-1/2">a</div>

      <div className=" w-1/2">
        <h2 className=" text-2xl">Lets Do Great Things Together</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          reprehenderit quaerat accusantium distinctio. In voluptatem commodi
          aliquam harum voluptatum possimus?
        </p>
        {/* <ContactForm /> */}
        <FormikForm
          // firstName={{ name: "firstName", errorMessage: "test" }}
          fields={[
            {
              className: "",
              fieldDivClass: "",
              initialValue: "",
              name: "firstName",
              type: "text",
              placeholder: "First Name",
              validationFunction: Yup.string()
                .min(5, "Must be 5 characters or more")
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            },
            {
              fieldClass: "",
              initialValue: "",
              name: "lastName",
              type: "text",
              placeholder: "Last Name",
              validationFunction: Yup.string()
                .min(5, "Must be 5 characters or more")
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            },
            {
              fieldClass: "",
              initialValue: "",
              name: "email",
              type: "email",
              placeholder: "Your Email",
              validationFunction: Yup.string()
                .email("Invalid email address")
                .required("Required"),

            },
            {
              name: "phone",
              type: "number",
              placeholder: "Your Phone",
            },
          ]}
        ></FormikForm>
      </div>
    </div>
  );
};

export default ContactFormSeconday;
