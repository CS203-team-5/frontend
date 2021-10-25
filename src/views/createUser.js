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

   const handleFormSubmit = event => {
       event.preventDefault();

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

          }else{

          }

       });
   };

   const handleDashboard = () => {
//      const name= localStorage.getItem("username");
//      const intialValue
//        axios.get("http://localhost:8080/api/user/hr/getAll").then(res => {
//            if (res.response === 200) {
      history.push("/dashboard");
      alert("success");

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

                       <h1>Create new User</h1>


                               <p className="text-medium-emphasis"> Create account for new user by entering relevant details  </p>
                               <CInputGroup className="mb-4">
                               <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="User Email"
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </div>

                               </CInputGroup>


                               <CInputGroup className="mb-4">


                                    <div className="form-group">
                                         <input type="text"
                                             className="form-control"
                                             placeholder="First Name"
                                             onChange={event => setFirstName(event.target.value)}
                                         />
                                     </div>
                                </CInputGroup>

                                 <CInputGroup className="mb-4">

                             <div className="form-group">
                                 <input type="Last Name"
                                     className="form-control"
                                     placeholder="Last Name"
                                     onChange={event => setLastName(event.target.value)}
                                 />
                                </div>
                               </CInputGroup>





                                 <CInputGroup className="mb-4">

                             <div className="form-group">
                                 <input type="password"
                                     className="form-control"
                                     placeholder="set default password"
                                     onChange={event => setPassword(event.target.value)}
                                 />
                                </div>
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
                                      Login
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
