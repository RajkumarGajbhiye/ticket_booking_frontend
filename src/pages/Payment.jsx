import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../css/payment.css";

const Payment = () => {
  const state = useSelector((state) => state.SeatsSlice);
  const seatarray = [];

  const [info, setinfo] = useState({
    time: "",
    date: "",
    seats: seatarray,
    amount: state.amount,
  });
  const handleInput = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    axios
      .post("https://ticket-booking-backend-smoky.vercel.app/api/booking/book", { data: info })
      .then((res) => {
        console.log(res);
        setinfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <header>
        <h2>Payment Window</h2>
      </header>
      <div className="infoDiv">
        <select name="time" id="time" onChange={handleInput} value={info.time}>
          <option value="">select time</option>
          <option value="12pm">12pm</option>
          <option value="2pm">2pm</option>
        </select>
        <input type="date" name="date" onChange={handleInput} />
      </div>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          Seats booked are:{" "}
          {state.arrangement.map((item, index) => {
            return (
              <span key={index}>
                {item.map((item2, index2) => {
                  if (item2[1] === true && item2[1] !== 999) {
                    seatarray.push(item2[0]);
                    return item2[0] + ",";
                  } else {
                    return null;
                  }
                })}
              </span>
            );
          })}
        </div>
        <div>Total Amount:₹{state.amount}</div>
        <button className="finaldataButton" onClick={handleBook}>
          Book
        </button>
      </main>
      <footer>
        <Link to="/booking">
          <button className="BookButton">Go back</button>
        </Link>
      </footer>
    </>
  );
};

export default Payment;
