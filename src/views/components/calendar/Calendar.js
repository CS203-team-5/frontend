import { React, useState } from 'react';
import Calendar1 from 'react-calendar';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='app'>
            <div className='calendar-container'>
                <Calendar1 onChange={setDate} value={date} />
            </div>
            <p className='text-left'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    )
}

export default Calendar
