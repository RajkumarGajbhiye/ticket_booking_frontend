import React from "react";
import Header from "../components/Header";
import Seats from "../components/Seats";
import "../css/Book.css"

const Book = () => {
  return (
    <div>
      <Header />
      <div className="bookcont">
        <div className="bookingInfo">

        </div>

      <div className="seatsContainer">
      <Seats />

      </div>
      
      </div>
     
    </div>
  );
};

export default Book;
