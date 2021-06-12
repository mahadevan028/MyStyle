import React from 'react';
import { Link} from 'react-router-dom';
import './navigation.scss';
import Logo from '../../assets/MyStyleLogo.jpg';
import {auth} from '../../firebase/firebase.utils.js';

const navigation = ({currentUser}) => {

    return (
        <div className='header'>
           <Link className = "logo-container" to="/"> 
           <img className="logo" style={{ height: 68, width: 70 }} src={Logo} alt="logo"/>
             </Link>
          <div className = "options">
              <Link exact  className="option"  to="/shop">
              SHOP
              </Link>
                {currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                :
                <Link className="option" to="/user">
                        Sign In
                </Link>

                }
 
          </div>
        </div>


    )

}

export default navigation;
