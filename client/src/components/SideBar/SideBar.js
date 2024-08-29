import React from 'react';
import cx from 'classnames';
import {TabButton} from '../TabButton/TabButton';
import styles from './SideBar.module.scss';
import Api  from '../../utils/Api'

export function SideBar({
  allBusRoutes, 
  getBusRouteUser, 
  busRouteIndex, 
  setBusRouteIndex,
  setAllBusRoutes})  {

  const createNewBusRoute = () => {
    const newBusRoute = allBusRoutes.length + 1
    Api.get("/bus-routes/create/" + newBusRoute).then(
      response => response.json()
    ).then(
      data => {
        setAllBusRoutes(data);
        setBusRouteIndex(newBusRoute);
        getBusRouteUser(newBusRoute)
      }
    )
  }

  return(
    <div className={styles.sideBarDiv}>
      <header>
        <h2>Bus Routes</h2>
      </header>

      {allBusRoutes.map((busRoute, index) => 
        <button 
         onClick={() => getBusRouteUser(index+1)} 
         className={busRouteIndex == index+1 ? styles.activeButton : ''}>
          Bus Route {busRoute.routeNumber}
        </button>
      )}

      <div className={styles.addNewBusRoute}> 
        <TabButton label={"Add New Bus Route"} clickFunction={() => createNewBusRoute()}/>
      </div>
    </div>
  )
}