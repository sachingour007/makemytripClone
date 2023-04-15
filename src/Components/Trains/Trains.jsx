import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Trains = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("roundtrip");
  const [trainForm, setTrainForm] = useState({
    from: "",
    to: "",
    travelDate: "",
    class: "",
  });
  const [data, setData] = useState([]);

  const formhandler = (e) => {
    setTrainForm({ ...trainForm, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const searchBtn = () => {
    if (
      !(
        trainForm.from &&
        trainForm.to &&
        trainForm.travelDate &&
        trainForm.class
      )
    ) {
      alert("please enter Details");
    } else
      axios
        .get(
          "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

    console.log(trainForm);
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
              htmlFor="travelDate"
              className="flex flex-col items-start w-24 m-1 font-semibold"
            >
              Travel Date{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40   md:w-4/4 sm:w-2/3"
                type="date"
                name="travelDate"
                onChange={(e) => formhandler(e)}
              />
            </label>
            <label
              htmlFor="class"
              className="flex flex-col items-start w-24 m-1 font-semibold"
            >
              Class{" "}
              <input
                className="border border-gray-500 w-20 h-8 lg:w-40 md:w-4/4 sm:w-2/3"
                type="date"
                name="class"
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
            departure: { departureDate, departureTime },
            duration,
            from,
            kilometers,
            price,
            to,
            train_number,
          }) => {
            return (
              <div className="border ml-auto mr-auto w-3/4 h-44 m-2 grid grid-rows-3 grid-flow-col items-center justify-around">
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
                  <p className="text-large">Train Number:</p>
                  <h2 className="text-xl">{train_number}</h2>
                </div>
                <div>
                  <p className="text-large">Kilometers:</p>
                  <h2 className="text-xl">{kilometers}</h2>
                </div>
                <div>
                  <p className="text-large">Duration:</p>
                  <h2 className="text-xl">{duration}</h2>
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

export default Trains;
