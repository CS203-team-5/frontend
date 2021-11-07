import React, { useState, useEffect, lazy } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsF
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilCalendar,
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilChartPie,
  cilArrowRight,
  cilCalendarCheck,
  cilShieldAlt,
} from '@coreui/icons'

import avatar1 from './../../assets/images/avatars/1.jpg'
import avatar2 from './../../assets/images/avatars/2.jpg'
import avatar3 from './../../assets/images/avatars/3.jpg'
import avatar4 from './../../assets/images/avatars/4.jpg'
import avatar5 from './../../assets/images/avatars/5.jpg'
import avatar6 from './../../assets/images/avatars/6.jpg'

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [quota, setQuota] = useState(1);
  const history=useHistory();
  const [weeklyUser,setWeeklyUser]= useState([])
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const CheckIn= ()=>{
      history.push("/CheckIn");

  }

  useEffect(() => {
      const getQuota = async () => {
        const tasksFromServer = await fetchQuota()
        setQuota(tasksFromServer)
      }
      getQuota()
    }, [])


    const yourConfig = {
      headers: {
         Authorization: "Bearer " + localStorage.getItem("authorization")
      }
   }

    const fetchQuota = async () => {
      var res = axios.get("http://localhost:8080/api/bookings/emp/getAll/{email}/",
        {
          params: {
            email: localStorage.getItem("username")
          }
        }, yourConfig)
      const data = await res
      return (10 - data.data) < 0 ? 0 : 10 - data.data
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();




//        axios.get("http://localhost:8080/api/dailyForm/date/users/week/"+ yyyy + "-"+ mm+ "-"+ dd, yourConfig).then(res =>{
//
//            setWeeklyUser(res.data);
//
//        });

  return (
    <>
    <p> {date} Weekly: {weeklyUser}</p>
        <CRow>
          <CCol xs={4}>
            <CWidgetStatsF
              className="mb-3"
              color="primary"
              icon={<CIcon icon={cilCalendar} height={24} />}
              padding={false}
              title="Quota Left This Month"
              value={quota}/>
          </CCol>
          <CCol xs={4}>
            <CWidgetStatsF
              className="mb-3"
              color="warning"
              icon={<CIcon icon={cilShieldAlt} height={24} />}
              padding={false}
              title="vaccination status"
              value="Vaccinated"/>
          </CCol>
          <CCol xs={4}>
            <CWidgetStatsF
              className="mb-3"
              color="warning"
              icon={<CIcon icon={cilCalendarCheck} height={24} />}
              padding={false}
              footer={
                <CLink
                  className="font-weight-bold font-xs text-medium-emphasis"
                  href="/checkin"
                  target="_blank"
                >
                  Check In Here
                  <CIcon icon={cilArrowRight} className="float-end" width={16} />
                </CLink>
              }
              title="Work From Office "
              value="Checked In"/>
          </CCol>
        </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>

          </CRow>

          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: {weeklyUser},
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            <CCol className="mb-sm-6 mb-6">
              <div className="text-medium-emphasis">Daily Limits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={40} />
            </CCol>
            <CCol className="mb-sm-6 mb-6">
              <div className="text-medium-emphasis">Daily Visits</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={40} />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
