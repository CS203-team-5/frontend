import React from 'react'
import Calendar from '../components/calendar/Calendar'
import pict from './../../assets/images/calender/calendar_icon.png'
import 'react-calendar/dist/Calendar.css'
import { NavDropdown } from 'react-bootstrap'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
} from '@coreui/react'

// import Calendar from 'react-calendar-pane';
// import moment, { calendarFormat } from 'moment';
// import date from 'react-calendar-pane';

const Bookings = (props) => {

    console.log("Message is ", props);
    return (
        <div>
            {/* left div */}
            <div style={{ width: "751px", border: "1px solid red", float: "left" }}>
                <div >
                    <h1 className='text-left'>
                        <img className='text-centre' src={pict} size="md" /> Calendar
                        <div style={{ float: "right" }}>
                            <p className='text-right' style={{ fontSize: '18px' }}> Days remaining </p>
                            <p className='text-right' style={{ textAlign: "center", fontSize: '20px' }}> 3/10 </p>
                        </div>
                    </h1>
                </div>
                <Calendar />
            </div>
            {/* right div */}
            <div style={{ border: "1px solid blue", textAlign: "center" }}>
                <h1 >Date </h1>
                {/* <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} />  */}
                <h4 style={{
                    height: "50px", width: "1", border: "1px solid black",
                }}>
                    3rd September 2021</h4>

                <h1 >Location</h1>
                <div style={{ border: "1px solid purple", float: "center" }}>
                    <CNavItem style={{float:"right"}}>
                        <NavDropdown title="Location" id="nav-dropdown">
                            <NavDropdown.Item href="/records">Level 1</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/news">Level 2</NavDropdown.Item>
                        </NavDropdown>
                    </CNavItem>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Bookings