import React, { useState, useEffect, lazy } from 'react';
import { useHistory } from 'react-router-dom';
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
  CContainer

} from '@coreui/react'

import image from "./background.jpg"
import { CChart, CChartLine , CChartDoughnut} from '@coreui/react-chartjs'
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
import './dashboard.css'

import avatar1 from './../../assets/images/avatars/1.jpg'
import avatar2 from './../../assets/images/avatars/2.jpg'
import avatar3 from './../../assets/images/avatars/3.jpg'
import avatar4 from './../../assets/images/avatars/4.jpg'
import avatar5 from './../../assets/images/avatars/5.jpg'
import avatar6 from './../../assets/images/avatars/6.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [quota, setQuota] = useState(1);
  const history = useHistory();
  const [weeklyUsers, setWeeklyUser] = useState([])
  const [weeklyLimits, setWeeklyLimit] = useState([])
  const [fname, setFirstName] = useState();
  const [cid, setCid] = useState();
  const [lname, setLastName] = useState();
  const current = new Date();
  const [available, setAvailable]=useState();
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
    Axios.get("http://localhost:8080/api/dailyForm/emp/date/users/week/" + yyyy + "-" + mm + "-" + dd, yourConfig).then(res => {

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


  //vax
  const [vax, setVax] = useState("Not Vaccinated");
  const [vaxColor, setVaxColor] = useState("danger");

  useEffect(() => {
    const getVax = async () => {
      const vaxStatus = await fetchVax()
      if (vaxStatus) {
        setVax("Vaccinated");
        setVaxColor("success");
      }
      else {
        setVax("Not Vaccinated Yet");
        setVaxColor("danger");
      }
    }
    getVax()
  }, [vax])

  // Fetch Tasks
  const fetchVax = async () => {
    var res = ""

   Axios.get("http://localhost:8080/api/user/emp/emailVax/" + localStorage.getItem("username") + "/", yourConfig).then(res => {
    return res
    });

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
      }
      else {
        setCheck("Not Checked In Yet");
        setCheckColor("danger");
      }

    }
    getChecked()
  }, [checked])

  // Fetch Tasks
  const fetchChecked = async () => {
    var res = ""


    Axios.get("http://localhost:8080/api/dailyForm/emp/userToday/" + localStorage.getItem("username") + "/", yourConfig).then(res => {
        return res
        });


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





  //carousel
  const slides = [
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const doughnut = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [Limit, Limit, Limit],
      backgroundColor: [
        '#8ED1FC',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#0693E3',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
  };


  return (

  <div className="dashboard">

      <CContainer>
      <CCol>

      </CCol>
      <CRow>
        <CCol xs={4}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilCalendar} height={24} />}
            padding={false}
            title="Quota Left This Month"
            value={quota} />
        </CCol>
        <CCol xs={4}>
          <CWidgetStatsF
            className="mb-3"
            color={vaxColor}
            icon={<CIcon icon={cilShieldAlt} height={24} />}
            padding={false}
            title="vaccination status"
            value={vax} />
        </CCol>
        <CCol xs={4}>
          <CWidgetStatsF
            className="mb-3"
            color={checkedColor}
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
            value={checked} />
        </CCol>
      </CRow>

      <CCardBody>

          <CCol sm={5}>
                       <h2 id="traffic" className="card-title mb-0">
                       News
                       </h2>


                       <div className="small text-medium-emphasis"> Latest news updates</div>
                     </CCol>

          <CRow>


          </CRow>

           <CRow></CRow>

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
            <div>
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </div>
            <div>
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </div>
            <div>
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </div>
            <div>
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </div>
            <div>
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </div>
          </Carousel>;


        </CCardBody>





        <CCardBody>

          <CRow>
            <CCol sm={5}>
              <h1 id="traffic" className="card-title mb-0">
                Live Daily Report
              </h1>

            </CCol>
            <CCol sm={7} className="d-none d-md-block">


            </CCol>
          </CRow>

        </CCardBody>
         <CRow></CRow>
         <CRow>

          <CCol xs={4}>

          <CCard className="mb-4">
               <CCardBody>
               <h2> Remaining Capacity : </h2>

                <div className="small text-medium-emphasis">Currently, limit of {Limit} with total check-in of {seven}</div>
                <CRow>
                </CRow>


                 <CChartDoughnut
                   data={{
                     labels: ["Filled","Current Capacity"],
                     datasets: [
                       {
                         backgroundColor: ['#E66F66', '#8ED1FC'],
                         data: [seven,Limit],
                       },
                     ],
                   }}
                 />

               </CCardBody>
              </CCard>
            </CCol>


          <CCol xs={8}>

          <CCard className="mb-4">
           <CCardBody>
          <h2> Check In Tracker </h2>
           <div className="small text-medium-emphasis">Daily Limit And Check-in Data For Past 7 Days</div>


        <CChartLine
          style={{ height: '300px', marginTop: '40px' }}
          data={{
            labels: [1, 2, 3, 4, 5, "yesterday", date],
            datasets: [

              {
                label: 'Number of people checked in',
                backgroundColor: 'transparent',
                borderColor: "#FCB900",
                pointHoverBackgroundColor: getStyle('--cui-success'),
                borderWidth: 2.5,

                data: [first, second, third, fourth, fifth, sixth, seven],
              },
              {
                label: 'Daily Limit',
                backgroundColor: 'transparent',
                borderColor: "#FF6900",
                pointHoverBackgroundColor: getStyle('--cui-danger'),
                borderWidth: 2.5,

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
                  stepSize: Math.ceil(10),
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

        </CCard>

          </CCol>

          </CRow>

      </CContainer>

    </div>


  )
}

export default Dashboard
