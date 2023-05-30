import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../css/Movie.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Movie = () => {
  const [state, setState] = useState([]);

  let navigate = useNavigate();

  const displaydata = () => {
    axios
      .get("https://ticket-booking-backend-smoky.vercel.app/movies")
      .then((response) => {
        console.log(response.data.data);
        setState(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    displaydata();
  }, []);

  const handledisplay = (_id) => {
    navigate(`/details/${_id}`);
  };

  const bookTicket = () => {
    navigate("/booking");
  };

  return (
    <div>
      <Header />

      <div className="heading1">
        <h1>Movies</h1>
      </div>

      <ul>
        {state.map((ele, i) => (
          <span key={i} className="movie_details">
            <span>
              {" "}
              <img className="image" src={ele.image} />
            </span>
            <div className="name">
              {ele.movie_name}
              <div className="button">
                <Button variant="success" onClick={bookTicket}>
                  Book Ticket
                </Button>
                <Button variant="info" onClick={() => handledisplay(ele._id)}>
                  Movie Details
                </Button>
              </div>
            </div>
          </span>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
