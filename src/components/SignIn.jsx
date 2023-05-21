import React, { useState, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import vector1 from "../assets/buoi3/home/Vetor_2.png";
import vector2 from "../assets/buoi3/home/Vector_1.png";
import "./SignIn.css";
import "./contents/Partial.scss";

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
        console.log(response.data.code);
        if (response.data.code === 401) {
          alert("User does not exist!!");
        } else {
          // localStorage.setItem("isAuthenticated", "true");
          const accessToken = response.data.accessToken;
          console.log(accessToken);
          localStorage.setItem("accessToken", accessToken);
          alert("Logged in successfully 🙌");
          navigate("/reactjs-class-hitclub/");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div>
      <div>
        <header className="navbar">
          <div className="navbar-left">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
          </div>
          <div></div>
        </header>

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
    </div>
  );
};

export default SignIn;
