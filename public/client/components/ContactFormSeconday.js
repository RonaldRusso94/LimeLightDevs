import ContactForm from "./ContactForm";
import FormikForm from "./formik/FormikForm";
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
              name: "firstName",
              type: "text",
              placeholder: "First Name",
              errorMsg: "Error First",
              yupType: "string",
              rules: [
                { ruleType: "min", ruleMsg: "Must be 3 characters or more" },
              ],
            },
            {
              name: "lastName",
              type: "text",
              placeholder: "Last Name",
              errorMsg: "Error Last",
              yupType: "string",
              rules: [
                { ruleType: "min", ruleMsg: "Must be 3 characters or more" },
              ],
            },
          ]}
        ></FormikForm>
      </div>
    </div>
  );
};

export default ContactFormSeconday;
