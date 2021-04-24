import axios from "axios";
import React, { useEffect, useRef } from "react";
import "../Login.css";
import base_url from "../api/bootapi";
import { toast, ToastContainer, Zoom } from "react-toastify";
import * as EmailValidator from "email-validator";

const Login = (props) => {
  const uname = useRef(null);
  const upass = useRef(null);
  useEffect(() => {
    document.title = "Signin";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const validator = EmailValidator.validate(uname.current.value);
    if (validator) {
      axios.get(`${base_url}/user/find/${uname.current.value}`).then(
        (response) => {
          let validUser = response.data;
          if (
            validUser.email === uname.current.value &&
            validUser.pass === upass.current.value
          ) {
            props.setTempUser(validUser);
            console.log("hurray");
          } else {
            uname.current.value = "";
            upass.current.value = "";
            console.log("worng username or password!");
          }
        },
        (error) => {
          let user = {
            email: uname.current.value,
            pass: upass.current.value,
            lists: [],
          };
          axios.post(`${base_url}/user/add`, user).then(
            (response) => {
              toast.dark("User added..");
              props.setTempUser(user);
            },
            (error) => {
              toast.error("User Not added");
            }
          );
        }
      );
    } else {
      toast.dark("🔥 Enter Correct Email Address");
    }
  };
  return (
    <div className="main">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      ></ToastContainer>
      <p className="sign mb-1" style={{ alignContent: "center" }}>
        "Sign in" && "Sign up"
      </p>
      <form style={{ alignContent: "center" }} className="form1 mr-5">
        <input
          className="un"
          type="email"
          placeholder="Enter Email"
          name="uname"
          id="uname"
          ref={uname}
          required
        />
        <input
          className="pass"
          type="password"
          placeholder="Password"
          name="upass"
          id="upass"
          required
          ref={upass}
        />
        <span className="mr-5">
          <button className="submit mr-4" onClick={handleSubmit}>
            Sign in
          </button>
        </span>
        <p className="forgot ml-5 mt-2">
          <em>Note: This is the Login and Register page</em>
        </p>
      </form>
    </div>
  );
};
export default Login;
