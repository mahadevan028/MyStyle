import React from 'react';
import { Link} from 'react-router-dom';
import './navigation.scss';
import Logo from '../../assets/MyStyleLogo.jpg';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon-component/cart-icon.jsx';
import CartDropdown from '../cart-dropdown-component/cart-dropdown';

const navigation = ({currentUser, isHidden}) => {

    return (
        <div className='header'>
           <Link className = "logo-container" to="/"> 
           <img className="logo" style={{ height: 68, width: 70 }} src={Logo} alt="logo"/>
             </Link>
          <div className = "options">
              <Link className="option"  to="/shop">
              SHOP
              </Link>
                {currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                :
                <Link className="option" to="/user">
                        Sign In
                </Link>

                }

              <CartIcon/>

                
 
          </div>
          {
            isHidden ? null : <CartDropdown /> 
          }
          
         
        </div>


    )

}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    isHidden: state.cart.isHidden
  }
}

export default connect(mapStateToProps)(navigation);
