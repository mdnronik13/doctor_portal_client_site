import React from 'react';

import { DayPicker} from 'react-day-picker';

const today = new Date();
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6 '>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    
                    <div className='mr-6 sm:w-full'>
                       
                    
                        <DayPicker
                            className='bg-red'
                            disabled= {{ before: new Date() }}
                            mode='single'
                            selected={selectedDate}
                            // onSelect={setSelectedDate}
                            onSelect={(data)=>{
                                if(data){
                                setSelectedDate(data)
                                
                                }
                                }}
                            
                        />
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;