import './cart-dropdown.styles.scss';

import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.componetn";
import {selectCartItems} from "../../redux/cart/cart-selectors";
import {createStructuredSelector} from "reselect";
import {NavLink} from "react-router-dom";

const CartDropDown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        (
                            cartItems.map(item => <CartItem key={item.id} item={item}/>)
                        ) :
                        (<span className='empty-message'>Your cart is empty</span>)

                }
            </div>
            <NavLink to={`/checkout`} className='checkout-button'>
                <CustomButton>Go to checkout</CustomButton>
            </NavLink>
        </div>
    );
};

const mapStateToProp = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProp)(CartDropDown);
