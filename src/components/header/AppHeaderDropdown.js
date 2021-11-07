import React, { Component,useState } from "react";
import axios from "axios";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'


const AppHeaderDropdown = () => {
   const [fname, setFirstName] = useState();
   const [lname, setLastName] = useState();

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
  });

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {fname}&nbsp;{lname}
      </CDropdownToggle>
       <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
              <CDropdownItem href="/profile">
                <CIcon icon={cilBell} className="me-2" />
                Profile
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilLockLocked} className="me-2" />
                Log Out
              </CDropdownItem>
       </CDropdownMenu>

    </CDropdown>
  )
}

export default AppHeaderDropdown
//      <CDropdownMenu className="pt-0" placement="bottom-end">
//        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
//        <CDropdownItem href="#">
//          <CIcon icon={cilBell} className="me-2" />
//          Updates
//          <CBadge color="info" className="ms-2">
//            42
//          </CBadge>
//        </CDropdownItem>
//        <CDropdownItem href="#">
//          <CIcon icon={cilEnvelopeOpen} className="me-2" />
//          Messages
//          <CBadge color="success" className="ms-2">
//            42
//          </CBadge>
//        </CDropdownItem>
//        <CDropdownItem href="#">
//          <CIcon icon={cilTask} className="me-2" />
//          Tasks
//          <CBadge color="danger" className="ms-2">
//            42
//          </CBadge>
//        </CDropdownItem>
//        <CDropdownItem href="#">
//          <CIcon icon={cilCommentSquare} className="me-2" />
//          Comments
//          <CBadge color="warning" className="ms-2">
//            42
//          </CBadge>
//        </CDropdownItem>
//        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
//        <CDropdownItem href="#">
//          <CIcon icon={cilUser} className="me-2" />
//          Profile
//        </CDropdownItem>
//        <CDropdownItem href="#">
//          <CIcon icon={cilSettings} className="me-2" />
//          Settings
//        </CDropdownItem>
//        <CDropdownItem href="#">
//          <CIcon icon={cilCreditCard} className="me-2" />
//          Payments
//          <CBadge color="secondary" className="ms-2">
//            42
//          </CBadge>
//        </CDropdownItem>
//        <CDropdownItem href="#">
//          <CIcon icon={cilFile} className="me-2" />
//          Projects
//          <CBadge color="primary" className="ms-2">
//            42
//          </CBadge>
//        </CDropdownItem>
//        <CDropdownDivider />
//        <CDropdownItem href="#">
//          <CIcon icon={cilLockLocked} className="me-2" />
//          Lock Account
//        </CDropdownItem>
//      </CDropdownMenu>
