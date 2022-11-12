import React from 'react';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointment , setTreatment}) => {
    const {name,slots} = appointment
    return (
        <div className="card  shadow-xl">
            <div className=" card-body text-center">
                <h2 className=" text-primary text-2xl text-center font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                <label
                disabled={slots.length === 0 }
                onClick={() => setTreatment(appointment)} 
                htmlFor="bookingModal" className="btn btn-primary text-white">Book Appointment
                </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;