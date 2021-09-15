import React, { lazy, useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'

const News = (props) => {
    const [newsRecords, showNews] = useState([])
    useEffect(() => {
        const getNews = async () => {
            const tasksFromServer = await fetchNews()
            showNews(tasksFromServer)
        }

        getNews()
    }, [])

    // Fetch Tasks
    const fetchNews = async () => {
        const res = await fetch('http://localhost:8080/news/')
        console.log(res)
        const data = await res.json()
        console.log(data)
        return data
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>News Records</strong> <small>Get this from backend</small>
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