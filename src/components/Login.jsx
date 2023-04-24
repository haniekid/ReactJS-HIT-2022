import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("Field is required!").email(),
          password: Yup.string().required("Field is required!"),
          // .matches(
          //   /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
          //   "The password entered is incorrect!"
          // ),
        })}
        onSubmit={async (userData) => {
          try {
            const response = await axios.post(
              "https://reqres.in/api/login",
              userData
            );
            console.log(response);
            alert("Logged in successfully 🙌");
          } catch (error) {
            console.error(error);
            if (
              error.response &&
              error.response.data &&
              error.response.data.error
            ) {
              alert(error.response.data.error);
            } else {
              alert("Login failed. 😢");
            }
          }
        }}
      >
        <Form className="form">
          <h1>Login</h1>
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
            <button className="button">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
