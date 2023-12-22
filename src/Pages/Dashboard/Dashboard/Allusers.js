import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import toast from 'react-hot-toast';
import '../../../Pages/Login/style.css';

const Allusers = () => {
    const { data: users = [] , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleAdmin = id => {

        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
          
        })
        
        .then(res => res.json())
        .then(data => {
            // refetch part //
          if(data.modifiedCount > 0){
            toast.success('Make Admin Successfully')
            refetch();
          }
        })
    }
    const setdeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
         
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 ){
                refetch();
                toast.success(`Doctor ${user.name} deleted successfully`)
            }
        })
    }
    return (
        <div>
            <h3 className='text-3xl font-bold mb-5 newmyapp' style={{display: 'flex', justifyContent: 'center'}}>ALL USERS</h3>
            <div className="overflow-x-auto">
                <table className="table w-full" id="customers">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                            
                                <tr key={user._id}>
                                    <th>{i+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{ user?.role !== 'admin' &&  <button onClick={() => handleAdmin(user.email)} 
                                    type="button" className='btn btn-admin text-white '>Make Admin</button>}</td>
                                    <td><button onClick={() => setdeleteUser(user)} type="button" className='btn btn-red text-white'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;