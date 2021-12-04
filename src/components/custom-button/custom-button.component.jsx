import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, googleButton, ...otherProps }) => {
    return (
        <button className={`custom-button ${googleButton ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
