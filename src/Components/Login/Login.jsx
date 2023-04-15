import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    Password: "",
  });

  const inputHandler = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    const { email, Password } = loginFormData;
    const getUser = localStorage.getItem("makemytrip");
    console.log(getUser);
    if (!(loginFormData.email && loginFormData.Password)) {
      alert("Please Enter Details");
    } else {
      // setLoginData([...loginData, loginFormData]);
      if (getUser && getUser.length) {
        const userData = JSON.parse(getUser);
        console.log(userData);
        let userLogin = null;
        for (let i = 0; i < userData.length; i++) {
          if (
            email === userData[i].email &&
            Password === userData[i].password
          ) {
            userLogin = {
              id: userData[i].id,
              email: userData[i].email,
              pass: userData[i].password,
              name: userData[i].name,
            };
          }
        }

        if (userLogin === null) {
          alert("invalid details");
          navigate("/");
        } else {
          console.log("User Login Succesfully");
          localStorage.removeItem("newMMT");
          localStorage.setItem("newMMT", JSON.stringify(userLogin));
          navigate("/flights");
        }
      }
    }
    setLoginFormData({
      email: "",
      Password: "",
    });
  };

  // console.log(loginFormData);
  // console.log(loginData);

  return (
    <>
      <h2 className="text-center text-xl font-medium border-b-2 border-black ">
        Login Form
      </h2>
      <div className="  ml-4 mr-4 h-[500px]">
        <form className="flex flex-col items-center justify-center h-80  ml-14 mr-14 ">
          <label className=" p-4 font-medium" htmlFor="email">
            {" "}
            Email:
            <input
              className=" block p-2 border border-black rounded-md w-96"
              name="email"
              type="email"
              value={loginFormData.email}
              onChange={inputHandler}
            />
          </label>
          <label className=" p-4 font-medium" htmlFor="password">
            {" "}
            Password:
            <input
              className=" block p-2 border border-black rounded-md w-96"
              name="Password"
              type="password"
              value={loginFormData.Password}
              onChange={inputHandler}
            />
          </label>
          <button
            className="w-20 h-10 border-none rounded-xl mt-5 font-medium "
            style={{ backgroundColor: "#008CFF" }}
            onClick={(e) => {
              loginFormHandler(e);
            }}
          >
            Login
          </button>
          <p className="mt-4">
            Not a member?{" "}
            <NavLink to="/">
              <span className="text-sky-600 font-medium">Register Now</span>
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
