import React, {useState, useEffect, lazy} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
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
  CWidgetStatsF,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from '@coreui/react'
import {CChartLine} from '@coreui/react-chartjs'
import {getStyle, hexToRgba} from '@coreui/utils'
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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {color} from "chart.js/helpers";

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [quota, setQuota] = useState(1);
  const [cnaNewsRecords, setCnaNewsRecords] = useState([])
  const [covidCasesRecords, setCovidCasesRecords] = useState([])
  const history = useHistory();
  const [weeklyUsers, setWeeklyUser] = useState([])
  const [weeklyLimits, setWeeklyLimit] = useState([])
  const [fname, setFirstName] = useState();
  const [cid, setCid] = useState();
  const [lname, setLastName] = useState();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const CheckIn = () => {
    history.push("/CheckIn");
  }


  useEffect(() => {
    const getQuota = async () => {
      const tasksFromServer = await fetchQuota()
      setQuota(tasksFromServer)
    }
    Axios.get("http://localhost:8080/api/dailyForm/date/users/week/" + yyyy + "-" + mm + "-" + dd, yourConfig).then(res => {

      setWeeklyUser(res.data);

    });

    Axios.get("http://localhost:8080/api/regulationLimit/emp/num/" + localStorage.getItem("username"), yourConfig).then(res => {

      setWeeklyLimit(res.data);

    });

    getQuota()
  }, [])


  const yourConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authorization")
    }
  }

  const fetchQuota = async () => {

    var res = Axios.get("http://localhost:8080/api/bookings/emp/" + localStorage.getItem("username") + "/", yourConfig)
    const data = await res
    return (10 - data.data) < 0 ? 0 : 10 - data.data
  }

  //Fetch CNA News
  useEffect(() => {
    const getCnaNewsRecord = async () => {
      const tasksFromServer = await fetchCnaNewsRecord()
      // console.log(tasksFromServer)
      setCnaNewsRecords(tasksFromServer)
    }
    getCnaNewsRecord()
  }, [])


  const fetchCnaNewsRecord = async () => {
    const url = "http://localhost:8080/api/news/emp/cna/"
    const res = await fetch(url, yourConfig)
    // console.log(res)
    const data = await res.json()
    // console.log(data)
    return data
  }

  //Fetch Covid Cases
  useEffect(() => {
    const getCovidCasesRecord = async () => {
      const tasksFromServer = await fetchCovidCasesRecord()
      // console.log(tasksFromServer)
      setCovidCasesRecords(tasksFromServer)
    }
    getCovidCasesRecord()
  }, [])


  const fetchCovidCasesRecord = async () => {
    const url = "http://localhost:8080/api/news/emp/covidcases/"
    const res = await fetch(url, yourConfig)
    // console.log(res)
    const data = await res.json()
    // console.log(data)
    return data
  }


  //vax
  const [vax, setVax] = useState("Not Vaccinated");
  const [vaxColor, setVaxColor] = useState("danger");

  useEffect(() => {
    const getVax = async () => {
      const vaxStatus = await fetchVax()
      if (vaxStatus) {
        setVax("Vaccinated");
        setVaxColor("success");
      } else {
        setVax("Not Vaccinated Yet");
        setVaxColor("danger");
      }
    }
    getVax()
  }, [vax])

  // Fetch Tasks
  const fetchVax = async () => {
    var res = ""
    res = await fetch("http://localhost:8080/api/user/emailVax/" + localStorage.getItem("username") + "/", yourConfig)
    const data = await res.json()
    return data
  }


  //checkedin
  const [checked, setCheck] = useState("Not Checked In Yet");
  const [checkedColor, setCheckColor] = useState("danger");

  useEffect(() => {
    const getChecked = async () => {
      const checkedStatus = await fetchChecked()
      if (checkedStatus) {
        setCheck("Checked In");
        setCheckColor("success");
      } else {
        setCheck("Not Checked In Yet");
        setCheckColor("danger");
      }

    }
    getChecked()
  }, [checked])

  // Fetch Tasks
  const fetchChecked = async () => {
    var res = ""
    res = await fetch("http://localhost:8080/api/dailyForm/userToday/" + localStorage.getItem("username") + "/", yourConfig)
    const data = await res.json()
    return data
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();


  const first = weeklyUsers[0];
  const second = weeklyUsers[1];
  const third = weeklyUsers[2];
  const fourth = weeklyUsers[3];
  const fifth = weeklyUsers[4];
  const sixth = weeklyUsers[5];
  const seven = weeklyUsers[6];

  const Limit = weeklyLimits;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 2
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };


  return (
    <>
      <CRow>
        <CCol xs={4}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilCalendar} height={24}/>}
            padding={false}
            title="Quota Left This Month"
            value={quota}/>
        </CCol>
        <CCol xs={4}>
          <CWidgetStatsF
            className="mb-3"
            color={vaxColor}
            icon={<CIcon icon={cilShieldAlt} height={24}/>}
            padding={false}
            title="vaccination status"
            value={vax}/>
        </CCol>
        <CCol xs={4}>
          <CWidgetStatsF
            className="mb-3"
            color={checkedColor}
            icon={<CIcon icon={cilCalendarCheck} height={24}/>}
            padding={false}
            footer={
              <CLink
                className="font-weight-bold font-xs text-medium-emphasis"
                href="/checkin"
                target="_blank"
              >
                Check In Here
                <CIcon icon={cilArrowRight} className="float-end" width={16}/>
              </CLink>
            }
            title="Work From Office "
            value={checked}/>
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardHeader>
          <strong sm={6} md={8}>News Top Stories</strong>
          <strong sm={6} md={8} onClick={() => window.open("https://www.channelnewsasia.com/coronavirus-covid-19")}> (more news)</strong>

          <div style={{float : 'right', paddingLeft : '5px'}}>
          <strong sm={6} md={8}> {covidCasesRecords.cases} </strong>
          <strong sm={6} md={8} style={{color:'#696969'}}> {covidCasesRecords.caseno} </strong>
          <strong sm={6} md={8}> {covidCasesRecords.deaths} </strong>
          <strong sm={6} md={8} style={{color:'#ff6370'}}> {covidCasesRecords.deathno} </strong>
          <strong sm={6} md={8}> {covidCasesRecords.recovered} </strong>
          <strong sm={6} md={8} style={{color:'#8ACA2B'}}> {covidCasesRecords.recoveredno} </strong>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>


          </CRow>

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {cnaNewsRecords.map((cnaNewsRecord, index) => (
              <div key={index}>
                <CCarousel>
                  <CCarouselItem>
                    <img className="d-block w-100" src={cnaNewsRecord.src}/>
                    <CCarouselCaption className="d-none d-md-block">
                      <h2 onClick={() => window.open(cnaNewsRecord.href)}>{cnaNewsRecord.title}</h2>
                    </CCarouselCaption>
                  </CCarouselItem>
                </CCarousel>
              </div>
            ))}
          </Carousel>


        </CCardBody>
      </CCard>


      <CCard className="mb-4">

        <CCardBody>

          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Live Daily Report
              </h4>
              <div className="small text-medium-emphasis">past 7 days</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">


            </CCol>
          </CRow>

        </CCardBody>
        <CCardFooter>
          <CRow xs={{cols: 1}} md={{cols: 5}} className="text-center">
            <CCol className="mb-sm-6 mb-6">
              <div className="text-medium-emphasis">Daily Visits</div>
              <strong>{weeklyLimits} Users </strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={seven}/>
            </CCol>
            <CCol className="mb-sm-6 mb-6">
              <div className="text-medium-emphasis">To Be Done</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={40}/>
            </CCol>
          </CRow>
        </CCardFooter>
        <CChartLine
          style={{height: '300px', marginTop: '40px'}}
          data={{
            labels: [1, 2, 3, 4, 5, "yesterday", date],
            datasets: [

              {
                label: 'Number of people checked in',
                backgroundColor: 'transparent',
                borderColor: getStyle('--cui-success'),
                pointHoverBackgroundColor: getStyle('--cui-success'),
                borderWidth: 2,
                borderDash: [8, 5],
                data: [first, second, third, fourth, fifth, sixth, seven],
              },
              {
                label: 'Daily Limit',
                backgroundColor: 'transparent',
                borderColor: getStyle('--cui-danger'),
                pointHoverBackgroundColor: getStyle('--cui-danger'),
                borderWidth: 1,
                borderDash: [8, 5],
                data: [Limit, Limit, Limit, Limit, Limit, Limit, Limit]
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
      </CCard>
    </>
  )
}

export default Dashboard
