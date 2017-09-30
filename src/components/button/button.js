import React from 'react'
import styles from './button.scss'

export const Button = (props) => {

    return (
        <button 
            className={styles.buttonStyle}
            type={props.type}
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}