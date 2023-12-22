import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';
import '../../../../Pages/Login/style.css';
const ManageDoctors = () => {
    const [deleteDoctor, setdeleteDoctor] = useState(null)
    const closeModal = () => {
        setdeleteDoctor(null);
    }

    const { data: doctors, isLoading , refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                  
                });
                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    })
    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
         
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 ){
                refetch();
                toast.success(`Doctor ${doctor.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl font-bold mb-5 newmyapp' style={{ display: 'flex', justifyContent: 'center'}}>Manage Doctors : {doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table" id="customers" style={{ width:'100%'}}>
                    <thead>
                        <tr>
                            <th></th>
           
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Hospital</th>
                            <th>Education</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                   
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>{doctor.hospital}</td>
                                    <td>{doctor.education}</td>
                                    <td>
                                        <label onClick={() => setdeleteDoctor(doctor)} htmlFor="confiramtion-modal" className="btn btn-red text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && 
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deleteDoctor.name} it's not recover`}
                successAction={handleDeleteDoctor}
                modalData = {deleteDoctor}
                closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;