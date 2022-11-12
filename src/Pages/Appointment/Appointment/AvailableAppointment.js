import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import AppointmentOption from '../AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointments, setAppointment] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() =>{
        fetch('appointment.json')
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[])
    return (
        <section className='my-16'>
             <p className='text-center text-secondary font-semibold'>You Have selected date : {format(selectedDate, 'PP')}</p>
             <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointments.map(appointment => <AppointmentOption
                    key={appointment._id}
                    appointment={appointment}
                    setTreatment={setTreatment}
                    >           
                    </AppointmentOption>)
                }
                {
                    treatment && 
                    <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    ></BookingModal>
                }
             </div>
        </section>
    );
};

export default AvailableAppointment;