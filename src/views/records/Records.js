import React, { lazy, useState, useEffect } from 'react'
import Axios from 'axios';
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Records = (props) => {
  const [bookingRecords, setRecords] = useState([])
  const [order, setOrder] = useState("ASC");
  const [resultType, setResultType] = useState()

  const del = async (bid) => {
    console.log("Delete function: ", bid);
    var res = Axios.delete("http://localhost:8080/api/bookings/hr/del/{id}",
      {
        params: {
          id: bid
        }
      }).then(() => {
        window.location.reload(false);
      })
    console.log((await res).status)
  }
  //sort function
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...bookingRecords].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1
      );
      setRecords(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...bookingRecords].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1
      );
      setRecords(sorted);
      setOrder("ASC");
    }
  }

  //fetch data when resultType updates
  useEffect(() => {
    const getRecords = async () => {
      const tasksFromServer = await fetchRecords()
      setRecords(tasksFromServer)
    }
    getRecords()
  }, [resultType])

  // Fetch Tasks
  const fetchRecords = async () => {
    var res = ""
    if (resultType === "past") {
      res = await fetch("http://localhost:8080/api/bookings/emp/getAllMyPast/" + localStorage.getItem("username") + "/")
    } else if (resultType === "upcoming") {
      res = await fetch("http://localhost:8080/api/bookings/emp/getAllMyUpcoming/" + localStorage.getItem("username") + "/")
    } else {
      res = await fetch("http://localhost:8080/api/bookings/emp/getAllForEmp/" + localStorage.getItem("username") + "/")
    }
    const data = await res.json()
    console.log(data)
    return data
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong sm={6} md={8}>My Booking Records</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
              <CFormCheck
                onClick={() => setResultType('all')}
                type="radio"
                button={{ color: 'secondary', variant: 'outline' }}
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                label="All"
                defaultChecked
              />
              <CFormCheck
                onClick={() => setResultType('past')}
                type="radio"
                button={{ color: 'secondary', variant: 'outline' }}
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                label="Past"
              />
              <CFormCheck
                onClick={() => setResultType('upcoming')}
                type="radio"
                button={{ color: 'secondary', variant: 'outline' }}
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                label="Upcoming"
              />
            </CButtonGroup>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col" onClick={() => sorting("bid")}>Booking ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col" onClick={() => sorting("bdate")}>Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col" onClick={() => sorting("status")}>Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {bookingRecords.map((bookingRecord) => (
                  <CTableRow key={bookingRecord.bid}>
                    <CTableHeaderCell scope="row">{bookingRecord.bid}</CTableHeaderCell>
                    <CTableDataCell>{bookingRecord.bdate}</CTableDataCell>
                    <CTableDataCell>{bookingRecord.status}</CTableDataCell>
                    <CTableDataCell>
                      {resultType === "upcoming" ?
                        <CButton color="dark" variant="ghost"
                          onClick={() => del(bookingRecord.bid)}>Cancel</CButton> :
                        <p></p>
                      }
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Records
