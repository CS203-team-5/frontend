import React, { Component,useState } from "react";
import { lazy,useEffect } from 'react'
import axios from "axios";
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CFormLabel,
  CFormFeedback,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
//import createHistory from 'history/createBrowserHistory';

//const history=createBrowserHistory({forceRefresh:true});



function UserDetails(props) {
 const history=useHistory();
   const [fname, setFirstName] = useState();
   const [lname, setLastName] = useState();
   const[role,setRole]= useState();
   const[fullName, setFullName]= useState();
   const [bookingRecords, setRecords] = useState([])
   const [order, setOrder] = useState("ASC");
   const [resultType, setResultType] = useState()


       const del = async (bid) => {
         console.log("Delete function: ", bid);
         var res = axios.delete("http://localhost:8080/api/bookings/hr/del/{id}",
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

   const [validated, setValidated] = useState(false)

   const location=useLocation();
   const getUser="http://localhost:8080/api/user/email/"+ location.state.username;

   const yourConfig = {
      headers: {
         Authorization: "Bearer " + localStorage.getItem("authorization")
      }
   }


    axios.get(getUser,yourConfig).then(res => {
       var json= res.data;

       setFirstName(json["fname"])
       setLastName(json["lname"])
       setFullName(fname+ " "+ lname);
       setRole(json["userRole"])

    });

 useEffect(() => {
    const getRecords = async () => {
      const tasksFromServer = await fetchRecords()
//      setRecords(tasksFromServer)
    }
    getRecords()
  }, [resultType])

  // Fetch Tasks
  const fetchRecords = async () => {
    var res = ""
    const getUserBookings='http://localhost:8080/api/bookings/UserBookings/'+location.state.username;
//  res = await fetch('http://localhost:8080/api/bookings/hr/getAll')
//    const data = await res.json()
//    console.log(data)
//    return data
   const yourConfig = {
          headers: {
             Authorization: "Bearer " + localStorage.getItem("authorization")
          }
       }

        axios.get(getUserBookings,yourConfig).then(res => {

           var json= res.data;
           setRecords(json);

        });
  }


      return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">

              <CCol md={8}>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                        <h1> {fname} {lname} </h1>

                                 <CCol md={10}>
                                     <h6> User Email:</h6>
                                     <p> {location.state.username}</p>

                                </CCol>

                                <CCol md={10}>
                                     <h6> Full Name:</h6>
                                     <p> {fullName}</p>

                                </CCol>

                                <CCol md={10}>
                                    <h6> First Name:</h6>
                                    <p> {fname}</p>

                               </CCol>

                                <CCol md={10}>
                                   <h6> Last  Name: </h6>
                                   <p> {lname}</p>

                                </CCol>

                                <CCol md={10}>
                                    <h6> Role: </h6>
                                    <p> {role}</p>

                               </CCol>


                                    <CTable>
                                       <CTableHead color="dark">
                                         <CTableRow>
                                           <CTableHeaderCell scope="col" onClick={() => sorting("bid")}> Booking ID </CTableHeaderCell>
                                           <CTableHeaderCell scope="col" onClick={() => sorting("bdate")}>Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col" onClick={() => sorting("status")}> Status </CTableHeaderCell>

                                         </CTableRow>
                                       </CTableHead>
                                       <CTableBody>
                                         {bookingRecords.map((bookingRecord) => (
                                           <CTableRow key={bookingRecord.bid}>
                                             <CTableHeaderCell scope="row">{bookingRecord.bid}</CTableHeaderCell>
                                             <CTableDataCell>{bookingRecord.bdate}</CTableDataCell>
                                             <CTableDataCell>{bookingRecord.status}</CTableDataCell>
                                           </CTableRow>
                                         ))}
                                       </CTableBody>
                                     </CTable>

                    </CCardBody>
                  </CCard>
                </CCardGroup>
               </CCol>

            </CRow>

          </CContainer>
        </div>
      )
    }


export default UserDetails;
