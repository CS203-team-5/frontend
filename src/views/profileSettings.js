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



function ProfileSettings(props) {
const history=useHistory();
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [email, setEmail] = useState();


    const [oldFirstName, setOldFirstName] = useState();
    const [oldLastName, setOldLastName] = useState();
    const [oldEmail, setOldEmail] = useState();


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

       if (form.checkValidity() === false) {
         event.preventDefault()
         event.stopPropagation()
       }
       setValidated(true)


      const getUser="https://hkm9n2b8s0.execute-api.ap-southeast-1.amazonaws.com/api/emp/user/email/"+ localStorage.getItem("username");
      const yourConfig = {
          headers: {
             Authorization: "Bearer " + localStorage.getItem("authorization")
          }
       }
        axios.get(getUser, yourConfig).then(res => {
            var json= res.data;

           setOldFirstName(json["fname"])
           setOldLastName(json["lname"])
           setOldEmail(json["email"])
       });
      const user_object = {
              email: localStorage.getItem("username"),

              password: localStorage.getItem("authorization"),

          };


       if(oldFirstName!=firstName){

             axios.put("https://hkm9n2b8s0.execute-api.ap-southeast-1.amazonaws.com/api/user/fname/"+ firstName,
             user_object,
              yourConfig).then(res => { });

       }
       if(oldLastName!=lastName){
             axios.put("https://hkm9n2b8s0.execute-api.ap-southeast-1.amazonaws.com/api/user/lname/"+ lastName,
             user_object,
              yourConfig).then(res => { });

       }

       if(oldEmail!=email){
              axios.put("https://hkm9n2b8s0.execute-api.ap-southeast-1.amazonaws.com/api/user/new/email/"+ email,
             user_object,
              yourConfig).then(res => { });
       }
       history.push("/dashboard");

   };



     return (
       <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
         <CContainer>
           <CRow className="justify-content-center">

             <CCol md={8}>

               <CCardGroup>
                 <CCard className="p-4">
                   <CCardBody>
                         <h1> Settings </h1>
                               <p className="text-medium-emphasis"> Update Profile Details </p>
                                <form className="form-signin" onSubmit={handleFormSubmit}>
                               <CInputGroup className="mb-4">

                                <CCol md={10}>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={event => setEmail(event.target.value)}
                                required/>
                                 </CCol>

                               </CInputGroup >

                               <CInputGroup className="mb-4">

                                <CCol md={10}>
                                    <div className="form-group">
                                         <input type="text"
                                             className="form-control"
                                             placeholder="First Name"
                                             onChange={event => setFirstName(event.target.value)}
                                        required />
                                     </div>
                                 </CCol>
                                </CInputGroup>


                              <CRow>

                               <CCol md={10 }>
                                 <input type="Last Name"
                                     className="form-control"
                                     placeholder="Last Name"
                                     onChange={event => setLastName(event.target.value)}
                                 required />
                                  </CCol>
                               </CRow>







                               <CRow>
                               <CCol xs={4}>

                                      <CInputGroup className="mb-4">


                                      </CInputGroup>
                                  <button className="btn btn-lg btn-primary btn-block" type="submit">
                                     Submit
                                  </button>

                               </CCol>
                                   </CRow>

                                  </form>
                                   <CCol xs={4}>
                                   </CCol>

                               <CCol xs={4}>
                               <button className="btn btn-lg btn-primary btn-block"
                                 onClick={(event) => {
                                    history.push("/UpdatePassword")
                                  }}  variant="outline">
                                        Update Password
                              </button>






                            </CCol>






                   </CCardBody>
                 </CCard>
               </CCardGroup>
              </CCol>




           </CRow>

         </CContainer>
       </div>
     )
   }

export default ProfileSettings;



