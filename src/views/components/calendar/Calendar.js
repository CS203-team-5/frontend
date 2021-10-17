import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Bookings from 'src/views/bookings/Bookings';

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
                </main>
            </div>
        </div>
    );
}
