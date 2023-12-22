import React from 'react';
import doctor2 from '../../../assets/images/doctor2.jpg'

const Banner2 = () => {
    return (
        <div className="mt-28">
            
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={doctor2} className="lg:w-1/2 h-[70vh] -pl-10 rounded-lg shadow-2xl" alt='' />
                <div className='pl-10'>
                    <h1 className="text-5xl font-bold">Experienced doctors bring expertise, assurance.</h1>
                    <p className="py-6">Our website features a roster of experienced doctors, ensuring top-tier medical expertise for our visitors. Trust in our seasoned professionals for exceptional healthcare guidance and services.</p>

                </div>
                
            </div>
        </div>
    );
};

export default Banner2;