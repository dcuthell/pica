import React from 'react'
import styles from './styles.module.css'

export default function PicaButton (props) {
  return (
    <div className={styles.PicaButton + ' PicaButton'} style={props.styles}>
      <style>
        {`
            .PicaButton:hover {
            background-color: #fff100;
            cursor: pointer;
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
