import React from "react";
import styles from './MainSection.module.scss';

export function MainSection({userData})  {
  const students = userData.filter((user) => user.role.toLowerCase() === 'student')
  const drivers = userData.filter((user) => user.role.toLowerCase() === 'driver')

  console.log(userData)

  const printUserList = (user, label) => {
    return(
      <div className={styles.list}>
        <div><span>Student :</span> {user.name}</div>
        <div><span>{label} :</span> {user.role}</div>
      </div>
    )
  }
  return(
    <div className={styles.mainSectionDiv}>
      <div className={styles.section}>
        { students.map((student) => {
          return(printUserList(student, "Location"))
        })}
      </div>
      <div className={styles.section}>
        { drivers.map((driver) => {
           return(printUserList(driver, "Contact"))
        })}
      </div>
    </div>
  )
}