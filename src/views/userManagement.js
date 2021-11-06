import React, { lazy, useState, useEffect } from 'react'
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


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
  const history=useHistory();

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
//<<<<<<< HEAD
//    var res = await fetch('http://localhost:8080/api/bookings/hr')
//    if(resultType==="past"){
//      res = await fetch('http://localhost:8080/api/bookings/emp/past')
//    }
//    if(resultType==="upcoming"){
//      res = await fetch('http://localhost:8080/api/bookings/emp/upcoming')
//    }
//=======
    var res = ""
    res = await fetch('http://localhost:8080/api/user/hr/getAll/')
    const data = await res.json()
    console.log(data)
    return data
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong sm={6} md={8}>User Records</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
             <CCol xs={2}>
             <button className="btn btn-sm btn-primary btn-block"
               onClick={(event) => {

                   history.push("/CreateUser")
                  }
                }
                >
                    Create New User
                </button>
                </CCol>

              <CCol xs={9}></CCol>
                 <CCol xs={6}>
                   <button className="btn btn-lg btn-primary btn-block"
                    onClick={(event) => {
                       history.push("/CreateUser")
                     }}  variant="outline">
                            Add New User
                    </button>


          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" onClick={() => sorting("email")}>

                    User Email </CTableHeaderCell>
                    <CTableHeaderCell scope="col" onClick={() => sorting("fname")}>First name</CTableHeaderCell>
                     <CTableHeaderCell scope="col" onClick={() => sorting("lname")}> Last Name </CTableHeaderCell>
                      <CTableHeaderCell scope="col" onClick={() => sorting("userRole")}> Role </CTableHeaderCell>
                <CTableHeaderCell scope="col" ></CTableHeaderCell>

                  </CTableRow>
              </CTableHead>
              <CTableBody>
                {bookingRecords.map((bookingRecord) => (
                  <CTableRow key={bookingRecord.bid}>
                    <CTableHeaderCell scope="row">{bookingRecord.email}</CTableHeaderCell>
                    <CTableDataCell>{bookingRecord.fname}</CTableDataCell>
                      <CTableDataCell>{bookingRecord.lname}</CTableDataCell>
                        <CTableDataCell>{bookingRecord.userRole}</CTableDataCell>
                        <CTableDataCell>
                                 <CCol xs={6}>
                                    <button className="btn btn-sm btn-primary btn-block"
                                   onClick={(event) => {
                                    const email= bookingRecord.email
                                       history.push({

                                       pathname:"/UserDetails",
                                       search: '?query=abc',
                                       state: {
                                       username: email

                                       }

                                       })
                                      }
                                    }
                                    >
                                    UserDetails
                                    </button>


                                 </CCol>
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
