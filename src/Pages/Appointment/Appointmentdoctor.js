import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AppointmentOption from './AppointmentOption';
import '../../../Pages/Appointment/Appointment/style.css';

const Appointmentdoctor = () => {


    const { data: doctors } = useQuery({
        queryKey: ["doctor"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/doctors");
          const data = await res.json();
          return data;
        },
      });
    


    return (
        <div>
              // {doctors.map((doctor) => (
            <AppointmentOption
              key={doctor._id}
              doctor={doctor}
            ></AppointmentOption>
          ))}
        </div>
    );
};

export default Appointmentdoctor;