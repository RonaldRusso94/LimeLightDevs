import FormikForm from "./formik/FormikForm";
import * as Yup from "yup";

const ContactFormSeconday = () => {
  return (
    <div className="bg-purple-600 p-4 my-8 sm:flex xl:mx-32">
      <div className=" flex flex-col justify-center items-center sm:w-1/2 sm:px-4 my-4">
        <img src="http://placekitten.com/g/400/200" alt="" />
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
        <FormikForm
          fields={[
            {
              formClass: "",
              fieldClass: "",
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
        />
      </div>
    </div>
  );
};

export default ContactFormSeconday;
