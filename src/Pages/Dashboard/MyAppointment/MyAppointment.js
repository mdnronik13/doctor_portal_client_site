import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "../../../Pages/Login/style.css";
//import Table from 'react-bootstrap/Table';
const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      <h3
        className="text-3xl font-bold mb-5 newmyapp"
        style={{ display: "flex", justifyContent: "center" }}
      >
        MY APPOINTMENTS
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full mt-8 " id="customers">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Doctor</th>
              <th>Hospital</th>
              <th>Date</th>
              <th>Comment</th>
              {/* <th>Date</th> */}
              {/* <th>Time</th> */}
              {/* <th>Payment</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id} style={{}}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.hospital}</td>
                  <td>{booking.appointmentDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
