import React from 'react'
import Calendar from '../components/calendar/Calendar'
import pict from './../../assets/images/calender/calendar_icon.png'
import 'react-calendar/dist/Calendar.css'
const Bookings = () => {
    
    return (
        
        <div style={{backgroundColor:"red"}}>
            <h1 className='text-left'>
            <img className='text-centre' src={pict} size="md" /> Calendar
            <h1 className='text-right' style={{float: "right", border: '2px solid black'}}> 3/10 days remaining </h1>
            </h1>
            <Calendar />
        </div>
    )
}

export default Bookings