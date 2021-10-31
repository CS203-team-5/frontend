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

const News = (props) => {

    const [newsRecords, showNews] = useState([])
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [content, setContent] = useState()
    const [visible, setVisible, validated, setValidated] = useState(false)

    useEffect(() => {
        const getNews = async () => {
            const tasksFromServer = await fetchNews()
            showNews(tasksFromServer)
        }
        getNews()
    }, [])
    var res;

    // Fetch Tasks
    const fetchNews = async () => {
        res = await fetch('http://localhost:8080/api/news/hr/getAll')
        console.log(res)
        const data = await res.json()
        console.log(data)
        return data
    }

    const url = "http://localhost:8080/api/news/hr/create/newNews"
    
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            date: date,
            title: title,
            content: content
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
                        <strong>News Records</strong>
                        <CButton onClick={() => setVisible(!visible)} style={{ float: "right" }} color="light">
                        Add News
                        </CButton>
                        <CModal visible={visible}>
                            <CModalHeader>
                                <CModalTitle>News Description</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CForm noValidate validated={validated} onSubmit={(e) => submit(e)}>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleDate">date</CFormLabel>
                                        <CFormInput type="date" id="exampleDate" onChange={event => setDate(event.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleTitle">Title</CFormLabel>
                                        <CFormInput type="title" id="exampleTitle" onChange={event => setTitle(event.target.value)} />
                                        <CFormText id="titleHelp">Title should not be null.</CFormText>
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="exampleContent">Content</CFormLabel>
                                        <CFormInput type="content" id="exampleContent" onChange={event => setContent(event.target.value)} />
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
                                    <CTableHeaderCell scope="col">News ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Content</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {newsRecords.map((newsRecord) => (
                                    <CTableRow key={newsRecord.nid}>
                                        <CTableHeaderCell scope="row">{newsRecord.nid}</CTableHeaderCell>
                                        <CTableDataCell>{newsRecord.date}</CTableDataCell>
                                        <CTableDataCell>{newsRecord.title}</CTableDataCell>
                                        <CTableDataCell>{newsRecord.content}</CTableDataCell>
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
                        <strong>React Table</strong> <small>Control Setup</small>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead color="dark">
                                <CTableRow>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Mark</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Jacob</CTableDataCell>
                                    <CTableDataCell>Thornton</CTableDataCell>
                                    <CTableDataCell>@fat</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                                    <CTableDataCell>@twitter</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default News
