import React, { Component,useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import image from './background.jpg';
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
  CImage
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
//import createHistory from 'history/createBrowserHistory';

//const history=createBrowserHistory({forceRefresh:true});
//const background= require('/assets/images/background.jpg')


function Login(props) {
const history=useHistory();
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
//   const[user, setUser]= useState();


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


             history.push("/dashboard");
      });
   };

   var sectionStyle = {
     width: "100%",
     height: "400px",
     backgroundImage: { image }
   };




//     if(localStorage.getItem("UserRole")!=null){
//
//          if(localStorage.getItem("UserRole")=="HR"){
//               history.push("/dashboard");
//           }else{
//              history.push("/UserManagement");
//           }
//     }

     return (
       <div styles={{backgroundImage: '({image})'}}>
         <CContainer>
           <CRow className="justify-content-center">
             <CCol md={6}>
               <CCardGroup>
                 <CCard className="p-4">
                   <CCardBody>
                     <CForm className="form-signin" onSubmit={handleFormSubmit}>
                       <h1>Login</h1>
                       <p className="text-medium-emphasis">Sign In to your account</p>
                       <CInputGroup className="mb-3">
                         <CInputGroupText>
                           <CIcon icon={cilUser} />
                         </CInputGroupText>
                         <CFormInput placeholder="Username" autoComplete="username" className="form-control" onChange={event => setUsername(event.target.value)}/>
                       </CInputGroup>
                       <CInputGroup className="mb-4">
                         <CInputGroupText>
                           <CIcon icon={cilLockLocked} />
                         </CInputGroupText>
                         <CFormInput
                           type="password"
                           placeholder="Password"
                           autoComplete="current-password"
                           onChange={event => setPassword(event.target.value)}
                         />
                       </CInputGroup>
                       <CRow>
                         <CCol xs={6}>
                           <CButton color="primary" className="px-4 btn btn-lg btn-primary btn-block" type="submit">
                             Login
                           </CButton>
                         </CCol>
                         <CCol xs={6} className="text-right">
                           <CButton color="link" className="px-0">
                             Forgot password?
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


export default withRouter(Login);
