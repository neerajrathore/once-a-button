import React from 'react'
import './Button.css'

interface ButtonProps {
    label: string
}

// webpack is create bundle single file for large application 
// roll up is used to bundle libraries to create packages
const Button = (props: ButtonProps) => {
    return (
        <button>{props.label}</button>
    )
}

export default Button