import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import {Navigate, Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.comonent";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user-actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user-selectors";


class App extends React.Component {
    unSubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth = null
    }

    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route exact path='/' element={<HomePage/>} />
                    <Route path='/shop' element={<ShopPage/>} />
                    <Route
                        exact
                        path='/sign-in'
                        element={this.props.currentUser ? <Navigate to='/'/> : <SignInPage/>} />
                </Routes>
            </>
        );
    }
}

const mapSetToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapSetToProps, mapDispatchToProps)(App);
