import React from "react";

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
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" value={this.state.email} required onChange={this.handleChange} />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" name="password" value={this.state.password} required onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignInComponent;