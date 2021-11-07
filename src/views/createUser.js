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



function CreateUser(props) {
const history=useHistory();
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [secondEmail, setSecondEmail] = useState();
    const[role,setRole]= useState();
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

        if(email!=secondEmail){
          alert("Emails are inconsistent")
          history.push("/CreateUser")
        }
       if (form.checkValidity() === false) {
         event.preventDefault()
         event.stopPropagation()
       }
       setValidated(true)


       history.push("/UserManagement");
       const endpoint = "http://localhost:8080/api/user/hr/create";

       // const username = state.username;
       // const password = state.password;

       const user_object = {
           firstName: firstName,
           password: password,
           email: email,
           role:role,
           lastName:lastName,

       };

       axios.post(endpoint, user_object).then(res => {
          if(res.response==200){
              history.push("/UserManagement");
          }

       });
   };



     return (
       <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
         <CContainer>
           <CRow className="justify-content-center">
             <CCol md={6}>
               <CCardGroup>
                 <CCard className="p-4">
                   <CCardBody>
                     <form className="form-signin" onSubmit={handleFormSubmit}>
                       <h1>Create New Users</h1>
                       <p className="text-medium-emphasis">Submit the form with all details filled to add a new user. New users will receive their password via the registered email submitted in this form within 10minutes.</p>
                       <CRow className="mb-3">
                         <CCol className="col-sm-3">
                           <CFormLabel className="col-form-label" >User&#39;s Email</CFormLabel>
                         </CCol>
                         <CCol className="col-sm-9">
                           <input type="email"
                                className="form-control"
                                placeholder="Enter the email"
                                onChange={event => setEmail(event.target.value)}
                           required/>
                         </CCol>
                       </CRow>
                       <CRow className="mb-3">
                        <CCol className="col-sm-3">
                          <CFormLabel className="col-form-label" >User&#39;s Email</CFormLabel>
                        </CCol>
                        <CCol className="col-sm-9">
                            <CFormInput type="email" placeholder="Re-enter User Email" id="validationServer05" required onChange={
                              event=> setSecondEmail(event.target.value)
                            }/>
                            <CFormFeedback invalid>Please check email entered </CFormFeedback>
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                       <CCol className="col-sm-3">
                         <CFormLabel className="col-form-label" >User&#39;s First Name</CFormLabel>
                       </CCol>
                       <CCol className="col-sm-9">
                         <input type="text"
                              className="form-control"
                              placeholder="First Name"
                              onChange={event => setFirstName(event.target.value)}
                         required />
                       </CCol>
                     </CRow>
                     <CRow className="mb-3">
                       <CCol className="col-sm-3">
                         <CFormLabel className="col-form-label" >User&#39;s Last Name</CFormLabel>
                       </CCol>
                       <CCol className="col-sm-9">
                         <input type="Last Name"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={event => setLastName(event.target.value)}
                        required />
                       </CCol>
                     </CRow>

                       <CRow>
                         <CCol xs={6}>
                         <p className="text-medium-emphasis">Choose new User Role</p>
                         <CInputGroup className="mb-4">
                            <CFormCheck
                               type="radio"
                               name="flexRadioDefault"
                               value="Admin"
                               id="flexRadioDefault1"
                               label="Admin"
                               defaultChecked
                             />
                             <CCol xs={2}></CCol>
                             <CFormCheck
                               type="radio"
                               name="flexRadioDefault"
                               id="flexRadioDefault1"
                               value="User"
                               label="User"
                             />
                          </CInputGroup>
                          <button className="btn btn-lg btn-primary btn-block" type="submit">
                              Create
                          </button>
                       </CCol>
                      </CRow>
                    </form>
                   </CCardBody>
                 </CCard>
               </CCardGroup>
              </CCol>
           </CRow>

         </CContainer>
       </div>
     )
   }

export default CreateUser;
