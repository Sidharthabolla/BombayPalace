import React, { useEffect, useState } from 'react'
import { SideBar } from '../../SideBar/SideBar'
import { Headings } from '../../Headings/Headings'
import { MainSection } from '../../MainSection/MainSection'
import Api from '../../../utils/Api'
import styles from './HomePage.module.scss';

export function HomePage({}) {
    const [busRouteIndex, setBusRouteIndex] = useState([])
    const [allBusRoutes, setAllBusRoutes] = useState([])
    const [userData, setUserData] = useState([])
    
    useEffect (() => {
      Api.get("/bus-routes/all").then(
        response => response.json()
      ).then(
        data => {
          setAllBusRoutes(data);
          getBusRouteUser(data.length);
        }
      )
    }, [])

    const getBusRouteUser = (routeNumber) => {
      setBusRouteIndex(routeNumber)
      Api.get("/user/bus-route/"+routeNumber).then(
        response => response.json()
      ).then(
        data => {
          setUserData(data)
        }
      )
    }
    
    return(
      <div className={styles.HomePageDiv}>
        <body className="is-preload">
          <div id="wrapper">
            <div id="main">
              <div className="inner"> 
                <header id="header">
                  <a href="index.html" className="logo"><strong>My School Bus</strong></a>
                </header>
                <div className={styles.body}>
                  <SideBar 
                    allBusRoutes={allBusRoutes} 
                    getBusRouteUser={getBusRouteUser} 
                    busRouteIndex={busRouteIndex}
                    setBusRouteIndex={setBusRouteIndex}
                    setAllBusRoutes={setAllBusRoutes}
                  />
                  <div className={styles.mainSection}>
                    <Headings busRouteIndex={busRouteIndex}/>
                    {userData && (
                      <MainSection userData={userData}/>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="../assets/js/jquery.min.js"></script>
          <script src="../assets/js/browser.min.js"></script>
          <script src="../assets/js/breakpoints.min.js"></script>
          <script src="../assets/js/util.js"></script>
          <script src="../assets/js/main.js"></script>
        </body>
      </div>
    )
}