import React from 'react'
import styles from './styles.module.css'

export default function TBABanner (props) {
  return (
    <div className={styles.TBABanner + ' TBABanner'} style={props.style}>
      <style>
        {`
            .TBABanner:hover {
            background-color: #fff100;
          }
          .TBABanner a:hover{
            text-decoration: none;
            color: inherit;
        }
        `}
      </style>
      {props.children}
    </div>
  )
}
