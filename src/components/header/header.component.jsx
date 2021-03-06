import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss'
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CardIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user-selectors";
import {selectCartHidden} from "../../redux/cart/cart-selectors";
import {createStructuredSelector} from "reselect";

const Header = ( { currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container' >
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to="/shop" className='option' >Shop</Link>
                <Link to="/contact" className='option' >Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                        :
                        <Link to="/sign-in" className='option' >Sign in</Link>

                }
                <CardIcon />
            </div>
            {
                hidden ? null : <CartDropDown />

            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
