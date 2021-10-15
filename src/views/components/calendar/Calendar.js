// import { React, useState } from 'react';
// import Calendar1 from 'react-calendar';

// const Calendar = () => {
//     const [date, setDate] = useState(new Date());

//     return (
//         <div className='app' >
//             <div className='calendar-container'>
//                 <Calendar1 onChange={setDate} value={date} />
//             </div>
//             <p className='text-left'>
//                 <span className='bold'>Selected Date:</span>{' '}
//                 {date.toDateString()}
//             </p>
//         </div>
//     )
// }

// export default Calendar
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Bookings from 'src/views/bookings/Bookings';
// import './Sample.less';

export default function Calendar1() {
    
    const [value, onChange] = useState(new Date());
    console.log("Calender value is ", value);
    <Bookings name={value} />

    return (
        <div className="Sample">
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <Calendar
                        onChange={onChange}
                        showNeighboringMonth={false}
                        minDate={new Date()}
                        value={value}
                    />
                    {/* <p className='text-left'>
                        <span className='bold'>Selected Date:</span>{' '}
                    </p> */}
                </main>
            </div>
        </div>
    );
}