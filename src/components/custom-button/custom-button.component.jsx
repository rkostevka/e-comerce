import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, googleButton, inverted, ...otherProps }) => {
    return (
        <button className={`custom-button 
                ${googleButton ? 'google-sign-in' : ''}
                ${inverted ? 'inverted' : ''}`
            }
            {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
