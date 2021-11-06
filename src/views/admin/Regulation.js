//import React, { lazy, useState, useEffect } from 'react'
//import Axios from 'axios';
//import {
//  CCard,
//  CCardBody,
//  CCardHeader,
//  CCol,
//  CRow,
//  CTable,
//  CTableBody,
//  CTableDataCell,
//  CTableHead,
//  CTableHeaderCell,
//  CTableRow,
//  CButton,
//  CModal,
//  CModalHeader,
//  CModalTitle,
//  CModalFooter,
//  CModalBody,
//  CForm,
//  CFormText,
//  CFormLabel,
//  CFormInput, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdown,
//} from '@coreui/react'
//
//const Regulation = (props) => {
//
//  const [regulationRecords, showRegulation] = useState([])
//  const [startDate, setStartDate] = useState()
//  const [endDate, setEndDate] = useState()
//  const [percentage, setPercentage] = useState()
//  const [visible, setVisible, validated, setValidated] = useState(false)
//
//  const [order, setOrder] = useState("ASC");
//
//  useEffect(() => {
//    const getRegulation = async () => {
//      const tasksFromServer = await fetchRegulation()
//      showRegulation(tasksFromServer)
//    }
//    getRegulation()
//  }, [])
//
//  // Fetch Tasks
//  const fetchRegulation = async () => {
//    const res = await fetch('http://localhost:8080/api/regulation/emp/limit/' + localStorage.getItem("username") + "/")
//    const data = await res.json()
//    return data
//  }
//
//  const url = "http://localhost:8080/api/regulation/hr"
//
//  //submit function for Regulations  table
//  function submitRegulation(e) {
//    e.preventDefault();
//    Axios.post(url, {
//      startDate: startDate,
//      endDate: endDate,
//      percentage: percentage
//    })
//      .then(res => {
//        window.location.reload(false);
//      })
//  }
//
//
//  //sort function
//  const sorting =(col)=>{
//    if(order==="ASC"){
//      const sorted = [...regulationRecords].sort((a,b)=>
//        a[col].toString().toLowerCase()> b[col].toString().toLowerCase() ? 1:-1
//      );
//      showRegulation(sorted);
//      setOrder("DSC");
//    }
//    if(order==="DSC"){
//      const sorted = [...regulationRecords].sort((a,b)=>
//        a[col].toString().toLowerCase()<b[col].toString().toLowerCase() ? 1:-1
//      );
//      showRegulation(sorted);
//      setOrder("ASC");
//    }
//
//  // Fetch Tasks
//  const fetchRegulationLimit = async () => {
//    const res = await fetch('http://localhost:8080/api/regulationLimit/emp')
//    console.log("print fetchRegulationLimit")
//
//    console.log(res)
//    const data = await res.json()
//    console.log(data)
//    return data
//  }
//
//  const url2 = "http://localhost:8080/api/regulationLimit/hr"
//
//  function submit2(e) {
//    e.preventDefault();
//    Axios.post(url2, {
//      regulationLimitKey: {
//        "startDate": regulationStartDate,
//        "cid": companyCID
//      },
//      dailyLimit: dailyLimit
//    })
//      .then(res => {
//        window.location.reload(false);
//      })
//
//  }
//
//  return (
//    <CRow>
//      <CCol xs={12}>
//        <CCard className="mb-4">
//          <CCardHeader>
//            <strong>Regulations  </strong>
//            <CDropdown>
//              <CDropdownToggle color="light">Filters</CDropdownToggle>
//              <CDropdownMenu>
//                <CDropdownItem onClick={()=>sorting("startDate")}>Start Date</CDropdownItem>
//                <CDropdownItem onClick={()=>sorting("endDate")}>End Date</CDropdownItem>
//              </CDropdownMenu>
//            </CDropdown>
//            <CButton onClick={() => setVisible(!visible)} style={{ float: "right" }} color="light">
//              Add Regulation
//            </CButton>
//            <CModal visible={visible}>
//              <CModalHeader>
//                <CModalTitle>Regulation Details</CModalTitle>
//              </CModalHeader>
//              <CModalBody>
//                <CForm noValidate validated={validated} onSubmit={(e) => submitRegulation(e)}>
//                  <div className="mb-3">
//                    <CFormLabel htmlFor="StartDate">Start Date</CFormLabel>
//                    <CFormInput type="date" id="StartDate" onChange={event => setStartDate(event.target.value)} />
//                  </div>
//                  <div className="mb-3">
//                    <CFormLabel htmlFor="EndDate">End Date</CFormLabel>
//                    <CFormInput type="date" id="EndDate" onChange={event => setEndDate(event.target.value)} />
//                  </div>
//                  <div className="mb-3">
//                    <CFormLabel htmlFor="Percentage">Percentage</CFormLabel>
//                    <CFormInput type="number" id="Percentage" onChange={event => setPercentage(event.target.value)} />
//                  </div>
//                  <CButton onClick={() => setVisible(false)} type="submit" color="primary">
//                    Submit
//                  </CButton>
//                  <CButton color="secondary" onClick={() => setVisible(false)}>
//                    Close
//                  </CButton>
//                </CForm>
//              </CModalBody>
//              <CModalFooter>
//              </CModalFooter>
//            </CModal>
//          </CCardHeader>
//          <CCardBody>
//            <CTable align="middle" responsive>
//              <CTableHead color="dark">
//                <CTableRow>
//                  <CTableHeaderCell align="middle" scope="col">Start Date</CTableHeaderCell>
//                  <CTableHeaderCell align="middle" scope="col">End Date</CTableHeaderCell>
//                  <CTableHeaderCell align="middle" scope="col">Percentage (%)</CTableHeaderCell>
//                  <CTableHeaderCell align="middle" scope="col">Daily Limit No.</CTableHeaderCell>
//                </CTableRow>
//              </CTableHead>
//              <CTableBody>
//                {/* regulationRecords = [{a},{b},{c}] */}
//                {regulationRecords.map((regulationRecord) => (
//                  <CTableRow color="primary" key={regulationRecord.startDate}>
//                    <CTableHeaderCell scope="row">{regulationRecord.startDate}</CTableHeaderCell>
//                    <CTableDataCell align="middle">{regulationRecord.endDate}</CTableDataCell>
//                    <CTableDataCell align="middle">{regulationRecord.percentage}</CTableDataCell>
//                    <CTableDataCell align="middle">{regulationRecord.dailyLimit}</CTableDataCell>
//                  </CTableRow>
//                ))}
//              </CTableBody>
//            </CTable>
//          </CCardBody>
//        </CCard>
//      </CCol>
//    </CRow>
//  )
//  }
//}
//
//export default Regulation
