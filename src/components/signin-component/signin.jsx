import React from 'react';

import './signin.scss';
import FormInput from '../form-input-component/form-input.jsx';
import CustomButton from '../custom-button-component/custom-button.jsx';

class SignIn extends React.Component{
 constructor(){
     super();
     this.state = {
         email: '',
        password:'',
     }
 }

//  state.use


    handleSubmit = (event) => {
        event.preventDafault();

        this.setState(
            {
                email: "",
                password: ""
            }
        )
    }

    handleChange = (event) => {
        const {name , value} = event.target;

        this.setState({[name]:value});
    }


 render(){
     return(
         <div className="signin">
             <div className="text-bolder">
             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>
                 </div>

             <form onSubmit={this.handleSubmit}>
                 <FormInput label="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                 
                 <FormInput label="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
             
                 <CustomButton type="submit"  > Sign In</CustomButton>
             </form>

         </div>
     )
 }

}

export default SignIn;