import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
               
            });
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full mt-8">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Doctor</th>
                            {/* <th>Date</th> */}
                            {/* <th>Time</th> */}
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                            {bookings &&
                                bookings?.map((booking, i) =>
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>{booking.patient}</td>
                                        <td>{booking.treatment}</td>
                                        {/* <td>{booking.appointmentDate}</td> */}
                                        {/* <td>{booking.slot}</td> */}
                                        <td>
                                            {
                                                booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}
                                                >
                                                <button className='btn btn-primary btn-xs text-white'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                booking.price && booking.paid && <span className='text-green-600'>Paid</span>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;