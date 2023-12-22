import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import BookingModal from "../../Shared/BookingModal/BookingModal";
import AppointmentOption from "../AppointmentOption";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  
  const {
    data: appointments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointments", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors");
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16">
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        



        {doctors.map((doctor) => (
          <AppointmentOption
            key={doctor._id}
            data={doctor}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}

     

        {treatment && (
          <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}

        {/* {treatment2 && (
          <BookingModal2
            treatment2={treatment2}
            selectedDate={selectedDate}
            setTreatment2={setTreatment2}
            refetch={refetch}
          ></BookingModal2>
        )} */}
      </div>
    </section>
  );
};

export default AvailableAppointment;
