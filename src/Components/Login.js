import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.toString().length < 8) {
    errors.password = "Password must be more than 8 Characters";
  }

  return errors;
};

function Login() {
  const [item, setItem] = useState([
    {
      id: 1,
      email: "test11@gmail.com",
      password: "tttttttt",
    },

    {
      id: 2,
      email: "admin11@gmail.com",
      password: "aaaaaaaa",
    },

    {
      id: 1,
      email: "rahul11@gmail.com",
      password: "rrrrrrrr",
    },
  ]);

  localStorage.setItem("user", JSON.stringify(item));
  let items = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
        var filteredData = items.filter(
            (x) => x.email == values.email && x.password == values.password
          );
          if (filteredData.length > 0) {
            console.log("Login Successful");
            toast.success("Successfully Login ", {
              position: toast.POSITION.TOP_CENTER,
            });
            localStorage.setItem("login", true);
            navigate("/home");
          } else {
            toast.error("Invalid UserName or Password", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        
      
     
    },
  });

  return (
    <div>
      {localStorage.getItem("login") ? (
        <>

        <div>   <img src="/ok.jpg" width="200" height="200" /></div>
          <div>
            <h1> You are alredy LoggedIn....</h1>
          </div>
         
        </>
        
      ) : (
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="login-form-container border border-primary container-xl ">
            <h1>Login</h1>
            <div>
              <label htmlFor="email" className="email-label">
                Email
              </label>
            </div>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <div>
              <label htmlFor="password" className="password-label">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      )}

      <ToastContainer limit={2} autoClose={2000} />
    </div>
  );
}

export default Login;
