import React from 'react'
import styles from './styles.css'

export default function PicaButton (props) {
  return (
    <div className={styles.PicaButton + ' PicaButton'} style={props.style}>
      <style>
        {`
            .PicaButton:hover {
            background-color: #fff100;
          }
          .PicaButton a:hover{
            text-decoration: none;
            color: inherit;
        }
        `}
      </style>
      {props.children}
    </div>
  )
}
