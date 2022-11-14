import React, { useState } from 'react';
import AvailableAppointment from './Appointment/AvailableAppointment';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState('day');
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;