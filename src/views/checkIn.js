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
   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
     <CContainer>
       <CRow className="justify-content-center">
         <CCol md={6}>
           <CCardGroup>
             <CCard className="p-4">
               <CCardBody>
                 <CForm className="form-signin" onSubmit={handleFormSubmit}>
                   <h1>Daily Check-in Form </h1>
                   <p className="text-medium-emphasis">Submit to check-in for { date }</p>
                   <CInputGroup className="mb-3">
                     <CFormInput
                       type="text"
                       className="form-control"
                       placeholder="Temperature"
                     />
                   </CInputGroup>
                   <CInputGroup className="mb-4">
                       <p className="text-medium-emphasis">Do you have any of the following
                        symptoms within the last 14 days: cough, smell, taste impairment, fever,
                        breathing difficulties, body aches, headaches, fatigue, sore throat, diarrhoea, and/or runny nose
                        (even if your symptoms are mild)
                       </p>
                     <CFormCheck
                       inline
                       type="radio"
                       name="flexRadioDefault"
                       value="Yes"
                       id="flexRadioDefault1"
                       label="Yes"
                       defaultChecked
                     />
                     <CFormCheck
                       inline
                       type="radio"
                       name="flexRadioDefault"
                       id="flexRadioDefault1"
                       value="No"
                       label="No"
                     />
                   </CInputGroup>
                   <CRow>
                     <CCol xs={6}>
                       <CButton color="primary" className="px-4 btn btn-lg btn-primary btn-block" type="submit">
                         Submit
                       </CButton>
                     </CCol>
                   </CRow>
                 </CForm>
               </CCardBody>
             </CCard>
           </CCardGroup>
         </CCol>
       </CRow>
     </CContainer>
   </div>
   )
}
 export default CheckIn;
//  onChange={event => setTemperature(event.target.value)}
