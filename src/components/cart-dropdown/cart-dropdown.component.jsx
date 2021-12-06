import './cart-dropdown.styles.scss';

import React from 'react';
import CustomButton from "../custom-button/custom-button.component";

const CartDropDown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
};

export default CartDropDown;
