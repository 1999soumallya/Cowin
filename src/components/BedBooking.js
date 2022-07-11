import React from "react";

export default function BedBooking(props) {
  return (
    <>
      <h1 className="text-primary text-center">
        Welcome To Hospital Management!!!
      </h1>
      <div className="container-fluid d-flex flex-row align-items-center mt-3 p-3">
        <div className="container">
          <img className="img-fluid" src="./bedimg.jpg" alt="image" />
        </div>
        <div className="container">
          <ul className="list-group">
            <li className="list-group-item mt-1 ml-1">
              <a href="search.html"> <button className="btn btn-primary">Search Hospital</button> </a>
            </li>
            <li className="list-group-item mt-1 ml-1">
              <a href="checkvaccineslots.html"> <button className="btn btn-primary">Check Vaccine Slots</button> </a>
            </li>
            <li className="list-group-item mt-1 ml-1">
              <a href="bookbed.html"> <button className="btn btn-primary">Book Bed</button> </a>
            </li>
            <li className="list-group-item mt-1 ml-1">
              <a href="generateconfirmationslip.html"> <button className={`btn btn-${props.mode}`}> Generate Confirmation slip </button> </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
