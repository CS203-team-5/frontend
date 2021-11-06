
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



function UpdatePassword(props) {
const history=useHistory();
   const [fname, setFirstName] = useState();
   const [lname, setLastName] = useState();
    const[role,setRole]= useState();
   const[oldPassword, setOldPassword]=useState();
   const [firstPassword, setFirstPassword] = useState();
   const [secondPassword, setSecondPassword] = useState();

//     const getCurrentUser = async function () {
//        const currentUser = await Parse.User.current();
//        // Update state variable holding current user
//        setCurrentUser(currentUser);
//        return currentUser;
//      };
const [validated, setValidated] = useState(false)

   const handleFormSubmit = event => {
       event.preventDefault();
       const form = event.currentTarget

      if(oldPassword!=localStorage.getItem("password")){
          alert("Wrong password");
          history.push("/UpdatePassword");
      }
      if(firstPassword!=secondPassword){
          alert("New password does not match");
          history.push("/UpdatePassword");
      }

       if (form.checkValidity() === false) {
         event.preventDefault()
         event.stopPropagation()
       }
       setValidated(true)





       // const username = state.username;
       // const password = state.password;


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
              setRole(json["userRole"])

           });


         const endpoint = "http://localhost:8080/api/user/new/Password/"+ firstPassword;



        const user_object = {
           email: localStorage.getItem("username"),
           fname: fname,
           lname:lname,
           password: localStorage.getItem("authorization"),
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
            <form className="form-signin" onSubmit={handleFormSubmit}>
                <CCol md={8}>
                             <CCardGroup>
                               <CCard className="p-4">
                                 <CCardBody>
                                     <h1> Change Password</h1>
                                             <p className="text-medium-emphasis"> Update details </p>
                                             <CInputGroup className="mb-4">

                                              <CCol md={10}>
                                                  <input type="text"
                                                      className="form-control"
                                                      placeholder="Current password"
                                                      onChange={event => setOldPassword(event.target.value)}
                                                  required/>
                                              </CCol>
                                             </CInputGroup >
                                            <CInputGroup className="mb-4">
                                              <CCol md={10}>

                                                 <CFormInput type="text" placeholder="New Password" id="validationServer05" required onChange={
                                                  event=> setFirstPassword(event.target.value)
                                                 }/>

                                                 <CFormFeedback invalid>Please check email entered </CFormFeedback>
                                               </CCol>
                                              </CInputGroup>
                                               <CInputGroup className="mb-4">
                                              <CCol md={10}>

                                                 <CFormInput type="text" placeholder="Re-Enter New Password" id="validationServer05" required onChange={
                                                  event=> setSecondPassword(event.target.value)
                                                 }/>

                                                 <CFormFeedback invalid>Please check email entered </CFormFeedback>
                                               </CCol>
                                              </CInputGroup>


                                             <CRow>
                                             <CCol xs={6}>

                                                    <CInputGroup className="mb-4">


                                                    </CInputGroup>
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

export default UpdatePassword;

