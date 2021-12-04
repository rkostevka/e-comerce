import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignInComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (e) {
            console.error(e)
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in-component'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        required/>

                    <FormInput
                        handleChange={this.handleChange}
                        label='password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        required/>
                    <div className='button-group'>
                        <CustomButton type="submit" value="Submit">Sign in</CustomButton>
                        <CustomButton googleButton={true} onClick={signInWithGoogle}>Sign with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignInComponent;