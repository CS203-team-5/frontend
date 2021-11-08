import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import pict from './../../assets/images/calender/calendar_icon.png'
import '../../assets/css/Calendar.css';
import Axios from 'axios';

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
  const [date, setDate] = useState(new Date());
  const [quota, setQuota] = useState(1);
  const locale = 'en-SG';
  const options = {

    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Singapore"

  };

  const yourConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authorization")
    }
  }

  useEffect(() => {
    const getQuota = async () => {
      const tasksFromServer = await fetchQuota()
      setQuota(tasksFromServer)
    }
    getQuota()
  }, [])

  const fetchQuota = async () => {
    console.log("yourConfig is ", yourConfig)
    console.log("yourPassword is ", localStorage)
    var res = Axios.get("http://localhost:8080/api/bookings/emp/" + localStorage.getItem("username") + "/" ,yourConfig)
    console.log("Username is ", localStorage.getItem("username"))
    const data = await res
    console.log("Data ", data)
    console.log("Data from database: ", data.data)
    return (10 - data.data) < 0 ? 0 : 10 - data.data
  }


  const url = "http://localhost:8080/api/bookings/emp/"
  function submit(e) {
    e.preventDefault();
    setQuota(quota - 1 < 0 ? 0 : quota)
    console.log("Before ", date);
    date.setHours(8);
    Axios.post(url, {
      bdate: date,
      status: "",
      user: {
        "email": localStorage.getItem("username")
      }
    }, yourConfig).then((res) => {
      window.location.reload(false);
    }).catch((res) => {
      alert(res.response.data.message)
    })
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
                    <CFormInput value={quota} disabled="disabled" />
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label"> Email </CFormLabel>
                    <CCol sm={8}>
                      <CFormInput type="email" id="b_email" value={localStorage.getItem("username")}/*onChange={event => setEmail(event.target.value)}*/
                        placeholder="Enter your email" disabled="disabled" />

                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label"> Date Selected </CFormLabel>
                    <CCol sm={8}>
                      <CFormInput type="string" id="b_date"

                        // value={date.getDate(locale, options) +"/"+ date.getMonth(locale, options)+"/"+date.getFullYear(locale, options)}
                        value={date.toLocaleString(locale, options)}
                        // value={date.toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })}

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
