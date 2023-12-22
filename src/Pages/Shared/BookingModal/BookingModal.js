import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import "../../../Pages/Shared/BookingModal/style.css";


const BookingModal = ({ treatment, setTreatment, selectedDate , refetch }) => {
    const { name:treatmentName , slots , price } = treatment;
    console.log(treatment);
    const date = format(selectedDate, 'PP')
    const hospital = treatment.hospital
    const education = treatment.education
    //const {doctor} = useContext(treatment)
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const hospital=form.hospital.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            hospital:hospital,
            slot,
            email,
            phone,
            price
        }
        //    booking /
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed')
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative field">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2 field">✕</label>
                    <h3 className="text-lg font-bold justify-content-center">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6 '>
                        <input type="text" disabled value={date} className="input w-full input-bordered field2" />
                        {/* <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) =>
                                    <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                            }
                        </select> */}
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered field2" />

                        {/* Hospital */ }
                        <input name='hospital' type="text" defaultValue={hospital} disabled placeholder="Your hospital" className="input w-full input-bordered field2" />
                    

                        
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered field2" />

                        <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered field2" />

                        <input className='btn btn-accent w-full btnback2' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;