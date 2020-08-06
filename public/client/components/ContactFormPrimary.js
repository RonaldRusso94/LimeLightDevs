import React from "react";
import {Formik, Field, Form} from "formik";
import Input from "../components/common/Input";
const ContactFormPrimary = () => {
    return (<>
    <div className="container m-10 w-1/3 bg-white p-5">
        <h2 className="text-3xl font-bold text-center">Let's talk business!</h2>
        <Formik 
            initalValues={{ 
                name: "",
                email: "", 
                phone: "", 
                project: ""
            }}
            onSubmit = { values => alert(JSON.stringify(values))}
            >
                {(props) => (
                <Form className="">
					<Field id="name" name="name" placeholder="Name" className="block m-5 bg-transparent border-b border-teal-500 py-2"/>

					<Field id="email" name="email" placeholder="Email" className="block m-5"/>

					<Field id="phone" name="phone" placeholder="Phone number" className="block m-5"/>

					<Field id="project" name="project" placeholder="Project details" className="block m-5"/>

                    <Field name="streetname" component={Input} placeholder="streetname" className="block m-5 bg-transparent border-b border-teal-500 py-2"/>
					<button type="submit" className="bg-indigo-700 mx-5 my-3 py-1 px-6 text-white rounded-sm">Send</button>
                </Form>
                )}
        </Formik>
    </div>
    </>)
}

export default ContactFormPrimary;
