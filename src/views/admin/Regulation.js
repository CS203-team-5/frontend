import React, { lazy, useState, useEffect } from 'react'
import Axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
  CForm,
  CFormText,
  CFormLabel,
  CFormInput,
} from '@coreui/react'

const Regulation = (props) => {

  const [regulationRecords, showRegulation] = useState([])
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [percentage, setPercentage] = useState()
  const [visible, setVisible, validated, setValidated] = useState(false)

  const [regulationLimitRecords, showRegulationLimit] = useState([])
  const [companyCID, setCompanyCID] = useState()
  const [regulationStartDate, setRegulationStartDate] = useState()
  const [dailyLimit, setDailyLimit] = useState()
  const [visible2, setVisible2, validated2, setValidated2] = useState(false)

  useEffect(() => {
    const getRegulation = async () => {
      const tasksFromServer = await fetchRegulation()
      showRegulation(tasksFromServer)
    }
    getRegulation()

    const getRegulationLimit = async () => {
      console.log("print useEffect")
      const tasksFromServer = await fetchRegulationLimit()
      showRegulationLimit(tasksFromServer)
    }
    getRegulationLimit()
  }, [])

  // Fetch Tasks
  const fetchRegulation = async () => {
    const res = await fetch('http://localhost:8080/api/regulation/emp')
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
  }

  const url = "http://localhost:8080/api/regulation/hr"

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      startDate: startDate,
      endDate: endDate,
      percentage: percentage
    })
      .then(res => {
        window.location.reload(false);
      })
  }

  // Fetch Tasks
  const fetchRegulationLimit = async () => {
    const res = await fetch('http://localhost:8080/api/regulationLimit/emp')
    console.log("print fetchRegulationLimit")

    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
  }

  const url2 = "http://localhost:8080/api/regulationLimit/hr/addRegulationLimit"

  function submit2(e) {
    e.preventDefault();
    Axios.post(url2, {
      regulationLimitKey: {
        "startDate": regulationStartDate,
        "cid": companyCID
      },
      dailyLimit: dailyLimit
    })
      .then(res => {
        window.location.reload(false);
      })
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Regulations</strong>
            <CButton onClick={() => setVisible(!visible)} style={{ float: "right" }} color="light">
              Add Regulation
            </CButton>
            <CModal visible={visible}>
              <CModalHeader>
                <CModalTitle>Regulation Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm noValidate validated={validated} onSubmit={(e) => submit(e)}>
                  <div className="mb-3">
                    <CFormLabel htmlFor="StartDate">Start Date</CFormLabel>
                    <CFormInput type="date" id="StartDate" onChange={event => setStartDate(event.target.value)} />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="EndDate">End Date</CFormLabel>
                    <CFormInput type="date" id="EndDate" onChange={event => setEndDate(event.target.value)} />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="Percentage">Percentage</CFormLabel>
                    <CFormInput type="number" id="Percentage" onChange={event => setPercentage(event.target.value)} />
                  </div>
                  <CButton onClick={() => setVisible(false)} type="submit" color="primary">
                    Submit
                  </CButton>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                </CForm>
              </CModalBody>
              <CModalFooter>
              </CModalFooter>
            </CModal>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Percentage (%)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {/* regulationRecords = [{a},{b},{c}] */}
                {regulationRecords.map((regulationRecord) => (
                  <CTableRow key={regulationRecord.startDate}>
                    <CTableHeaderCell scope="row">{regulationRecord.startDate}</CTableHeaderCell>
                    <CTableDataCell>{regulationRecord.endDate}</CTableDataCell>
                    <CTableDataCell>{regulationRecord.percentage}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Regulation Limit</strong>
            <CButton onClick={() => setVisible2(!visible2)} style={{ float: "right" }} color="light">
              Add Regulation Limit
            </CButton>
            <CModal visible={visible2}>
              <CModalHeader>
                <CModalTitle>Regulation Limit Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm noValidate validated={validated2} onSubmit={(e) => submit2(e)}>
                  <div className="mb-3">
                    <CFormLabel htmlFor="CompanyCid">Company Cid</CFormLabel>
                    <CFormInput type="number" id="CompanyCid" onChange={event => setCompanyCID(event.target.value)} />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="RegulationStartDate">Start Date</CFormLabel>
                    <CFormInput type="date" id="RegulationStartDate" onChange={event => setRegulationStartDate(event.target.value)} />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="DailyLimit">Daily Limit</CFormLabel>
                    <CFormInput type="number" id="DailyLimit" onChange={event => setDailyLimit(event.target.value)} />
                  </div>
                  <CButton onClick={() => setVisible2(false)} type="submit" color="primary">
                    Submit
                  </CButton>
                  <CButton color="secondary" onClick={() => setVisible2(false)}>
                    Close
                  </CButton>
                </CForm>
              </CModalBody>
              <CModalFooter>
              </CModalFooter>
            </CModal>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">Company Cid</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Daily Limit</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {regulationLimitRecords.map((regulationLimitRecord) => (
                  <CTableRow key={regulationLimitRecord.regulationLimitKey}>
                    <CTableHeaderCell scope="row">{regulationLimitRecord.regulationLimitKey.cid}</CTableHeaderCell>
                    <CTableDataCell>{regulationLimitRecord.regulationLimitKey.startDate}</CTableDataCell>
                    <CTableDataCell>{regulationLimitRecord.dailyLimit}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Regulation
