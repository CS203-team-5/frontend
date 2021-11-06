import React, { Component,useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
//import createHistory from 'history/createBrowserHistory';

//const history=createBrowserHistory({forceRefresh:true});



function Profile(props) {
const history=useHistory();
   const [fname, setFirstName] = useState();
   const [lname, setLastName] = useState();
    const[role,setRole]= useState();
    const[fullName, setFullName]= useState();

//    const[user,setUser]=useState();
//     const getCurrentUser = async function () {
//        const currentUser = await Parse.User.current();
//        // Update state variable holding current user
//        setCurrentUser(currentUser);
//        return currentUser;
//      };
  const [validated, setValidated] = useState(false)


  const userEmail=localStorage.getItem("username");


  const getUser="http://localhost:8080/api/user/email/" + localStorage.getItem("username")


  const yourConfig = {
     headers: {
        Authorization: "Bearer " + localStorage.getItem("authorization")
     }
  }


   axios.get(getUser,yourConfig).then(res => {
      var json= res.data;
      setFirstName(json["fname"])
      setLastName(json["lname"])
      setFullName(fname+" "+ lname)
      setRole(json["userRole"])

   });





//const user_object = {
//   username: username,
//
//};
//axios.post(endpoint, user_object).then(res => {
//  if(res.response==200){
//
//  }
//
//});



     return (
       <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
         <CContainer>
           <CRow className="justify-content-center">

             <CCol md={8}>
               <CCardGroup>
                 <CCard className="p-4">
                   <CCardBody>
                       <h1> Profile </h1>

                                <CCol md={10}>
                                    <h6> User Email:</h6>
                                    <p> {localStorage.getItem("username") }</p>

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


                               <CRow>
                               <CCol xs={6}>
                                  <button className="btn btn-lg btn-primary btn-block"
                                  onClick={(event) => {
                                     history.push("/ProfileSettings")
                                   }}  variant="outline">
                                          Settings
                                  </button>


                               </CCol>

                               </CRow>




                   </CCardBody>
                 </CCard>
               </CCardGroup>
              </CCol>

           </CRow>

         </CContainer>
       </div>
     )
   }

export default Profile;
