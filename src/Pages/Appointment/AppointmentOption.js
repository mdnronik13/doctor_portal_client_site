import React from "react";

const AppointmentOption = ({ data, setTreatment}) => {
console.log(data); 
console.log(data.specialty); 



  const {  slots, price } = data;
  return (
    <div className="card  shadow-xl">
      <div className=" card-body text-center">
        <h2 className=" text-primary text-2xl text-center font-semibold">{data?.name}</h2>
        <h2 className=" text-primary text-xl text-center font-semibold">Specialty : {data?.specialty}</h2>
        {/* <p>{slots?.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots?.length} {slots?.length > 1 ? "spaces" : "space"} available
        </p> */}
        {/* <p>Price :{price} $</p> */}
        <div className="card-actions justify-center">
          <label
            // disabled={slots?.length === 0}
            onClick={() => setTreatment(data)}
            htmlFor="bookingModal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
