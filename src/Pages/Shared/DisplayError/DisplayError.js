import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext) 
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
              navigate('/login')
            .catch(err => console.log(err));
    }
    const error = useRouteError()
    return (
        <div>
            <p className='text-red-700'>Something went wrong!!!</p>
            <p className='text-red-700'>{error.statusText || error.message}</p>
            <button className='btn btn-ghost' onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default DisplayError;