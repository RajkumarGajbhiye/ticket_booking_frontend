import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateArrangement, calculateAmount } from "../Slices/SeatsSlice";
import { Link } from "react-router-dom";
import "../css/Seats.css";

function Seats() {
  const state = useSelector((state) => state.SeatsSlice);
  const dispatch = useDispatch();
  
  return (
    <>
      <header>
        <h2>Select your seats</h2>
      </header>
      <main>
        <table>
          <tbody>
            {state.arrangement.map((item, index) => {
              return (
                <tr key={index}>
                  {item.map((item2, index2) => {
                   
                    if (index2 === 0) {
                      return (
                        <td>
                          <td>₹{100 * (index + 1)}</td>
                          <td key={index2}>
                            <button
               className={"SingleSeat"}
                              onClick={() => {
                                dispatch(
                                  updateArrangement({
                                    index: index,
                                    index2: index2,
                                  })
                                );
                              }}
                            >
                              {item2[0]}
                            </button>
                          </td>
                        </td>
                      );
                    } else {
                      return (
                        <td key={index2}>
                          <button
                            className={"SingleSeat"} 
                            onClick={() => {
                              dispatch(
                                updateArrangement({
                                  index: index,
                                  index2: index2,
                                })
                              );
                            }}
                          >
                            {item2[0]}
                          </button>
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <Link to="/" >
            <button className="BookButton">Go back</button>
          </Link>
          <Link to="/payment">
            <button className="BookButton"
              onClick={() => {
                dispatch(calculateAmount(1));
              }}
            >
              Proceed
            </button>
          </Link>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default Seats;
