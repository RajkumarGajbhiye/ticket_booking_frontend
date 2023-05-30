import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../css/MovieDetails.css";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  let { _id } = useParams();
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  const displaydata = () => {
    axios
      .get(`https://ticket-booking-backend-smoky.vercel.app/singlemovie/${_id}`)
      .then((response) => {
        console.log(response.data.data);
        setState(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const gotoHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    displaydata();
  }, []);
  return (
    <div className="movieDetails">
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={state.video}
          title="YouTube video player"
          allow="accstaterometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <span className="details">
        <div className="movie_des">
          <strong style={{ color: "black" }}>Description:</strong>
          {state.description}
        </div>
        <div className="movie_des">
          <strong style={{ color: "black" }}>Actor Name:</strong>
          {state.actor_name}
        </div>
        <div className="movie_des">
          <strong style={{ color: "black" }}>Directed By:</strong>
          {state.directed_by}
        </div>
        <div className="movie_des">
          <strong style={{ color: "black" }}>Release Date:</strong>
          {state.release_date}
        </div>
      </span>
      <center className="back">
        <Button variant="danger" onClick={gotoHomePage}>
          Back
        </Button>
      </center>
    </div>
  );
};

export default MovieDetails;
