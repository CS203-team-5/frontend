import { React, useState } from 'react';
import Calendar1 from 'react-calendar';
import pict from '../../../assets/images/calender/calendar_icon.png'

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='app'>
            <h1 className='text-left'> <img src={pict} size="md" /> Calendar</h1>
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