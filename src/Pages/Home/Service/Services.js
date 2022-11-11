import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
           id: 1,
           name : 'Fluoride Treatment',
           description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
           icon: fluoride,
       },
        {
           id: 2,
           name : 'Cavity Filling',
           description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
           icon: cavity,
       },
        {
           id: 3,
           name : 'Teeth Whitening',
           description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
           icon: whitening,
       }]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-2xl text-primary uppercase font-bold'>Our Services</h3>
                <h2 className='text-4xl font-bold'>Services We Provide</h2>
            </div>
            <div className='grid mt-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;