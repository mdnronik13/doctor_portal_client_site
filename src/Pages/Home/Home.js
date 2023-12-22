import React from 'react';
import Banner from './Banner/Banner';
import Banner2 from './Banner/Banner2';

import '../../Pages/Home/style.css';


import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Service/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;