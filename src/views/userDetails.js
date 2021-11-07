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
  CFormSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';



function UserDetails(props) {
 const history=useHistory();
   const[person, setPerson]= useState();
   const [fname, setFirstName] = useState();
   const [lname, setLastName] = useState();
   const[role,setRole]= useState();
   const[fullName, setFullName]= useState();
   const[vaccination, setVaccinationStatus]= useState();
   const [bookingRecords, setRecords] = useState([])
  const [formRecords, setFormRecords] = useState([])
   const [order, setOrder] = useState("ASC");
   const[email,setEmail]=useState();

   const [resultType, setResultType] = useState()
   const [formOrder, setFormOrder] = useState("ASC");
    const location=useLocation();


    const [validated, setValidated] = useState(false)

  const yourConfig = {
      headers: {
         Authorization: "Bearer " + localStorage.getItem("authorization")
      }
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


 //sort function
        const formSorting = (col) => {
          if (order === "ASC") {
            const sorted = [...bookingRecords].sort((a, b) =>
              a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1
            );
            setFormRecords(sorted);
            setFormOrder("DSC");
          }
          if (order === "DSC") {
            const sorted = [...bookingRecords].sort((a, b) =>
              a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1
            );
            setFormRecords(sorted);
            setFormOrder("ASC");
          }
        }


 useEffect(() => {
    const getRecords = async () => {
      const tasksFromServer = await fetchRecords()
      const tasksFromServer2 = await fetchFormRecords()

//      setRecords(tasksFromServer)
    }
    getRecords()

  }, [resultType])

  // Fetch Tasks
  const fetchRecords = async () => {
    var res = ""
    const getUserBookings='http://localhost:8080/api/bookings/UserBookings/'+ location.state.username;
//  res = await fetch('http://localhost:8080/api/bookings/hr/getAll')
//    const data = await res.json()
//    console.log(data)
//    return data


   const getUser="http://localhost:8080/api/user/email/"+ location.state.username;




    axios.get(getUser,yourConfig).then(res => {
       var json= res.data;

       setFirstName(json["fname"])
       setLastName(json["lname"])
       setFullName(fname+ " "+ lname)
       setRole(json["userRole"])
       setEmail(json["email"])
        if(json["vaccinated"]!=null){
           localStorage.setItem("vaccination",setVaccinationStatus(json["vaccinated"].toString()))

        }




    });
        axios.get(getUserBookings,yourConfig).then(res => {

           var json= res.data;
           setRecords(json);

        });
  }

  const fetchFormRecords = async () => {
      var res = ""
      const getUserForm='http://localhost:8080/api/dailyForm/user/'+ location.state.username;
  //  res = await fetch('http://localhost:8080/api/bookings/hr/getAll')
  //    const data = await res.json()
  //    console.log(data)
  //    return data


          axios.get(getUserForm,yourConfig).then(res => {

             var json= res.data;
             setFormRecords(json);

          });
    }


 const handleFormSubmit = event => {

         const endpoint = "http://localhost:8080/api/user/new/vaccination/"+ vaccination;



        const user_object = {
           email: location.state.username,
           fname: fname,
           lname:lname,
           userRole:role,
       };



       axios.put(endpoint,
       user_object,
        yourConfig).then(res => {

//              localStorage.setItem("password")=
              history.push("/Dashboard")


       });
   };

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
                                     <p> {email}</p>

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
                                  <h6> Vaccination status: </h6>
                                  <p> {vaccination}</p>

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




                                       <CTable>
                                        <CTableHead color="dark">
                                          <CTableRow>
                                            <CTableHeaderCell scope="col" onClick={() => formSorting("fid")}> Form ID </CTableHeaderCell>
                                             <CTableHeaderCell scope="col" onClick={() => formSorting("temperature")}>Temperature</CTableHeaderCell>
                                             <CTableHeaderCell scope="col" onClick={() => formSorting("symptoms")}> Symptoms</CTableHeaderCell>
                                              <CTableHeaderCell scope="col" onClick={() => formSorting("dateTime")}>Date</CTableHeaderCell>
                                          </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                          {formRecords.map((formRecord) => (
                                            <CTableRow key={formRecord.bid}>
                                              <CTableHeaderCell scope="row">{formRecord.fid}</CTableHeaderCell>
                                               <CTableDataCell>{formRecord.temperature}</CTableDataCell>
                                              <CTableDataCell>{formRecord.symptoms.toString()}</CTableDataCell>
                                                <CTableDataCell>{formRecord.dateExactTime}</CTableDataCell>
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
