import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import '../../Pages/Login/style.css';

const Login = () => {
    // login section //
    const { signIn,  } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    //error message//
    const [error, setError] = useState();
 

    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        // login section //
        console.log(data);
        //error message//
        setError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            navigate(from, { replace: true });
        }) 

        .catch(error => { console.error(error) });
    setError(error.message);

    }
    const { ProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;
    const handleGoggleSignIn = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => { console.error(error) });
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 new'>
                <h2 className='font-bold  text-center inputcolor ' style={{fontSize: 40 }}>LOGIN</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"> <span className="label-text inputcolor">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            className="input input-bordered w-full max-w-xs inputhover" placeholder="Your Gmail" />
                        {errors.email && <p className="text-red-700">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text inputcolor " >Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs inputhover" placeholder="Your Password"/>
                        {errors.password && <p className="text-red-700">{errors.password?.message}</p>}
                        <label className="label"> <span className='inputcolor' label-text>Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full btnback2' value="Login" type="submit" />
                    {/* //error message// */}
                    {
                        error &&
                        <p className='text-red-700'>
                            {error}
                        </p>
                    }
                </form>
                <br></br>
                <p>
                <Link to="/signup" className='btn btn-accent w-full btnback3 '>Create an Account</Link></p>
                
                
            </div>
        </div>
    );
};

export default Login;