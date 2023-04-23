import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("Field is required!").email(),
          password: Yup.string()
            .required("Field is required!")
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
              "Password must be at least 6 characters long and contain at least one letter and one digit!"
            ),
        })}
        onSubmit={async (userData) => {
          try {
            const response = await axios.post(
              "https://reqres.in/api/login",
              userData
            );
            console.log(response);
            alert("Registration successful 🙌");
          } catch (error) {
            console.error(error);
            if (
              error.response &&
              error.response.data &&
              error.response.data.error
            ) {
              alert(error.response.data.error);
            } else {
              alert("Registration failed 😢");
            }
          }
        }}
      >
        <Form className="form">
          <h1>Register</h1>
          <div className="field">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              placeholder="Enter your email address"
              className="input "
            ></Field>
            <div className="error">
              <ErrorMessage name="email"></ErrorMessage>
            </div>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input"
            ></Field>
            <div className="error">
              <ErrorMessage name="password"></ErrorMessage>
            </div>
          </div>
          <div>
            <button className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
