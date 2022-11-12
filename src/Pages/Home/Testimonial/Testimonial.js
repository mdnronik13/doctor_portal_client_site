import React from 'react';
import Quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviewers = [
        {
            id: 1,
            name : 'Winson Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people1,
            location : 'California'
        },
        {
            id: 2,
            name : 'Yennefer GiGi',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people2,
            location : 'California'
        },
        {
            id: 1,
            name : 'Bibi Trexa',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people3,
            location : 'California'
        },
    ]
    return (
        <section className='m-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                <img className='w-24 lg:w-48' src={Quote} alt="" />
                </figure>
            </div>
            <div className='grid mt-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                {
                reviewers.map(review => 
                <Review 
                key={review.id}
                review={review}
                >
                </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;