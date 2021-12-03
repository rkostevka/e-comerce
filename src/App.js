import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.comonent";


function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route path='/shop' element={<ShopPage/>} />
              <Route path='/sign-in' element={<SignInPage/>} />
          </Routes>
      </>
  );
}

export default App;
