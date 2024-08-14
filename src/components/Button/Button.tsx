import React from 'react'
import './Button.css'

export interface ButtonProps {
    primary?: boolean;
    label: string;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    onClick: () => void;
}

// webpack is create bundle single file for large application 
// roll up is used to bundle libraries to create packages
const Button = ({ primary = false, label, size = 'medium', backgroundColor, ...props }: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            // className={`storybook-button storybook-button--${size}`} 
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >{label}
        </button>
    )
}

export default Button