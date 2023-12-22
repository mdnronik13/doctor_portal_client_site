//import React from "react";
import "../../Pages/Appointment/style.css";
import logo from "../../assets/images/logo.png";
import Popup from "reactjs-popup";
//extra
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
//
const AppointmentOption = ({ data, setTreatment }) => {
  const position = data.position;

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  const { slots, price } = data;
  return (
    <div className="card  shadow-xl d-flex flex-row bac">
      <div className="card-body">
        <h2 className=" text-primary text-2xl font-semibold color">
          {data?.name}
        </h2>
        <h2 className=" text-primary text-xl font-semibold color">
          Specialty : {data?.specialty}
        </h2>
        <h2 className=" text-primary text-xl font-semibold color">
          Hospital : {data?.hospital}
        </h2>
        <h2 className=" text-primary text-xl font-semibold color">
          Position : {position}
        </h2>
        <Popup
          trigger={
            <button className="btn text-white btnback btn2">
              {" "}
              Doctor Info{" "}
            </button>
          }
          position="right center"
        >
          <div className="card-body bac bac2">
            <h1>Name : {data?.name}</h1>
            <h1>Specialty On : {data?.specialty}</h1>
            <h1>Chamber : {data?.hospital}</h1>
            <h1>Education : {data?.education}</h1>
            <h1>Position : {data?.position}</h1>
            <h1>Visit Fees : {data?.price}</h1>
          </div>
        </Popup>

        <div className="card-actions justify-left">
          <label
            onClick={() => setTreatment(data)}
            htmlFor="bookingModal"
            className="btn text-white btnback"
          >
            Book Appointment
          </label>
        </div>
      </div>
      <img
        style={{ height: 150, width: 150, paddingTop: "20px" }}
        src={logo}
        class="center"
      />
    </div>
  );
};

export default AppointmentOption;
