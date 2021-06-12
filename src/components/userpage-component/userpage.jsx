import React from 'react';
import './userpage.scss';
import SignIn from '../signin-component/signin.jsx'
import Signup from '../signup-component/signup';

const userpage = () => {
 return(
     <div className = "userpage"> 
     <SignIn/>
     <Signup/>
     </div>
 )

}

export default userpage;