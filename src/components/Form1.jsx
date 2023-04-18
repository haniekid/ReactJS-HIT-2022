import React, { useState } from "react";
import { useFormik } from "formik";

const Form1 = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState(false);
  const handleInputLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleInputFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    hobby: false,
  });

  // object.property
  // object[property]
  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
  };

  const handleError = (e) => {
    // if (e.target.value.length > 10) {
    //   setError(true)
    // }
    return setError(e.target.value.length > 10);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="textForm">
        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          placeholder="enter your name"
          name={firstname}
          onChange={handleError}
          // onChange={handleInputFirstname}
          style={{
            padding: "0.5rem 1rem",
            border: "2px solid #6d6969",
            width: "200px",
            borderRadius: "1rem",
          }}
        />
        <br />

        {error ? <div style={{ color: "red" }}>Qua 10 ky tu</div> : ""}
        <label htmlFor="lastname">Last name: </label>
        <input
          type="text"
          placeholder="enter your name"
          name={lastname}
          // onChange={handleInputLastname}
          onChange={handleError}
          style={{
            padding: "0.5rem 1rem",
            border: "2px solid #6d6969",
            width: "200px",
            borderRadius: "1rem",
          }}
        />
        <br />

        <button
          type="submit"
          // onClick={handleSubmit}
          style={{ padding: "0.3rem 1rem", background: "pink" }}
        >
          Submit
        </button>
      </form>

      {/* <form action={handleSubmit} className="checkboxForm">
        <input
          type="checkbox"
          placeholder="enter your name"
          name={firstname}
          onChange={handleInputChange}
          style={{
            padding: "0.5rem 1rem",
            border: "2px solid #6d6969",
            width: "200px",
            borderRadius: "1rem",
          }}
        />

        <input
          type="checkbox"
          placeholder="enter your name"
          name={lastname}
          onChange={handleInputChange}
          style={{
            padding: "0.5rem 1rem",
            border: "2px solid #6d6969",
            width: "200px",
            borderRadius: "1rem",
          }}
        />
      </form> */}
    </div>
  );
};

export default Form1;

// yup
// formik
// react-hook-form
