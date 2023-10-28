import { data } from 'autoprefixer';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // sign in section //
    const { createUser, upateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail , setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
 
    useEffect(() =>{
        if(token){
            navigate('/')
        }
    }, [token])  
     const navigate = useNavigate()
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        // sign in section //
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created SuccessFully!!');
                const userInfo = {
                    displayName: data.name
                }
                upateUser(userInfo)
                    .then(() => {
                        saveUser(data.name , data.email);
                     })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }  
    // ......//
       const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('https://doctors-portal-server-abrarasif11.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email)
        })
       }
       
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register('name', {
                            required: "Name is required",
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className="text-red-700">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" {...register('email', {
                            required: "Email Address is required",
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password Must be 6 characters or long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password Must be strong' }

                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-red-700">{errors.password?.message}
                        </p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 ' value="Sign Up" type="submit" />
                    {
                        signUpError && <p className='text-red-700'>{signUpError}</p>
                    }
                </form>
                <p>Already have an account ? <Link to="/login" className='text-secondary'>Log in here</Link></p>
               
            </div>
        </div>
    );
};

export default SignUp;