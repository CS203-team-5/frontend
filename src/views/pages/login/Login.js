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
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
//import createHistory from 'history/createBrowserHistory';

//const history=createBrowserHistory({forceRefresh:true});



function Login(props) {
const history=useHistory();
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
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
           username: username,
           password: password
       };

       axios.post(endpoint, user_object).then(res => {
           localStorage.setItem("authorization", res.data.token);
           localStorage.setItem("username", username);
            localStorage.setItem("password", password);
           return handleDashboard();
       });
   };

   const handleDashboard = () => {
    //  const name= localStorage.getItem("username");
    //  const intialValue
    //    axios.get("http://localhost:8080/api/user/hr/getAll").then(res => {
    //        if (res.response === 200) {
      history.push("/dashboard");

      //      } else {
      //          console.log("Fail")
      //          alert("Authentication failure");
      //      }
      //  });
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

                       <h1>Login</h1>


                               <p className="text-medium-emphasis">Sign In to your account</p>
                               <CInputGroup className="mb-3">
                               <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="User name"
                                        onChange={event => setUsername(event.target.value)}
                                    />
                                </div>

                               </CInputGroup>
                               <CInputGroup className="mb-4">

                             <div className="form-group">
                                 <input type="password"
                                     className="form-control"
                                     placeholder="password"
                                     onChange={event => setPassword(event.target.value)}
                                 />
                                </div>
                               </CInputGroup>
                               <CRow>
                               <CCol xs={6}>

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

//   export default Login




















//     return (
//         <div>
//         <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//            <CContainer>
//             <div className="wrapper">
//              <h1> Login </h1>
//                 <form className="form-signin" onSubmit={handleFormSubmit}>
//                     <h2 className="form-signin-heading">Please login</h2>
//                     <div className="form-group">
//                         <input type="text"
//                             className="form-control"
//                             placeholder="User name"
//                             onChange={event => setUsername(event.target.value)}
//                         />
//                     </div>
//
//                     <div className="form-group">
//                         <input type="password"
//                             className="form-control"
//                             placeholder="password"
//                             onChange={event => setPassword(event.target.value)}
//                         />
//                     <div></div>
//                     </div>
//                     <button className="btn btn-lg btn-primary btn-block" type="submit">
//                         Login
//                     </button>
//                 </form>
//             </div>
//             </CContainer>
//            </div>
//         </div>
//     );
//
//}


export default withRouter(Login);

//import React from 'react'
//import { Link } from 'react-router-dom'
//import {
//  CButton,
//  CCard,
//  CCardBody,
//  CCardGroup,
//  CCol,
//  CContainer,
//  CForm,
//  CFormInput,
//  CInputGroup,
//  CInputGroupText,
//  CRow,
//} from '@coreui/react'
//import CIcon from '@coreui/icons-react'
//import { cilLockLocked, cilUser } from '@coreui/icons'
//
//const Login = () => {
//  return (
//    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//      <CContainer>
//        <CRow className="justify-content-center">
//          <CCol md={8}>
//            <CCardGroup>
//              <CCard className="p-4">
//                <CCardBody>
//                  <CForm>
//                    <h1>Login</h1>
//                    <p className="text-medium-emphasis">Sign In to your account</p>
//                    <CInputGroup className="mb-3">
//                      <CInputGroupText>
//                        <CIcon icon={cilUser} />
//                      </CInputGroupText>
//                      <CFormInput placeholder="Username" autoComplete="username" />
//                    </CInputGroup>
//                    <CInputGroup className="mb-4">
//                      <CInputGroupText>
//                        <CIcon icon={cilLockLocked} />
//                      </CInputGroupText>
//                      <CFormInput
//                        type="password"
//                        placeholder="Password"
//                        autoComplete="current-password"
//                      />
//                    </CInputGroup>
//                    <CRow>
//                      <CCol xs={6}>
//                        <CButton color="primary" className="px-4">
//                          Login
//                        </CButton>
//                      </CCol>
//                      <CCol xs={6} className="text-right">
//                        <CButton color="link" className="px-0">
//                          Forgot password?
//                        </CButton>
//                      </CCol>
//                    </CRow>
//                  </CForm>
//                </CCardBody>
//              </CCard>
//              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                <CCardBody className="text-center">
//                  <div>
//                    <h2>Sign up</h2>
//                    <p>
//                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                      tempor incididunt ut labore et dolore magna aliqua.
//                    </p>
//                    <Link to="/register">
//                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                        Register Now!
//                      </CButton>
//                    </Link>
//                  </div>
//                </CCardBody>
//              </CCard>
//            </CCardGroup>
//          </CCol>
//        </CRow>
//      </CContainer>
//    </div>
//  )
//}
//
//export default Login
