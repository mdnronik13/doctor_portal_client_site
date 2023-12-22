import { data } from 'autoprefixer';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import '../../Pages/Login/style.css';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // sign in section //
    const { createUser, upateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');


    const handleSignUp = (data) => {
        console.log(data);
        saveUser(data.name , data.email, data.phone);
        setSignUpError('');
        // sign in section for firebase  
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
    // ...sign up section for mongodb...//
       const saveUser = (name, email,number) =>{
        const user = {name, email,number};
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("User Added Successfully");
            console.log(data);
          }
        })
        .catch((err) => console.log(err));
       }
       
    return (
        <div className='h-[600px] flex justify-center items-center '>
            <div className='w-96 p-7 new'>
            <h2 className='font-bold  text-center inputcolor ' style={{fontSize: 40 }}>SIGN UP</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text inputcolor" >Name</span></label>
                        <input type="text" placeholder="Your Name" {...register('name', {
                            required: "Name is required",
                        })}
                            className="input input-bordered w-full max-w-xs inputhover" />
                       <label className="label"> <span className="label-text inputcolor" >Phone</span></label>
                        <input type="number" placeholder="Your Phone Number" {...register('phone', {
                            required: "Phone is required",
                        })}
                            className="input input-bordered w-full max-w-xs inputhover" />
                        {errors.name && <p className="text-red-700">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text inputcolor" >Gmail</span></label>
                        <input type="text" placeholder="Your Gmail" {...register('email', {
                            required: "Email Address is required",
                        })}
                            className="input input-bordered w-full max-w-xs inputhover" />
                        {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text inputcolor" placeholder="Your Password">Password</span></label>
                        <input type="password" placeholder="Your Password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password Must be 6 characters or long" },
                                pattern: { value: /(?=.*[A-Z])/, message: 'Password Must be strong' }

                            })}
                            className="input input-bordered w-full max-w-xs inputhover" />
                        {errors.password && <p className="text-red-700">{errors.password?.message}
                        </p>}
                    </div>
                    <br></br>
                    <input className='btn btn-accent w-full btnback2' value="Sign Up" type="submit" />
                    {
                        signUpError && <p className='text-red-700'>{signUpError}</p>
                    }
                </form>
                <br></br>
                <p> <Link to="/login" className='btn btn-accent w-full btnback3 '>Log in here</Link></p>
               
            </div>
        </div>
    );
};

export default SignUp;