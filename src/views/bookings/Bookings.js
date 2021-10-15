import React, { Component } from 'react'
import Calendar from '../components/calendar/Calendar'
import pict from './../../assets/images/calender/calendar_icon.png'
import 'react-calendar/dist/Calendar.css'
import { NavDropdown } from 'react-bootstrap'
import { Calendar1 } from '../components/calendar/Calendar'

class Bookings extends React.Component {
  render() {
    console.log('Message is ', this.props)
    return (
      <div style={{ display: 'table', margin: 'auto' }}>
        {/* left div */}
        <div
          style={{ width: '751px', border: '1px solid red', float: 'left', marginRight: '64px' }}
        >
          <div>
            <h1 className="text-left">
              <img className="text-centre" src={pict} size="md" /> Calendar
              <div style={{ float: 'right' }}>
                <p className="text-right" style={{ fontSize: '18px' }}>
                  {' '}
                  Days remaining{' '}
                </p>
                <p className="text-right" style={{ textAlign: 'center', fontSize: '20px' }}>
                  {' '}
                  3/10{' '}
                </p>
              </div>
            </h1>
          </div>
          <Calendar />
        </div>
        {/* right div */}
        <div
          style={{ border: '1px solid blue', textAlign: 'center', float: 'right', padding: '12px' }}
        >
          <h1>Date </h1>
          {/* <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} />  */}
          <h4
            style={{
              height: '50px',
              width: '1',
              border: '',
            }}
          >
            3rd September 2021
          </h4>

          <h1>Location</h1>
          <div>
            <NavDropdown title="Level 1" id="nav-dropdown" style={{ float: 'center' }}>
              <NavDropdown.Item href="">Level 2</NavDropdown.Item>
              <NavDropdown.Item href="">Level 3</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Bookings
