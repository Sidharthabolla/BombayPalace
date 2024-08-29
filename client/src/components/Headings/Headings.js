import React, { useEffect, useState } from 'react'
import {TabButton} from '../TabButton/TabButton';
import Modal from 'react-modal';
import styles from './Headings.module.scss';
import Api  from '../../utils/Api'

export function Headings({busRouteIndex}) {
  const userTypes = { 
    0 : 'STUDENT',
    1 : 'DRIVER'
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userKind, setUserKind] = useState(0);
  const [contactName, setContactName] = useState('');

  function openModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const createNewUser = () => {
    const user = {
      name: contactName,
      contact: "123-456-2222",
      role: userTypes[userKind],
      busRoute: busRouteIndex,
      status: "active"
    }
    Api.create("/user/create-new-user", user).then(
      response => response.json()
    ).then(
      data => {
        openModal()
      }
    )
  }

  return(
    <div className={styles.headingsDiv}>
      <div className={styles.heading}>
        <h2 className={styles.pageHeading}>Bus Route {busRouteIndex}</h2> 
      </div>
      <div className={styles.tabs}>
        <TabButton className={styles.tab} label={"ADD USER"} clickFunction={openModal}/>
        <TabButton className={styles.tab} label={"DELETE BUS ROUTE"} clickFunction={openModal}/>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={{content: styles.Modal}}
        className='modal'
        // contentLabel="Example Modal"
      >
        <div className='modal-tabs'>
          {Object.keys(userTypes).map((index) =>
            <TabButton 
              label={userTypes[index]} 
              clickFunction={() => setUserKind(index)}
              active={userKind == index}
            />
          )}
        </div>
        <div className={styles.form}>
          <div className={styles.formLabel}>
            <span>Name:</span>
            <input value={contactName} onChange={(e) => setContactName(e.target.value)}/>
          </div>
          <div className={styles.formLabel}><span>Contact:</span><input /></div>
          <div className={styles.formLabel}><span>Role:</span>{userTypes[userKind]}</div>
          <div className={styles.formLabel}><span>busRoute:</span><div><input value={busRouteIndex}/></div></div>
          <div className={styles.buttonDiv}>
            <button className={styles.button} clickFunction={() => createNewUser()}> Create </button> 
          </div>
        </div>
      </Modal>
    </div>
  )
}