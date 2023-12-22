import React from "react";
import doctor from "../../../assets/images/doctor4.jpg";
const MakeAppointment = () => {
  return (
    <div className="hero">
      <div className="hero-content  flex-col ">
        <img style={{ height: 200, width: 200 }}
          src={doctor}
          className="lg:w-1/2 hidden md:block -mt-36 -mb-4 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-4xl font-bold">Make an appointment Today</h1>
          <p className="py-1">
            An appointment is a promise of time, a commitment to care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
