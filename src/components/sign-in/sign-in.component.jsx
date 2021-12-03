import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignInComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            user: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.state({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
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
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}/>

                    <FormInput
                        handleChange={this.handleChange}
                        label='password'
                        type="email"
                        name="email"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}/>
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