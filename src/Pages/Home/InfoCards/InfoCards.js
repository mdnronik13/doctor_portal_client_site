import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
     {
        id: 1,
        name : 'Opening Hours',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: clock,
        bgClass : 'bg-gradient-to-r from-primary to-secondary'
    },
     {
        id: 2,
        name : 'Our Locations',
        description: 'Brooklyn, NY 10036, United States',
        icon: marker,
        bgClass : 'bg-accent'
    },
     {
        id: 3,
        name : 'Contract us',
        description: '01716248524',
        icon: phone,
        bgClass : 'bg-gradient-to-r from-primary to-secondary',
    }]
   
    return (
        <div className='grid mt-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
            {
                cardData.map(card => <InfoCard
                key={card.id}
                card={card}
                >
                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;