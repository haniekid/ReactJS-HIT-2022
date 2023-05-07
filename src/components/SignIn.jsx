import React from "react";
import Navbar from "./contents/Navbar";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("required!!!"),
    }),
    onSubmit: async (userData) => {
      try {
        const response = await axios.post(
          "https://test-react.agiletech.vn/auth/login",
          userData
        );
        // alert("Logged in successfully 🙌");
        navigate("/home-sign-in");
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
    },
  });
  return (
    <div>
      <Navbar />
      <form onSubmit={formik.handleSubmit} className="form">
        <h1>Sign In</h1>
        <label
          htmlFor="userName"
          style={{
            display: "block",
          }}
        >
          Username:{" "}
        </label>
        <input
          type="text"
          id="userName"
          placeholder=""
          style={{
            padding: "0.5rem 1rem",
            border: "2px solid #6d6969",
            width: "100%",
            borderRadius: "0.5rem",
          }}
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error-username">{formik.errors.username}</div>
        ) : null}
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
