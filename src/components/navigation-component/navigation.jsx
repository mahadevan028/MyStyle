import React from 'react';
import { Link} from 'react-router-dom';
import './navigation.scss';
import Logo from '../../assets/MyStyleLogo.jpg';

const navigation = () => {

    return (
        <div className='header'>
           <Link className = "logo-container" to="/"> 
           <img className="logo" style={{ height: 68, width: 70 }} src={Logo} alt="logo"/>
             </Link>
          <div className = "options">
              <Link exact  className="option"  to="/shop">
              SHOP
              </Link>
              {/* <Link className = "option" to="/shop"> */}
              {/* CONTACT */}
              {/* </Link> */}
              <Link exact className="option"  to="/user">
              SignIn
              </Link>
          </div>
        </div>


    )

}

export default navigation;
