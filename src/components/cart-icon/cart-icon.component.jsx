import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import React from 'react';
import {toggleCartHidden} from "../../redux/cart/cart-actions";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart-selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapToStateProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapToStateProps, mapDispatchToProps)(CartIcon);
