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
         if (form.checkValidity() === false) {
           event.preventDefault()
           event.stopPropagation()
         }
         setValidated(true)
        history.push("/UserManagement");
       const endpoint = "http://localhost:8080/authenticate";

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

          }

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
                       <h1>Create new User</h1>
                               <p className="text-medium-emphasis"> Create account for new user by entering relevant details  </p>
                               <CInputGroup className="mb-4">

                                <CCol md={10}>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="User Email"
                                        onChange={event => setEmail(event.target.value)}
                                    required/>
                                     </CCol>




                               </CInputGroup >
                              <CInputGroup className="mb-4">
                                <CCol md={10}>

                                   <CFormInput type="text" placeholder="Re-enter User Email" id="validationServer05" required />
                                   <CFormFeedback invalid>Please check email entered </CFormFeedback>
                                 </CCol>
                                </CInputGroup>



                               <CInputGroup className="mb-4">

                                <CCol md={10 }>
                                    <div className="form-group">
                                         <input type="text"
                                             className="form-control"
                                             placeholder="First Name"
                                             onChange={event => setFirstName(event.target.value)}
                                        required />
                                     </div>
                                 </CCol>
                                </CInputGroup>

                                 <CInputGroup className="mb-4">


                               <CCol md={10 }>
                                 <input type="Last Name"
                                     className="form-control"
                                     placeholder="Last Name"
                                     onChange={event => setLastName(event.target.value)}
                                 required />
                                  </CCol>

                               </CInputGroup>



                               <CRow>
                               <CCol xs={6}>
<p className="text-medium-emphasis">Choose new User Role

                                  </p>
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


                                      <CInputGroup className="mb-4">


                                      </CInputGroup>
                                  <button className="btn btn-lg btn-primary btn-block" type="submit">
                                      Create
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

export default CreateUser;