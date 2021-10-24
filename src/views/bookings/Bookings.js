import React, { useState } from 'react';
import Calendar from 'react-calendar';
import pict from './../../assets/images/calender/calendar_icon.png'
import '../components/calendar/Calendar.css';
import Axios from 'axios';
import dayjs from 'dayjs';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

function Bookings(props) {
  const [email, setEmail] = useState();
  const [date, setDate] = useState(new Date());
  const locale = 'en-SG';
  const options = {
    // weekday: "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric"
    timeZone: "Japan"
  };

  const url = "http://localhost:8080/api/bookings/emp/"

  function submit(e) {
    e.preventDefault();
    console.log("Before ", date);
    date.setHours(8);
    Axios.post(url, {
      bdate: date,
      status: "Completed",
      user: {
        "email": email
      }
    })
      .then(res => {
      })
  }

  function handle(e) {
    const newdata = { ...date }
    newdata[e.target.id] = e.target.value
    setDate(newdata)
    console.log(newdata)
  }

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader component="h5"><img src={pict} /> Booking Form </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <div className="react-calendar">
                  <Calendar
                    onChange={setDate}
                    showNeighboringMonth={false}
                    minDate={new Date()}
                    value={date}
                  />
                </div>
              </CCol>

              <CCol xs={12} md={6} xl={6}>
                <CForm onSubmit={(e) => submit(e)}>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-4 col-form-label"> Quota Left </CFormLabel>
                    <CFormLabel className="col-sm-4 col-form-label"> 3/10 </CFormLabel>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label"> Email </CFormLabel>
                    <CCol sm={8}>
                      <CFormInput type="email" id="b_email" onChange={event => setEmail(event.target.value)}
                        placeholder="Enter your email" />

                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label"> Date Selected </CFormLabel>
                    <CCol sm={8}>
                      <CFormInput type="string" id="b_date" value={date.getDate() +"/"+ date.getMonth()+"/"+date.getFullYear()}
                        onChange={setDate} placeholder="b_date" disabled="disabled" />
                    </CCol>
                  </CRow>
                  <CButton type="submit"> Submit </CButton>
                </CForm>
              </CCol>
            </CRow>

            <br />

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Bookings
