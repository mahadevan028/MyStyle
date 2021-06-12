import React from 'react';
import FormInput from '../form-input-component/form-input.jsx';
import CustomButton from '../custom-button-component/custom-button.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './signup.scss';

class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <div className="text-bolder">
                <h2 className="title">I do not have an Account</h2>
                <span>Sign up with your email and password</span>
                </div>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput label="Display Name" type="text" name="displayName" value={displayName} onChange={this.handleChange} required />

                    <FormInput label="Email" type="email" name="email" value={email} onChange={this.handleChange} required />

                    <FormInput label="Password" type="password" name="password" value={password} onChange={this.handleChange} required />

                    <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required />

                    <div className="button-group">
                        <span> <CustomButton type="submit"> Sign Up</CustomButton>  </span>
                    </div>

                </form>



            </div>
        )
    }
}

export default Signup;