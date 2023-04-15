import React, { useEffect, useState } from "react";
import bgheader from "../image/ezgif.com-webp-to-jpg.jpg";
import logo from "../image/mmtLogoWhite.png";
import PersonIcon from "@mui/icons-material/Person";
// import Login from "../Login/Login";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState("");
  

  useEffect(() => {
    const getUser = localStorage.getItem("newMMT");
    console.log(getUser);

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      // console.log(user);
      setUserName(user.name);
    }
  }, [location]);

  const removeStorageHandler = () => {
    localStorage.removeItem("newMMT");
    setUserName("")
    navigate("/");
  };

  // console.log(userName);

  return (
    <div
      className="w-[100%] flex flex-row"
      style={{ height: "200px",widows:'100%', backgroundImage: `url(${bgheader})` }}
    >
      <div className="w-full flex h-12 items-center justify-around">
        <NavLink to="/">
          <img className="w-28 h-10 " src={logo} alt="" />
        </NavLink>
        <div className="">
          <NavLink to="/">
            <button className="text-white" onClick={removeStorageHandler}>
              <PersonIcon /> {userName}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
