import React from 'react'
import styles from './TabButton.module.scss';

export function TabButton({label, clickFunction, active = true}) {
  return (
    <div 
      className={active ? styles.TabButtonActive : styles.TabButtonInactive} 
      onClick={() => clickFunction()}>
      {label}
    </div>
  )
}