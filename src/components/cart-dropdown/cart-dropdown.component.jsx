import './cart-dropdown.styles.scss';

import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.componetn";

const CartDropDown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}/>)
                }
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
};

const mapStateToProp = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProp)(CartDropDown);
