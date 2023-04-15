import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

//Icons
import FlightTakeoffSharpIcon from "@mui/icons-material/FlightTakeoffSharp";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import TaxiAlertOutlinedIcon from "@mui/icons-material/TaxiAlertOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";

import Header from "../Header/Header";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-center">
      <Header />
      <div className="lg:w-2/4 md:w-3/4 sm:w-3/4 h-20 absolute top-3 bg-white mt-10 rounded-lg border flex flex-row items-center justify-center">
        <NavLink to="/flights">
          <div className="m-4 cursor-pointer">
            <FlightTakeoffSharpIcon style={{ width: "50px", height: "40px" }} />
            <p>Flights</p>
          </div>
        </NavLink>

        <NavLink to="/hotels">
          <div className="m-4 cursor-pointer  ">
            <HomeWorkOutlinedIcon style={{ width: "50px", height: "40px" }} />
            <p>Homestys</p>
          </div>
        </NavLink>
        <NavLink to="/trains">
          <div className="m-4 cursor-pointer  ">
            <TrainOutlinedIcon style={{ width: "50px", height: "40px" }} />
            <p>Trains</p>
          </div>
        </NavLink>
        <div className="m-4 cursor-pointer ">
          <AirportShuttleOutlinedIcon
            style={{ width: "50px", height: "40px" }}
          />
          <p>Buses</p>
        </div>
        <div className="m-4 cursor-pointer">
          <TaxiAlertOutlinedIcon style={{ width: "50px", height: "40px" }} />
          <p>Cabs</p>
        </div>
        <div className="m-4 cursor-pointer">
          <PriceChangeOutlinedIcon style={{ width: "50px", height: "40px" }} />
          <p>Forex</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
