import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hotels = () => {
  const navigate = useNavigate();
  const [homeselected, setHomeSelected] = useState("single");
  const [homeForm, setHomeForm] = useState({
    loction: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
  });
  const [data, setData] = useState([]);

  const formhandler = (e) => {
    setHomeForm({ ...homeForm, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setHomeSelected(event.target.value);
  };
  console.log(homeForm);

  const searchBtn = () => {
    if (
      !(
        homeForm.loction &&
        homeForm.checkIn &&
        homeForm.checkOut &&
        homeForm.guests
      )
    ) {
      alert("please enter Details");
    } else
      axios
        .get(
          "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <>
      <div className="w-full h-48 flex items-center justify-start flex-col border-gray-400 border">
        {/* <div className="w-full sm:w-full md:w-3/4 h-2/3 mt-10 flex flex-col items-center justify-center rounded-lg bg-white"> */}
        <div className="  lg:w-full h-11 p-2 sm:w-96 sm:flex sm:flex-row sm:justify-center">
          <form className=" flex flex-row lg:items-center justify-start gap-4 ml-11 md:w-full lg:w-full">
            <label htmlFor="single">
              <input
                type="radio"
                name="a"
                value="single"
                onChange={handleChange}
                checked={homeselected === "single"}
              />{" "}
              Single{" "}
            </label>
            <label htmlFor="couple">
              <input
                type="radio"
                name="a"
                value="couple"
                onChange={handleChange}
                checked={homeselected === "couple"}
              />{" "}
              Couple{" "}
            </label>
          </form>
        </div>

        <div className=" w-full h-32 mt-2 flex flex-col justify-start">
          <form className="flex flex-row items-center justify-center lg:justify-evenly md:w-auto  sm:w-auto sm:justify-center gap-8">
            <label
              className="flex flex-col items-start w-30 m-1 font-semibold "
              htmlFor="loction"
            >
              CITY OR LOCATION
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40  md:w-4/4 sm:w-2/3"
                type="text"
                name="loction"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="checkIn"
              className="flex flex-col items-start justify-start w-24 m-1 font-semibold"
            >
              CHECK IN{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40  sm:w-2/3 md:w-4/4 "
                type="date"
                name="checkIn"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="checkOut"
              className="flex flex-col items-start w-24 m-1 font-semibold"
            >
              CHECK OUT{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40   md:w-4/4 sm:w-2/3"
                type="date"
                name="checkOut"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="guests"
              className="flex flex-col items-start w-24 m-1 font-semibold"
            >
              GUESTS{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40 md:w-4/4 sm:w-2/3"
                type="number"
                name="guests"
                onChange={(e) => formhandler(e)}
              />
            </label>
          </form>
        </div>

        {/* </div> */}
      </div>
      <div className="flex justify-center">
        <button
          className="w-48 h-12 text-lg -mt-6 rounded-3xl"
          style={{ backgroundColor: "#008CFF" }}
          onClick={searchBtn}
        >
          Search
        </button>
      </div>
      <div>
        {data.map(
          ({
            check_in,
            check_out,
            city,
            guests,
            hotel_name,
            price_per_night,
            rating,
            room_type,
          }) => {
            return (
              <div
                className="border ml-auto mr-auto w-3/4 h-44 m-2 grid grid-rows-3 grid-flow-col items-center justify-around"
                key={hotel_name}
              >
                <div>
                  <p className="text-large">Hotel:</p>
                  <h2 className="text-xl">{hotel_name}</h2>
                </div>
                <div>
                  <p className="text-large">Check In</p>
                  <h2 className="text-xl">{check_in}</h2>
                </div>
                <div>
                  <p className="text-large">Price:</p>
                  <h2 className="text-xl">{price_per_night}</h2>
                </div>
                <div>
                  <p className="text-large">City:</p>
                  <h2 className="text-xl">{city}</h2>
                </div>
                <div>
                  <p className="text-large">Check Out</p>
                  <h2 className="text-xl">{check_out}</h2>
                </div>
                <div>
                  <p className="text-large">Room:</p>
                  <h2 className="text-xl">{room_type}</h2>
                </div>
                <div>
                  <p className="text-large">Rating:</p>
                  <h2 className="text-xl">{rating}</h2>
                </div>
                <div>
                  <p className="text-large">Guests:</p>
                  <h2 className="text-xl">{guests}</h2>
                </div>
                {/* <NavLink to="/booking"> */}
                <button
                  className="border-none m-2 p-2 rounded-lg w-32  text-xl font-normal"
                  style={{ backgroundColor: "#008CFF" }}
                  onClick={() => {
                    const loggedInUser = localStorage.getItem("newMMT");
                    if (loggedInUser) {
                      navigate("/booking");
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  Book
                </button>
                {/* </NavLink> */}
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Hotels;
