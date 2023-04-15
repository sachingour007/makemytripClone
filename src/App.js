import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Flights from "./Components/Flights/Flights";
import Hotels from "./Components/Hotels/Hotels";
import Trains from "./Components/Trains/Trains";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import Booking from "./Components/Booking/Booking";


function App() {
  
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
