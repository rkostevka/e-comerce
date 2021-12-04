import React from 'react';
import './sign-in-page.styles.scss'
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";

const SignInPage = () => {
    return (
        <div className='sign-block'>
            <SignInComponent />
            <SignUpComponent />
        </div>
    );
};

export default SignInPage;
