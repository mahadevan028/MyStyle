import React from 'react';
import { Link} from 'react-router-dom';
import './navigation.scss';
import Logo from '../../assets/MyStyleLogo.jpg';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';

const navigation = ({currentUser}) => {

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
 
          </div>
        </div>


    )

}
const mapStateToProps = (state) => {
  return {currentUser: state.user.currentUser}
}

export default connect(mapStateToProps)(navigation);
