import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import AppointmentOption from '../AppointmentOption';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointment = ({selectedDate}) => {
    
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP');
    const {data:appointments = [] , refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-abrarasif11.vercel.app/appointments?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }
   
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
                    refetch = {refetch}
                    ></BookingModal>
                }
             </div>
        </section>
    );
};

export default AvailableAppointment;