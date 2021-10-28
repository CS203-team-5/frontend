import React, { Component,useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import  { lazy } from 'react'
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
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
//import createHistory from 'history/createBrowserHistory';

//const history=createBrowserHistory({forceRefresh:true});


function CheckIn(props){
const history= useHistory();

//
//   const [Temperature, setTemperature] = useState();
//   const [Health, setHealth] = useState();
//     const getCurrentUser = async function () {
//        const currentUser = await Parse.User.current();
//        // Update state variable holding current user
//        setCurrentUser(currentUser);
//        return currentUser;
//      };

   const handleFormSubmit = event => {
       event.preventDefault();
  history.push("/dashboard")
//       const endpoint = "http://localhost:8080/authenticate";

       // const username = state.username;
       // const password = state.password;

//       const user_object = {
//           username: username,
//           password: password
//       };

//       axios.post(endpoint, user_object).then(res => {
//           localStorage.setItem("authorization", res.data.token);
//           localStorage.setItem("username", username);
//            localStorage.setItem("password", password);
//           return handleDashboard();
//       });
   };

   const handleDashboard = () => {
//      const name= localStorage.getItem("username");
//      const intialValue
//        axios.get("http://localhost:8080/api/user/hr/getAll").then(res => {
//            if (res.response === 200) {
//      history.push("/dashboard");

//            } else {
//                console.log("Fail")
//                alert("Authentication failure");
//            }
//        });
   };

     return (
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
              <CContainer>
                <CRow className="justify-content-center">
                    <form className="form-signin" onSubmit={handleFormSubmit}>

                  <CCol md={8}>
                    <CCardGroup>
                      <CCard className="p-4">
                        <CCardBody>

                       <h1>Daily Check-in Form</h1>
                               <p className="text-medium-emphasis">Temperature at time of entry</p>
                               <CInputGroup className="mb-6">
                               <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Temperature"

                                    />
                                </div>

                               </CInputGroup>
                               <CInputGroup className="mb-6">
                             <p className="text-medium-emphasis">Do you have any of the following
                              symptoms within the last 14 days: cough, smell, taste impairment, fever,
                              breathing difficulties, body aches, headaches, fatigue, sore throate, diarrhoea, and/or runny nose (
                              (even if your symptoms are mild)
                             </p>
                               <CFormCheck
                                  type="radio"
                                  name="flexRadioDefault"
                                  value="Yes"
                                  id="flexRadioDefault1"
                                  label="Yes"
                                  defaultChecked
                                />
                                <CFormCheck
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  value="No"
                                  label="No"
                                />

                               </CInputGroup>
                               <CRow>
                               <CCol xs={6}>

                                  <button className="btn btn-lg btn-primary btn-block" type="submit">
                                    Submit
                                  </button>
                               </CCol>
                           </CRow>


                   </CCardBody>
                 </CCard>
               </CCardGroup>
              </CCol>
             </form>
           </CRow>

         </CContainer>
       </div>
     )
   }
 export default CheckIn;
//  onChange={event => setTemperature(event.target.value)}
