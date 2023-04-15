import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  // const history = useNavigate();
  const [signupFormData, setSignupFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  // const [signUpData, setSignUpData] = useState([]);

  const inputHandler = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  const loginFormHandler = async (e) => {
    e.preventDefault();
    // const {id, name ,email, password} = signupFormData
    const storeData = JSON.parse(localStorage.getItem("makemytrip"));

    if (
      !(signupFormData.name && signupFormData.email && signupFormData.password)
    ) {
      alert("Please Enter Details");
    } else {
      const data = {
        id: new Date().getTime().toString(),
        name: signupFormData.name,
        email: signupFormData.email,
        password: signupFormData.password,
      }

      // const allInputData = {
      //   id: new Date().getTime().toString(),
      //   name: signupFormData,
      // };
      // setSignUpData([...signUpData, signupFormData]);

      if (storeData != null) {
        localStorage.setItem(
          "makemytrip",
          JSON.stringify([...storeData, data])
        );
      } else {
        localStorage.setItem("makemytrip", JSON.stringify([data]));
        
      }
    }
    setSignupFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  // console.log(signupFormData);
  // console.log(signUpData);
  return (
    <>
      <h2 className="text-center text-xl font-medium border-b-2 border-black ">
        SignUp Form
      </h2>
      <div className="  ml-4 mr-4 h-[500px]">
        <form className="flex flex-col items-center justify-center h-  ml-14 mr-14 ">
          <label className=" p-4 font-medium" htmlFor="name">
            {" "}
            Name:
            <input
              className=" block p-2 border border-black rounded-md w-96"
              name="name"
              type="text"
              value={signupFormData.name}
              onChange={inputHandler}
            />
          </label>
          <label className=" p-4 font-medium" htmlFor="email">
            {" "}
            Email:
            <input
              className=" block p-2 border border-black rounded-md w-96"
              name="email"
              type="email"
              value={signupFormData.email}
              onChange={inputHandler}
            />
          </label>
          <label className=" p-4 font-medium" htmlFor="password">
            {" "}
            Password:
            <input
              className=" block p-2 border border-black rounded-md w-96"
              name="password"
              type="password"
              value={signupFormData.password}
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
            Submit
          </button>
          <p className="mt-4">
            Already a member?{" "}
            <NavLink to="/login">
              <span className="text-sky-600 font-medium">LogIn</span>
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
