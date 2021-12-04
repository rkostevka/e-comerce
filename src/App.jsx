import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.comonent";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            } else {
                this.setState({
                    currentUser: userAuth
                })
            }
        })
        console.log(this.state);
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth = null
    }

    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>} />
                    <Route path='/shop' element={<ShopPage/>} />
                    <Route path='/sign-in' element={<SignInPage/>} />
                </Routes>
            </>
        );
    }
}

export default App;
