import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name,slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = event =>{
        event.preventDefault()
       const form = event.target;
       const slot = form.slot.value;
       const name = form.name.value;
       const email = form.email.value;
       const phone = form.phone.value;

       const booking = {
        appointmentDate : date,
        treatment : name,
        patient : name,
        slot,
        email,
        phone
       }
       console.log(booking);
       setTreatment(null)
       
    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                          {
                            slots.map((slot, i) => 
                            <option 
                            value={slot}
                            key={i}
                            >{slot}</option>)
                          }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Your Email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                        <input className='text-white btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;