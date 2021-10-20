import React, {Component, useState} from 'react'
import Calendar from 'react-calendar'
import './../../assets/css/Calendar.css'
import pict from './../../assets/images/calender/calendar_icon.png'
import '../components/calendar/Calendar.css'
import {NavDropdown} from 'react-bootstrap'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'

const Bookings = (props) => {
    const [date, setDate] = useState(new Date());
    const locale = 'en-SG';
    const options = {
         weekday: "long",
         year: "numeric",
         month:"long",
         day:"numeric"
    };
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Submit New Booking</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <div className = "react-calendar">
                  <Calendar
                    onChange={setDate}
                    showNeighboringMonth={false}
                    minDate={new Date()}
                    value={date}
                  />
                </div>
              </CCol>

              <CCol xs={12} md={6} xl={6}>
                <CForm>
                  <CRow className="mb-3">
                    <CFormLabel  className="col-sm-4 col-form-label">Quota Left</CFormLabel>
                    <CFormLabel  className="col-sm-4 col-form-label">3/10</CFormLabel>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">Date Selected</CFormLabel>
                    <CCol sm={8} >
                      <CFormInput type="text" id="dateSelected" value={date.toLocaleDateString(locale,options)}/>
                    </CCol>
                  </CRow>
                  <CButton type="submit">Submit</CButton>
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
