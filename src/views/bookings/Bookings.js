import React, {Component} from 'react'
import Calendar1 from '../components/calendar/Calendar'
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

class Bookings extends React.Component {

  render() {
    console.log('Message is ', this.props)
    return (
      <>
        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader>Submit New Booking</CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs={12} md={6} xl={6}>
                    <Calendar1/>
                  </CCol>

                  <CCol xs={12} md={6} xl={6}>
                    <CForm>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">Date Left</CFormLabel>
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">3/10</CFormLabel>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label">Date Selected</CFormLabel>
                        <CCol sm={8} >
                          <CFormInput type="text" id="dateSelected" value="17/12/2021"/>
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
      </>

    )
  }
}

export default Bookings
