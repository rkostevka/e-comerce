import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, googleButton, ...otherProps }) => {
    return (
        <div className={`custom-button ${googleButton ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </div>
    );
};

export default CustomButton;
