import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Flights = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const [selected, setSelected] = useState("roundtrip");
  const [flightForm, setFlightForm] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
  });
  const [data, setData] = useState([]);

  const formhandler = (e) => {
    setFlightForm({ ...flightForm, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const searchBtn = () => {
    if (
      !(
        flightForm.from &&
        flightForm.to &&
        flightForm.departure &&
        flightForm.return
      )
    ) {
      alert("please enter Details");
    } else
      axios
        .get(
          "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
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
            <label htmlFor="oneway">
              <input
                type="radio"
                name="a"
                value="oneway"
                onChange={handleChange}
                checked={selected === "oneway"}
              />{" "}
              One Way{" "}
            </label>
            <label htmlFor="roundtrip">
              <input
                type="radio"
                name="a"
                value="roundtrip"
                onChange={handleChange}
                checked={selected === "roundtrip"}
              />{" "}
              Round Trip{" "}
            </label>
            <label htmlFor="multicity">
              <input
                type="radio"
                name="a"
                value="multicity"
                onChange={handleChange}
                checked={selected === "multicity"}
              />{" "}
              Multi City{" "}
            </label>
          </form>
        </div>

        <div className=" w-full h-32 mt-2 flex flex-col justify-start">
          <form className="flex flex-row items-center justify-center lg:justify-evenly md:w-auto  sm:w-auto sm:justify-center gap-8">
            <label
              className="flex flex-col items-start w-24 m-1 font-semibold "
              htmlFor="from"
            >
              From{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40  md:w-4/4 sm:w-2/3"
                type="text"
                name="from"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="to"
              className="flex flex-col items-start justify-start w-24 m-1 font-semibold"
            >
              To{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40  sm:w-2/3 md:w-4/4 "
                type="text"
                name="to"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="departure"
              className="flex flex-col items-start w-24 m-1 font-semibold"
            >
              Departure{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40   md:w-4/4 sm:w-2/3"
                type="date"
                name="departure"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="return"
              className="flex flex-col items-start w-24 m-1 font-semibold"
            >
              Return{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40 md:w-4/4 sm:w-2/3"
                type="date"
                name="return"
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
            airlineName,
            departure: { departureTime, departureDate },
            duration,
            from,
            price,
            return: { returnTime, returnDate },
            to,
            via,
          }) => {
            return (
              <div
                className="border ml-auto mr-auto w-3/4 h-44 m-2 grid grid-rows-3 grid-flow-col items-center justify-around"
                key={from}
              >
                <div>
                  <p className="text-large">From:</p>
                  <h2 className="text-xl">{from}</h2>
                </div>
                <div>
                  <p className="text-large">DEPARTURE</p>
                  <h2 className="text-xl">
                    {departureTime} {departureDate}
                  </h2>
                </div>
                <div>
                  <p className="text-large">Price:</p>
                  <h2 className="text-xl">{price}</h2>
                </div>
                <div>
                  <p className="text-large">To:</p>
                  <h2 className="text-xl">{to}</h2>
                </div>
                <div>
                  <p className="text-large">Return</p>
                  <h2 className="text-xl">
                    {returnTime} {returnDate}{" "}
                  </h2>
                </div>
                <div>
                  <p className="text-large">Via:</p>
                  <h2 className="text-xl">{via}</h2>
                </div>
                <div>
                  <p className="text-large">Airline:</p>
                  <h2 className="text-xl">{airlineName}</h2>
                </div>
                <div>
                  <p className="text-large">Duration:</p>
                  <h2 className="text-xl">{duration}</h2>
                </div>
                {/* <NavLink to={isLoggedIn ? "/booking" : "/login"}> */}
                <button
                  onClick={() => {
                    const loggedInUser = localStorage.getItem("newMMT");
                    if (loggedInUser) {
                      navigate("/booking");
                    } else {
                      navigate("/login");
                    }
                  }}
                  className="border-none m-2 p-2 rounded-lg w-32  text-xl font-normal"
                  style={{ backgroundColor: "#008CFF" }}
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

export default Flights;
